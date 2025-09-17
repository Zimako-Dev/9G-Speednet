'use client';

import React, { useEffect } from 'react';
import { ShippingInfo } from '@/app/checkout/page';
import { useCart } from '@/contexts/CartContext';
import { CheckCircle, Download, Mail, Truck, Phone, Home } from 'lucide-react';
import Link from 'next/link';

interface OrderConfirmationProps {
  orderNumber: string;
  shippingInfo: ShippingInfo;
}

export default function OrderConfirmation({ orderNumber, shippingInfo }: OrderConfirmationProps) {
  const { clearCart } = useCart();

  // Clear cart when order is confirmed
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 2); // 2 days from now

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center">
      {/* Success Icon */}
      <div className="mx-auto flex items-center justify-center w-16 h-16 bg-accent-green/10 rounded-full mb-6">
        <CheckCircle className="w-8 h-8 text-accent-green" />
      </div>

      {/* Success Message */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
        <p className="text-gray-600 mb-4">
          Thank you for your purchase. Your order has been successfully placed and is being processed.
        </p>
        
        {/* Order Number */}
        <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-6">
          <p className="text-sm font-medium text-primary-700 mb-1">Order Number</p>
          <p className="text-xl font-bold text-primary-900">{orderNumber}</p>
        </div>
      </div>

      {/* Order Details */}
      <div className="text-left space-y-6 mb-8">
        {/* Delivery Information */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <Truck className="w-5 h-5 text-primary-500 mr-2" />
            Delivery Information
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Estimated Delivery:</span>
              <span className="text-sm font-medium text-gray-900">
                {estimatedDelivery.toLocaleDateString('en-ZA', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Delivery Address:</span>
              <span className="text-sm font-medium text-gray-900 text-right">
                {shippingInfo.firstName} {shippingInfo.lastName}<br />
                {shippingInfo.address}<br />
                {shippingInfo.city}, {shippingInfo.province} {shippingInfo.postalCode}
              </span>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-blue-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <Mail className="w-5 h-5 text-accent-blue mr-2" />
            What's Next?
          </h3>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>You'll receive an order confirmation email at <strong>{shippingInfo.email}</strong></span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>We'll send you tracking information once your order ships</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Our team will contact you at <strong>{shippingInfo.phone}</strong> if needed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="w-full bg-primary-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center">
          <Download className="w-4 h-4 mr-2" />
          Download Receipt
        </button>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            href="/store"
            className="w-full border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:border-primary-500 hover:text-primary-600 transition-colors flex items-center justify-center"
          >
            <Home className="w-4 h-4 mr-2" />
            Continue Shopping
          </Link>
          
          <button className="w-full border-2 border-primary-500 text-primary-600 py-3 px-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors flex items-center justify-center">
            <Phone className="w-4 h-4 mr-2" />
            Contact Support
          </button>
        </div>
      </div>

      {/* Support Information */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-2">Need help with your order?</p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
          <a href="tel:+27123456789" className="text-primary-600 hover:text-primary-700 flex items-center">
            <Phone className="w-3 h-3 mr-1" />
            +27 12 345 6789
          </a>
          <a href="mailto:support@9gspeednet.co.za" className="text-primary-600 hover:text-primary-700 flex items-center">
            <Mail className="w-3 h-3 mr-1" />
            support@9gspeednet.co.za
          </a>
        </div>
      </div>

      {/* Thank You Message */}
      <div className="mt-8 p-4 bg-gradient-to-r from-primary-50 to-accent-green/10 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong>Thank you for choosing 9G Speednet!</strong><br />
          We're committed to providing you with the best networking equipment and support.
        </p>
      </div>
    </div>
  );
}
