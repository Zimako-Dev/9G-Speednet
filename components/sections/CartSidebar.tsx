'use client';

import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { X, Plus, Minus, ShoppingBag, Trash2, CreditCard, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import AuthModal from '@/components/auth/AuthModal';

export default function CartSidebar() {
  const { state, removeItem, updateQuantity, closeCart, clearCart } = useCart();
  const { user } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Consistent number formatting to avoid hydration issues
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  // Close auth modal when user successfully signs in
  useEffect(() => {
    if (user && isAuthModalOpen) {
      setIsAuthModalOpen(false);
    }
  }, [user, isAuthModalOpen]);

  if (!state.isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={closeCart}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center">
            <ShoppingBag className="w-5 h-5 text-primary-500 mr-2" />
            <h2 className="text-lg font-bold text-gray-900">
              Cart ({state.itemCount})
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex flex-col h-full pb-4">
          {state.items.length === 0 ? (
            /* Empty Cart */
            <div className="flex-1 flex flex-col items-center justify-center p-4">
              <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-600 text-center mb-6">
                Add some networking equipment to get started!
              </p>
              <button
                onClick={closeCart}
                className="px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    {/* Product Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-lg bg-white border border-gray-200"
                    />
                    
                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-xs text-primary-600 font-medium">{item.brand}</p>
                          <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1">
                            {item.name}
                          </h4>
                          <div className="flex flex-wrap gap-1 mb-2">
                            {item.features.slice(0, 2).map((feature, index) => (
                              <span
                                key={index}
                                className="px-2 py-0.5 bg-gray-200 text-gray-600 text-xs rounded"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      
                      {/* Price and Quantity */}
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-lg font-bold text-gray-900">
                          R{formatPrice(item.price)}
                        </span>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Subtotal */}
                      {item.quantity > 1 && (
                        <div className="text-right mt-1">
                          <span className="text-xs text-gray-600">
                            Subtotal: R{formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Footer */}
              <div className="border-t border-gray-200 p-4 pb-6 space-y-3 mt-auto">
                {/* Clear Cart */}
                <button
                  onClick={clearCart}
                  className="w-full text-sm text-gray-600 hover:text-red-600 transition-colors"
                >
                  Clear Cart
                </button>
                
                {/* Total */}
                <div className="flex items-center justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-primary-600">R{formatPrice(state.total)}</span>
                </div>
                
                {/* Shipping Info */}
                <div className="text-center">
                  <p className="text-xs text-gray-600">
                    {state.total >= 500 ? (
                      <span className="text-accent-green font-medium">✓ Free shipping included!</span>
                    ) : (
                      <>Add R{formatPrice(500 - state.total)} more for free shipping</>
                    )}
                  </p>
                </div>
                
                {/* Checkout Buttons */}
                <div className="space-y-3">
                  {user ? (
                    <Link
                      href="/checkout"
                      onClick={closeCart}
                      className="w-full bg-primary-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center"
                    >
                      <CreditCard className="w-4 h-4 mr-2" />
                      Proceed to Checkout
                    </Link>
                  ) : (
                    <div className="space-y-2">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                        <User className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                        <p className="text-sm text-blue-700 font-medium">Sign in to checkout</p>
                        <p className="text-xs text-blue-600">Create an account to save your cart and track orders</p>
                      </div>
                      <button 
                        onClick={() => setIsAuthModalOpen(true)}
                        className="w-full bg-primary-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center"
                      >
                        <User className="w-4 h-4 mr-2" />
                        Sign In to Checkout
                      </button>
                    </div>
                  )}
                  <button
                    onClick={closeCart}
                    className="w-full border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:border-primary-500 hover:text-primary-600 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
                
                {/* Security Badge */}
                <div className="text-center pt-2">
                  <p className="text-xs text-gray-500">
                    🔒 Secure checkout • 2-year warranty • Expert support
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        position="checkout"
      />
    </>
  );
}
