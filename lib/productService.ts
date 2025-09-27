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

// Mock product data for fallback - will be removed once Supabase is fully integrated
let mockProducts: Product[] = [
  {
    id: 1,
    name: 'AX6000 Pro Gaming Router',
    brand: 'ASUS',
    price: 4299,
    originalPrice: 4999,
    rating: 4.8,
    reviews: 124,
    images: [
      'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=600&fit=crop&crop=center',
    ],
    category: 'Routers',
    features: ['WiFi 6', '6000 Mbps', 'Gaming Mode', '8 Antennas', 'MU-MIMO', 'OFDMA'],
    specifications: {
      'WiFi Standard': 'WiFi 6 (802.11ax)',
      'Speed': 'Up to 6000 Mbps',
      'Frequency': 'Dual Band (2.4GHz + 5GHz)',
      'Antennas': '8 External Antennas',
      'Ports': '4x Gigabit LAN, 1x Gigabit WAN',
      'Processor': 'Quad-core 1.8GHz',
      'Memory': '1GB RAM, 256MB Flash',
      'Dimensions': '300 x 300 x 60mm',
      'Weight': '1.2kg',
    },
    description: 'The ASUS AX6000 Pro Gaming Router delivers exceptional WiFi 6 performance with speeds up to 6000 Mbps. Designed for gamers and power users, it features advanced gaming acceleration, adaptive QoS, and robust security features. Perfect for large homes and demanding applications.',
    badge: 'Best Seller',
    inStock: true,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
  {
    id: 2,
    name: 'Mesh WiFi System Pro',
    brand: 'Netgear',
    price: 3599,
    rating: 4.7,
    reviews: 89,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=600&fit=crop&crop=center',
    ],
    category: 'Extenders',
    features: ['Mesh Network', '5400 Mbps', '3-Pack', 'Easy Setup', 'Smart Connect', 'Beamforming'],
    specifications: {
      'WiFi Standard': 'WiFi 6 (802.11ax)',
      'Speed': 'Up to 5400 Mbps',
      'Coverage': 'Up to 600m²',
      'Devices': 'Up to 100 devices',
      'Ports': '3x Gigabit Ethernet per unit',
      'Setup': 'App-based configuration',
      'Security': 'WPA3 encryption',
      'Dimensions': '230 x 230 x 75mm per unit',
      'Weight': '0.8kg per unit',
    },
    description: 'The Netgear Mesh WiFi System Pro provides seamless whole-home coverage with intelligent mesh technology. Perfect for large homes and offices, it eliminates dead zones and provides consistent high-speed internet throughout your space.',
    badge: '',
    inStock: true,
    created_at: '2024-01-10T14:30:00Z',
    updated_at: '2024-01-10T14:30:00Z',
  },
  {
    id: 3,
    name: 'Enterprise Firewall',
    brand: 'SonicWall',
    price: 8999,
    rating: 4.9,
    reviews: 45,
    images: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600&h=600&fit=crop&crop=center',
    ],
    category: 'Security',
    features: ['Advanced Threat Protection', 'VPN Support', 'High Throughput', 'Deep Packet Inspection', 'Intrusion Prevention', 'Content Filtering'],
    specifications: {
      'Firewall Throughput': 'Up to 3.5 Gbps',
      'VPN Throughput': 'Up to 1.2 Gbps',
      'Concurrent Sessions': '500,000',
      'Interfaces': '8x GbE, 2x SFP+',
      'Users': 'Up to 500',
      'Security Services': 'Gateway Anti-Virus, Anti-Spyware, IPS',
      'Management': 'SonicOS Enhanced',
      'Dimensions': '440 x 200 x 44mm',
      'Weight': '3.2kg',
    },
    description: 'The SonicWall Enterprise Firewall provides comprehensive network security for medium to large businesses. With advanced threat protection and high-performance capabilities, it ensures your network stays secure while maintaining optimal performance.',
    badge: 'Professional',
    inStock: true,
    created_at: '2024-01-05T09:15:00Z',
    updated_at: '2024-01-05T09:15:00Z',
  },
  {
    id: 4,
    name: 'WiFi 6E Range Extender',
    brand: 'TP-Link',
    price: 1899,
    originalPrice: 2299,
    rating: 4.6,
    reviews: 156,
    images: [
      'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=600&fit=crop&crop=center',
    ],
    category: 'Extenders',
    features: ['WiFi 6E', '3000 Mbps', 'OneMesh', 'Gigabit Port', 'Smart Signal Indicator', 'Easy Setup'],
    specifications: {
      'WiFi Standard': 'WiFi 6E (802.11ax)',
      'Speed': 'Up to 3000 Mbps',
      'Frequency': 'Tri-band (2.4GHz + 5GHz + 6GHz)',
      'Coverage': 'Up to 150m²',
      'Antennas': '4 Internal Antennas',
      'Ports': '1x Gigabit Ethernet',
      'Compatibility': 'Works with any router',
      'Dimensions': '160 x 80 x 38mm',
      'Weight': '0.4kg',
    },
    description: 'Extend your WiFi coverage with the latest WiFi 6E technology. This range extender eliminates dead zones and provides fast, reliable internet access throughout your home or office.',
    badge: '',
    inStock: true,
    created_at: '2024-01-20T16:45:00Z',
    updated_at: '2024-01-20T16:45:00Z',
  },
  {
    id: 5,
    name: 'UPS Power Backup 1500VA',
    brand: 'APC',
    price: 2799,
    rating: 4.5,
    reviews: 78,
    images: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&crop=center',
    ],
    category: 'Power',
    features: ['1500VA/900W', 'LCD Display', '8 Outlets', 'USB Monitoring', 'Surge Protection', 'Battery Backup'],
    specifications: {
      'Output Power': '1500VA / 900W',
      'Battery Type': 'Sealed Lead Acid',
      'Runtime': '10-15 minutes at full load',
      'Outlets': '8x IEC outlets',
      'Input Voltage': '230V ±25%',
      'Transfer Time': '2-4ms',
      'Communication': 'USB, Serial',
      'Dimensions': '395 x 144 x 214mm',
      'Weight': '16.8kg',
    },
    description: 'Protect your critical equipment with reliable battery backup power. Features LCD display for real-time status monitoring and automatic voltage regulation for consistent power quality.',
    badge: '',
    inStock: true,
    created_at: '2024-01-12T11:20:00Z',
    updated_at: '2024-01-12T11:20:00Z',
  },
  {
    id: 6,
    name: 'Gigabit Ethernet Switch',
    brand: 'Cisco',
    price: 1599,
    rating: 4.8,
    reviews: 92,
    images: [
      'https://images.unsplash.com/photo-1629654297299-3965bc8e3e35?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&crop=center',
    ],
    category: 'Accessories',
    features: ['24 Ports', 'Gigabit Speed', 'Managed', 'PoE+', 'VLAN Support', 'QoS'],
    specifications: {
      'Ports': '24x Gigabit Ethernet',
      'PoE Budget': '370W total',
      'Switching Capacity': '56 Gbps',
      'MAC Address Table': '16K entries',
      'VLANs': '4094 VLANs',
      'Management': 'Web-based, CLI, SNMP',
      'Mounting': '19-inch rack mountable',
      'Dimensions': '440 x 257 x 44mm',
      'Weight': '3.9kg',
    },
    description: 'Professional-grade managed switch with Power over Ethernet support. Ideal for business networks requiring advanced features and centralized management.',
    badge: '',
    inStock: false,
    created_at: '2024-01-08T13:10:00Z',
    updated_at: '2024-01-08T13:10:00Z',
  },
  {
    id: 7,
    name: 'WiFi 6 Business Router',
    brand: 'Ubiquiti',
    price: 5499,
    rating: 4.9,
    reviews: 67,
    images: [
      'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=600&fit=crop&crop=center',
    ],
    category: 'Routers',
    features: ['WiFi 6', 'Enterprise Grade', 'Cloud Management', 'High Capacity', 'Advanced Security', 'Scalable'],
    specifications: {
      'WiFi Standard': 'WiFi 6 (802.11ax)',
      'Speed': 'Up to 7200 Mbps',
      'Concurrent Users': '500+',
      'Coverage': 'Up to 300m radius',
      'Ports': '2x SFP+, 8x GbE',
      'Management': 'UniFi Network Controller',
      'Power': 'PoE+ or DC adapter',
      'Dimensions': '220 x 220 x 48mm',
      'Weight': '1.3kg',
    },
    description: 'Enterprise-grade WiFi 6 router designed for high-density environments. Features cloud-based management and advanced security for business and institutional use.',
    badge: 'New',
    inStock: true,
    created_at: '2024-01-25T08:30:00Z',
    updated_at: '2024-01-25T08:30:00Z',
  },
  {
    id: 8,
    name: 'Signal Booster Kit',
    brand: 'WeBoost',
    price: 3299,
    rating: 4.4,
    reviews: 134,
    images: [
      'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&crop=center',
    ],
    category: 'Boosters',
    features: ['Multi-Carrier', '65dB Gain', 'Indoor/Outdoor', 'Easy Install', 'FCC Approved', 'All Networks'],
    specifications: {
      'Frequency Bands': '700/800/850/1700/1900/2100 MHz',
      'Gain': 'Up to 65dB',
      'Coverage': 'Up to 465m²',
      'Carriers': 'All major carriers',
      'Installation': 'DIY friendly',
      'Antennas': 'Outdoor Yagi, Indoor Panel',
      'Amplifier': 'Smart Technology 3.0',
      'Dimensions': 'Various components',
      'Weight': '2.8kg total kit',
    },
    description: 'Boost your cellular signal strength for better call quality and faster data speeds. Works with all carriers and devices, perfect for homes and offices with weak signal areas.',
    badge: '',
    inStock: true,
    created_at: '2024-01-18T15:00:00Z',
    updated_at: '2024-01-18T15:00:00Z',
  },
];

let nextId = 9;

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
        return [...mockProducts]; // Fallback to mock data
      }

      return data?.map(convertDbProductToProduct) || [];
    } catch (error) {
      console.error('Error in getAllProducts:', error);
      return [...mockProducts]; // Fallback to mock data
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
        return mockProducts.find(p => p.id.toString() === id) || null;
      }

      return data ? convertDbProductToProduct(data) : null;
    } catch (error) {
      console.error('Error in getProductById:', error);
      return mockProducts.find(p => p.id.toString() === id) || null;
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
        category: data.category as any,
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
        throw new Error('Failed to create product');
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
        category: data.category as any,
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
      // Return fallback stats
      return {
        totalProducts: mockProducts.length,
        totalUsers: 1247,
        totalOrders: 856,
        totalRevenue: 2847650,
        recentOrders: 23,
        lowStockProducts: mockProducts.filter(p => !p.inStock).length,
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
        // Fallback to mock search
        const lowerQuery = query.toLowerCase();
        return mockProducts.filter(product => 
          product.name.toLowerCase().includes(lowerQuery) ||
          product.brand.toLowerCase().includes(lowerQuery) ||
          product.category.toLowerCase().includes(lowerQuery) ||
          product.description.toLowerCase().includes(lowerQuery)
        );
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
        return Array.from(new Set(mockProducts.map(p => p.category))).sort();
      }

      return data?.map((cat: any) => cat.name) || [];
    } catch (error) {
      console.error('Error in getProductCategories:', error);
      return Array.from(new Set(mockProducts.map(p => p.category))).sort();
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
        return Array.from(new Set(mockProducts.map(p => p.brand))).sort();
      }

      return data?.map((brand: any) => brand.name) || [];
    } catch (error) {
      console.error('Error in getProductBrands:', error);
      return Array.from(new Set(mockProducts.map(p => p.brand))).sort();
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
