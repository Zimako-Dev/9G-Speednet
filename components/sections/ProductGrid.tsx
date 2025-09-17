'use client';

import { useState } from 'react';
import { Star, ShoppingCart, Heart, Eye, Wifi, Zap, Shield } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  features: string[];
  badge?: string;
  inStock: boolean;
}

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState<number[]>([]);
  const { addItem, openCart } = useCart();

  const products: Product[] = [
    {
      id: 1,
      name: 'AX6000 Pro Gaming Router',
      brand: 'ASUS',
      price: 4299,
      originalPrice: 4999,
      rating: 4.8,
      reviews: 124,
      image: '/api/placeholder/300/300',
      category: 'Routers',
      features: ['WiFi 6', '6000 Mbps', 'Gaming Mode', '8 Antennas'],
      badge: 'Best Seller',
      inStock: true,
    },
    {
      id: 2,
      name: 'Mesh WiFi System Pro',
      brand: 'Netgear',
      price: 3599,
      rating: 4.7,
      reviews: 89,
      image: '/api/placeholder/300/300',
      category: 'Extenders',
      features: ['Mesh Network', '5400 Mbps', '3-Pack', 'Easy Setup'],
      inStock: true,
    },
    {
      id: 3,
      name: 'Enterprise Firewall',
      brand: 'SonicWall',
      price: 8999,
      rating: 4.9,
      reviews: 45,
      image: '/api/placeholder/300/300',
      category: 'Security',
      features: ['Advanced Threat Protection', 'VPN Support', 'High Throughput'],
      badge: 'Professional',
      inStock: true,
    },
    {
      id: 4,
      name: 'WiFi 6E Range Extender',
      brand: 'TP-Link',
      price: 1899,
      originalPrice: 2299,
      rating: 4.6,
      reviews: 156,
      image: '/api/placeholder/300/300',
      category: 'Extenders',
      features: ['WiFi 6E', '3000 Mbps', 'OneMesh', 'Gigabit Port'],
      inStock: true,
    },
    {
      id: 5,
      name: 'UPS Power Backup 1500VA',
      brand: 'APC',
      price: 2799,
      rating: 4.5,
      reviews: 78,
      image: '/api/placeholder/300/300',
      category: 'Power',
      features: ['1500VA/900W', 'LCD Display', '8 Outlets', 'USB Monitoring'],
      inStock: true,
    },
    {
      id: 6,
      name: 'Gigabit Ethernet Switch',
      brand: 'Cisco',
      price: 1599,
      rating: 4.8,
      reviews: 92,
      image: '/api/placeholder/300/300',
      category: 'Accessories',
      features: ['24 Ports', 'Gigabit Speed', 'Managed', 'PoE+'],
      inStock: false,
    },
    {
      id: 7,
      name: 'WiFi 6 Business Router',
      brand: 'Ubiquiti',
      price: 5499,
      rating: 4.9,
      reviews: 67,
      image: '/api/placeholder/300/300',
      category: 'Routers',
      features: ['WiFi 6', 'Enterprise Grade', 'Cloud Management', 'High Capacity'],
      badge: 'New',
      inStock: true,
    },
    {
      id: 8,
      name: 'Signal Booster Kit',
      brand: 'WeBoost',
      price: 3299,
      rating: 4.4,
      reviews: 134,
      image: '/api/placeholder/300/300',
      category: 'Boosters',
      features: ['Multi-Carrier', '65dB Gain', 'Indoor/Outdoor', 'Easy Install'],
      inStock: true,
    },
  ];

  const categories = ['All', 'Routers', 'Extenders', 'Security', 'Power', 'Boosters', 'Accessories'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
      features: product.features,
    });
    openCart();
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

  return (
    <section id="products" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
              Featured Products
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our handpicked selection of premium networking equipment
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm border border-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge */}
                {product.badge && (
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
                    product.badge === 'Best Seller' ? 'bg-accent-green text-white' :
                    product.badge === 'New' ? 'bg-primary-500 text-white' :
                    'bg-accent-blue text-white'
                  }`}>
                    {product.badge}
                  </div>
                )}

                {/* Stock Status */}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
                      Out of Stock
                    </span>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-colors duration-300 ${
                      favorites.includes(product.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white/80 text-gray-600 rounded-full backdrop-blur-sm hover:bg-primary-500 hover:text-white transition-colors duration-300">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Brand & Name */}
                <div className="mb-3">
                  <p className="text-sm text-primary-600 font-medium mb-1">{product.brand}</p>
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">
                      R{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        R{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded-md text-xs font-semibold">
                      Save R{(product.originalPrice - product.price).toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    product.inStock
                      ? 'bg-primary-500 text-white hover:bg-primary-600 hover:scale-105 shadow-md hover:shadow-lg'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="w-4 h-4" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-white border-2 border-primary-500 text-primary-600 rounded-xl font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-105">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
}
