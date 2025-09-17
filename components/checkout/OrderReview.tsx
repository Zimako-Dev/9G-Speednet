'use client';

import React, { useState } from 'react';
import { ShippingInfo, PaymentInfo } from '@/app/checkout/page';
import { useCart } from '@/contexts/CartContext';
import { Eye, MapPin, CreditCard, ArrowLeft, CheckCircle, Loader } from 'lucide-react';

interface OrderReviewProps {
  shippingInfo: ShippingInfo;
  paymentInfo: PaymentInfo;
  onNext: () => void;
  onPrevious: () => void;
}

export default function OrderReview({ 
  shippingInfo, 
  paymentInfo, 
  onNext, 
  onPrevious 
}: OrderReviewProps) {
  const { state } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Consistent number formatting
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const subtotal = state.total;
  const shipping = subtotal >= 500 ? 0 : 99;
  const tax = Math.round(subtotal * 0.15); // 15% VAT
  const total = subtotal + shipping + tax;

  const handlePlaceOrder = async () => {
    if (!agreedToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    setIsProcessing(true);
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    onNext();
  };

  const maskCardNumber = (cardNumber: string) => {
    const cleaned = cardNumber.replace(/\s/g, '');
    return `**** **** **** ${cleaned.slice(-4)}`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Eye className="w-6 h-6 text-primary-500 mr-3" />
        <div>
          <h2 className="text-xl font-bold text-gray-900">Review Your Order</h2>
          <p className="text-sm text-gray-600">Please review all details before placing your order</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Order Items */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Items</h3>
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            {state.items.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-lg object-cover bg-white"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.brand}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">
                    R{formatPrice(item.price * item.quantity)}
                  </p>
                  {item.quantity > 1 && (
                    <p className="text-xs text-gray-500">
                      R{formatPrice(item.price)} each
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <MapPin className="w-5 h-5 text-primary-500 mr-2" />
            Shipping Information
          </h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-700">Delivery Address</p>
                <p className="text-sm text-gray-900">
                  {shippingInfo.firstName} {shippingInfo.lastName}
                </p>
                <p className="text-sm text-gray-600">{shippingInfo.address}</p>
                <p className="text-sm text-gray-600">
                  {shippingInfo.city}, {shippingInfo.province} {shippingInfo.postalCode}
                </p>
                <p className="text-sm text-gray-600">{shippingInfo.country}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Contact Information</p>
                <p className="text-sm text-gray-600">{shippingInfo.email}</p>
                <p className="text-sm text-gray-600">{shippingInfo.phone}</p>
                {shippingInfo.deliveryInstructions && (
                  <>
                    <p className="text-sm font-medium text-gray-700 mt-2">Delivery Instructions</p>
                    <p className="text-sm text-gray-600">{shippingInfo.deliveryInstructions}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <CreditCard className="w-5 h-5 text-primary-500 mr-2" />
            Payment Information
          </h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-700">Payment Method</p>
                <p className="text-sm text-gray-900">Credit Card</p>
                <p className="text-sm text-gray-600">
                  {maskCardNumber(paymentInfo.cardNumber)}
                </p>
                <p className="text-sm text-gray-600">{paymentInfo.cardholderName}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Billing Address</p>
                {paymentInfo.sameAsShipping ? (
                  <p className="text-sm text-gray-600">Same as shipping address</p>
                ) : (
                  <>
                    <p className="text-sm text-gray-600">{paymentInfo.billingAddress.address}</p>
                    <p className="text-sm text-gray-600">
                      {paymentInfo.billingAddress.city}, {paymentInfo.billingAddress.province} {paymentInfo.billingAddress.postalCode}
                    </p>
                    <p className="text-sm text-gray-600">{paymentInfo.billingAddress.country}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
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
            <div className="border-t border-gray-300 pt-2">
              <div className="flex justify-between">
                <span className="text-base font-semibold text-gray-900">Total</span>
                <span className="text-lg font-bold text-primary-600">R{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div>
          <label className="flex items-start">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2 mt-0.5"
            />
            <span className="ml-2 text-sm text-gray-700">
              I agree to the{' '}
              <a href="#" className="text-primary-600 hover:text-primary-700 underline">
                Terms and Conditions
              </a>{' '}
              and{' '}
              <a href="#" className="text-primary-600 hover:text-primary-700 underline">
                Privacy Policy
              </a>
              . I understand that my order will be processed and shipped according to the delivery timeframe specified.
            </span>
          </label>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={onPrevious}
            disabled={isProcessing}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Payment
          </button>
          
          <button
            onClick={handlePlaceOrder}
            disabled={!agreedToTerms || isProcessing}
            className="px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? (
              <>
                <Loader className="w-4 h-4 mr-2 animate-spin" />
                Processing Order...
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Place Order
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
