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
      <div className="text-sm text-gray-600 font-medium">
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
      <div className="text-xs text-gray-500 mt-1">Current: {currentRoute}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <NavigationIndicator />
      
      {/* Centered Welcome Header */}
      <div className="text-center pt-16 pb-8">
        <h1 
          className={`text-4xl md:text-6xl font-bold italic text-gray-900 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-20 opacity-0 scale-75'
          }`}
          style={{ 
            fontFamily: 'Aptos, sans-serif',
            background: 'linear-gradient(45deg, #2947A9, #91A1D4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Welcome to SkillSphere
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Student Section */}
          <div 
            className={`text-center space-y-8 transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="inline-block">
              <span className="bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider">
                LEARNING
              </span>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900" style={{ fontFamily: 'Aptos, sans-serif' }}>
                For <span className="italic text-emerald-600">Students</span>
              </h2>
              
              <p className="text-xl text-gray-700 max-w-md mx-auto leading-relaxed" style={{ fontFamily: 'Times New Roman, serif' }}>
                Join millions of learners, practice coding skills, prepare for interviews, and advance your career.
              </p>
            </div>

            <div className="space-y-6">
              <button
                onClick={() => handleLogin('student')}
                className="w-full max-w-xs bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Login
              </button>
              
              <div className="space-y-2">
                <p className="text-gray-600">Don't have an account?</p>
                <button className="text-emerald-600 hover:text-emerald-700 font-semibold hover:underline transition-all duration-200">
                  Sign up.
                </button>
              </div>
            </div>

            {/* Student Icons */}
            <div className="flex justify-center space-x-4 pt-8">
              <div className="p-4 bg-emerald-50 rounded-full">
                <Brain className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="p-4 bg-emerald-50 rounded-full">
                <Play className="w-8 h-8 text-emerald-600" />
              </div>
            </div>
          </div>

          {/* Mentor Section */}
          <div 
            className={`text-center space-y-8 transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="inline-block">
              <span className="bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider">
                TEACHING
              </span>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900" style={{ fontFamily: 'Aptos, sans-serif' }}>
                For <span className="italic text-orange-600">Mentors</span>
              </h2>
              
              <p className="text-xl text-gray-700 max-w-md mx-auto leading-relaxed" style={{ fontFamily: 'Times New Roman, serif' }}>
                Share your expertise, guide aspiring learners, and make a meaningful impact on their educational journey.
              </p>
            </div>

            <div className="space-y-6">
              <button
                onClick={() => handleLogin('mentor')}
                className="w-full max-w-xs bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Login
              </button>
              
              <div className="space-y-2">
                <p className="text-gray-600">Don't have an account?</p>
                <div className="space-x-2">
                  <button className="text-orange-600 hover:text-orange-700 font-semibold hover:underline transition-all duration-200">
                    Contact sales
                  </button>
                  <span className="text-gray-400">or</span>
                  <button className="text-orange-600 hover:text-orange-700 font-semibold hover:underline transition-all duration-200">
                    Get free trial
                  </button>
                </div>
              </div>
            </div>

            {/* Mentor Icons */}
            <div className="flex justify-center space-x-4 pt-8">
              <div className="p-4 bg-orange-50 rounded-full">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <div className="p-4 bg-orange-50 rounded-full">
                <Lightbulb className="w-8 h-8 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div 
          className={`mt-20 text-center transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <p className="text-gray-500 text-lg" style={{ fontFamily: 'Times New Roman, serif' }}>
            Trusted by educators and learners worldwide
          </p>
        </div>
      </div>

      {/* Loading/Redirect Overlay */}
      {selectedRole && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-4 transform animate-zoom-in">
            <div className="text-center space-y-4">
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                selectedRole === 'student' 
                  ? 'bg-emerald-600' 
                  : 'bg-orange-600'
              }`}>
                {selectedRole === 'student' ? (
                  <Brain className="w-8 h-8 text-white" />
                ) : (
                  <Users className="w-8 h-8 text-white" />
                )}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Redirecting to {selectedRole === 'student' ? 'Student' : 'Mentor'} Portal...
              </h3>
              <div className={`animate-spin w-6 h-6 border-2 ${
                selectedRole === 'student' ? 'border-emerald-600' : 'border-orange-600'
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