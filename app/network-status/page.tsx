'use client';

import { useState, useEffect } from 'react';
import { Activity, Wifi, Server, Globe, MapPin, Clock, CheckCircle, AlertTriangle, XCircle, TrendingUp, Users, Zap, Shield, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const networkRegions = [
  {
    name: "Johannesburg",
    status: "operational",
    uptime: "99.98%",
    latency: "12ms",
    users: "45,230",
    lastUpdate: "2 minutes ago",
    coordinates: { lat: -26.2041, lng: 28.0473 }
  },
  {
    name: "Cape Town",
    status: "operational",
    uptime: "99.95%",
    latency: "15ms",
    users: "32,180",
    lastUpdate: "3 minutes ago",
    coordinates: { lat: -33.9249, lng: 18.4241 }
  },
  {
    name: "Durban",
    status: "operational",
    uptime: "99.92%",
    latency: "18ms",
    users: "28,450",
    lastUpdate: "1 minute ago",
    coordinates: { lat: -29.8587, lng: 31.0218 }
  },
  {
    name: "Pretoria",
    status: "maintenance",
    uptime: "99.85%",
    latency: "22ms",
    users: "19,650",
    lastUpdate: "5 minutes ago",
    coordinates: { lat: -25.7479, lng: 28.2293 }
  },
  {
    name: "Port Elizabeth",
    status: "operational",
    uptime: "99.88%",
    latency: "20ms",
    users: "15,320",
    lastUpdate: "4 minutes ago",
    coordinates: { lat: -33.9608, lng: 25.6022 }
  },
  {
    name: "Bloemfontein",
    status: "operational",
    uptime: "99.90%",
    latency: "16ms",
    users: "12,890",
    lastUpdate: "2 minutes ago",
    coordinates: { lat: -29.0852, lng: 26.1596 }
  }
];

const systemServices = [
  {
    name: "Internet Gateway",
    status: "operational",
    description: "Primary internet connectivity and routing",
    uptime: "99.99%",
    icon: Globe
  },
  {
    name: "DNS Servers",
    status: "operational",
    description: "Domain name resolution services",
    uptime: "99.98%",
    icon: Server
  },
  {
    name: "Wi-Fi Infrastructure",
    status: "operational",
    description: "Wireless network access points and controllers",
    uptime: "99.96%",
    icon: Wifi
  },
  {
    name: "Network Security",
    status: "operational",
    description: "Firewall and threat protection systems",
    uptime: "99.97%",
    icon: Shield
  },
  {
    name: "Customer Portal",
    status: "operational",
    description: "Account management and support systems",
    uptime: "99.94%",
    icon: Users
  },
  {
    name: "Speed Test Servers",
    status: "operational",
    description: "Network performance testing infrastructure",
    uptime: "99.92%",
    icon: Zap
  }
];

const recentIncidents = [
  {
    id: 1,
    title: "Scheduled Maintenance - Pretoria Region",
    description: "Routine infrastructure upgrades to improve network performance",
    status: "in-progress",
    severity: "low",
    startTime: "2024-01-15 02:00 SAST",
    estimatedEnd: "2024-01-15 06:00 SAST",
    affectedServices: ["Internet Gateway", "Wi-Fi Infrastructure"],
    updates: [
      {
        time: "04:30 SAST",
        message: "Maintenance proceeding as scheduled. 50% complete."
      },
      {
        time: "02:00 SAST",
        message: "Maintenance window started. Some users may experience brief interruptions."
      }
    ]
  },
  {
    id: 2,
    title: "DNS Resolution Issues - Resolved",
    description: "Brief DNS lookup delays affecting some customers",
    status: "resolved",
    severity: "medium",
    startTime: "2024-01-14 14:30 SAST",
    endTime: "2024-01-14 15:15 SAST",
    affectedServices: ["DNS Servers"],
    updates: [
      {
        time: "15:15 SAST",
        message: "Issue fully resolved. All DNS servers operating normally."
      },
      {
        time: "14:45 SAST",
        message: "Investigating reports of slow DNS resolution."
      }
    ]
  }
];

const performanceMetrics = [
  {
    name: "Overall Network Uptime",
    value: "99.95%",
    change: "+0.02%",
    trend: "up",
    period: "Last 30 days"
  },
  {
    name: "Average Response Time",
    value: "16ms",
    change: "-2ms",
    trend: "up",
    period: "Last 24 hours"
  },
  {
    name: "Active Connections",
    value: "153,720",
    change: "+2,450",
    trend: "up",
    period: "Current"
  },
  {
    name: "Data Throughput",
    value: "847 Gbps",
    change: "+125 Gbps",
    trend: "up",
    period: "Peak usage"
  }
];

export default function NetworkStatus() {
  const [selectedRegion, setSelectedRegion] = useState(0);
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [autoRefresh, setAutoRefresh] = useState(true);

  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(() => {
        setLastRefresh(new Date());
      }, 30000); // Refresh every 30 seconds

      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-600 bg-green-100';
      case 'maintenance': return 'text-yellow-600 bg-yellow-100';
      case 'issues': return 'text-orange-600 bg-orange-100';
      case 'outage': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return CheckCircle;
      case 'maintenance': return RefreshCw;
      case 'issues': return AlertTriangle;
      case 'outage': return XCircle;
      default: return Activity;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'text-blue-600 bg-blue-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-16 px-6 bg-gradient-to-br from-primary-500 via-accent-purple to-accent-blue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #00FF00 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #00BFFF 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-5">
                <Activity className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">NETWORK STATUS</span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold mb-5 leading-tight">
                Real-Time
                <br />
                <span className="text-green-300">Network</span>
                <br />
                Monitoring
              </h1>
              
              <p className="text-base text-white/90 mb-6 leading-relaxed">
                Monitor the health and performance of our network infrastructure in real-time. 
                Stay informed about service status, maintenance windows, and system performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button 
                  className="bg-green-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-300 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  onClick={() => {
                    const statusSection = document.getElementById('system-status');
                    if (statusSection) {
                      statusSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  View Status
                  <Activity className="ml-2 w-4 h-4" />
                </button>
                <button 
                  onClick={() => setLastRefresh(new Date())}
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center justify-center"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh Data
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold">99.95%</div>
                  <div className="text-sm text-white/80">Network Uptime</div>
                </div>
                <div>
                  <div className="text-xl font-bold">16ms</div>
                  <div className="text-sm text-white/80">Avg Response</div>
                </div>
                <div>
                  <div className="text-xl font-bold">6</div>
                  <div className="text-sm text-white/80">Regions</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold mb-2">Overall System Status</h3>
                    <p className="text-sm text-white/80">All systems operational</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm font-bold text-green-400">HEALTHY</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {systemServices.slice(0, 4).map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <IconComponent className="w-4 h-4 mr-3" />
                          <span className="text-sm">{service.name}</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          <span className="text-xs text-white/80">{service.uptime}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-6 text-center">
                  <div className="text-xs text-white/70 mb-2">
                    Last updated: {lastRefresh.toLocaleTimeString()}
                  </div>
                  <div className="flex items-center justify-center">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={autoRefresh}
                        onChange={(e) => setAutoRefresh(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`relative w-10 h-5 rounded-full transition-colors ${
                        autoRefresh ? 'bg-green-500' : 'bg-white/20'
                      }`}>
                        <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                          autoRefresh ? 'translate-x-5' : 'translate-x-0'
                        }`}></div>
                      </div>
                      <span className="ml-2 text-xs text-white/80">Auto-refresh</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Performance <span className="text-primary-500">Metrics</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real-time network performance indicators showing uptime, response times, 
              and usage statistics across our infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-600">{metric.name}</h3>
                  <TrendingUp className={`w-4 h-4 ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
                </div>
                <div className="mb-2">
                  <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                  <div className={`text-sm ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change} from previous period
                  </div>
                </div>
                <div className="text-xs text-gray-500">{metric.period}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Status */}
      <section id="system-status" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              System <span className="text-primary-500">Services</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Monitor the status of all critical network services and infrastructure components 
              that power your internet connection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemServices.map((service, index) => {
              const IconComponent = service.icon;
              const StatusIcon = getStatusIcon(service.status);
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary-500 w-12 h-12 rounded-xl p-3">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center">
                      <StatusIcon className="w-4 h-4 text-green-600 mr-2" />
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(service.status)}`}>
                        {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Uptime</span>
                    <span className="font-semibold text-green-600">{service.uptime}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regional Status */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Regional <span className="text-primary-500">Coverage</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Network status and performance metrics for each of our service regions 
              across South Africa.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Service Regions</h3>
              <div className="space-y-4">
                {networkRegions.map((region, index) => {
                  const StatusIcon = getStatusIcon(region.status);
                  return (
                    <div 
                      key={index}
                      onClick={() => setSelectedRegion(index)}
                      className={`cursor-pointer rounded-xl p-4 transition-all duration-300 ${
                        selectedRegion === index 
                          ? 'bg-primary-50 border-2 border-primary-500' 
                          : 'bg-white border border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <StatusIcon className={`w-5 h-5 mr-3 ${
                            region.status === 'operational' ? 'text-green-600' : 'text-yellow-600'
                          }`} />
                          <div>
                            <h4 className="font-semibold text-gray-900">{region.name}</h4>
                            <p className="text-sm text-gray-600">{region.users} active users</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-900">{region.uptime}</div>
                          <div className="text-xs text-gray-500">{region.latency} latency</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {networkRegions[selectedRegion].name} Details
              </h3>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{networkRegions[selectedRegion].name}</h4>
                    <p className="text-sm text-gray-600">Regional Network Hub</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(networkRegions[selectedRegion].status)}`}>
                    {networkRegions[selectedRegion].status.charAt(0).toUpperCase() + networkRegions[selectedRegion].status.slice(1)}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{networkRegions[selectedRegion].uptime}</div>
                    <div className="text-sm text-gray-600">Uptime (30 days)</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{networkRegions[selectedRegion].latency}</div>
                    <div className="text-sm text-gray-600">Average Latency</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{networkRegions[selectedRegion].users}</div>
                    <div className="text-sm text-gray-600">Active Users</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Monitoring</div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    Last updated: {networkRegions[selectedRegion].lastUpdate}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Recent <span className="text-primary-500">Incidents</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay informed about recent network incidents, maintenance windows, 
              and their current resolution status.
            </p>
          </div>

          <div className="space-y-6">
            {recentIncidents.map((incident) => (
              <div key={incident.id} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{incident.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{incident.description}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                      {incident.severity.toUpperCase()}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      incident.status === 'resolved' ? 'text-green-600 bg-green-100' :
                      incident.status === 'in-progress' ? 'text-blue-600 bg-blue-100' :
                      'text-gray-600 bg-gray-100'
                    }`}>
                      {incident.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Started</div>
                    <div className="font-medium">{incident.startTime}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">
                      {incident.status === 'resolved' ? 'Resolved' : 'Estimated Resolution'}
                    </div>
                    <div className="font-medium">{incident.endTime || incident.estimatedEnd}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-2">Affected Services</div>
                  <div className="flex flex-wrap gap-2">
                    {incident.affectedServices.map((service, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-600 mb-3">Updates</div>
                  <div className="space-y-2">
                    {incident.updates.map((update, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">
                          {update.time}
                        </div>
                        <p className="text-gray-700 text-sm">{update.message}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary-500 to-accent-purple text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-5">
            Stay Updated on Network Status
          </h2>
          <p className="text-base text-white/90 mb-8 leading-relaxed">
            Subscribe to receive real-time notifications about network status changes, 
            planned maintenance, and service updates directly to your inbox or phone.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold mb-4">Email Notifications</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-white/20 border border-white/30 focus:border-white focus:outline-none text-white placeholder-white/70 text-sm"
                />
                <button className="bg-white text-primary-600 px-4 py-2 rounded-r-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold mb-4">SMS Alerts</h3>
              <div className="flex">
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-white/20 border border-white/30 focus:border-white focus:outline-none text-white placeholder-white/70 text-sm"
                />
                <button className="bg-white text-primary-600 px-4 py-2 rounded-r-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Enable
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/technical-support" className="bg-green-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-300 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
              Report an Issue
            </Link>
            <Link href="/" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 inline-flex items-center justify-center">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}