'use client';

import { useState } from 'react';
import { Search, Package, Truck, CheckCircle, Clock, MapPin, Phone, Mail, AlertCircle } from 'lucide-react';
import Link from 'next/link';

interface TrackingResult {
  orderNumber: string;
  status: 'confirmed' | 'processing' | 'shipped' | 'delivered';
  estimatedDelivery: string;
  currentLocation: string;
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    province: string;
    postalCode: string;
  };
  trackingHistory: {
    date: string;
    time: string;
    status: string;
    location: string;
    description: string;
  }[];
}

const mockTrackingData: { [key: string]: TrackingResult } = {
  '9G12345678': {
    orderNumber: '9G12345678',
    status: 'shipped',
    estimatedDelivery: 'Friday, 29 September 2025',
    currentLocation: 'Johannesburg Distribution Center',
    shippingAddress: {
      name: 'John Doe',
      address: '123 Main Street',
      city: 'Johannesburg',
      province: 'Gauteng',
      postalCode: '2000',
    },
    trackingHistory: [
      {
        date: '2025-09-26',
        time: '14:30',
        status: 'Shipped',
        location: 'Johannesburg Distribution Center',
        description: 'Package has been shipped and is on its way to destination',
      },
      {
        date: '2025-09-26',
        time: '10:15',
        status: 'Processing',
        location: 'Johannesburg Warehouse',
        description: 'Package is being prepared for shipment',
      },
      {
        date: '2025-09-25',
        time: '16:45',
        status: 'Confirmed',
        location: 'Order Processing Center',
        description: 'Order has been confirmed and payment processed',
      },
    ],
  },
  '9G87654321': {
    orderNumber: '9G87654321',
    status: 'delivered',
    estimatedDelivery: 'Delivered',
    currentLocation: 'Delivered',
    shippingAddress: {
      name: 'Jane Smith',
      address: '456 Oak Avenue',
      city: 'Cape Town',
      province: 'Western Cape',
      postalCode: '8000',
    },
    trackingHistory: [
      {
        date: '2025-09-25',
        time: '11:20',
        status: 'Delivered',
        location: 'Cape Town',
        description: 'Package has been successfully delivered',
      },
      {
        date: '2025-09-25',
        time: '08:30',
        status: 'Out for Delivery',
        location: 'Cape Town Distribution Center',
        description: 'Package is out for delivery',
      },
      {
        date: '2025-09-24',
        time: '15:45',
        status: 'Shipped',
        location: 'Cape Town Distribution Center',
        description: 'Package has been shipped and is on its way to destination',
      },
    ],
  },
};

const trackingSteps = [
  { id: 'confirmed', name: 'Confirmed', icon: CheckCircle },
  { id: 'processing', name: 'Processing', icon: Package },
  { id: 'shipped', name: 'Shipped', icon: Truck },
  { id: 'delivered', name: 'Delivered', icon: CheckCircle },
];

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState<TrackingResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrackOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderNumber.trim()) return;

    setIsLoading(true);
    setError('');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const result = mockTrackingData[orderNumber.trim()];
    if (result) {
      setTrackingResult(result);
    } else {
      setError('Order not found. Please check your order number and try again.');
      setTrackingResult(null);
    }
    
    setIsLoading(false);
  };

  const getStepStatus = (stepId: string, currentStatus: string) => {
    const stepOrder = ['confirmed', 'processing', 'shipped', 'delivered'];
    const currentIndex = stepOrder.indexOf(currentStatus);
    const stepIndex = stepOrder.indexOf(stepId);
    
    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'current';
    return 'upcoming';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary-500">
                9G Speednet
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/store" className="text-gray-600 hover:text-primary-600 transition-colors">
                Store
              </Link>
              <Link href="/support" className="text-gray-600 hover:text-primary-600 transition-colors">
                Support
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Track Your Order</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enter your order number below to track the status and location of your 9G Speednet order.
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <form onSubmit={handleTrackOrder} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700 mb-2">
                Order Number
              </label>
              <input
                type="text"
                id="orderNumber"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                placeholder="Enter your order number (e.g., 9G12345678)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
            </div>
            <div className="sm:pt-7">
              <button
                type="submit"
                disabled={isLoading || !orderNumber.trim()}
                className="w-full sm:w-auto px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Tracking...
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Track Order
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Demo Order Numbers */}
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-700 mb-2">
              <strong>Demo Order Numbers:</strong>
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setOrderNumber('9G12345678')}
                className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
              >
                9G12345678 (Shipped)
              </button>
              <button
                onClick={() => setOrderNumber('9G87654321')}
                className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
              >
                9G87654321 (Delivered)
              </button>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        )}

        {/* Tracking Results */}
        {trackingResult && (
          <div className="space-y-8">
            {/* Order Status Overview */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Order #{trackingResult.orderNumber}</h2>
                  <p className="text-gray-600">
                    Estimated Delivery: <span className="font-medium text-primary-600">{trackingResult.estimatedDelivery}</span>
                  </p>
                </div>
                <div className="text-right">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    trackingResult.status === 'delivered' 
                      ? 'bg-accent-green/10 text-accent-green'
                      : trackingResult.status === 'shipped'
                      ? 'bg-primary-100 text-primary-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    <Clock className="w-4 h-4 mr-1" />
                    {trackingResult.status === 'delivered' ? 'Delivered' : `Currently: ${trackingResult.currentLocation}`}
                  </div>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-6">
                {trackingSteps.map((step, index) => {
                  const Icon = step.icon;
                  const status = getStepStatus(step.id, trackingResult.status);
                  
                  return (
                    <div key={step.id} className="flex flex-col items-center flex-1">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 mb-2 ${
                        status === 'completed'
                          ? 'bg-accent-green border-accent-green text-white'
                          : status === 'current'
                          ? 'bg-primary-500 border-primary-500 text-white'
                          : 'bg-gray-100 border-gray-300 text-gray-400'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-sm font-medium ${
                        status === 'completed' || status === 'current' ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {step.name}
                      </span>
                      
                      {/* Connector Line */}
                      {index < trackingSteps.length - 1 && (
                        <div className={`absolute h-0.5 w-full mt-5 ${
                          getStepStatus(trackingSteps[index + 1].id, trackingResult.status) === 'completed' ||
                          getStepStatus(step.id, trackingResult.status) === 'completed'
                            ? 'bg-accent-green'
                            : 'bg-gray-300'
                        }`} style={{ 
                          left: '50%', 
                          right: '-50%',
                          transform: 'translateY(-50%)'
                        }} />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Shipping Address */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Delivery Address
                </h3>
                <div className="text-sm text-gray-600">
                  <p>{trackingResult.shippingAddress.name}</p>
                  <p>{trackingResult.shippingAddress.address}</p>
                  <p>{trackingResult.shippingAddress.city}, {trackingResult.shippingAddress.province} {trackingResult.shippingAddress.postalCode}</p>
                </div>
              </div>
            </div>

            {/* Tracking History */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tracking History</h3>
              <div className="space-y-4">
                {trackingResult.trackingHistory.map((event, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2 mr-4"></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium text-gray-900">{event.status}</h4>
                        <span className="text-xs text-gray-500">{event.date} at {event.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-900 mb-3">Need Help with Your Order?</h3>
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
          </div>
        )}
      </div>
    </div>
  );
}
