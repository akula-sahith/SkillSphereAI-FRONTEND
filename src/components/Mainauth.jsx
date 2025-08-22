import React, { useState, useEffect } from 'react';
import { Brain, Users, Play, Lightbulb } from 'lucide-react';

const MainAuth = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentRoute, setCurrentRoute] = useState('/main-auth');

  useEffect(() => {
    // Trigger animation after component mounts with delay for dramatic effect
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  const handleLogin = (role) => {
    setSelectedRole(role);
    setTimeout(() => {
      if (role === 'student') {
        setCurrentRoute('/student-auth');
        console.log('Navigating to /student-auth');
      } else if (role === 'mentor') {
        setCurrentRoute('/mentor-auth');
        console.log('Navigating to /mentor-auth');
      }
    }, 1000);
  };

  const NavigationIndicator = () => (
    <div className="fixed top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md z-50">
      <div className="text-sm text-gray-700 font-medium">
        <span className="text-blue-600">Landing Page</span>
        <span className="mx-2">→</span>
        <span className="text-blue-600 font-bold">Get Started</span>
        <span className="mx-2">→</span>
        <span className="text-purple-600 font-bold">Main Auth</span>
        {selectedRole && (
          <>
            <span className="mx-2">→</span>
            <span className="text-green-600 font-bold">
              {selectedRole === 'student' ? 'Student Auth' : 'Mentor Auth'}
            </span>
          </>
        )}
      </div>
      <div className="text-xs text-gray-600 mt-1">Current: {currentRoute}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <NavigationIndicator />
      
      {/* Centered Welcome Header */}
      <div className="text-center pt-12 pb-6">
        <h1 
          className={`text-2xl md:text-3xl font-bold italic transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-20 opacity-0 scale-75'
          }`}
          style={{ 
            fontFamily: 'Aptos, sans-serif',
            color: '#1a202c', // Dark gray instead of gradient for better readability
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          Welcome to <span style={{ color: '#2947A9' }}>SkillSphere</span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8 relative">
          
          {/* Vertical Divider Line - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>

          {/* Student Section */}
          <div 
            className={`text-center space-y-6 transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="inline-block">
              <span className="bg-[#2947A9] text-white px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider">
                LEARNING
              </span>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800" style={{ fontFamily: 'Aptos, sans-serif' }}>
                For <span className="italic text-[#2947A9]">Students</span>
              </h2>
              
              <p className="text-base text-gray-700 max-w-sm mx-auto leading-relaxed" style={{ fontFamily: 'Times New Roman, serif' }}>
                Join millions of learners, practice coding skills, prepare for interviews, and advance your career.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <button
                onClick={() => handleLogin('student')}
                className="w-full max-w-xs bg-[#2947A9] hover:bg-[#1e3a8a] text-white px-6 py-3 rounded-md font-medium text-sm hover:shadow-md hover:scale-105 transition-all duration-300"
              >
                Login
              </button>
              
              <div className="space-y-1">
                <p className="text-gray-700 text-sm font-medium">Don't have an account?</p>
                <button className="text-[#2947A9] hover:text-[#1e3a8a] font-semibold hover:underline transition-all duration-200 text-sm">
                  Sign up.
                </button>
              </div>
            </div>

            {/* Student Icons */}
            <div className="flex justify-center space-x-3 pt-6">
              <div className="p-3 bg-[#2947A9]/10 rounded-full border border-[#2947A9]/20">
                <Brain className="w-6 h-6 text-[#2947A9]" />
              </div>
              <div className="p-3 bg-[#2947A9]/10 rounded-full border border-[#2947A9]/20">
                <Play className="w-6 h-6 text-[#2947A9]" />
              </div>
            </div>
          </div>

          {/* Mentor Section */}
          <div 
            className={`text-center space-y-6 transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="inline-block">
              <span className="bg-[#0B267D] text-white px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider">
                TEACHING
              </span>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800" style={{ fontFamily: 'Aptos, sans-serif' }}>
                For <span className="italic text-[#0B267D]">Mentors</span>
              </h2>
              
              <p className="text-base text-gray-700 max-w-sm mx-auto leading-relaxed" style={{ fontFamily: 'Times New Roman, serif' }}>
                Share your expertise, guide aspiring learners, and make a meaningful impact on their educational journey.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <button
                onClick={() => handleLogin('mentor')}
                className="w-full max-w-xs bg-[#0B267D] hover:bg-[#1e3a8a] text-white px-6 py-3 rounded-md font-medium text-sm hover:shadow-md hover:scale-105 transition-all duration-300"
              >
                Login
              </button>
              
              <div className="space-y-1">
                <p className="text-gray-700 text-sm font-medium">Don't have an account?</p>
                <div className="space-x-1 text-sm">
                  <button className="text-[#0B267D] hover:text-[#1e3a8a] font-semibold hover:underline transition-all duration-200">
                    Contact sales
                  </button>
                  <span className="text-gray-600 font-medium">or</span>
                  <button className="text-[#0B267D] hover:text-[#1e3a8a] font-semibold hover:underline transition-all duration-200">
                    Get free trial
                  </button>
                </div>
              </div>
            </div>

            {/* Mentor Icons */}
            <div className="flex justify-center space-x-3 pt-6">
              <div className="p-3 bg-[#0B267D]/10 rounded-full border border-[#0B267D]/20">
                <Users className="w-6 h-6 text-[#0B267D]" />
              </div>
              <div className="p-3 bg-[#0B267D]/10 rounded-full border border-[#0B267D]/20">
                <Lightbulb className="w-6 h-6 text-[#0B267D]" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div 
          className={`mt-12 text-center transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <p className="text-gray-600 text-sm font-medium" style={{ fontFamily: 'Times New Roman, serif' }}>
            Trusted by educators and learners worldwide
          </p>
        </div>
      </div>

      {/* Loading/Redirect Overlay */}
      {selectedRole && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-4 transform animate-zoom-in">
            <div className="text-center space-y-4">
              <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${
                selectedRole === 'student' 
                  ? 'bg-[#2947A9]' 
                  : 'bg-[#0B267D]'
              }`}>
                {selectedRole === 'student' ? (
                  <Brain className="w-6 h-6 text-white" />
                ) : (
                  <Users className="w-6 h-6 text-white" />
                )}
              </div>
              <h3 className="text-lg font-bold text-gray-800">
                Redirecting to {selectedRole === 'student' ? 'Student' : 'Mentor'} Portal...
              </h3>
              <div className={`animate-spin w-5 h-5 border-2 ${
                selectedRole === 'student' ? 'border-[#2947A9]' : 'border-[#0B267D]'
              } border-t-transparent rounded-full mx-auto`}></div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes zoom-in {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-zoom-in {
          animation: zoom-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default MainAuth;