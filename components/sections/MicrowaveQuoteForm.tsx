'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  X, User, Mail, Phone, MapPin, Calendar, CheckCircle, Building2, 
  Antenna, Zap, Clock
} from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  companyName: z.string().optional(),
  businessType: z.string().min(1, 'Please select business type'),
  address: z.string().min(10, 'Please enter your full address'),
  city: z.string().min(2, 'Please enter your city'),
  postalCode: z.string().min(4, 'Please enter a valid postal code'),
  requiredSpeed: z.string().min(1, 'Please select required speed'),
  preferredCallTime: z.string().min(1, 'Please select a preferred call time'),
  urgency: z.string().min(1, 'Please select installation urgency'),
  additionalRequirements: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface MicrowaveQuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: {
    name: string;
    speed: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    packageType: 'home' | 'business';
  } | null;
}

export default function MicrowaveQuoteForm({ isOpen, onClose, selectedPackage }: MicrowaveQuoteFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });


  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Microwave quote submitted:', { ...data, package: selectedPackage });
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
      onClose();
    }, 4000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[98vh] sm:max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 rounded-t-xl sm:rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-lg sm:text-2xl font-bold text-gray-900 flex items-center">
                <Antenna className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500 mr-2" />
                <span className="truncate">Request Microwave Quote</span>
              </h2>
              {selectedPackage && (
                <div className="flex flex-col sm:flex-row sm:items-center mt-2 space-y-1 sm:space-y-0">
                  <span className={`inline-flex px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mr-0 sm:mr-2 ${
                    selectedPackage.packageType === 'business' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {selectedPackage.name}
                  </span>
                  <span className="text-gray-600 text-xs sm:text-sm">
                    {selectedPackage.speed} • {selectedPackage.price}{selectedPackage.period}
                  </span>
                </div>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Success State */}
        {isSubmitted && (
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-accent-green" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Quote Request Submitted!</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Thank you for your interest in 9G Speednet Microwave solutions. Our sales team will 
              contact you to discuss your requirements and provide you with a detailed quote within 48 hours.
            </p>
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 max-w-md mx-auto">
              <h4 className="font-semibold text-primary-900 mb-2">What happens next?</h4>
              <ul className="text-sm text-primary-700 space-y-1 text-left">
                <li>• Sales consultation within 48 hours</li>
                <li>• Professional site survey scheduled</li>
                <li>• Detailed quote with installation timeline</li>
                <li>• Equipment specification and placement plan</li>
              </ul>
            </div>
          </div>
        )}

        {/* Form */}
        {!isSubmitted && (
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 p-4 sm:p-6">
            {/* Left Column - Form */}
            <div className="space-y-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Selected Package Info */}
                {selectedPackage && (
                  <div className="bg-gradient-to-r from-primary-50 to-accent-blue/10 border border-primary-200 rounded-lg p-4">
                    <h3 className="font-semibold text-primary-900 mb-3 flex items-center">
                      <Building2 className="w-4 h-4 mr-2" />
                      Selected Microwave Package
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-primary-700">Package:</span>
                        <p className="font-medium text-primary-900">{selectedPackage.name}</p>
                      </div>
                      <div>
                        <span className="text-primary-700">Speed:</span>
                        <p className="font-medium text-primary-900">{selectedPackage.speed}</p>
                      </div>
                      <div>
                        <span className="text-primary-700">Price:</span>
                        <p className="font-medium text-primary-900">{selectedPackage.price}{selectedPackage.period}</p>
                      </div>
                      <div>
                        <span className="text-primary-700">Type:</span>
                        <p className="font-medium text-primary-900 capitalize">{selectedPackage.packageType}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-primary-500" />
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        {...register('firstName')}
                        type="text"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        {...register('lastName')}
                        type="text"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name (Optional)
                      </label>
                      <input
                        {...register('companyName')}
                        type="text"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                        placeholder="Enter company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Business Type *
                      </label>
                      <select
                        {...register('businessType')}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                      >
                        <option value="">Select business type</option>
                        <option value="residential">Residential</option>
                        <option value="small-business">Small Business</option>
                        <option value="medium-business">Medium Business</option>
                        <option value="enterprise">Enterprise</option>
                        <option value="government">Government</option>
                        <option value="ngo">NGO/Non-Profit</option>
                      </select>
                      {errors.businessType && (
                        <p className="text-red-500 text-xs mt-1">{errors.businessType.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Column - Technical Assessment */}
            <div className="space-y-6">
              {/* Installation Address */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary-500" />
                  Installation Address
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <input
                      {...register('address')}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Enter your full street address"
                    />
                    {errors.address && (
                      <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        {...register('city')}
                        type="text"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                        placeholder="Enter your city"
                      />
                      {errors.city && (
                        <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Postal Code *
                      </label>
                      <input
                        {...register('postalCode')}
                        type="text"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                        placeholder="Enter postal code"
                      />
                      {errors.postalCode && (
                        <p className="text-red-500 text-xs mt-1">{errors.postalCode.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>


              {/* Requirements & Preferences */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-primary-500" />
                  Requirements
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Required Speed *
                    </label>
                    <select
                      {...register('requiredSpeed')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select required speed</option>
                      <option value="30/30">30/30 Mbps</option>
                      <option value="50/50">50/50 Mbps</option>
                      <option value="100/100">100/100 Mbps</option>
                      <option value="200/200">200/200 Mbps</option>
                      <option value="custom">Custom Requirements</option>
                    </select>
                    {errors.requiredSpeed && (
                      <p className="text-red-500 text-xs mt-1">{errors.requiredSpeed.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Installation Urgency *
                    </label>
                    <select
                      {...register('urgency')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select urgency</option>
                      <option value="standard">Standard (2-3 weeks)</option>
                      <option value="priority">Priority (1-2 weeks)</option>
                      <option value="urgent">Urgent (ASAP)</option>
                    </select>
                    {errors.urgency && (
                      <p className="text-red-500 text-xs mt-1">{errors.urgency.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Call Time *
                    </label>
                    <select
                      {...register('preferredCallTime')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (8:00 - 12:00)</option>
                      <option value="afternoon">Afternoon (12:00 - 17:00)</option>
                      <option value="evening">Evening (17:00 - 20:00)</option>
                      <option value="anytime">Anytime</option>
                    </select>
                    {errors.preferredCallTime && (
                      <p className="text-red-500 text-xs mt-1">{errors.preferredCallTime.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Requirements (Optional)
                    </label>
                    <textarea
                      {...register('additionalRequirements')}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Any special requirements, access instructions, or technical specifications?"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Buttons - Bottom of Form */}
            <div className="border-t border-gray-200 p-4 sm:p-6 bg-gray-50">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit(onSubmit)}
                  disabled={isSubmitting}
                  className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
