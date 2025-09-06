'use client';

import { useState } from 'react';
import { AlertTriangle, Wifi, Router, Monitor, Smartphone, Settings, Zap, Shield, CheckCircle, ArrowRight, Search, RefreshCw, Phone, Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const troubleshootingCategories = [
  {
    icon: Wifi,
    title: "Connection Issues",
    description: "Wi-Fi connectivity problems, disconnections, and network access issues",
    color: "from-blue-500 to-cyan-600",
    issues: [
      {
        problem: "Can't connect to Wi-Fi network",
        symptoms: ["Network not showing up", "Wrong password error", "Connection timeout"],
        solutions: [
          "Restart your router by unplugging for 30 seconds",
          "Check if network name (SSID) is being broadcast",
          "Verify Wi-Fi password is correct (case-sensitive)",
          "Move closer to the router to improve signal strength",
          "Forget and re-add the network on your device"
        ],
        difficulty: "Easy"
      },
      {
        problem: "Connected but no internet access",
        symptoms: ["Wi-Fi connected but no browsing", "Limited connectivity message", "Pages won't load"],
        solutions: [
          "Check all cable connections to your modem",
          "Restart both modem and router in sequence",
          "Run network troubleshooter on your device",
          "Check for service outages in your area",
          "Contact ISP to verify account status"
        ],
        difficulty: "Medium"
      },
      {
        problem: "Frequent disconnections",
        symptoms: ["Wi-Fi keeps dropping", "Need to reconnect often", "Unstable connection"],
        solutions: [
          "Update network drivers on your device",
          "Change Wi-Fi channel in router settings",
          "Reduce interference from other devices",
          "Check router placement and ventilation",
          "Update router firmware to latest version"
        ],
        difficulty: "Medium"
      }
    ]
  },
  {
    icon: Zap,
    title: "Speed Issues",
    description: "Slow internet speeds, buffering, and performance problems",
    color: "from-orange-500 to-red-600",
    issues: [
      {
        problem: "Slow internet speeds",
        symptoms: ["Pages load slowly", "Video buffering", "Downloads take too long"],
        solutions: [
          "Run speed test to measure actual speeds",
          "Close unnecessary applications and tabs",
          "Check for background updates or downloads",
          "Move closer to router or use ethernet cable",
          "Restart router and clear device cache"
        ],
        difficulty: "Easy"
      },
      {
        problem: "Streaming quality issues",
        symptoms: ["Video buffering frequently", "Poor video quality", "Audio cutting out"],
        solutions: [
          "Test connection speed during streaming",
          "Close other devices using bandwidth",
          "Lower video quality settings temporarily",
          "Use ethernet connection for streaming device",
          "Check for network congestion during peak hours"
        ],
        difficulty: "Easy"
      },
      {
        problem: "Gaming lag and high ping",
        symptoms: ["High latency in games", "Lag spikes", "Connection timeouts"],
        solutions: [
          "Use wired connection for gaming",
          "Enable gaming mode on router if available",
          "Close bandwidth-heavy applications",
          "Check for background downloads",
          "Consider upgrading to a higher speed plan"
        ],
        difficulty: "Medium"
      }
    ]
  },
  {
    icon: Router,
    title: "Hardware Problems",
    description: "Router malfunctions, device connectivity, and equipment issues",
    color: "from-purple-500 to-pink-600",
    issues: [
      {
        problem: "Router not powering on",
        symptoms: ["No lights on router", "Device completely dead", "Power button not responding"],
        solutions: [
          "Check power cable is securely connected",
          "Try a different power outlet",
          "Verify power adapter is working",
          "Look for damaged cables or adapters",
          "Contact support for hardware replacement"
        ],
        difficulty: "Easy"
      },
      {
        problem: "Router lights showing errors",
        symptoms: ["Red or orange status lights", "Blinking error patterns", "No internet light"],
        solutions: [
          "Check router manual for light meanings",
          "Verify all cable connections are secure",
          "Restart router and wait for full boot",
          "Check if internet service is active",
          "Contact ISP if modem lights show errors"
        ],
        difficulty: "Medium"
      },
      {
        problem: "Overheating issues",
        symptoms: ["Router feels very hot", "Frequent crashes", "Performance degradation"],
        solutions: [
          "Ensure router has proper ventilation",
          "Clean dust from router vents",
          "Move router away from heat sources",
          "Check if router is in direct sunlight",
          "Consider router placement in cooler area"
        ],
        difficulty: "Easy"
      }
    ]
  },
  {
    icon: Shield,
    title: "Security Concerns",
    description: "Network security, unauthorized access, and privacy protection",
    color: "from-green-500 to-emerald-600",
    issues: [
      {
        problem: "Suspicious network activity",
        symptoms: ["Unknown devices connected", "Slow speeds with few devices", "Unusual data usage"],
        solutions: [
          "Check connected devices in router admin panel",
          "Change Wi-Fi password immediately",
          "Enable WPA3 security if available",
          "Set up guest network for visitors",
          "Enable MAC address filtering"
        ],
        difficulty: "Medium"
      },
      {
        problem: "Forgotten admin password",
        symptoms: ["Can't access router settings", "Lost admin credentials", "Factory reset needed"],
        solutions: [
          "Try default passwords (often on router label)",
          "Use password reset feature if available",
          "Perform factory reset as last resort",
          "Set up new admin password after reset",
          "Write down new password in secure location"
        ],
        difficulty: "Hard"
      }
    ]
  }
];

const quickFixes = [
  {
    title: "Router Restart",
    description: "Fixes 80% of connection issues",
    steps: ["Unplug router for 30 seconds", "Plug back in and wait 2 minutes", "Test connection"],
    icon: RefreshCw,
    time: "2 minutes"
  },
  {
    title: "Speed Test",
    description: "Check your actual internet speed",
    steps: ["Close all apps and tabs", "Visit speedtest.net", "Run test multiple times"],
    icon: Zap,
    time: "3 minutes"
  },
  {
    title: "Network Reset",
    description: "Clear network cache and reconnect",
    steps: ["Forget Wi-Fi network", "Restart device", "Reconnect with password"],
    icon: Wifi,
    time: "5 minutes"
  },
  {
    title: "Check Cables",
    description: "Ensure all connections are secure",
    steps: ["Check power cable", "Verify ethernet connections", "Look for damage"],
    icon: Settings,
    time: "2 minutes"
  }
];

const diagnosticTools = [
  {
    name: "Network Speed Test",
    description: "Test your connection speed and latency",
    url: "https://speedtest.net",
    category: "Speed"
  },
  {
    name: "Router Admin Panel",
    description: "Access router settings and diagnostics",
    url: "192.168.1.1",
    category: "Configuration"
  },
  {
    name: "Windows Network Troubleshooter",
    description: "Built-in Windows network diagnostic tool",
    url: "ms-settings:network-troubleshooter",
    category: "Windows"
  },
  {
    name: "Device Network Settings",
    description: "Check network adapter and connection status",
    url: "#",
    category: "Device"
  }
];

export default function Troubleshooting() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIssue, setExpandedIssue] = useState<number | null>(null);

  const filteredIssues = troubleshootingCategories[selectedCategory].issues.filter(issue =>
    issue.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
    issue.symptoms.some(symptom => symptom.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-16 px-6 bg-gradient-to-br from-primary-500 via-accent-purple to-accent-blue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #FF4444 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #FFD700 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-5">
                <AlertTriangle className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">TROUBLESHOOTING</span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold mb-5 leading-tight">
                Fix Your Internet
                <br />
                <span className="text-red-300">Issues</span>
                <br />
                Quickly
              </h1>
              
              <p className="text-base text-white/90 mb-6 leading-relaxed">
                Experiencing connection problems? Our comprehensive troubleshooting guide will help you 
                diagnose and resolve common internet issues step by step.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button 
                  className="bg-red-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-red-300 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  onClick={() => {
                    const quickFixSection = document.getElementById('quick-fixes');
                    if (quickFixSection) {
                      quickFixSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Quick Fixes
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  Diagnostic Tools
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold">4</div>
                  <div className="text-sm text-white/80">Problem Categories</div>
                </div>
                <div>
                  <div className="text-xl font-bold">50+</div>
                  <div className="text-sm text-white/80">Common Issues</div>
                </div>
                <div>
                  <div className="text-xl font-bold">24/7</div>
                  <div className="text-sm text-white/80">Expert Support</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold mb-2">System Status</h3>
                  <p className="text-sm text-white/80">Current network health check</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Network Connection</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-bold text-green-400">Stable</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Internet Speed</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-bold text-green-400">Normal</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Router Status</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-bold text-green-400">Online</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Service Status</span>
                    <span className="text-sm font-bold">All Services Operational</span>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Run Full Diagnostic
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Fixes */}
      <section id="quick-fixes" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Quick <span className="text-primary-500">Fixes</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Try these simple solutions first - they resolve most common internet issues 
              within minutes and don't require technical expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickFixes.map((fix, index) => {
              const IconComponent = fix.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                  <div className="bg-primary-500 w-12 h-12 rounded-xl p-3 mb-5 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{fix.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{fix.description}</p>
                  <div className="text-xs text-primary-600 font-medium mb-3">{fix.time}</div>
                  <ol className="space-y-2">
                    {fix.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start text-sm text-gray-700">
                        <span className="bg-primary-100 text-primary-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5 flex-shrink-0">
                          {stepIndex + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Problem Categories */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Browse by <span className="text-primary-500">Problem Type</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Select your issue category to find specific solutions and step-by-step 
              troubleshooting guides for your problem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {troubleshootingCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={index}
                  onClick={() => setSelectedCategory(index)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                    selectedCategory === index 
                      ? 'bg-primary-500 text-white shadow-lg' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl p-3 mb-5 ${
                    selectedCategory === index 
                      ? 'bg-white/20' 
                      : `bg-gradient-to-r ${category.color}`
                  }`}>
                    <IconComponent className={`w-6 h-6 ${
                      selectedCategory === index ? 'text-white' : 'text-white'
                    }`} />
                  </div>
                  <h3 className={`text-lg font-bold mb-3 ${
                    selectedCategory === index ? 'text-white' : 'text-gray-900'
                  }`}>
                    {category.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    selectedCategory === index ? 'text-white/90' : 'text-gray-600'
                  }`}>
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for specific problems or symptoms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Solutions */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              {troubleshootingCategories[selectedCategory].title} <span className="text-primary-500">Solutions</span>
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Detailed troubleshooting steps for common {troubleshootingCategories[selectedCategory].title.toLowerCase()} problems.
            </p>
          </div>

          <div className="space-y-6">
            {filteredIssues.map((issue, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedIssue(expandedIssue === index ? null : index)}
                >
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{issue.problem}</h3>
                    <div className="flex flex-wrap gap-2">
                      {issue.symptoms.slice(0, 2).map((symptom, symptomIndex) => (
                        <span key={symptomIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {symptom}
                        </span>
                      ))}
                      {issue.symptoms.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          +{issue.symptoms.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className={`px-2 py-1 rounded text-xs font-medium mr-3 ${
                      issue.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                      issue.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {issue.difficulty}
                    </span>
                    <ArrowRight className={`w-5 h-5 text-gray-400 transition-transform ${
                      expandedIssue === index ? 'rotate-90' : ''
                    }`} />
                  </div>
                </button>
                
                {expandedIssue === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Symptoms:</h4>
                      <ul className="space-y-2 mb-6">
                        {issue.symptoms.map((symptom, symptomIndex) => (
                          <li key={symptomIndex} className="flex items-center text-sm text-gray-600">
                            <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                            {symptom}
                          </li>
                        ))}
                      </ul>
                      
                      <h4 className="font-semibold text-gray-900 mb-3">Solutions:</h4>
                      <ol className="space-y-3">
                        {issue.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-start">
                            <span className="bg-primary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                              {solutionIndex + 1}
                            </span>
                            <span className="text-gray-700 text-sm leading-relaxed">{solution}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredIssues.length === 0 && (
            <div className="text-center py-12">
              <AlertTriangle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No matching issues found</h3>
              <p className="text-gray-600">Try searching with different keywords or select another category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Diagnostic Tools */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Diagnostic <span className="text-primary-500">Tools</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Use these tools to diagnose network issues and gather information 
              before contacting support for faster resolution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diagnosticTools.map((tool, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors group">
                <div className="bg-primary-500 w-12 h-12 rounded-xl p-3 mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{tool.description}</p>
                <div className="flex items-center justify-between">
                  <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs font-medium">
                    {tool.category}
                  </span>
                  <button className="text-primary-500 hover:text-primary-600 font-semibold text-sm">
                    Use Tool →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary-500 to-accent-purple text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-5">
            Still Having Issues?
          </h2>
          <p className="text-base text-white/90 mb-8 leading-relaxed">
            If these troubleshooting steps don't resolve your problem, our technical experts 
            are available 24/7 to provide personalized assistance and advanced diagnostics.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <MessageCircle className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Live Chat</h3>
                <p className="text-sm text-white/80 mb-4">Get real-time troubleshooting help</p>
                <button className="bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Chat
                </button>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Phone Support</h3>
                <p className="text-sm text-white/80 mb-1">(+27) 68 618 5224</p>
                <p className="text-xs text-white/70 mb-4">24/7 Technical Line</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <Mail className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Email Support</h3>
                <p className="text-sm text-white/80 mb-1">support@9gspeed.co.za</p>
                <p className="text-xs text-white/70 mb-4">Detailed issue reporting</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/technical-support" className="bg-red-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-red-300 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
              Contact Support
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