import React from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, Lightbulb, Users } from 'lucide-react';
import Features from "./featurespage";
import  { useRef } from "react";
import OpportunitiesPage from './opportunitiespage';
import Stats from './stats';
import FAQ from './FAQSection';
import Contact from './contactus';
import Footer from './Footer';

const SkillSphereLanding = () => {
    const featuresRef = useRef(null);
    const opportunitiesRef = useRef(null);
    const Statsref = useRef(null);
    const FAQref = useRef(null);
    const Contactref = useRef(null);
    const FooterRef = useRef(null);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-purple-100">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold" style={{color: '#2947A9'}}>SkillSphere AI</span>
            </div>
            
             {/* Premium Navigation Menu */}
            <div className="hidden lg:flex items-center space-x-10">
              <a href="#" className="relative font-semibold text-lg transition-all duration-300 group" style={{color: '#2947A9'}}>
                Home
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-100 transition-transform"></span>
              </a>
              <a href="#" className="font-medium text-gray-700 hover:text-blue-700 transition-all duration-300 text-lg relative group">
                Solutions
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="font-medium text-gray-700 hover:text-blue-700 transition-all duration-300 text-lg relative group">
                Enterprise
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="font-medium text-gray-700 hover:text-blue-700 transition-all duration-300 text-lg relative group">
                Resources
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="font-medium text-gray-700 hover:text-blue-700 transition-all duration-300 text-lg relative group">
                Academy
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2.5 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Landing Section */}
      <div className="relative overflow-hidden" style={{backgroundColor: '#E0E3EB'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] py-20">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="relative">
                <h1 className="text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight">
                <span className="block text-gray-700 font-serif italic transform -rotate-1">
                    AI-Powered
                </span>
                <span className="block bg-gradient-to-r from-blue-600 via-blue-400 to-purple-400 bg-clip-text text-transparent font-sans transform rotate-1 mt-2">
                    Learning &
                </span>
                <span className="block text-gray-800 font-serif italic transform -rotate-0.5 mt-2">
                    Mentorship
                </span>
                <span className="text-3xl lg:text-4xl block text-gray-500 font-light mt-4 transform rotate-0.5">
                     Platform
                </span>
                </h1>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50 blur-xl"></div>
                <div className="absolute top-20 -right-8 w-16 h-16 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-40 blur-lg"></div>

                <p className="text-lg lg:text-xl text-gray-600 mt-6 leading-relaxed max-w-2xl">
                    Personalized courses, peer learning, and expert mentorship — all in one place.
                </p>
              </div>

              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-white"
                  style={{backgroundColor: '#2947A9'}}
                >
                  Start Learning
                </button>
                <button 
                  className="px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 hover:text-white"
                  style={{borderColor: '#2947A9', color: '#2947A9'}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#2947A9'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  Join as Mentor
                </button>
              </div>
            </div>

            {/* Right Side - Educational Building/Architecture Illustration */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px]">
                <svg viewBox="0 0 600 400" className="w-full h-full drop-shadow-2xl">
                  <defs>
                    <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'#91A1D4', stopOpacity:0.8}} />
                      <stop offset="100%" style={{stopColor:'#2947A9', stopOpacity:0.6}} />
                    </linearGradient>
                    <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:0.9}} />
                      <stop offset="100%" style={{stopColor:'#91A1D4', stopOpacity:0.3}} />
                    </linearGradient>
                  </defs>
                  
                  {/* Main Building Structure */}
                  <polygon points="200,320 400,320 500,200 300,80 100,200" fill="url(#buildingGrad)" stroke="#2947A9" strokeWidth="2" />
                  
                  {/* Glass Facade */}
                  <polygon points="220,300 380,300 450,200 320,100 150,200" fill="url(#glassGrad)" opacity="0.7" />
                  
                  {/* Grid Pattern on Glass */}
                  {Array.from({length: 8}, (_, i) => (
                    <g key={i}>
                      <line x1={200 + i * 25} y1="200" x2={200 + i * 25} y2="300" stroke="#2947A9" strokeWidth="1" opacity="0.3" />
                      <line x1="200" y1={220 + i * 15} x2="400" y2={220 + i * 15} stroke="#2947A9" strokeWidth="1" opacity="0.3" />
                    </g>
                  ))}
                  
                  {/* Modern Windows */}
                  <rect x="240" y="140" width="40" height="30" fill="#0B267D" opacity="0.8" rx="3" />
                  <rect x="300" y="160" width="40" height="30" fill="#0B267D" opacity="0.6" rx="3" />
                  <rect x="360" y="180" width="40" height="30" fill="#0B267D" opacity="0.4" rx="3" />
                  
                  {/* Entrance */}
                  <rect x="280" y="280" width="40" height="40" fill="#2947A9" rx="4" />
                  <rect x="285" y="285" width="30" height="30" fill="url(#glassGrad)" rx="2" />
                  
                  {/* Abstract Learning Elements */}
                  <circle cx="150" cy="120" r="20" fill="#91A1D4" opacity="0.8" />
                  <circle cx="450" cy="150" r="15" fill="#2947A9" opacity="0.6" />
                  <circle cx="480" cy="250" r="12" fill="#0B267D" opacity="0.7" />
                  
                  {/* Connection Lines */}
                  <path d="M150 120 Q200 100 240 140" stroke="#2947A9" strokeWidth="2" fill="none" opacity="0.5" strokeDasharray="3,3">
                    <animate attributeName="stroke-dashoffset" values="0;6" dur="2s" repeatCount="indefinite" />
                  </path>
                  
                  <path d="M450 150 Q420 170 400 180" stroke="#91A1D4" strokeWidth="2" fill="none" opacity="0.5" strokeDasharray="3,3">
                    <animate attributeName="stroke-dashoffset" values="6;0" dur="2s" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
              
              {/* Rotating Feature Cards Container */}
              <div className="absolute inset-0 w-full h-full animate-spin" style={{animationDuration: '20s', animationTimingFunction: 'linear'}}>
                {/* Feature Highlight Card 1 - AI Learning */}
                <div className="absolute top-8 right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-200 transform animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse', animationTimingFunction: 'linear'}}>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{backgroundColor: '#E0E3EB'}}>
                      <Lightbulb className="w-5 h-5" style={{color: '#2947A9'}} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{color: '#111827'}}>AI Learning</p>
                      <p className="text-xs text-gray-500">Personalized paths</p>
                    </div>
                  </div>
                </div>

                {/* Feature Highlight Card 2 - Peer Learning */}
                <div className="absolute top-8 left-4 bg-white p-4 rounded-xl shadow-lg border border-gray-200 transform animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse', animationTimingFunction: 'linear'}}>
                  <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E0E3EB' }}>
                          <Users className="w-5 h-5" style={{ color: '#2947A9' }} />
                      </div>
                      <div>
                          <p className="font-semibold text-sm" style={{ color: '#111827' }}>Peer Learning</p>
                          <p className="text-xs text-gray-500">Learn with peers</p>
                      </div>
                  </div>
                </div>

                {/* Feature Highlight Card 3 - Personalized Learning */}
                <div className="absolute bottom-12 right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-200 transform animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse', animationTimingFunction: 'linear'}}>
                  <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E0E3EB' }}>
                          <Lightbulb className="w-5 h-5" style={{ color: '#2947A9' }} />
                      </div>
                      <div>
                          <p className="font-semibold text-sm" style={{ color: '#111827' }}>Personalized Learning Path</p>
                          <p className="text-xs text-gray-500">Tailored for you</p>
                      </div>
                  </div>
                </div>
                
                {/* Feature Highlight Card 4 - Expert Mentors */}
                <div className="absolute bottom-12 left-4 bg-white p-4 rounded-xl shadow-lg border border-gray-200 transform animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse', animationTimingFunction: 'linear'}}>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{backgroundColor: '#E0E3EB'}}>
                      <Users className="w-5 h-5" style={{color: '#2947A9'}} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{color: '#111827'}}>Expert Mentors</p>
                      <p className="text-xs text-gray-500">Connect & grow</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation (like in your reference) */}
        <div className="absolute bottom-8 right-8 flex items-center space-x-4">
          <div className="bg-white rounded-full shadow-lg p-3 flex items-center space-x-2">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ChevronLeft className="w-4 h-4 text-gray-600" />
              <span className="sr-only">Back</span>
            </button>
            <div className="text-sm font-medium px-3" style={{color: '#2947A9'}}>
              Feature Projects
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" style={{backgroundColor: '#2947A9'}}>
              <ChevronRight className="w-4 h-4 text-white" />
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div ref={featuresRef}>
            <Features/>
          </div>
       
      <div ref={opportunitiesRef}>
            <OpportunitiesPage/>
          </div>
      <div ref={Statsref}>
            <Stats/>
          </div>
      <div ref={FAQref}>
            <FAQ/>
        </div>
      <div ref={Contactref}>
           <Contact/>
           </div>
       <div ref={FooterRef}>
           <Footer/>
           </div>
      </div>
    
  );
};

export default SkillSphereLanding;