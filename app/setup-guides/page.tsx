'use client';

import { useState } from 'react';
import { Router, Wifi, Settings, Monitor, Smartphone, Tv, CheckCircle, Play, Download, ArrowRight, Clock, User, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const setupSteps = [
  {
    id: 1,
    title: "Unbox & Connect",
    description: "Remove your router from the box and connect to power and internet",
    time: "2 minutes",
    difficulty: "Easy",
    icon: Router,
    steps: [
      "Remove router and power adapter from box",
      "Connect power adapter to router and plug into wall outlet",
      "Connect ethernet cable from wall socket to router's WAN port",
      "Wait for power LED to turn solid green (30-60 seconds)",
      "Verify internet LED shows solid connection"
    ]
  },
  {
    id: 2,
    title: "Initial Configuration",
    description: "Access router settings and complete basic setup wizard",
    time: "5 minutes",
    difficulty: "Easy",
    icon: Settings,
    steps: [
      "Connect device to router via ethernet or default Wi-Fi",
      "Open web browser and navigate to 192.168.1.1",
      "Use default login (usually admin/admin or on router label)",
      "Follow setup wizard to configure internet settings",
      "Set your admin password for security"
    ]
  },
  {
    id: 3,
    title: "Wi-Fi Setup",
    description: "Create your wireless network name and secure password",
    time: "3 minutes",
    difficulty: "Easy",
    icon: Wifi,
    steps: [
      "Navigate to Wi-Fi settings in router admin panel",
      "Set your network name (SSID) - make it memorable",
      "Choose WPA3 security (or WPA2 if WPA3 unavailable)",
      "Create strong password (12+ characters, mixed case, numbers)",
      "Save settings and wait for router to restart"
    ]
  },
  {
    id: 4,
    title: "Connect Devices",
    description: "Connect all your devices to the new Wi-Fi network",
    time: "10 minutes",
    difficulty: "Easy",
    icon: Monitor,
    steps: [
      "Find your new network name in device Wi-Fi settings",
      "Enter the password you created in step 3",
      "Test internet connection on each device",
      "Forget old networks if upgrading routers",
      "Update saved passwords on all devices"
    ]
  }
];

const deviceGuides = [
  {
    icon: Smartphone,
    title: "Mobile Devices",
    description: "Setup guide for smartphones and tablets",
    steps: ["Open Settings > Wi-Fi", "Select your network", "Enter password", "Tap Connect"],
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Monitor,
    title: "Computers & Laptops",
    description: "Setup guide for Windows and Mac computers",
    steps: ["Click Wi-Fi icon in taskbar", "Select network", "Enter network password", "Click Connect"],
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Tv,
    title: "Smart TVs & Streaming",
    description: "Setup guide for smart TVs and streaming devices",
    steps: ["Go to Network Settings", "Select Wi-Fi Setup", "Choose your network", "Enter password"],
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Router,
    title: "Smart Home Devices",
    description: "Setup guide for IoT and smart home devices",
    steps: ["Open device app", "Select Add Device", "Follow Wi-Fi setup", "Enter network credentials"],
    color: "from-orange-500 to-red-600"
  }
];

const troubleshooting = [
  {
    issue: "Can't access router admin panel",
    solution: "Try 192.168.1.1 or 192.168.0.1. Check ethernet connection. Reset router if needed.",
    icon: Settings
  },
  {
    issue: "No internet after setup",
    solution: "Check all cable connections. Contact ISP to verify service activation. Restart modem and router.",
    icon: Wifi
  },
  {
    issue: "Devices can't find Wi-Fi network",
    solution: "Ensure router is broadcasting SSID. Check 2.4GHz vs 5GHz bands. Restart router.",
    icon: Monitor
  },
  {
    issue: "Slow internet speeds",
    solution: "Check router placement. Update firmware. Reduce interference. Contact support for speed test.",
    icon: Zap
  }
];

const videoGuides = [
  {
    title: "Complete Router Setup - Start to Finish",
    duration: "8:45",
    description: "Complete walkthrough of router setup process",
    thumbnail: "/api/placeholder/300/200"
  },
  {
    title: "Wi-Fi Security Best Practices",
    duration: "5:30",
    description: "How to secure your wireless network properly",
    thumbnail: "/api/placeholder/300/200"
  },
  {
    title: "Optimizing Your Network Performance",
    duration: "12:15",
    description: "Tips to get the best speeds from your connection",
    thumbnail: "/api/placeholder/300/200"
  }
];

export default function SetupGuides() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const toggleStepComplete = (stepId: number) => {
    if (completedSteps.includes(stepId)) {
      setCompletedSteps(completedSteps.filter(id => id !== stepId));
    } else {
      setCompletedSteps([...completedSteps, stepId]);
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
                             radial-gradient(circle at 75% 75%, #FFD700 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-5">
                <Router className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">SETUP GUIDES</span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold mb-5 leading-tight">
                Easy Router
                <br />
                <span className="text-green-300">Setup</span>
                <br />
                In Minutes
              </h1>
              
              <p className="text-base text-white/90 mb-6 leading-relaxed">
                Get your 9G Speednet connection up and running quickly with our step-by-step setup guides. 
                From unboxing to full configuration, we'll guide you through every step.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button 
                  className="bg-green-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-300 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  onClick={() => {
                    const setupSection = document.getElementById('setup-steps');
                    if (setupSection) {
                      setupSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Start Setup
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  Watch Video Guide
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold">4 Steps</div>
                  <div className="text-sm text-white/80">Simple Process</div>
                </div>
                <div>
                  <div className="text-xl font-bold">20min</div>
                  <div className="text-sm text-white/80">Total Setup Time</div>
                </div>
                <div>
                  <div className="text-xl font-bold">24/7</div>
                  <div className="text-sm text-white/80">Setup Support</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold mb-2">Setup Progress</h3>
                  <p className="text-sm text-white/80">Track your setup completion</p>
                </div>
                
                <div className="space-y-4">
                  {setupSteps.map((step, index) => (
                    <div key={step.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                          completedSteps.includes(step.id) 
                            ? 'bg-green-500' 
                            : currentStep >= step.id 
                              ? 'bg-yellow-400 text-gray-900' 
                              : 'bg-white/20'
                        }`}>
                          {completedSteps.includes(step.id) ? (
                            <CheckCircle className="w-4 h-4 text-white" />
                          ) : (
                            <span className="text-sm font-bold">{step.id}</span>
                          )}
                        </div>
                        <span className="text-sm">{step.title}</span>
                      </div>
                      <span className="text-xs text-white/70">{step.time}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <div className="text-sm text-white/80 mb-2">Overall Progress</div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-green-400 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${(completedSteps.length / setupSteps.length) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-white/70 mt-1">
                    {completedSteps.length} of {setupSteps.length} steps completed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Steps */}
      <section id="setup-steps" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Step-by-Step <span className="text-primary-500">Setup Guide</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Follow these simple steps to get your 9G Speednet router configured and ready for use. 
              Each step includes detailed instructions and helpful tips.
            </p>
          </div>

          <div className="space-y-8">
            {setupSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isCompleted = completedSteps.includes(step.id);
              const isCurrent = currentStep === step.id;
              
              return (
                <div 
                  key={step.id}
                  className={`bg-white rounded-2xl p-6 shadow-md border-2 transition-all duration-300 ${
                    isCompleted 
                      ? 'border-green-500 bg-green-50' 
                      : isCurrent 
                        ? 'border-primary-500 bg-primary-50' 
                        : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-xl p-3 mr-4 ${
                        isCompleted 
                          ? 'bg-green-500' 
                          : 'bg-gradient-to-r from-primary-500 to-accent-purple'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle className="w-6 h-6 text-white" />
                        ) : (
                          <IconComponent className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          Step {step.id}: {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="flex items-center text-sm text-gray-500 mb-1">
                          <Clock className="w-3 h-3 mr-1" />
                          {step.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="w-3 h-3 mr-1" />
                          {step.difficulty}
                        </div>
                      </div>
                      
                      <button
                        onClick={() => toggleStepComplete(step.id)}
                        className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                          isCompleted
                            ? 'bg-green-500 text-white'
                            : 'bg-primary-500 text-white hover:bg-primary-600'
                        }`}
                      >
                        {isCompleted ? 'Completed' : 'Mark Complete'}
                      </button>
                    </div>
                  </div>
                  
                  <div className="pl-16">
                    <ol className="space-y-3">
                      {step.steps.map((instruction, instructionIndex) => (
                        <li key={instructionIndex} className="flex items-start">
                          <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                            {instructionIndex + 1}
                          </span>
                          <span className="text-gray-700 text-sm leading-relaxed">{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Device-Specific Guides */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Device <span className="text-primary-500">Connection Guides</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Learn how to connect different types of devices to your new Wi-Fi network. 
              Each device type has specific steps for optimal connection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deviceGuides.map((guide, index) => {
              const IconComponent = guide.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${guide.color} p-3 mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{guide.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{guide.description}</p>
                  
                  <div className="space-y-2">
                    {guide.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-4 h-4 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0">
                          {stepIndex + 1}
                        </div>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Guides */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Video <span className="text-primary-500">Tutorials</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Watch our comprehensive video guides for visual step-by-step instructions. 
              Perfect for visual learners who prefer watching over reading.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {videoGuides.map((video, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary-500 to-accent-purple h-48 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Common <span className="text-primary-500">Setup Issues</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Run into a problem during setup? Here are solutions to the most common issues 
              our customers encounter during router configuration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {troubleshooting.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-red-500 rounded-lg p-2 mr-4 flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.issue}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary-500 to-accent-purple text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-5">
            Still Need Setup Help?
          </h2>
          <p className="text-base text-white/90 mb-8 leading-relaxed">
            Our technical support team is available 24/7 to help you through any setup challenges. 
            Get personalized assistance to ensure your connection is perfect.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/technical-support" className="bg-green-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-300 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
              Get Setup Help
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