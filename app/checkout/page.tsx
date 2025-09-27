'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import CheckoutSteps from '@/components/checkout/CheckoutSteps';
import CartSummary from '@/components/checkout/CartSummary';
import ShippingForm from '@/components/checkout/ShippingForm';
import PaymentForm from '@/components/checkout/PaymentForm';
import OrderReview from '@/components/checkout/OrderReview';
import OrderConfirmation from '@/components/checkout/OrderConfirmation';
import OrderTracking from '@/components/checkout/OrderTracking';
import { Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export type CheckoutStep = 'shipping' | 'review' | 'payment' | 'tracking' | 'complete';

export interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  deliveryInstructions?: string;
}

export interface PaymentInfo {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
  billingAddress: {
    address: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  };
  sameAsShipping: boolean;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { state } = useCart();
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('shipping');
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: '',
    lastName: '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    province: 'Gauteng',
    postalCode: '',
    country: 'South Africa',
    deliveryInstructions: '',
  });
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    billingAddress: {
      address: '',
      city: '',
      province: 'Gauteng',
      postalCode: '',
      country: 'South Africa',
    },
    sameAsShipping: true,
  });
  const [orderNumber, setOrderNumber] = useState<string>('');

  // Redirect if not authenticated or cart is empty
  useEffect(() => {
    if (!user) {
      router.push('/store');
      return;
    }
    if (state.items.length === 0) {
      router.push('/store');
      return;
    }
  }, [user, state.items.length, router]);

  // Generate order number when reaching tracking
  useEffect(() => {
    if (currentStep === 'tracking' && !orderNumber) {
      const orderNum = `9G${Date.now().toString().slice(-8)}`;
      setOrderNumber(orderNum);
    }
  }, [currentStep, orderNumber]);

  const handleNextStep = () => {
    switch (currentStep) {
      case 'shipping':
        setCurrentStep('review');
        break;
      case 'review':
        setCurrentStep('payment');
        break;
      case 'payment':
        setCurrentStep('tracking');
        break;
      case 'tracking':
        setCurrentStep('complete');
        break;
    }
  };

  const handlePreviousStep = () => {
    switch (currentStep) {
      case 'review':
        setCurrentStep('shipping');
        break;
      case 'payment':
        setCurrentStep('review');
        break;
      case 'tracking':
        setCurrentStep('payment');
        break;
    }
  };

  if (!user || state.items.length === 0) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/store" className="flex items-center text-gray-600 hover:text-primary-600 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Store
              </Link>
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-accent-green mr-2" />
              <span className="text-sm text-gray-600">Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2">
            {/* Steps Indicator */}
            <CheckoutSteps currentStep={currentStep} />

            {/* Step Content */}
            <div className="mt-8">
              {currentStep === 'shipping' && (
                <ShippingForm
                  shippingInfo={shippingInfo}
                  setShippingInfo={setShippingInfo}
                  onNext={handleNextStep}
                />
              )}
              {currentStep === 'review' && (
                <OrderReview
                  shippingInfo={shippingInfo}
                  paymentInfo={paymentInfo}
                  onNext={handleNextStep}
                  onPrevious={handlePreviousStep}
                />
              )}
              {currentStep === 'payment' && (
                <PaymentForm
                  paymentInfo={paymentInfo}
                  setPaymentInfo={setPaymentInfo}
                  shippingInfo={shippingInfo}
                  onNext={handleNextStep}
                  onPrevious={handlePreviousStep}
                />
              )}
              {currentStep === 'tracking' && (
                <OrderTracking
                  orderNumber={orderNumber}
                  shippingInfo={shippingInfo}
                  onNext={handleNextStep}
                />
              )}
              {currentStep === 'complete' && (
                <OrderConfirmation
                  orderNumber={orderNumber}
                  shippingInfo={shippingInfo}
                />
              )}
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
