'use client';

import { useEffect, useState } from 'react';
import { Signal, Shield, CheckCircle } from 'lucide-react';

const DEFAULT_NETWORK = 'Let 9G Recommend';

const networkProviders = [
  {
    name: 'Vodacom',
    coverage: '98%',
    technology: '4G/LTE Advanced',
    speeds: 'Up to 100 Mbps',
    color: 'from-red-500 to-red-600',
    features: [
      'Excellent urban coverage',
      'Strong rural presence',
      'Low latency performance',
      'Reliable data speeds',
    ],
  },
  {
    name: 'MTN',
    coverage: '97%',
    technology: '4G/LTE Advanced',
    speeds: 'Up to 100 Mbps',
    color: 'from-yellow-500 to-yellow-600',
    features: [
      'Wide national coverage',
      'Premium network quality',
      'Advanced technology',
      'Business-grade reliability',
    ],
  },
  {
    name: 'Cell C',
    coverage: '95%',
    technology: '4G/LTE',
    speeds: 'Up to 75 Mbps',
    color: 'from-blue-500 to-blue-600',
    features: [
      'Competitive pricing',
      'Growing coverage area',
      'Reliable connections',
      'Good urban performance',
    ],
  },
  {
    name: 'Telkom',
    coverage: '93%',
    technology: '4G/LTE',
    speeds: 'Up to 75 Mbps',
    color: 'from-purple-500 to-purple-600',
    features: [
      'Integrated solutions',
      'Expanding 4G network',
      'Competitive data rates',
      'Business focus',
    ],
  },
];

export default function NetworkProviders() {
  const [selectedProvider, setSelectedProvider] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setSelectedProvider((prev) => (prev + 1) % networkProviders.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const openPackagesSection = () => {
    const packagesSection = document.getElementById('lte-packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNetworkSelect = (providerName: string) => {
    window.dispatchEvent(
      new CustomEvent('openPackageModalWithNetwork', {
        detail: { network: providerName || DEFAULT_NETWORK },
      })
    );
    openPackagesSection();
  };

  return (
    <section id="network-providers" className="py-16 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Network <span className="text-primary-500">Providers</span>
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We partner with South Africa's leading mobile network operators to provide you with the best coverage and performance. Choose your preferred network or let us recommend the best option for your location.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-xl font-bold text-gray-900 mb-5">Available Networks</h3>

            <div className="space-y-3">
              {networkProviders.map((provider, index) => (
                <button
                  key={provider.name}
                  type="button"
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-300 ${
                    selectedProvider === index
                      ? 'border-primary-500 bg-primary-50 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-md'
                  }`}
                  onClick={() => setSelectedProvider(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${provider.color} flex items-center justify-center mr-3`}>
                        <Signal className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-900">{provider.name}</h4>
                        <p className="text-gray-600 text-sm">{provider.coverage} National Coverage</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-base font-semibold text-primary-500">{provider.speeds}</div>
                      <div className="text-xs text-gray-500">{provider.technology}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6 p-4 bg-white rounded-2xl border border-gray-200">
              <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                <Shield className="w-3 h-3 text-accent-green mr-1" />
                Multi-Network Advantage
              </h4>
              <ul className="space-y-1 text-gray-600 text-xs">
                <li className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-accent-green mr-1" />
                  <span>Automatic best network selection</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-accent-green mr-1" />
                  <span>Failover to backup networks</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-accent-green mr-1" />
                  <span>Optimized for your location</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6">
              <div className="text-center mb-5">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${networkProviders[selectedProvider].color} flex items-center justify-center mx-auto mb-2`}>
                  <Signal className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{networkProviders[selectedProvider].name}</h3>
                <p className="text-gray-600 text-xs">Network Details & Coverage</p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-primary-500 mb-0.5">{networkProviders[selectedProvider].coverage}</div>
                  <p className="text-gray-600 text-xs">Coverage</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-primary-500 mb-0.5">{networkProviders[selectedProvider].speeds}</div>
                  <p className="text-gray-600 text-xs">Network Speed</p>
                </div>
              </div>

              <div className="mb-5">
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Technology</h4>
                <div className="bg-gradient-to-r from-primary-50 to-accent-blue/10 rounded-lg p-2">
                  <p className="text-primary-600 font-semibold text-xs">{networkProviders[selectedProvider].technology}</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features</h4>
                <ul className="space-y-1">
                  {networkProviders[selectedProvider].features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-accent-green mr-1" />
                      <span className="text-gray-700 text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <button
                  className="w-full bg-primary-500 text-white py-2 rounded-lg font-semibold text-xs hover:bg-primary-600 transition-all duration-300 hover:shadow-md"
                  onClick={() => handleNetworkSelect(networkProviders[selectedProvider].name)}
                >
                  Select Network
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl p-4 border border-gray-200">
          <h3 className="text-base font-bold text-gray-900 mb-3 text-center">Network Coverage Map</h3>
          <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Signal className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500 text-xs">Interactive coverage map coming soon</p>
              <p className="text-xs text-gray-400">Contact us for detailed coverage information in your area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}