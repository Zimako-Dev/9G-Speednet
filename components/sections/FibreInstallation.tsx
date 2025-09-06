'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, MapPin, Clock, Users, Phone, AlertCircle } from 'lucide-react';

const installationSteps = [
  {
    step: 1,
    title: "Coverage Check",
    description: "We verify fibre availability in your area and provide a detailed coverage map.",
    duration: "Instant",
    icon: MapPin
  },
  {
    step: 2,
    title: "Site Survey",
    description: "Our technician visits to assess the installation route and requirements.",
    duration: "1-2 days",
    icon: Users
  },
  {
    step: 3,
    title: "Installation Booking",
    description: "Schedule your installation at a convenient time with our certified team.",
    duration: "2-5 days",
    icon: Clock
  },
  {
    step: 4,
    title: "Fibre Installation",
    description: "Professional installation of fibre cable and network equipment.",
    duration: "4-6 hours",
    icon: CheckCircle
  }
];

const coverageAreas = [
  { area: "Johannesburg", status: "Available", coverage: "95%" },
  { area: "Cape Town", status: "Available", coverage: "92%" },
  { area: "Durban", status: "Available", coverage: "88%" },
  { area: "Pretoria", status: "Available", coverage: "90%" },
  { area: "Port Elizabeth", status: "Expanding", coverage: "75%" },
  { area: "Bloemfontein", status: "Expanding", coverage: "65%" },
  { area: "East London", status: "Coming Soon", coverage: "45%" },
  { area: "Polokwane", status: "Coming Soon", coverage: "35%" }
];

export default function FibreInstallation() {
  const [selectedStep, setSelectedStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Auto-progress through steps
    const interval = setInterval(() => {
      setSelectedStep((prev) => (prev + 1) % installationSteps.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="fibre-installation" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Installation <span className="text-primary-500">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our streamlined installation process ensures you get connected quickly and professionally. 
            From coverage check to activation, we handle everything.
          </p>
        </div>

        {/* Installation Steps */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h3>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Steps Timeline */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-6">
                {installationSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div
                      key={step.step}
                      className={`flex items-start p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                        selectedStep === index
                          ? 'bg-primary-50 border-2 border-primary-500 shadow-lg'
                          : 'bg-white border-2 border-gray-200 hover:border-primary-300'
                      }`}
                      onClick={() => setSelectedStep(index)}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                        selectedStep === index ? 'bg-primary-500' : 'bg-gray-100'
                      }`}>
                        <IconComponent className={`w-6 h-6 ${
                          selectedStep === index ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-bold text-gray-900">
                            Step {step.step}: {step.title}
                          </h4>
                          <span className="text-sm text-primary-600 font-semibold">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step Details */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-purple rounded-3xl flex items-center justify-center mx-auto mb-4">
                    {(() => {
                      const IconComponent = installationSteps[selectedStep].icon;
                      return <IconComponent className="w-10 h-10 text-white" />;
                    })()}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {installationSteps[selectedStep].title}
                  </h3>
                  <p className="text-primary-600 font-semibold">
                    Duration: {installationSteps[selectedStep].duration}
                  </p>
                </div>

                <p className="text-gray-600 text-center mb-8 text-lg leading-relaxed">
                  {installationSteps[selectedStep].description}
                </p>

                {/* Additional Details */}
                <div className="space-y-4">
                  {selectedStep === 0 && (
                    <div className="bg-gradient-to-r from-accent-green/10 to-accent-blue/10 rounded-xl p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">What We Check:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Fibre network availability</li>
                        <li>• Distance from nearest node</li>
                        <li>• Building access permissions</li>
                        <li>• Technical feasibility</li>
                      </ul>
                    </div>
                  )}
                  
                  {selectedStep === 1 && (
                    <div className="bg-gradient-to-r from-accent-green/10 to-accent-blue/10 rounded-xl p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Survey Includes:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Route planning and measurement</li>
                        <li>• Equipment placement assessment</li>
                        <li>• Building permission requirements</li>
                        <li>• Installation cost estimation</li>
                      </ul>
                    </div>
                  )}
                  
                  {selectedStep === 2 && (
                    <div className="bg-gradient-to-r from-accent-green/10 to-accent-blue/10 rounded-xl p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Booking Options:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Flexible scheduling options</li>
                        <li>• Weekend installation available</li>
                        <li>• SMS and email confirmations</li>
                        <li>• Rescheduling if needed</li>
                      </ul>
                    </div>
                  )}
                  
                  {selectedStep === 3 && (
                    <div className="bg-gradient-to-r from-accent-green/10 to-accent-blue/10 rounded-xl p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Installation Includes:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Fibre cable installation</li>
                        <li>• ONT and router setup</li>
                        <li>• WiFi configuration</li>
                        <li>• Speed testing and optimization</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Progress Indicator */}
                <div className="flex justify-center mt-6">
                  <div className="flex space-x-2">
                    {installationSteps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === selectedStep ? 'bg-primary-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Areas */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Coverage <span className="text-primary-500">Areas</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {coverageAreas.map((area, index) => (
              <div key={area.area} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-900">{area.area}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    area.status === 'Available' 
                      ? 'bg-accent-green/10 text-accent-green'
                      : area.status === 'Expanding'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {area.status}
                  </span>
                </div>
                
                <div className="mb-3">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Coverage</span>
                    <span>{area.coverage}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-accent-blue h-2 rounded-full transition-all duration-1000"
                      style={{ width: area.coverage }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-primary-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Check Your Address
            </button>
          </div>
        </div>

        {/* Contact for Installation */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center">
          <Phone className="w-12 h-12 text-primary-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Connected?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our installation team is ready to get you connected with lightning-fast fibre internet. 
            Contact us today to start the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Schedule Installation
            </button>
            <button className="bg-gray-100 text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 border border-gray-200 hover:border-primary-300">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}