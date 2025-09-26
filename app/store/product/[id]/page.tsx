import ProductPageClient from './ProductPageClient';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  images: string[];
  category: string;
  features: string[];
  specifications: { [key: string]: string };
  description: string;
  badge?: string;
  inStock: boolean;
}

// Mock product data - in real app this would come from API
const getProductById = (id: number): Product | null => {
  const products: Product[] = [
    {
      id: 1,
      name: 'AX6000 Pro Gaming Router',
      brand: 'ASUS',
      price: 4299,
      originalPrice: 4999,
      rating: 4.8,
      reviews: 124,
      images: [
        'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=600&fit=crop&crop=center',
      ],
      category: 'Routers',
      features: ['WiFi 6', '6000 Mbps', 'Gaming Mode', '8 Antennas', 'MU-MIMO', 'OFDMA'],
      specifications: {
        'WiFi Standard': 'WiFi 6 (802.11ax)',
        'Speed': 'Up to 6000 Mbps',
        'Frequency': 'Dual Band (2.4GHz + 5GHz)',
        'Antennas': '8 External Antennas',
        'Ports': '4x Gigabit LAN, 1x Gigabit WAN',
        'Processor': 'Quad-core 1.8GHz',
        'Memory': '1GB RAM, 256MB Flash',
        'Dimensions': '300 x 300 x 60mm',
        'Weight': '1.2kg',
      },
      description: 'The ASUS AX6000 Pro Gaming Router delivers exceptional WiFi 6 performance with speeds up to 6000 Mbps. Designed for gamers and power users, it features advanced gaming acceleration, adaptive QoS, and robust security features. Perfect for large homes and demanding applications.',
      badge: 'Best Seller',
      inStock: true,
    },
    {
      id: 2,
      name: 'Mesh WiFi System Pro',
      brand: 'Netgear',
      price: 3599,
      rating: 4.7,
      reviews: 89,
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=600&fit=crop&crop=center',
      ],
      category: 'Extenders',
      features: ['Mesh Network', '5400 Mbps', '3-Pack', 'Easy Setup', 'Smart Connect', 'Beamforming'],
      specifications: {
        'WiFi Standard': 'WiFi 6 (802.11ax)',
        'Speed': 'Up to 5400 Mbps',
        'Coverage': 'Up to 600m²',
        'Devices': 'Up to 100 devices',
        'Ports': '3x Gigabit Ethernet per unit',
        'Setup': 'App-based configuration',
        'Security': 'WPA3 encryption',
        'Dimensions': '230 x 230 x 75mm per unit',
        'Weight': '0.8kg per unit',
      },
      description: 'The Netgear Mesh WiFi System Pro provides seamless whole-home coverage with intelligent mesh technology. Perfect for large homes and offices, it eliminates dead zones and provides consistent high-speed internet throughout your space.',
      badge: '',
      inStock: true,
    },
    {
      id: 3,
      name: 'Enterprise Firewall',
      brand: 'SonicWall',
      price: 8999,
      rating: 4.9,
      reviews: 45,
      images: [
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600&h=600&fit=crop&crop=center',
      ],
      category: 'Security',
      features: ['Advanced Threat Protection', 'VPN Support', 'High Throughput', 'Deep Packet Inspection', 'Intrusion Prevention', 'Content Filtering'],
      specifications: {
        'Firewall Throughput': 'Up to 3.5 Gbps',
        'VPN Throughput': 'Up to 1.2 Gbps',
        'Concurrent Sessions': '500,000',
        'Interfaces': '8x GbE, 2x SFP+',
        'Users': 'Up to 500',
        'Security Services': 'Gateway Anti-Virus, Anti-Spyware, IPS',
        'Management': 'SonicOS Enhanced',
        'Dimensions': '440 x 200 x 44mm',
        'Weight': '3.2kg',
      },
      description: 'The SonicWall Enterprise Firewall provides comprehensive network security for medium to large businesses. With advanced threat protection and high-performance capabilities, it ensures your network stays secure while maintaining optimal performance.',
      badge: 'Professional',
      inStock: true,
    },
    {
      id: 4,
      name: 'WiFi 6E Range Extender',
      brand: 'TP-Link',
      price: 1899,
      originalPrice: 2299,
      rating: 4.6,
      reviews: 156,
      images: [
        'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=600&fit=crop&crop=center',
      ],
      category: 'Extenders',
      features: ['WiFi 6E', '3000 Mbps', 'OneMesh', 'Gigabit Port', 'Smart Signal Indicator', 'Easy Setup'],
      specifications: {
        'WiFi Standard': 'WiFi 6E (802.11ax)',
        'Speed': 'Up to 3000 Mbps',
        'Frequency': 'Tri-band (2.4GHz + 5GHz + 6GHz)',
        'Coverage': 'Up to 150m²',
        'Antennas': '4 Internal Antennas',
        'Ports': '1x Gigabit Ethernet',
        'Compatibility': 'Works with any router',
        'Dimensions': '160 x 80 x 38mm',
        'Weight': '0.4kg',
      },
      description: 'Extend your WiFi coverage with the latest WiFi 6E technology. This range extender eliminates dead zones and provides fast, reliable internet access throughout your home or office.',
      badge: '',
      inStock: true,
    },
    {
      id: 5,
      name: 'UPS Power Backup 1500VA',
      brand: 'APC',
      price: 2799,
      rating: 4.5,
      reviews: 78,
      images: [
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&crop=center',
      ],
      category: 'Power',
      features: ['1500VA/900W', 'LCD Display', '8 Outlets', 'USB Monitoring', 'Surge Protection', 'Battery Backup'],
      specifications: {
        'Output Power': '1500VA / 900W',
        'Battery Type': 'Sealed Lead Acid',
        'Runtime': '10-15 minutes at full load',
        'Outlets': '8x IEC outlets',
        'Input Voltage': '230V ±25%',
        'Transfer Time': '2-4ms',
        'Communication': 'USB, Serial',
        'Dimensions': '395 x 144 x 214mm',
        'Weight': '16.8kg',
      },
      description: 'Protect your critical equipment with reliable battery backup power. Features LCD display for real-time status monitoring and automatic voltage regulation for consistent power quality.',
      badge: '',
      inStock: true,
    },
    {
      id: 6,
      name: 'Gigabit Ethernet Switch',
      brand: 'Cisco',
      price: 1599,
      rating: 4.8,
      reviews: 92,
      images: [
        'https://images.unsplash.com/photo-1629654297299-3965bc8e3e35?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&crop=center',
      ],
      category: 'Accessories',
      features: ['24 Ports', 'Gigabit Speed', 'Managed', 'PoE+', 'VLAN Support', 'QoS'],
      specifications: {
        'Ports': '24x Gigabit Ethernet',
        'PoE Budget': '370W total',
        'Switching Capacity': '56 Gbps',
        'MAC Address Table': '16K entries',
        'VLANs': '4094 VLANs',
        'Management': 'Web-based, CLI, SNMP',
        'Mounting': '19-inch rack mountable',
        'Dimensions': '440 x 257 x 44mm',
        'Weight': '3.9kg',
      },
      description: 'Professional-grade managed switch with Power over Ethernet support. Ideal for business networks requiring advanced features and centralized management.',
      badge: '',
      inStock: false,
    },
    {
      id: 7,
      name: 'WiFi 6 Business Router',
      brand: 'Ubiquiti',
      price: 5499,
      rating: 4.9,
      reviews: 67,
      images: [
        'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=600&fit=crop&crop=center',
      ],
      category: 'Routers',
      features: ['WiFi 6', 'Enterprise Grade', 'Cloud Management', 'High Capacity', 'Advanced Security', 'Scalable'],
      specifications: {
        'WiFi Standard': 'WiFi 6 (802.11ax)',
        'Speed': 'Up to 7200 Mbps',
        'Concurrent Users': '500+',
        'Coverage': 'Up to 300m radius',
        'Ports': '2x SFP+, 8x GbE',
        'Management': 'UniFi Network Controller',
        'Power': 'PoE+ or DC adapter',
        'Dimensions': '220 x 220 x 48mm',
        'Weight': '1.3kg',
      },
      description: 'Enterprise-grade WiFi 6 router designed for high-density environments. Features cloud-based management and advanced security for business and institutional use.',
      badge: 'New',
      inStock: true,
    },
    {
      id: 8,
      name: 'Signal Booster Kit',
      brand: 'WeBoost',
      price: 3299,
      rating: 4.4,
      reviews: 134,
      images: [
        'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&crop=center',
      ],
      category: 'Boosters',
      features: ['Multi-Carrier', '65dB Gain', 'Indoor/Outdoor', 'Easy Install', 'FCC Approved', 'All Networks'],
      specifications: {
        'Frequency Bands': '700/800/850/1700/1900/2100 MHz',
        'Gain': 'Up to 65dB',
        'Coverage': 'Up to 465m²',
        'Carriers': 'All major carriers',
        'Installation': 'DIY friendly',
        'Antennas': 'Outdoor Yagi, Indoor Panel',
        'Amplifier': 'Smart Technology 3.0',
        'Dimensions': 'Various components',
        'Weight': '2.8kg total kit',
      },
      description: 'Boost your cellular signal strength for better call quality and faster data speeds. Works with all carriers and devices, perfect for homes and offices with weak signal areas.',
      badge: '',
      inStock: true,
    },
  ];

  return products.find(p => p.id === id) || null;
};

// Generate static params for all products
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
  ];
}

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const productId = parseInt(resolvedParams.id);
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <a href="/store" className="text-primary-600 hover:text-primary-700">
            ← Back to Store
          </a>
        </div>
      </div>
    );
  }

  return <ProductPageClient product={product} />;
}
