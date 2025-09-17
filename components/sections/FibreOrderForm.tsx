'use client';

import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X, User, Mail, Phone, MapPin, Calendar, CheckCircle, Search, AlertCircle, Zap, Building } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().min(10, 'Please enter your full address'),
  city: z.string().min(2, 'Please enter your city'),
  postalCode: z.string().min(4, 'Please enter a valid postal code'),
  propertyType: z.string().min(1, 'Please select property type'),
  preferredCallTime: z.string().min(1, 'Please select a preferred call time'),
  installationType: z.string().min(1, 'Please select installation type'),
  additionalNotes: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface FibreOrderFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: {
    name: string;
    price: number;
    downloadSpeed: string;
    uploadSpeed: string;
    category: string;
  } | null;
}

interface CoverageStatus {
  available: boolean;
  estimatedInstallTime: string;
  networkProvider: string;
  additionalInfo: string;
}

export default function FibreOrderForm({ isOpen, onClose, selectedPackage }: FibreOrderFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCheckingCoverage, setIsCheckingCoverage] = useState(false);
  const [coverageStatus, setCoverageStatus] = useState<CoverageStatus | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const watchedAddress = watch('address');
  const watchedCity = watch('city');
  const watchedPostalCode = watch('postalCode');

  // Initialize map when component mounts
  useEffect(() => {
    if (isOpen && mapRef.current && !mapLoaded) {
      initializeMap();
    }
  }, [isOpen, mapLoaded]);

  const initializeMap = () => {
    // Simulate map initialization (in real implementation, you'd use Google Maps, Leaflet, etc.)
    if (mapRef.current) {
      mapRef.current.innerHTML = `
        <div class="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center relative overflow-hidden">
          <div class="absolute inset-0 opacity-20">
            <div class="absolute top-4 left-4 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div class="absolute top-8 right-6 w-1 h-1 bg-green-500 rounded-full animate-bounce"></div>
            <div class="absolute bottom-6 left-8 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></div>
            <div class="absolute bottom-4 right-4 w-2 h-2 bg-pink-500 rounded-full animate-bounce"></div>
          </div>
          <div class="text-center z-10">
            <MapPin class="w-12 h-12 text-primary-500 mx-auto mb-2" />
            <p class="text-gray-600 text-sm">Interactive Coverage Map</p>
            <p class="text-gray-500 text-xs">Enter your address to check coverage</p>
          </div>
        </div>
      `;
      setMapLoaded(true);
    }
  };

  const checkCoverage = async () => {
    if (!watchedAddress || !watchedCity) return;

    setIsCheckingCoverage(true);
    
    // Simulate API call for coverage checking
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate different coverage scenarios based on city
    const coverageScenarios: { [key: string]: CoverageStatus } = {
      'cape town': {
        available: true,
        estimatedInstallTime: '5-7 business days',
        networkProvider: 'Openserve & Vumatel',
        additionalInfo: 'Excellent fibre infrastructure available'
      },
      'johannesburg': {
        available: true,
        estimatedInstallTime: '3-5 business days',
        networkProvider: 'Openserve & MetroFibre',
        additionalInfo: 'Multiple network options available'
      },
      'durban': {
        available: true,
        estimatedInstallTime: '7-10 business days',
        networkProvider: 'Openserve',
        additionalInfo: 'Good coverage in most areas'
      },
      'pretoria': {
        available: true,
        estimatedInstallTime: '5-7 business days',
        networkProvider: 'Openserve & Vumatel',
        additionalInfo: 'Expanding fibre network'
      }
    };

    const cityKey = watchedCity.toLowerCase();
    const status = coverageScenarios[cityKey] || {
      available: Math.random() > 0.3, // 70% chance of coverage
      estimatedInstallTime: '10-14 business days',
      networkProvider: 'Openserve',
      additionalInfo: 'Coverage assessment required'
    };

    setCoverageStatus(status);
    setIsCheckingCoverage(false);

    // Update map to show coverage area
    if (mapRef.current && status.available) {
      const coverageOverlay = `
        <div class="absolute inset-0 bg-green-500 opacity-20 rounded-lg"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
          <div class="bg-white rounded-lg p-3 shadow-lg border-2 border-green-500">
            <CheckCircle class="w-8 h-8 text-green-500 mx-auto mb-1" />
            <p class="text-green-700 font-semibold text-sm">Coverage Available</p>
            <p class="text-gray-600 text-xs">${status.networkProvider}</p>
          </div>
        </div>
      `;
      mapRef.current.innerHTML = mapRef.current.innerHTML + coverageOverlay;
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Fibre form submitted:', { 
      ...data, 
      package: selectedPackage,
      coverage: coverageStatus,
      location: selectedLocation 
    });
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 4 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false);
      setCoverageStatus(null);
      setSelectedLocation(null);
      reset();
      onClose();
    }, 4000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-6xl w-full max-h-[98vh] sm:max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 rounded-t-xl sm:rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-900 flex items-center">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500 mr-2" />
                Order Fibre Package
              </h2>
              {selectedPackage && (
                <div className="flex items-center mt-2">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mr-2">
                    {selectedPackage.name}
                  </span>
                  <span className="text-gray-600 text-sm">
                    R{selectedPackage.price}/month • {selectedPackage.downloadSpeed} • {selectedPackage.category}
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
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Fibre Order Submitted Successfully!</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Thank you for choosing 9G Speednet Fibre! Our technical team will contact you within 24 hours 
              to confirm coverage, schedule a site survey, and arrange professional installation.
            </p>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                <h4 className="font-semibold text-primary-900 mb-2">What happens next?</h4>
                <ul className="text-sm text-primary-700 space-y-1 text-left">
                  <li>• Technical assessment call within 24 hours</li>
                  <li>• Site survey to confirm installation feasibility</li>
                  <li>• Professional fibre installation scheduled</li>
                  <li>• Router configuration and speed testing</li>
                </ul>
              </div>
              {coverageStatus && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">Coverage Confirmed</h4>
                  <ul className="text-sm text-green-700 space-y-1 text-left">
                    <li>• Network: {coverageStatus.networkProvider}</li>
                    <li>• Install time: {coverageStatus.estimatedInstallTime}</li>
                    <li>• {coverageStatus.additionalInfo}</li>
                  </ul>
                </div>
              )}
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
                      <Building className="w-4 h-4 mr-2" />
                      Selected Fibre Package
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-primary-700">Package:</span>
                        <p className="font-medium text-primary-900">{selectedPackage.name}</p>
                      </div>
                      <div>
                        <span className="text-primary-700">Price:</span>
                        <p className="font-medium text-primary-900">R{selectedPackage.price}/month</p>
                      </div>
                      <div>
                        <span className="text-primary-700">Download:</span>
                        <p className="font-medium text-primary-900">{selectedPackage.downloadSpeed}</p>
                      </div>
                      <div>
                        <span className="text-primary-700">Upload:</span>
                        <p className="font-medium text-primary-900">{selectedPackage.uploadSpeed}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-primary-500" />
                    Personal Information
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
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-primary-500" />
                    Contact Information
                  </h3>
                  <div className="space-y-4">
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
                  </div>
                </div>

                {/* Installation Details */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Building className="w-5 h-5 mr-2 text-primary-500" />
                    Installation Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Property Type *
                      </label>
                      <select
                        {...register('propertyType')}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                      >
                        <option value="">Select property type</option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="townhouse">Townhouse</option>
                        <option value="office">Office</option>
                        <option value="business">Business Premises</option>
                      </select>
                      {errors.propertyType && (
                        <p className="text-red-500 text-xs mt-1">{errors.propertyType.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Installation Type *
                      </label>
                      <select
                        {...register('installationType')}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                      >
                        <option value="">Select installation type</option>
                        <option value="standard">Standard Installation</option>
                        <option value="express">Express Installation (+R200)</option>
                        <option value="weekend">Weekend Installation (+R300)</option>
                      </select>
                      {errors.installationType && (
                        <p className="text-red-500 text-xs mt-1">{errors.installationType.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contact Preferences */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-primary-500" />
                    Contact Preferences
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Call Time *
                      </label>
                      <select
                        {...register('preferredCallTime')}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
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
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        {...register('additionalNotes')}
                        rows={3}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                        placeholder="Any special requirements, access instructions, or questions?"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Column - Map & Coverage */}
            <div className="space-y-6">
              {/* Address & Coverage Check */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary-500" />
                  Installation Address & Coverage
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
                  
                  {/* Coverage Check Button */}
                  <button
                    type="button"
                    onClick={checkCoverage}
                    disabled={!watchedAddress || !watchedCity || isCheckingCoverage}
                    className="w-full px-4 py-3 bg-accent-blue text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isCheckingCoverage ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Checking Coverage...
                      </>
                    ) : (
                      <>
                        <Search className="w-4 h-4 mr-2" />
                        Check Fibre Coverage
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Coverage Status */}
              {coverageStatus && (
                <div className={`border rounded-lg p-4 ${
                  coverageStatus.available 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-red-50 border-red-200'
                }`}>
                  <div className="flex items-center mb-3">
                    {coverageStatus.available ? (
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                    )}
                    <h4 className={`font-semibold ${
                      coverageStatus.available ? 'text-green-900' : 'text-red-900'
                    }`}>
                      {coverageStatus.available ? 'Fibre Available!' : 'Limited Coverage'}
                    </h4>
                  </div>
                  <div className={`text-sm space-y-1 ${
                    coverageStatus.available ? 'text-green-700' : 'text-red-700'
                  }`}>
                    <p><strong>Network Provider:</strong> {coverageStatus.networkProvider}</p>
                    <p><strong>Installation Time:</strong> {coverageStatus.estimatedInstallTime}</p>
                    <p><strong>Additional Info:</strong> {coverageStatus.additionalInfo}</p>
                  </div>
                </div>
              )}

              {/* Interactive Map */}
              <div>
                <h4 className="text-md font-semibold text-gray-900 mb-3">Coverage Map</h4>
                <div 
                  ref={mapRef}
                  className="w-full h-64 border border-gray-300 rounded-lg relative"
                >
                  {/* Map will be initialized here */}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  * Coverage areas are approximate. Final coverage confirmation will be done during technical assessment.
                </p>
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
                  disabled={isSubmitting || !coverageStatus?.available}
                  className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Fibre Order'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
