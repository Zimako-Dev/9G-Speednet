'use client';

import { useCart } from '@/contexts/CartContext';
import { ShoppingCart } from 'lucide-react';

export default function CartIcon() {
  const { state, toggleCart } = useCart();

  return (
    <button
      onClick={toggleCart}
      className="relative p-2 text-gray-700 hover:text-primary-500 transition-colors duration-300 rounded-lg hover:bg-gray-100"
    >
      <ShoppingCart className="w-6 h-6" />
      {state.itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
          {state.itemCount > 9 ? '9+' : state.itemCount}
        </span>
      )}
    </button>
  );
}
