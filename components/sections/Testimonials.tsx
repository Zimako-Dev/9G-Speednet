'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Remote Worker",
    content: "9G Speednet has transformed my work-from-home experience. The connection is incredibly stable and fast. I can handle video calls, large file uploads, and streaming simultaneously without any issues.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Mike Chen",
    role: "Gaming Enthusiast",
    content: "As a competitive gamer, low latency is crucial. 9G Speednet delivers consistent performance with virtually no lag. My gaming experience has never been better!",
    rating: 5,
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Emily Rodriguez",
    role: "Small Business Owner",
    content: "Our business relies heavily on cloud services and video conferencing. 9G Speednet's reliable connection has improved our productivity significantly. The customer support is exceptional too!",
    rating: 5,
    avatar: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "David Thompson",
    role: "Content Creator",
    content: "Uploading 4K videos used to take hours with my old provider. With 9G Speednet's blazing upload speeds, I can publish content in minutes. It's a game-changer for creators!",
    rating: 5,
    avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-primary-500">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what thousands of satisfied customers 
            have to say about their 9G Speednet experience.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto">
            <div className="text-center">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="bg-primary-500 rounded-full p-4">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="mb-8">
                <p className="text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center justify-center">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center">
              <button
                onClick={prevTestimonial}
                className="bg-gray-100 hover:bg-primary-500 hover:text-white p-3 rounded-full transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-primary-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="bg-gray-100 hover:bg-primary-500 hover:text-white p-3 rounded-full transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-8">Trusted by thousands of customers</p>
          <div className="flex justify-center items-center space-x-12 opacity-50">
            <div className="text-2xl font-bold text-gray-400">50K+ Customers</div>
            <div className="text-2xl font-bold text-gray-400">5★ Rating</div>
            <div className="text-2xl font-bold text-gray-400">Award Winner</div>
          </div>
        </div>
      </div>
    </section>
  );
}