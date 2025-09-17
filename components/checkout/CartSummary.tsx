'use client';

import { useCart } from '@/contexts/CartContext';
import { ShoppingBag, Truck, Shield, Headphones } from 'lucide-react';

export default function CartSummary() {
  const { state } = useCart();

  // Consistent number formatting
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const subtotal = state.total;
  const shipping = subtotal >= 500 ? 0 : 99;
  const tax = Math.round(subtotal * 0.15); // 15% VAT
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-8">
      {/* Header */}
      <div className="flex items-center mb-6">
        <ShoppingBag className="w-5 h-5 text-primary-500 mr-2" />
        <h2 className="text-lg font-bold text-gray-900">Order Summary</h2>
      </div>

      {/* Items */}
      <div className="space-y-4 mb-6">
        {state.items.map((item) => (
          <div key={item.id} className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-lg object-cover bg-gray-100"
              />
              <div className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {item.quantity}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {item.name}
              </p>
              <p className="text-xs text-gray-500">{item.brand}</p>
            </div>
            <div className="text-sm font-medium text-gray-900">
              R{formatPrice(item.price * item.quantity)}
            </div>
          </div>
        ))}
      </div>

      {/* Pricing Breakdown */}
      <div className="border-t border-gray-200 pt-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="text-gray-900">R{formatPrice(subtotal)}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className={`${shipping === 0 ? 'text-accent-green' : 'text-gray-900'}`}>
            {shipping === 0 ? 'Free' : `R${formatPrice(shipping)}`}
          </span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">VAT (15%)</span>
          <span className="text-gray-900">R{formatPrice(tax)}</span>
        </div>
        
        <div className="border-t border-gray-200 pt-3">
          <div className="flex justify-between">
            <span className="text-base font-semibold text-gray-900">Total</span>
            <span className="text-lg font-bold text-primary-600">R{formatPrice(total)}</span>
          </div>
        </div>
      </div>

      {/* Free Shipping Notice */}
      {shipping > 0 && (
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-xs text-blue-700">
            Add R{formatPrice(500 - subtotal)} more for free shipping
          </p>
        </div>
      )}

      {/* Benefits */}
      <div className="mt-6 space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <Truck className="w-4 h-4 text-accent-green mr-2" />
          <span>Fast delivery within 24-48 hours</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Shield className="w-4 h-4 text-primary-500 mr-2" />
          <span>2-year comprehensive warranty</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Headphones className="w-4 h-4 text-accent-blue mr-2" />
          <span>24/7 expert technical support</span>
        </div>
      </div>

      {/* Security Badge */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-center text-xs text-gray-500">
          <Shield className="w-3 h-3 mr-1" />
          <span>🔒 Secure SSL encrypted checkout</span>
        </div>
      </div>
    </div>
  );
}
