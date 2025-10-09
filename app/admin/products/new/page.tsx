'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowLeft, Plus, X, Upload, AlertCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { ProductService } from '@/lib/productService';
import { CreateProductData } from '@/types/admin';

const productSchema = z.object({
  name: z.string().min(1, 'Product name is required').max(100, 'Name must be less than 100 characters'),
  brand: z.string().min(1, 'Brand is required').max(50, 'Brand must be less than 50 characters'),
  price: z.number().min(0.01, 'Price must be greater than 0'),
  originalPrice: z.number().optional(),
  category: z.string().min(1, 'Category is required'),
  description: z.string().min(10, 'Description must be at least 10 characters').max(1000, 'Description must be less than 1000 characters'),
  badge: z.string().optional(),
  inStock: z.boolean(),
  features: z.array(z.string().min(1, 'Feature cannot be empty')).min(1, 'At least one feature is required'),
  specifications: z.array(z.object({
    key: z.string().min(1, 'Specification key is required'),
    value: z.string().min(1, 'Specification value is required')
  })).min(1, 'At least one specification is required'),
  images: z.array(z.string().url('Must be a valid URL')).min(1, 'At least one image is required').max(5, 'Maximum 5 images allowed'),
}).refine((data) => {
  if (data.originalPrice && data.originalPrice <= data.price) {
    return false;
  }
  return true;
}, {
  message: "Original price must be greater than current price",
  path: ["originalPrice"],
});

type ProductFormData = z.infer<typeof productSchema>;

export default function NewProductPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [uploadingImages, setUploadingImages] = useState<boolean[]>([]);

  const form = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: '',
      brand: '',
      price: 0,
      originalPrice: undefined,
      category: '',
      description: '',
      badge: '',
      inStock: true,
      features: [''],
      specifications: [{ key: '', value: '' }],
      images: [''],
    },
  });

  const { fields: featureFields, append: appendFeature, remove: removeFeature } = useFieldArray({
    control: form.control,
    name: 'features' as any,
  });

  const { fields: specFields, append: appendSpec, remove: removeSpec } = useFieldArray({
    control: form.control,
    name: 'specifications',
  });

  const { fields: imageFields, append: appendImage, remove: removeImage } = useFieldArray({
    control: form.control,
    name: 'images' as any,
  });

  const handleImageUpload = async (file: File, index: number) => {
    try {
      // Set uploading state
      setUploadingImages(prev => {
        const newState = [...prev];
        newState[index] = true;
        return newState;
      });

      // Generate a temporary product ID for the upload
      const tempProductId = `temp-${Date.now()}`;
      
      // Upload the image
      const imageUrl = await ProductService.uploadProductImage(file, tempProductId);
      
      if (imageUrl) {
        // Update the form with the uploaded image URL
        form.setValue(`images.${index}`, imageUrl);
        setMessage({ type: 'success', text: 'Image uploaded successfully!' });
        setTimeout(() => setMessage(null), 3000);
      } else {
        setMessage({ type: 'error', text: 'Failed to upload image' });
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      setMessage({ type: 'error', text: 'Failed to upload image' });
    } finally {
      // Clear uploading state
      setUploadingImages(prev => {
        const newState = [...prev];
        newState[index] = false;
        return newState;
      });
    }
  };

  const onSubmit = async (data: ProductFormData) => {
    setIsSubmitting(true);
    setMessage(null);

    try {
      // Filter out empty features and specifications
      const cleanedData: CreateProductData = {
        ...data,
        features: data.features.filter(f => f.trim() !== ''),
        specifications: data.specifications
          .filter(s => s.key.trim() !== '' && s.value.trim() !== '')
          .reduce((acc, spec) => {
            acc[spec.key] = spec.value;
            return acc;
          }, {} as { [key: string]: string }),
        images: data.images.filter(img => img.trim() !== ''),
      };

      await ProductService.createProduct(cleanedData);
      
      setMessage({ type: 'success', text: 'Product created successfully!' });
      
      setTimeout(() => {
        router.push('/admin/products');
      }, 1500);
    } catch (error) {
      console.error('Error creating product:', error);
      setMessage({ type: 'error', text: 'Failed to create product. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const [categoriesData, brandsData] = await Promise.all([
          ProductService.getProductCategories(),
          ProductService.getProductBrands()
        ]);
        setCategories(categoriesData);
        setBrands(brandsData);
      } catch (error) {
        console.error('Error fetching filters:', error);
      }
    };
    
    fetchFilters();
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center mb-8">
        <Link
          href="/admin/products"
          className="mr-4 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Add New Product</h1>
          <p className="mt-2 text-gray-600">Create a new product for your store</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        
        {/* Message */}
        {message && (
          <div className={`p-4 rounded-lg flex items-center ${
            message.type === 'success' 
              ? 'bg-green-50 text-green-700 border border-green-200' 
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            {message.type === 'success' ? (
              <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
            )}
            <span>{message.text}</span>
          </div>
        )}

        {/* Basic Information */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Basic Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Name *
              </label>
              <input
                {...form.register('name')}
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter product name"
              />
              {form.formState.errors.name && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Brand *
              </label>
              <input
                {...form.register('brand')}
                type="text"
                list="brands"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter brand name"
              />
              <datalist id="brands">
                {brands.map(brand => (
                  <option key={brand} value={brand} />
                ))}
              </datalist>
              {form.formState.errors.brand && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.brand.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                {...form.register('category')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
                <option value="other">Other</option>
              </select>
              {form.formState.errors.category && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.category.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Badge (Optional)
              </label>
              <input
                {...form.register('badge')}
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="e.g., Best Seller, New, Sale"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price (ZAR) *
              </label>
              <input
                {...form.register('price', { valueAsNumber: true })}
                type="number"
                step="0.01"
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="0.00"
              />
              {form.formState.errors.price && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.price.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Original Price (ZAR) - Optional
              </label>
              <input
                {...form.register('originalPrice', { valueAsNumber: true })}
                type="number"
                step="0.01"
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="0.00"
              />
              {form.formState.errors.originalPrice && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.originalPrice.message}</p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              {...form.register('description')}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Describe the product features, benefits, and specifications..."
            />
            {form.formState.errors.description && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.description.message}</p>
            )}
          </div>

          <div className="mt-6">
            <label className="flex items-center">
              <input
                {...form.register('inStock')}
                type="checkbox"
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-700">Product is in stock</span>
            </label>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Features</h2>
            <button
              type="button"
              onClick={() => appendFeature('')}
              className="inline-flex items-center px-3 py-1 text-sm bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 transition-colors"
            >
              <Plus className="w-4 h-4 mr-1" />
              Add Feature
            </button>
          </div>

          <div className="space-y-3">
            {featureFields.map((field, index) => (
              <div key={field.id} className="flex items-center space-x-3">
                <input
                  {...form.register(`features.${index}`)}
                  type="text"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter feature"
                />
                {featureFields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeFeature(index)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
          {form.formState.errors.features && (
            <p className="text-red-500 text-sm mt-2">{form.formState.errors.features.message}</p>
          )}
        </div>

        {/* Specifications */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Specifications</h2>
            <button
              type="button"
              onClick={() => appendSpec({ key: '', value: '' })}
              className="inline-flex items-center px-3 py-1 text-sm bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 transition-colors"
            >
              <Plus className="w-4 h-4 mr-1" />
              Add Specification
            </button>
          </div>

          <div className="space-y-3">
            {specFields.map((field, index) => (
              <div key={field.id} className="flex items-center space-x-3">
                <input
                  {...form.register(`specifications.${index}.key`)}
                  type="text"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Specification name"
                />
                <input
                  {...form.register(`specifications.${index}.value`)}
                  type="text"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Specification value"
                />
                {specFields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSpec(index)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
          {form.formState.errors.specifications && (
            <p className="text-red-500 text-sm mt-2">{form.formState.errors.specifications.message}</p>
          )}
        </div>

        {/* Images */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Product Images</h2>
            <button
              type="button"
              onClick={() => appendImage('')}
              className="inline-flex items-center px-3 py-1 text-sm bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 transition-colors"
              disabled={imageFields.length >= 5}
            >
              <Plus className="w-4 h-4 mr-1" />
              Add Image
            </button>
          </div>

          <div className="space-y-4">
            {imageFields.map((field, index) => (
              <div key={field.id} className="space-y-2">
                <div className="flex items-center space-x-3">
                  <input
                    {...form.register(`images.${index}`)}
                    type="url"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="https://example.com/image.jpg or upload below"
                    disabled={uploadingImages[index]}
                  />
                  {imageFields.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      disabled={uploadingImages[index]}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                
                {/* File Upload Button */}
                <div className="flex items-center space-x-2">
                  <label className="inline-flex items-center px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                    <Upload className="w-4 h-4 mr-2" />
                    {uploadingImages[index] ? 'Uploading...' : 'Upload Image'}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleImageUpload(file, index);
                        }
                      }}
                      disabled={uploadingImages[index]}
                    />
                  </label>
                  {uploadingImages[index] && (
                    <span className="text-sm text-gray-500">Uploading...</span>
                  )}
                </div>
                
                {/* Image Preview */}
                {form.watch(`images.${index}`) && !uploadingImages[index] && (
                  <div className="relative w-32 h-32 border border-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={form.watch(`images.${index}`)}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=Invalid+Image';
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          {form.formState.errors.images && (
            <p className="text-red-500 text-sm mt-2">{form.formState.errors.images.message}</p>
          )}
          <p className="text-sm text-gray-500 mt-2">
            Add up to 5 product images. Use high-quality images for best results.
          </p>
        </div>

        {/* Submit */}
        <div className="flex items-center justify-end space-x-4 pt-6">
          <Link
            href="/admin/products"
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Creating Product...' : 'Create Product'}
          </button>
        </div>
      </form>
    </div>
  );
}
