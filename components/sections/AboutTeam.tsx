'use client';

import { Users, Mail, Phone, Linkedin, Award, Zap, Shield, Heart } from 'lucide-react';

const teamMembers = [
  {
    name: 'Thabo Mthembu',
    position: 'Chief Executive Officer',
    department: 'Executive Leadership',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    bio: 'With over 15 years in telecommunications, Thabo leads 9G Speednet with vision and innovation.',
    specialties: ['Strategic Leadership', 'Business Development', 'Industry Relations'],
    email: 'thabo@9gspeednet.co.za',
    linkedin: '#'
  },
  {
    name: 'Nomsa Khumalo',
    position: 'Chief Technology Officer',
    department: 'Technology',
    image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    bio: 'Nomsa drives our technical excellence and ensures our infrastructure meets world-class standards.',
    specialties: ['Network Architecture', 'Technical Strategy', 'Innovation'],
    email: 'nomsa@9gspeednet.co.za',
    linkedin: '#'
  },
  {
    name: 'Sipho Ndlovu',
    position: 'Head of Customer Experience',
    department: 'Customer Relations',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    bio: 'Sipho ensures every customer receives exceptional service and support throughout their journey.',
    specialties: ['Customer Success', 'Service Excellence', 'Team Leadership'],
    email: 'sipho@9gspeednet.co.za',
    linkedin: '#'
  },
  {
    name: 'Lerato Mokoena',
    position: 'Operations Director',
    department: 'Operations',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    bio: 'Lerato oversees daily operations, ensuring efficient service delivery and quality management.',
    specialties: ['Process Optimization', 'Quality Assurance', 'Project Management'],
    email: 'lerato@9gspeednet.co.za',
    linkedin: '#'
  }
];

const departments = [
  {
    name: 'Technical Team',
    description: 'Network engineers and technical specialists ensuring optimal performance.',
    icon: Zap,
    color: 'from-blue-500 to-blue-600',
    count: '25+ Engineers'
  },
  {
    name: 'Customer Support',
    description: '24/7 support specialists dedicated to customer satisfaction.',
    icon: Heart,
    color: 'from-green-500 to-green-600',
    count: '15+ Specialists'
  },
  {
    name: 'Field Operations',
    description: 'Installation and maintenance teams across South Africa.',
    icon: Shield,
    color: 'from-purple-500 to-purple-600',
    count: '30+ Technicians'
  },
  {
    name: 'Business Development',
    description: 'Strategic partnerships and growth initiatives.',
    icon: Award,
    color: 'from-orange-500 to-red-500',
    count: '8+ Professionals'
  }
];

export default function AboutTeam() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-primary-500">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Behind every great connection is a team of passionate professionals dedicated 
            to delivering excellence. Get to know the people who make 9G Speednet exceptional.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Leadership Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-primary-500 font-semibold mb-2">{member.position}</p>
                  <p className="text-sm text-gray-500 mb-4">{member.department}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-900 mb-2">Specialties:</h5>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <span
                          key={specialtyIndex}
                          className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center text-gray-500 hover:text-primary-500 transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-1" />
                      <span className="text-xs">Email</span>
                    </a>
                    <a
                      href={member.linkedin}
                      className="flex items-center text-gray-500 hover:text-primary-500 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 mr-1" />
                      <span className="text-xs">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Departments Overview */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Departments</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => {
              const IconComponent = dept.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${dept.color} flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{dept.name}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{dept.description}</p>
                  <div className="bg-gray-100 rounded-lg px-3 py-2">
                    <span className="text-sm font-semibold text-gray-700">{dept.count}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Culture */}
        <div className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <Users className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-3xl font-bold mb-4">Our Team Culture</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              At 9G Speednet, we believe that our people are our greatest asset. We foster 
              a culture of innovation, collaboration, and continuous learning where every 
              team member can thrive and contribute to our shared success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Work-Life Balance</h4>
              <p className="opacity-90">We support our team's wellbeing and personal growth</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Professional Development</h4>
              <p className="opacity-90">Continuous learning and skill enhancement opportunities</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Collaborative Environment</h4>
              <p className="opacity-90">Open communication and mutual respect</p>
            </div>
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Join Our Growing Team</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to be part of South Africa's leading internet service provider? 
              We're always looking for talented individuals who share our passion for excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-500 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-primary-600 transition-colors">
                View Open Positions
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:border-primary-500 hover:text-primary-500 transition-colors">
                Learn About Benefits
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}