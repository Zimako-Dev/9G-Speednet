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
  { name: 'TP Link' },
  { name: 'Ruijie' },
  { name: 'Cudy' },
  { name: 'Grandstream' },
  { name: 'Mikrotik' },
  { name: 'Tarana' },
  { name: 'Intracomm' },
  { name: 'Huawei' },
  { name: 'Ekahau' },
  { name: 'Ericsson' },
  { name: 'Rugged phones' },
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {vendors.map((vendor, index) => (
            <div 
              key={index}
              className="flex items-center justify-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="text-sm font-semibold text-gray-800 text-center">{vendor.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}