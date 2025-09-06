'use client';

import { useState } from 'react';
import { Network, Shield, Zap, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, Server, Globe, Router, Database, Cloud, Lock } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const solutions = [
  {
    name: "Network Infrastructure",
    speed: "Multi-Gigabit",
    price: "Custom",
    features: ["Redundant fiber connections", "Load balancing", "Failover protection", "Custom topology design", "24/7 monitoring", "On-site maintenance"],
    popular: false
  },
  {
    name: "Managed Services",
    speed: "Fully Managed",
    price: "Custom",
    features: ["Complete network management", "Proactive monitoring", "Security management", "Performance optimization", "Dedicated support team", "Regular health reports"],
    popular: true
  },
  {
    name: "Hybrid Cloud",
    speed: "Unlimited Scale",
    price: "Custom",
    features: ["Private cloud integration", "Public cloud connectivity", "Data center colocation", "Disaster recovery", "Global reach", "Compliance support"],
    popular: false
  }
];

const capabilities = [
  {
    icon: Network,
    title: "Advanced Networking",
    description: "Enterprise-grade network architecture with redundant connections, advanced routing, and traffic optimization.",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Multi-layered security infrastructure with threat detection, prevention, and 24/7 security operations center.",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless integration with major cloud providers including AWS, Azure, and Google Cloud Platform.",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Comprehensive data solutions including backup, disaster recovery, and high-availability storage systems.",
    color: "from-orange-400 to-red-500"
  }
];

const industries = [
  {
    icon: Server,
    title: "Financial Services",
    description: "Ultra-low latency connections for trading platforms, secure data transmission, and regulatory compliance."
  },
  {
    icon: Globe,
    title: "Healthcare",
    description: "HIPAA-compliant networks for secure patient data transmission and telemedicine applications."
  },
  {
    icon: Router,
    title: "Manufacturing",
    description: "Industrial IoT connectivity, real-time monitoring, and automated systems integration."
  },
  {
    icon: Lock,
    title: "Government",
    description: "Secure, classified-level networks with advanced encryption and compliance certifications."
  }
];

export default function EnterpriseNetworking() {
  const [selectedSolution, setSelectedSolution] = useState(1);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-16 px-6 bg-gradient-to-br from-gray-900 via-primary-800 to-accent-purple text-white overflow-hidden -mt-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #00FFFF 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #8B5CF6 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto pt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-5">
                <Network className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">ENTERPRISE NETWORKING</span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold mb-5 leading-tight">
                Mission-Critical
                <br />
                <span className="text-cyan-300">Network Infrastructure</span>
                <br />
                for Enterprise
              </h1>
              
              <p className="text-base text-white/90 mb-6 leading-relaxed">
                Deploy enterprise-grade networking solutions with redundant connections, 
                advanced security, and 24/7 managed services. Built for organizations that 
                can't afford downtime.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button 
                  className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  onClick={() => {
                    const solutionsSection = document.getElementById('solutions');
                    if (solutionsSection) {
                      solutionsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Request Assessment
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold">99.99%</div>
                  <div className="text-sm text-white/80">Network Uptime</div>
                </div>
                <div>
                  <div className="text-xl font-bold">{'< 1ms'}</div>
                  <div className="text-sm text-white/80">Ultra-Low Latency</div>
                </div>
                <div>
                  <div className="text-xl font-bold">100+</div>
                  <div className="text-sm text-white/80">Enterprise Clients</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold mb-2">Network Operations Center</h3>
                  <p className="text-sm text-white/80">Live enterprise monitoring</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Primary Link</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-bold text-green-400">Active</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Backup Link</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                      <span className="text-sm font-bold text-blue-400">Standby</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Security Status</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-bold text-green-400">Protected</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Load Balancing</span>
                    <span className="text-sm font-bold">Optimized</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-cyan-400 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div className="text-center mt-6">
                  <div className="inline-flex items-center bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="font-medium text-xs">All Systems Operational</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Enterprise <span className="text-primary-500">Capabilities</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive networking solutions designed for large-scale enterprises with 
              mission-critical requirements and zero-tolerance for downtime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${capability.color} p-3 mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{capability.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Specialized <span className="text-primary-500">Industry Solutions</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tailored networking solutions that meet the unique requirements and 
              compliance standards of highly regulated industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-r from-gray-800 to-primary-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{industry.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Enterprise <span className="text-primary-500">Solutions</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive enterprise networking solutions with custom design, 
              implementation, and ongoing management. All solutions include SLA guarantees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className={`relative rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-105 ${
                  solution.popular 
                    ? 'border-primary-500 bg-primary-50 shadow-lg' 
                    : 'border-gray-200 bg-white hover:border-primary-300'
                }`}
              >
                {solution.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                      Most Comprehensive
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.name}</h3>
                  <div className="text-3xl font-bold text-primary-600 mb-1">{solution.price}</div>
                  <div className="text-sm text-gray-500">pricing</div>
                  <div className="text-lg font-semibold text-gray-700 mt-2">{solution.speed}</div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    solution.popular
                      ? 'bg-primary-500 text-white hover:bg-primary-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-primary-500 hover:text-white'
                  }`}
                >
                  Request Consultation
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Why Choose Our <span className="text-primary-500">Enterprise Solutions</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">99.99% SLA Uptime</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Industry-leading uptime guarantees with financial penalties for non-compliance.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">24/7 NOC Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dedicated Network Operations Center with expert engineers monitoring your infrastructure.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Ultra-Low Latency</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sub-millisecond latency for time-sensitive applications and high-frequency trading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-gray-900 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-5">
            Ready to Transform Your Enterprise Network?
          </h2>
          <p className="text-base text-white/90 mb-8 leading-relaxed">
            Let our enterprise networking experts design a custom solution for your organization. 
            Get a comprehensive network assessment and tailored proposal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">(+27) 68 618 5224 - Enterprise Solutions</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm">enterprise@9gspeed.co.za</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300 hover:scale-105">
              Schedule Assessment
            </button>
            <Link href="/" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 inline-flex items-center justify-center">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}