'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Star, ShoppingCart, Heart, Shield, Truck, Headphones, Check } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/types/admin';

interface ProductPageClientProps {
  product: Product;
}

export default function ProductPageClient({ product }: ProductPageClientProps) {
  const router = useRouter();
  const { addItem, openCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : i < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const handleAddToCart = () => {
    // Add items one by one to respect the quantity
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: typeof product.id === 'string' ? parseInt(product.id) : product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        image: product.images[0],
        features: product.features,
      });
    }
    openCart();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-14 sm:h-16">
            <button
              onClick={() => router.back()}
              className="flex items-center text-gray-600 hover:text-primary-600 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </button>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Product Images */}
          <div className="space-y-3 sm:space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 cursor-pointer group">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onClick={() => setIsImageModalOpen(true)}
              />
              {/* Zoom indicator */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                <div className="bg-white bg-opacity-90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-primary-500' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4 sm:space-y-6 mt-6 lg:mt-0">
            {/* Badge */}
            {product.badge && (
              <div className={`inline-flex px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${
                product.badge === 'Best Seller' ? 'bg-accent-green text-white' :
                product.badge === 'New' ? 'bg-primary-500 text-white' :
                'bg-accent-blue text-white'
              }`}>
                {product.badge}
              </div>
            )}

            {/* Brand & Name */}
            <div>
              <p className="text-xs sm:text-sm text-primary-600 font-medium mb-1 sm:mb-2">{product.brand}</p>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-4 leading-tight">{product.name}</h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {renderStars(product.rating)}
              </div>
              <span className="text-xs sm:text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                R{formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg text-gray-500 line-through">
                    R{formatPrice(product.originalPrice)}
                  </span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-md text-xs sm:text-sm font-semibold">
                    Save R{formatPrice(product.originalPrice - product.price)}
                  </span>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{product.description}</p>

            {/* Key Features */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-3 sm:w-4 h-3 sm:h-4 text-accent-green mr-2 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="text-sm font-medium text-gray-700">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800 touch-manipulation"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300 min-w-[3rem] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800 touch-manipulation"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-2 sm:gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 py-3 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation ${
                    product.inStock
                      ? 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-md hover:shadow-lg'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="w-4 sm:w-5 h-4 sm:h-5" />
                  <span className="hidden xs:inline">{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                  <span className="xs:hidden">{product.inStock ? 'Add' : 'N/A'}</span>
                </button>
                
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-3 rounded-lg border-2 transition-colors touch-manipulation ${
                    isFavorite
                      ? 'border-red-500 bg-red-500 text-white'
                      : 'border-gray-300 text-gray-600 hover:border-red-500 hover:text-red-500 active:border-red-600'
                  }`}
                >
                  <Heart className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200">
              <div className="flex items-center text-xs sm:text-sm text-gray-600">
                <Truck className="w-3 sm:w-4 h-3 sm:h-4 text-accent-green mr-2 flex-shrink-0" />
                <span>Free delivery</span>
              </div>
              <div className="flex items-center text-xs sm:text-sm text-gray-600">
                <Shield className="w-3 sm:w-4 h-3 sm:h-4 text-primary-500 mr-2 flex-shrink-0" />
                <span>2-year warranty</span>
              </div>
              <div className="flex items-center text-xs sm:text-sm text-gray-600">
                <Headphones className="w-3 sm:w-4 h-3 sm:h-4 text-accent-blue mr-2 flex-shrink-0" />
                <span>Expert support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Specifications</h2>
          <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 gap-0">
              {Object.entries(product.specifications).map(([key, value], index) => (
                <div
                  key={key}
                  className={`p-3 sm:p-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} ${
                    index < Object.entries(product.specifications).length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                    <span className="font-medium text-gray-900 text-sm sm:text-base">{key}</span>
                    <span className="text-gray-600 text-sm sm:text-base sm:text-right">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={() => setIsImageModalOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image navigation */}
          {product.images.length > 1 && (
            <>
              <button
                onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : product.images.length - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setSelectedImage(selectedImage < product.images.length - 1 ? selectedImage + 1 : 0)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Main modal image */}
          <div className="relative max-w-4xl max-h-full">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={() => setIsImageModalOpen(false)}
            />
            
            {/* Image counter */}
            {product.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                {selectedImage + 1} / {product.images.length}
              </div>
            )}
          </div>

          {/* Thumbnail navigation */}
          {product.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black bg-opacity-50 p-2 rounded-lg">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-12 h-12 rounded overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-white' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setIsImageModalOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
