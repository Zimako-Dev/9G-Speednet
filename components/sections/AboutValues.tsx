'use client';

import { useState } from 'react';
import { 
  Wrench, 
  Shield, 
  Award, 
  Heart, 
  Star, 
  Users, 
  CheckCircle,
  ArrowRight 
} from 'lucide-react';

const values = [
  {
    id: 'diligence',
    title: 'Diligence',
    icon: Wrench,
    color: 'from-blue-500 to-blue-600',
    description: 'We are dedicated in continual effort to accomplish a site or project with pure perfection that gives satisfaction to our customers.',
    details: [
      'Continuous improvement mindset',
      'Attention to detail in every project',
      'Commitment to customer satisfaction',
      'Perfectionist approach to service delivery',
      'Never settling for "good enough"'
    ],
    quote: 'Excellence is not a skill, it\'s an attitude we live by every day.'
  },
  {
    id: 'safety',
    title: 'Safety - Be Smart',
    icon: Shield,
    color: 'from-green-500 to-green-600',
    description: 'Safety must always relate to you. We prioritize the wellbeing of our team, customers, and communities in everything we do.',
    details: [
      'Comprehensive safety protocols',
      'Regular safety training and updates',
      'Equipment safety standards',
      'Environmental responsibility',
      'Personal protective measures'
    ],
    quote: 'Safety isn\'t just a priority, it\'s a prerequisite for everything we do.'
  },
  {
    id: 'quality',
    title: 'Quality and Excellence',
    icon: Award,
    color: 'from-purple-500 to-purple-600',
    description: 'Set and achieve high standards in everything we do. We strive for excellence in service delivery, technical solutions, and customer experience.',
    details: [
      'Industry-leading service standards',
      'Continuous quality monitoring',
      'Best-in-class technology solutions',
      'Regular performance assessments',
      'Customer satisfaction metrics'
    ],
    quote: 'Quality is never an accident; it is always the result of intelligent effort.'
  },
  {
    id: 'integrity',
    title: 'Integrity',
    icon: Heart,
    color: 'from-red-500 to-red-600',
    description: 'Do the right thing. We conduct our business with honesty, transparency, and ethical practices that build trust with our customers.',
    details: [
      'Transparent business practices',
      'Honest communication with customers',
      'Ethical decision-making process',
      'Fair pricing and billing',
      'Accountability for our actions'
    ],
    quote: 'Integrity is doing the right thing when no one is watching.'
  },
  {
    id: 'fulfillment',
    title: 'Fulfillment',
    icon: Star,
    color: 'from-yellow-500 to-orange-500',
    description: 'Develop our talents and enjoy our work. We believe that fulfilled employees create exceptional customer experiences.',
    details: [
      'Professional development opportunities',
      'Work-life balance initiatives',
      'Skills enhancement programs',
      'Career growth pathways',
      'Recognition and rewards'
    ],
    quote: 'When we love what we do, excellence becomes a natural outcome.'
  },
  {
    id: 'teamwork',
    title: 'Teamwork',
    icon: Users,
    color: 'from-indigo-500 to-indigo-600',
    description: 'Communicate openly and respect each other. We achieve more together through collaboration, mutual respect, and shared goals.',
    details: [
      'Open communication channels',
      'Collaborative problem-solving',
      'Mutual respect and support',
      'Shared responsibility for success',
      'Inclusive team environment'
    ],
    quote: 'Teamwork makes the dream work, and we dream big at 9G Speednet.'
  }
];

export default function AboutValues() {
  const [activeValue, setActiveValue] = useState('diligence');

  const activeValueData = values.find(value => value.id === activeValue);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our Core <span className="text-primary-500">Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These fundamental principles guide our decisions, shape our culture, and define 
            our commitment to excellence in everything we do.
          </p>
        </div>

        {/* Values Navigation */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {values.map((value) => {
            const IconComponent = value.icon;
            return (
              <button
                key={value.id}
                onClick={() => setActiveValue(value.id)}
                className={`p-6 rounded-2xl transition-all duration-300 text-center ${
                  activeValue === value.id
                    ? 'bg-white shadow-2xl scale-105 border-2 border-primary-500'
                    : 'bg-white/50 shadow-lg hover:shadow-xl hover:scale-102 border border-gray-200'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-3`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className={`font-semibold text-sm ${
                  activeValue === value.id ? 'text-primary-500' : 'text-gray-700'
                }`}>
                  {value.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Value Details */}
        {activeValueData && (
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className={`bg-gradient-to-r ${activeValueData.color} p-8 text-white`}>
              <div className="flex items-center mb-6">
                {(() => {
                  const IconComponent = activeValueData.icon;
                  return (
                    <div className="bg-white/20 p-4 rounded-2xl mr-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  );
                })()}
                <div>
                  <h3 className="text-4xl font-bold mb-2">{activeValueData.title}</h3>
                  <p className="text-xl opacity-90 italic">"{activeValueData.quote}"</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">What This Means</h4>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {activeValueData.description}
                  </p>
                  
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h5 className="text-lg font-semibold text-gray-900 mb-4">How We Live This Value</h5>
                    <div className="space-y-3">
                      {activeValueData.details.map((detail, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className={`bg-gradient-to-br ${activeValueData.color} rounded-3xl p-12 text-white text-center max-w-md`}>
                    {(() => {
                      const IconComponent = activeValueData.icon;
                      return <IconComponent className="w-24 h-24 mx-auto mb-6 opacity-80" />;
                    })()}
                    <h4 className="text-2xl font-bold mb-4">Value in Action</h4>
                    <p className="text-lg opacity-90 leading-relaxed">
                      Every day, our team embodies this value through their dedication 
                      to providing exceptional service and creating meaningful connections 
                      with our customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Values Impact */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Values-Driven Results</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Our commitment to these core values has earned us the trust of thousands 
              of customers and positioned us as a leader in South Africa's telecommunications industry.
            </p>
            <button className="inline-flex items-center bg-white text-primary-500 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors">
              Experience Our Values
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}