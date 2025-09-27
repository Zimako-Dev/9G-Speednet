'use client';

import { useState, useEffect } from 'react';
import { Package, Truck, CheckCircle, Clock, MapPin, Phone, Mail } from 'lucide-react';

interface OrderTrackingProps {
  orderNumber: string;
  shippingInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  };
  onNext: () => void;
}

const trackingSteps = [
  {
    id: 'confirmed',
    name: 'Order Confirmed',
    description: 'Your order has been confirmed and is being prepared',
    icon: CheckCircle,
    completed: true,
  },
  {
    id: 'processing',
    name: 'Processing',
    description: 'Your order is being prepared for shipment',
    icon: Package,
    completed: true,
  },
  {
    id: 'shipped',
    name: 'Shipped',
    description: 'Your order has been shipped and is on its way',
    icon: Truck,
    completed: false,
    current: true,
  },
  {
    id: 'delivered',
    name: 'Delivered',
    description: 'Your order has been delivered',
    icon: CheckCircle,
    completed: false,
  },
];

export default function OrderTracking({ orderNumber, shippingInfo, onNext }: OrderTrackingProps) {
  const [estimatedDelivery, setEstimatedDelivery] = useState<string>('');

  useEffect(() => {
    // Calculate estimated delivery date (3-5 business days from now)
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + 4); // 4 days from now
    
    setEstimatedDelivery(deliveryDate.toLocaleDateString('en-ZA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }));
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Package className="w-8 h-8 text-primary-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Tracking</h2>
        <p className="text-gray-600">
          Track your order progress and estimated delivery time
        </p>
      </div>

      {/* Order Details */}
      <div className="bg-gray-50 rounded-xl p-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Order Information</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-medium text-gray-900">{orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Delivery:</span>
                <span className="font-medium text-primary-600">{estimatedDelivery}</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Delivery Address</h3>
            <div className="text-sm text-gray-600">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p>{shippingInfo.firstName} {shippingInfo.lastName}</p>
                  <p>{shippingInfo.address}</p>
                  <p>{shippingInfo.city}, {shippingInfo.province} {shippingInfo.postalCode}</p>
                  <p>{shippingInfo.country}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tracking Progress */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Tracking Progress</h3>
        <div className="space-y-6">
          {trackingSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="flex items-start">
                {/* Icon */}
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 mr-4 ${
                  step.completed 
                    ? 'bg-accent-green border-accent-green text-white'
                    : step.current
                    ? 'bg-primary-500 border-primary-500 text-white animate-pulse'
                    : 'bg-gray-100 border-gray-300 text-gray-400'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className={`text-sm font-medium ${
                      step.completed || step.current ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {step.name}
                    </h4>
                    {step.current && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                        <Clock className="w-3 h-3 mr-1" />
                        In Progress
                      </span>
                    )}
                    {step.completed && (
                      <span className="text-xs text-accent-green font-medium">
                        Completed
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                  
                  {/* Connector Line */}
                  {index < trackingSteps.length - 1 && (
                    <div className={`w-0.5 h-6 ml-5 mt-2 ${
                      step.completed ? 'bg-accent-green' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
        <h3 className="font-semibold text-blue-900 mb-3">Need Help?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center text-blue-700">
            <Phone className="w-4 h-4 mr-2" />
            <span>Support: 0800 123 456</span>
          </div>
          <div className="flex items-center text-blue-700">
            <Mail className="w-4 h-4 mr-2" />
            <span>support@9gspeednet.com</span>
          </div>
        </div>
        <p className="text-blue-600 text-xs mt-2">
          Our support team is available Monday to Friday, 8:00 AM - 6:00 PM
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={onNext}
          className="flex-1 bg-primary-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-600 transition-colors"
        >
          Complete Order
        </button>
        <button
          onClick={() => window.print()}
          className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
        >
          Print Tracking Info
        </button>
      </div>
    </div>
  );
}
