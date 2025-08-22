import React, { useState, useEffect } from 'react';
import { BookOpen, Brain, TrendingUp, Users, Award, Lightbulb, Play, Star, Target } from 'lucide-react';

const OpportunitiesPage = () => {
  const [studentImageUrl, setStudentImageUrl] = useState('');
  const [mentorImageUrl, setMentorImageUrl] = useState('');

  useEffect(() => {
    const loadImages = async () => {
      // Load images from assets folder
      if (window.fs && window.fs.readFile) {
        const studentData = await window.fs.readFile('assets/student.jpg');
        const studentBlob = new Blob([studentData], { type: 'image/jpeg' });
        setStudentImageUrl(URL.createObjectURL(studentBlob));

        const mentorData = await window.fs.readFile('assets/mentor.jpg');
        const mentorBlob = new Blob([mentorData], { type: 'image/jpeg' });
        setMentorImageUrl(URL.createObjectURL(mentorBlob));
      }
    };

    loadImages();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E0E3EB' }}>
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(-10px); }
          50% { transform: translateY(10px); }
        }
        .gradient-overlay {
          background: linear-gradient(135deg, rgba(41, 71, 169, 0.1) 0%, rgba(145, 161, 212, 0.1) 100%);
        }
      `}</style>

      {/* Header Section */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl text-gray-700 font-serif italic transform -rotate-1 mb-6 leading-tight">
              Opportunities
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Unlock your potential with AI-powered learning and mentoring
            </p>
          </div>
        </div>
      </div>

      {/* Student Section */}
      <section className="py-16" style={{ backgroundColor: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Student Opportunities */}
            <div className="space-y-8">
              <div className="flex items-center mb-8">
                <Brain className="w-8 h-8 mr-3" style={{ color: '#2947A9' }} />
                <h2 className="text-2xl font-medium text-gray-800 font-serif">Student Hub</h2>
              </div>

              <div className="bg-white rounded-3xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-300 gradient-overlay">
                <div className="flex items-center mb-4">
                  <Lightbulb className="w-6 h-6 mr-3 text-yellow-500" />
                  <h3 className="text-xl font-semibold text-gray-900 font-serif">AI Knowledge Boost</h3>
                </div>
                <p className="text-gray-600 mb-6 text-base leading-relaxed">
                  Enhance your skills with personalized AI-driven learning paths designed to accelerate your growth in technology and innovation.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700 text-sm">
                    <Target className="w-4 h-4 mr-2" style={{ color: '#91A1D4' }} />
                    <span>Personalized learning recommendations</span>
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <Award className="w-4 h-4 mr-2" style={{ color: '#91A1D4' }} />
                    <span>Industry-recognized certifications</span>
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <Users className="w-4 h-4 mr-2" style={{ color: '#91A1D4' }} />
                    <span>Collaborative project opportunities</span>
                  </div>
                </div>
                <button 
                  className="w-full py-3 px-4 rounded-2xl font-medium text-white transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 text-base"
                  style={{ backgroundColor: '#2947A9' }}
                >
                  <Play className="w-4 h-4 mr-2 inline" />
                  Start Your Journey
                </button>
              </div>
            </div>

            {/* Right Side - Student Reference Image with Animation */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="relative z-10">
                  {studentImageUrl ? (
                    <img 
                      src={studentImageUrl} 
                      alt="Student Learning" 
                      className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl"
                      style={{ 
                        animation: 'float 3s ease-in-out infinite'
                      }}
                    />
                  ) : (
                    <div 
                      className="w-80 h-80 md:w-96 md:h-96 rounded-3xl shadow-2xl flex items-center justify-center text-white text-6xl"
                      style={{ 
                        backgroundColor: '#2947A9',
                        animation: 'float 3s ease-in-out infinite'
                      }}
                    >
                      📚
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-2xl z-20">
                  <BookOpen className="w-8 h-8" style={{ color: '#2947A9' }} />
                </div>
                <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl opacity-20 z-0" style={{ backgroundColor: '#91A1D4' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="py-16" style={{ backgroundColor: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Mentor Reference Image with Animation */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                <div className="relative z-10">
                  {mentorImageUrl ? (
                    <img 
                      src={mentorImageUrl} 
                      alt="Mentor Teaching" 
                      className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl"
                      style={{ 
                        animation: 'floatReverse 3s ease-in-out infinite'
                      }}
                    />
                  ) : (
                    <div 
                      className="w-80 h-80 md:w-96 md:h-96 rounded-3xl shadow-2xl flex items-center justify-center text-white text-6xl"
                      style={{ 
                        backgroundColor: '#0B267D',
                        animation: 'floatReverse 3s ease-in-out infinite'
                      }}
                    >
                      👨‍🏫
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-2xl z-20">
                  <Users className="w-8 h-8" style={{ color: '#0B267D' }} />
                </div>
                <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl opacity-20 z-0" style={{ backgroundColor: '#91A1D4' }}></div>
              </div>
            </div>

            {/* Right Side - Mentor Opportunities */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="flex items-center mb-8">
                <Users className="w-8 h-8 mr-3" style={{ color: '#0B267D' }} />
                <h2 className="text-2xl font-medium text-gray-800 font-serif">Mentor Hub</h2>
              </div>

              <div className="bg-white rounded-3xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-300 gradient-overlay">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 mr-3" style={{ color: '#0B267D' }} />
                  <h3 className="text-xl font-semibold text-gray-900 font-serif">Shape Future Leaders</h3>
                </div>
                <p className="text-gray-600 mb-6 text-base leading-relaxed">
                  Share your expertise and guide the next generation of innovators through personalized mentorship and teaching opportunities.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700 text-sm">
                    <Brain className="w-4 h-4 mr-2" style={{ color: '#91A1D4' }} />
                    <span>AI-matched mentoring opportunities</span>
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <TrendingUp className="w-4 h-4 mr-2" style={{ color: '#91A1D4' }} />
                    <span>Track student progress & success</span>
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <Star className="w-4 h-4 mr-2" style={{ color: '#91A1D4' }} />
                    <span>Recognition & impact rewards</span>
                  </div>
                </div>
                <button 
                  className="w-full py-3 px-4 rounded-2xl font-medium text-white transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 text-base"
                  style={{ backgroundColor: '#0B267D' }}
                >
                  <Users className="w-4 h-4 mr-2 inline" />
                  Start Teaching
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OpportunitiesPage;