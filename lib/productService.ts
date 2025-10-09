import { Product, CreateProductData, UpdateProductData, DashboardStats } from '@/types/admin';
import { createClient } from '@/lib/supabase/client';
import { Database } from '@/types/supabase';

type DbProduct = Database['public']['Tables']['products']['Row'];
type DbInsertProduct = Database['public']['Tables']['products']['Insert'];
type DbUpdateProduct = Database['public']['Tables']['products']['Update'];

// Helper function to convert database product to frontend product
function convertDbProductToProduct(dbProduct: DbProduct): Product {
  return {
    id: dbProduct.id,
    name: dbProduct.name,
    brand: dbProduct.brand || '',
    price: Number(dbProduct.price),
    originalPrice: dbProduct.original_price ? Number(dbProduct.original_price) : undefined,
    rating: 4.5, // TODO: Calculate from reviews
    reviews: 0, // TODO: Count from reviews table
    images: dbProduct.images || [],
    category: dbProduct.category,
    features: dbProduct.features || [],
    specifications: dbProduct.specifications as Record<string, string> || {},
    description: dbProduct.description || '',
    badge: dbProduct.is_featured ? 'Featured' : '',
    inStock: dbProduct.in_stock,
    created_at: dbProduct.created_at,
    updated_at: dbProduct.updated_at,
  };
}

// Mock products removed - all products now come from Supabase database
// Add products through the admin dashboard at /admin/products

export class ProductService {
  private static supabase = createClient();

  static async getAllProducts(): Promise<Product[]> {
    try {
      const { data, error } = await this.supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching products:', error);
        return []; // Return empty array if error
      }

      return data?.map(convertDbProductToProduct) || [];
    } catch (error) {
      console.error('Error in getAllProducts:', error);
      return []; // Return empty array if error
    }
  }

  static async getProductById(id: string): Promise<Product | null> {
    try {
      const { data, error } = await this.supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .eq('is_active', true)
        .single();

      if (error) {
        console.error('Error fetching product:', error);
        return null;
      }

      return data ? convertDbProductToProduct(data) : null;
    } catch (error) {
      console.error('Error in getProductById:', error);
      return null;
    }
  }

  static async createProduct(data: CreateProductData): Promise<Product> {
    try {
      const { data: { user } } = await this.supabase.auth.getUser();
      
      const insertData: DbInsertProduct = {
        name: data.name,
        description: data.description,
        short_description: data.description?.substring(0, 150),
        price: data.price,
        original_price: data.originalPrice,
        category: (data.category || '').toLowerCase() as any, // Convert to lowercase for enum
        brand: data.brand,
        sku: `${data.brand?.toUpperCase()}-${Date.now()}`,
        stock_quantity: 100, // Default stock
        in_stock: data.inStock,
        images: data.images,
        features: data.features,
        specifications: data.specifications,
        is_featured: data.badge === 'Featured',
        is_active: true,
        slug: data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
        created_by: user?.id,
      };

      const { data: newProduct, error } = await this.supabase
        .from('products')
        .insert(insertData)
        .select()
        .single();

      if (error) {
        console.error('Error creating product:', error);
        console.error('Error details:', JSON.stringify(error, null, 2));
        console.error('Insert data:', JSON.stringify(insertData, null, 2));
        throw new Error(`Failed to create product: ${error.message || JSON.stringify(error)}`);
      }

      return convertDbProductToProduct(newProduct);
    } catch (error) {
      console.error('Error in createProduct:', error);
      throw error;
    }
  }

  static async updateProduct(data: UpdateProductData): Promise<Product | null> {
    try {
      const updateData: DbUpdateProduct = {
        name: data.name,
        description: data.description,
        price: data.price,
        original_price: data.originalPrice,
        category: (data.category || '').toLowerCase() as any, // Convert to lowercase for enum
        brand: data.brand,
        in_stock: data.inStock,
        images: data.images,
        features: data.features,
        specifications: data.specifications,
        is_featured: data.badge === 'Featured',
        updated_at: new Date().toISOString(),
      };

      const { data: updatedProduct, error } = await this.supabase
        .from('products')
        .update(updateData)
        .eq('id', data.id.toString())
        .select()
        .single();

      if (error) {
        console.error('Error updating product:', error);
        return null;
      }

      return updatedProduct ? convertDbProductToProduct(updatedProduct) : null;
    } catch (error) {
      console.error('Error in updateProduct:', error);
      return null;
    }
  }

  static async deleteProduct(id: string): Promise<boolean> {
    try {
      // Soft delete by setting is_active to false
      const { error } = await this.supabase
        .from('products')
        .update({ is_active: false })
        .eq('id', id);

      if (error) {
        console.error('Error deleting product:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error in deleteProduct:', error);
      return false;
    }
  }

  static async getDashboardStats(): Promise<DashboardStats> {
    try {
      // Get product stats
      const { data: products, error: productsError } = await this.supabase
        .from('products')
        .select('id, in_stock')
        .eq('is_active', true);

      // Get user stats
      const { data: users, error: usersError } = await this.supabase
        .from('profiles')
        .select('id')
        .eq('role', 'user');

      // Get order stats
      const { data: orders, error: ordersError } = await this.supabase
        .from('orders')
        .select('id, total_amount, created_at');

      // Calculate stats
      const totalProducts = products?.length || 0;
      const lowStockProducts = products?.filter((p: any) => !p.in_stock).length || 0;
      const totalUsers = users?.length || 0;
      const totalOrders = orders?.length || 0;
      const totalRevenue = orders?.reduce((sum: number, order: any) => sum + Number(order.total_amount), 0) || 0;
      
      // Recent orders (today)
      const today = new Date().toISOString().split('T')[0];
      const recentOrders = orders?.filter((order: any) => 
        order.created_at.startsWith(today)
      ).length || 0;

      return {
        totalProducts,
        totalUsers,
        totalOrders,
        totalRevenue,
        recentOrders,
        lowStockProducts,
      };
    } catch (error) {
      console.error('Error in getDashboardStats:', error);
      // Return empty stats
      return {
        totalProducts: 0,
        totalUsers: 0,
        totalOrders: 0,
        totalRevenue: 0,
        recentOrders: 0,
        lowStockProducts: 0,
      };
    }
  }

  static async searchProducts(query: string): Promise<Product[]> {
    try {
      const { data, error } = await this.supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .or(`name.ilike.%${query}%,brand.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`);

      if (error) {
        console.error('Error searching products:', error);
        return [];
      }

      return data?.map(convertDbProductToProduct) || [];
    } catch (error) {
      console.error('Error in searchProducts:', error);
      return [];
    }
  }

  static async getProductCategories(): Promise<string[]> {
    try {
      const { data, error } = await this.supabase
        .from('categories')
        .select('name')
        .eq('is_active', true)
        .order('sort_order');

      if (error) {
        console.error('Error fetching categories:', error);
        return [];
      }

      return data?.map((cat: any) => cat.name) || [];
    } catch (error) {
      console.error('Error in getProductCategories:', error);
      return [];
    }
  }

  static async getProductBrands(): Promise<string[]> {
    try {
      const { data, error } = await this.supabase
        .from('brands')
        .select('name')
        .eq('is_active', true)
        .order('name');

      if (error) {
        console.error('Error fetching brands:', error);
        return [];
      }

      return data?.map((brand: any) => brand.name) || [];
    } catch (error) {
      console.error('Error in getProductBrands:', error);
      return [];
    }
  }

  // Image upload helper
  static async uploadProductImage(file: File, productId: string): Promise<string | null> {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${productId}/${Date.now()}.${fileExt}`;

      const { data, error } = await this.supabase.storage
        .from('product-images')
        .upload(fileName, file);

      if (error) {
        console.error('Error uploading image:', error);
        return null;
      }

      // Get public URL
      const { data: { publicUrl } } = this.supabase.storage
        .from('product-images')
        .getPublicUrl(fileName);

      return publicUrl;
    } catch (error) {
      console.error('Error in uploadProductImage:', error);
      return null;
    }
  }

  // Delete image helper
  static async deleteProductImage(imageUrl: string): Promise<boolean> {
    try {
      // Extract file path from URL
      const urlParts = imageUrl.split('/product-images/');
      if (urlParts.length !== 2) return false;
      
      const filePath = urlParts[1];
      
      const { error } = await this.supabase.storage
        .from('product-images')
        .remove([filePath]);

      if (error) {
        console.error('Error deleting image:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error in deleteProductImage:', error);
      return false;
    }
  }
}
