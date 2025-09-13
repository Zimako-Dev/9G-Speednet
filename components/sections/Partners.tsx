'use client';

const partners = [
  {
    name: 'Vumatel',
    logo: '/vuma-logo.png',
  },
  {
    name: 'Octotel',
    logo: '/octotel-logo.png',
  },
  {
    name: 'Openserve',
    logo: '/openserve-logo.png',
  },
  {
    name: 'Metrofibre',
    logo: '/metrofribre-logo.png',
  },
];

const vendors = [
  { name: 'TP Link', logo: '/tplink_Logo.png' },
  { name: 'Ruijie', logo: '/ruijie-logo.png' },
  { name: 'Cudy', logo: '/cudy-logo.png' },
  { name: 'Grandstream', logo: '/grandstream-logo.png' },
  { name: 'Mikrotik', logo: '/mikrotik-Logo.png' },
  { name: 'Tarana', logo: '/tarana-logo.png' },
  { name: 'Intracomm', logo: '/intracomm-logo.png' },
  { name: 'Huawei', logo: '/huawei-logo.png' },
  { name: 'Ekahau', logo: '/ekahau-logo.png' },
  { name: 'Ericsson', logo: '/ericsson-logo.png' },
  { name: 'Rugged phones', logo: '/rugged-phones-logo.png' },
];

export default function Partners() {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Our <span className="text-primary-500">Network Partners</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading network operators to deliver the best connectivity solutions across South Africa.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-16">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 w-full h-32"
            >
              <div className="relative w-full h-16 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  className="object-contain p-2 max-h-12"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Equipment Vendors Section */}
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Equipment <span className="text-primary-500">Vendors</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            We use premium equipment from leading vendors to ensure the highest quality service.
          </p>
        </div>

        {/* Vendors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
          {vendors.map((vendor, index) => (
            <div 
              key={index}
              className="flex items-center justify-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 h-32"
            >
              <div className="relative w-full h-16 flex items-center justify-center">
                <img
                  src={vendor.logo}
                  alt={`${vendor.name} Logo`}
                  className="object-contain p-2 max-h-12"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Multi-Dwelling Units Section */}
        <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
          <div className="text-center mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Multi-Dwelling Units <span className="text-primary-500">(MDUs)</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Specialized connectivity solutions for apartment complexes, residential buildings, and shared housing developments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-50 to-accent-blue/10 rounded-xl p-6 border border-primary-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Apartment Complex Solutions</h3>
              <p className="text-gray-700 mb-4">
                We provide high-speed internet solutions specifically designed for multi-unit residential buildings, 
                ensuring reliable connectivity for all residents.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Dedicated bandwidth allocation per unit</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Centralized management and monitoring</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Scalable infrastructure for growing communities</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-accent-purple/10 rounded-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Shared Housing Developments</h3>
              <p className="text-gray-700 mb-4">
                Our solutions are perfect for student accommodations, retirement villages, and other shared living spaces.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Flexible package options for different needs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Individual billing and account management</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">24/7 technical support for property managers</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button 
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg font-semibold text-base hover:from-primary-600 hover:to-primary-700 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
              onClick={() => window.location.href = '/contact-support'}
            >
              Contact Us for MDU Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}