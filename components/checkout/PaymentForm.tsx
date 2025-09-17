'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PaymentInfo, ShippingInfo } from '@/app/checkout/page';
import { CreditCard, Shield, ArrowLeft, Copy } from 'lucide-react';

const paymentSchema = z.object({
  cardNumber: z.string().min(16, 'Please enter a valid card number'),
  expiryDate: z.string().min(5, 'Please enter a valid expiry date'),
  cvv: z.string().min(3, 'Please enter a valid CVV'),
  cardholderName: z.string().min(2, 'Please enter the cardholder name'),
  sameAsShipping: z.boolean(),
  billingAddress: z.object({
    address: z.string().min(5, 'Please enter a valid address'),
    city: z.string().min(2, 'Please enter a valid city'),
    province: z.string().min(1, 'Please select a province'),
    postalCode: z.string().min(4, 'Please enter a valid postal code'),
    country: z.string().min(1, 'Please select a country'),
  }),
});

interface PaymentFormProps {
  paymentInfo: PaymentInfo;
  setPaymentInfo: (info: PaymentInfo) => void;
  shippingInfo: ShippingInfo;
  onNext: () => void;
  onPrevious: () => void;
}

const southAfricanProvinces = [
  'Eastern Cape',
  'Free State',
  'Gauteng',
  'KwaZulu-Natal',
  'Limpopo',
  'Mpumalanga',
  'Northern Cape',
  'North West',
  'Western Cape',
];

export default function PaymentForm({ 
  paymentInfo, 
  setPaymentInfo, 
  shippingInfo, 
  onNext, 
  onPrevious 
}: PaymentFormProps) {
  const [sameAsShipping, setSameAsShipping] = useState(paymentInfo.sameAsShipping);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<PaymentInfo>({
    resolver: zodResolver(paymentSchema),
    defaultValues: paymentInfo,
  });

  const onSubmit = (data: PaymentInfo) => {
    setPaymentInfo(data);
    onNext();
  };

  // Update parent state when form values change
  const watchedValues = watch();
  React.useEffect(() => {
    setPaymentInfo(watchedValues);
  }, [watchedValues, setPaymentInfo]);

  // Handle same as shipping checkbox
  const handleSameAsShipping = (checked: boolean) => {
    setSameAsShipping(checked);
    setValue('sameAsShipping', checked);
    
    if (checked) {
      setValue('billingAddress.address', shippingInfo.address);
      setValue('billingAddress.city', shippingInfo.city);
      setValue('billingAddress.province', shippingInfo.province);
      setValue('billingAddress.postalCode', shippingInfo.postalCode);
      setValue('billingAddress.country', shippingInfo.country);
    }
  };

  // Format card number input
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  // Format expiry date
  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <CreditCard className="w-6 h-6 text-primary-500 mr-3" />
        <div>
          <h2 className="text-xl font-bold text-gray-900">Payment Information</h2>
          <p className="text-sm text-gray-600">Secure payment processing</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Payment Method */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Shield className="w-5 h-5 text-accent-green mr-2" />
            Payment Method
          </h3>

          {/* Card Details */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Card Number *
              </label>
              <input
                {...register('cardNumber')}
                type="text"
                maxLength={19}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="1234 5678 9012 3456"
                onChange={(e) => {
                  const formatted = formatCardNumber(e.target.value);
                  e.target.value = formatted;
                  setValue('cardNumber', formatted.replace(/\s/g, ''));
                }}
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-xs mt-1">{errors.cardNumber.message}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expiry Date *
                </label>
                <input
                  {...register('expiryDate')}
                  type="text"
                  maxLength={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="MM/YY"
                  onChange={(e) => {
                    const formatted = formatExpiryDate(e.target.value);
                    e.target.value = formatted;
                    setValue('expiryDate', formatted);
                  }}
                />
                {errors.expiryDate && (
                  <p className="text-red-500 text-xs mt-1">{errors.expiryDate.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CVV *
                </label>
                <input
                  {...register('cvv')}
                  type="text"
                  maxLength={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="123"
                />
                {errors.cvv && (
                  <p className="text-red-500 text-xs mt-1">{errors.cvv.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cardholder Name *
              </label>
              <input
                {...register('cardholderName')}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="John Doe"
              />
              {errors.cardholderName && (
                <p className="text-red-500 text-xs mt-1">{errors.cardholderName.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Billing Address */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing Address</h3>
          
          {/* Same as shipping checkbox */}
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={sameAsShipping}
                onChange={(e) => handleSameAsShipping(e.target.checked)}
                className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2"
              />
              <span className="ml-2 text-sm text-gray-700">Same as shipping address</span>
            </label>
          </div>

          {!sameAsShipping && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Street Address *
                </label>
                <input
                  {...register('billingAddress.address')}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="123 Main Street"
                />
                {errors.billingAddress?.address && (
                  <p className="text-red-500 text-xs mt-1">{errors.billingAddress.address.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    {...register('billingAddress.city')}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Johannesburg"
                  />
                  {errors.billingAddress?.city && (
                    <p className="text-red-500 text-xs mt-1">{errors.billingAddress.city.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Province *
                  </label>
                  <select
                    {...register('billingAddress.province')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    {southAfricanProvinces.map((province) => (
                      <option key={province} value={province}>
                        {province}
                      </option>
                    ))}
                  </select>
                  {errors.billingAddress?.province && (
                    <p className="text-red-500 text-xs mt-1">{errors.billingAddress.province.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Postal Code *
                  </label>
                  <input
                    {...register('billingAddress.postalCode')}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="2000"
                  />
                  {errors.billingAddress?.postalCode && (
                    <p className="text-red-500 text-xs mt-1">{errors.billingAddress.postalCode.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country *
                  </label>
                  <select
                    {...register('billingAddress.country')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="South Africa">South Africa</option>
                  </select>
                  {errors.billingAddress?.country && (
                    <p className="text-red-500 text-xs mt-1">{errors.billingAddress.country.message}</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Security Notice */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center">
            <Shield className="w-5 h-5 text-green-600 mr-2" />
            <div>
              <p className="text-sm font-medium text-green-800">Secure Payment</p>
              <p className="text-xs text-green-600">Your payment information is encrypted and secure</p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={onPrevious}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shipping
          </button>
          
          <button
            type="submit"
            className="px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors flex items-center"
          >
            Review Order
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
