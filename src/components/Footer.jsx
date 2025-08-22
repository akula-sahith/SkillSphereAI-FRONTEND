import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const quickLinks = {
    About: ['Our Story', 'Mission', 'Team', 'Careers'],
    Opportunities: ['Browse Jobs', 'Post Job', 'Talent Pool', 'Success Stories'],
    FAQ: ['How it Works', 'Pricing', 'Support', 'Resources'],
    'Contact Us': ['Get in Touch', 'Partnership', 'Media Kit', 'Feedback']
  };

  return (
    <footer className="bg-gray-800" style={{ height: '500px' }}>
      <div className="w-full py-12 px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-between">
        {/* Main Footer Content */}
        <div className="flex-1">
          {/* Branding Section */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl text-white font-serif italic transform -rotate-1 mb-6 leading-tight">
              SkillSphere AI
            </h1>
            <p className="text-gray-400 italic font-serif">
              Connecting talent with opportunity through AI-powered matching
            </p>
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {Object.entries(quickLinks).map(([category, links]) => (
              <div key={category} className="text-center sm:text-left">
                <h3 className="text-white font-semibold text-lg mb-4">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out inline-block cursor-pointer hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-cyan-500 hover:bg-clip-text hover:text-transparent"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Info and Social Media Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-8">
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 text-gray-400">
              <div className="flex items-center gap-2 hover:text-white transition-all duration-300 cursor-pointer">
                <Mail className="w-5 h-5" />
                <span className="text-sm">hello@skillsphere.ai</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-all duration-300 cursor-pointer">
                <Phone className="w-5 h-5" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-all duration-300 cursor-pointer">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 sm:space-x-6">
              <div className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer hover:rotate-12">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer hover:rotate-12 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-cyan-500" />
              <Twitter className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer hover:rotate-12" />
              <div className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer hover:rotate-12">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-500 text-center">
            © 2025 SkillSphere AI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;