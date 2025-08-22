import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'support@skillsphereai.com',
      href: 'mailto:support@skillsphereai.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Innovation Street, Hyderabad, India',
      href: '#'
    }
  ];

  return (
    <div 
      className="min-h-screen py-16 px-6 relative overflow-hidden"
      style={{ backgroundColor: '#E0E3EB' }}
    >
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-gradient-to-br from-pink-400 to-yellow-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-20 w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-bounce"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-serif italic transform -rotate-1 mb-6 leading-tight"
            style={{ color: '#111827' }}
          >
            Get in Touch
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#91A1D4', fontFamily: 'Aptos, sans-serif' }}
          >
            Have questions about SkillSphere AI? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
              {/* Success Message */}
              {isSubmitted && (
                <div 
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
                  style={{ animation: 'fadeIn 0.5s ease-out' }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <p className="text-green-700 font-medium" style={{ fontFamily: 'Aptos, sans-serif' }}>
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              )}

              <div className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className={`w-full rounded-xl shadow-inner p-4 border transition-all duration-300 focus:ring-2 focus:outline-none ${
                        errors.name 
                          ? 'border-red-300 focus:ring-red-500' 
                          : 'border-gray-300 focus:ring-blue-500'
                      }`}
                      style={{ fontFamily: 'Aptos, sans-serif' }}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500" style={{ fontFamily: 'Aptos, sans-serif' }}>
                        {errors.name}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className={`w-full rounded-xl shadow-inner p-4 border transition-all duration-300 focus:ring-2 focus:outline-none ${
                        errors.email 
                          ? 'border-red-300 focus:ring-red-500' 
                          : 'border-gray-300 focus:ring-blue-500'
                      }`}
                      style={{ fontFamily: 'Aptos, sans-serif' }}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500" style={{ fontFamily: 'Aptos, sans-serif' }}>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className={`w-full rounded-xl shadow-inner p-4 border transition-all duration-300 focus:ring-2 focus:outline-none ${
                      errors.subject 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    style={{ fontFamily: 'Aptos, sans-serif' }}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500" style={{ fontFamily: 'Aptos, sans-serif' }}>
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Your Message"
                    className={`w-full rounded-xl shadow-inner p-4 border transition-all duration-300 focus:ring-2 focus:outline-none resize-none ${
                      errors.message 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    style={{ fontFamily: 'Aptos, sans-serif' }}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500" style={{ fontFamily: 'Aptos, sans-serif' }}>
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full rounded-xl font-semibold py-4 px-6 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-opacity-50 flex items-center justify-center gap-2 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 focus:ring-blue-500'
                  }`}
                  style={{ fontFamily: 'Aptos, sans-serif' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-fit">
              <h3 
                className="text-2xl font-semibold mb-8 text-center"
                style={{ color: '#111827', fontFamily: 'Aptos, sans-serif' }}
              >
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 group"
                    >
                      <div className="flex-shrink-0">
                        <Icon 
                          className="w-6 h-6 transition-all duration-300 group-hover:scale-110 text-blue-600"
                        />
                      </div>
                      <div>
                        <p 
                          className="font-medium text-sm mb-1"
                          style={{ color: '#111827', fontFamily: 'Aptos, sans-serif' }}
                        >
                          {info.label}
                        </p>
                        <p 
                          className="text-sm"
                          style={{ color: '#91A1D4', fontFamily: 'Aptos, sans-serif' }}
                        >
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p 
                  className="text-sm text-center"
                  style={{ color: '#91A1D4', fontFamily: 'Aptos, sans-serif' }}
                >
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;