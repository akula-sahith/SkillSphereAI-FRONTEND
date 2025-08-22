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
    <div className="min-h-screen" style={{ backgroundColor: '#f1f5f9' }}>
      {/* Custom CSS for animations and fonts */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(-10px); }
          50% { transform: translateY(10px); }
        }
        .gradient-text {
          background: linear-gradient(135deg, #2947A9 0%, #91A1D4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-family: 'Aptos', sans-serif;
        }
        .mentor-gradient-text {
          background: linear-gradient(135deg, #0B267D 0%, #2947A9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-family: 'Aptos', sans-serif;
        }
        .times-font {
          font-family: 'Times New Roman', serif;
        }
        .aptos-font {
          font-family: 'Aptos', sans-serif;
        }
      `}</style>

      {/* Header Section */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl text-gray-700 times-font italic transform -rotate-1 mb-8 leading-tight">
              Opportunities
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed times-font">
              Unlock your potential with AI-powered learning and mentoring
            </p>
          </div>
        </div>
      </div>

      {/* Student Section */}
      
      <section className="py-20 px-6" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            
            {/* Left Side - Student Content */}
            <div className="space-y-12">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <Brain className="w-8 h-8 mr-4" style={{ color: '#2947A9' }} />
                  <h2 className="text-4xl md:text-5xl font-bold gradient-text">Student Hub</h2>
                </div>
                
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 aptos-font">
                  AI Knowledge Boost
                </h3>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed aptos-font">
                  Enhance your skills with personalized AI-driven learning paths designed to accelerate your growth in technology and innovation.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start text-gray-700">
                    <Target className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: '#2947A9' }} />
                    <div>
                      <h4 className="text-xl font-semibold mb-1 aptos-font">Personalized Learning</h4>
                      <p className="text-lg text-gray-600 aptos-font">AI-powered recommendations tailored to your learning style and goals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start text-gray-700">
                    <Award className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: '#2947A9' }} />
                    <div>
                      <h4 className="text-xl font-semibold mb-1 aptos-font">Industry Certifications</h4>
                      <p className="text-lg text-gray-600 aptos-font">Earn recognized credentials that boost your career prospects</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start text-gray-700">
                    <Users className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: '#2947A9' }} />
                    <div>
                      <h4 className="text-xl font-semibold mb-1 aptos-font">Collaborative Projects</h4>
                      <p className="text-lg text-gray-600 aptos-font">Work on real-world projects with peers and industry experts</p>
                    </div>
                  </div>
                </div>
                
                <button 
                  className="px-6 py-3 rounded-full font-semibold text-white text-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 aptos-font"
                  style={{ backgroundColor: '#2947A9' }}
                >
                  <Play className="w-4 h-4 mr-2 inline" />
                  Start Your Journey
                </button>
              </div>
            </div>

            {/* Right Side - Student Image */}
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
      <section className="py-20 px-6" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Mentor Image */}
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

            {/* Right Side - Mentor Content */}
            <div className="space-y-12 order-1 lg:order-2">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <Users className="w-8 h-8 mr-4" style={{ color: '#0B267D' }} />
                  <h2 className="text-4xl md:text-5xl font-bold mentor-gradient-text">Mentor Hub</h2>
                </div>
                
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 aptos-font">
                  Shape Future Leaders
                </h3>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed aptos-font">
                  Share your expertise and guide the next generation of innovators through personalized mentorship and teaching opportunities.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start text-gray-700">
                    <Brain className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: '#0B267D' }} />
                    <div>
                      <h4 className="text-xl font-semibold mb-1 aptos-font">AI-Matched Mentoring</h4>
                      <p className="text-lg text-gray-600 aptos-font">Get paired with students who match your expertise and teaching style</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start text-gray-700">
                    <TrendingUp className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: '#0B267D' }} />
                    <div>
                      <h4 className="text-xl font-semibold mb-1 aptos-font">Progress Tracking</h4>
                      <p className="text-lg text-gray-600 aptos-font">Monitor student growth and celebrate their achievements</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start text-gray-700">
                    <Star className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: '#0B267D' }} />
                    <div>
                      <h4 className="text-xl font-semibold mb-1 aptos-font">Recognition & Rewards</h4>
                      <p className="text-lg text-gray-600 aptos-font">Earn recognition for your mentoring impact and contribution</p>
                    </div>
                  </div>
                </div>
                
                <button 
                  className="px-6 py-3 rounded-full font-semibold text-white text-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 aptos-font"
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
