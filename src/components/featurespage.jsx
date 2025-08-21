import React from 'react';
import { Brain, Zap, Shield, TrendingUp } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Smart Learning",
      description: "Connect with peers through intelligent matching. Collaborate on projects and share insights for accelerated growth.",
      color: "text-indigo-600",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      hoverColor: "hover:from-indigo-100 hover:to-indigo-200",
      tag: "AI POWERED"
    },
    {
      icon: Zap,
      title: "Adaptive Paths",
      description: "Personalized learning journeys that evolve with your progress using advanced AI algorithms.",
      color: "text-amber-600",
      bgColor: "bg-gradient-to-br from-amber-50 to-yellow-100",
      hoverColor: "hover:from-amber-100 hover:to-yellow-200",
      tag: "SMART TECH"
    },
    {
      icon: Shield,
      title: "Expert Mentorship",
      description: "Access industry veterans and thought leaders for personalized guidance tailored to your goals.",
      color: "text-emerald-600",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-100",
      hoverColor: "hover:from-emerald-100 hover:to-green-200",
      tag: "EXCLUSIVE"
    },
    {
      icon: TrendingUp,
      title: "Progress Analytics",
      description: "Comprehensive tracking with detailed insights that reveal strengths and growth opportunities.",
      color: "text-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-100",
      hoverColor: "hover:from-blue-100 hover:to-cyan-200",
      tag: "DATA DRIVEN"
    }
  ];

  return (
    <section className="relative px-8 md:px-16 lg:px-32 py-24 bg-gradient-to-br from-gray-50 via-white to-indigo-50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl opacity-70 -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-green-200/30 rounded-full blur-3xl opacity-70 translate-y-32 -translate-x-32"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold uppercase tracking-wide">
            Why Choose SkillSphere
          </div>
          <h2 className="text-3xl md:text-4xl text-gray-700 font-serif italic transform -rotate-1 mb-6 leading-tight">
            Powerful Features for
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Modern Learning
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Discover how SkillSphere transforms the way you learn with cutting-edge tools, 
            AI-powered insights, and personalized experiences designed for the modern learner.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className={`
                  relative overflow-hidden rounded-2xl p-8 h-72
                  bg-white border border-gray-200
                  shadow-lg hover:shadow-xl
                  transition-all duration-500 hover:-translate-y-1
                  group cursor-pointer
                  ${feature.hoverColor}
                `}
              >
                {/* Tag */}
                <div className="absolute top-4 right-4 z-20">
                  <span className={`
                    px-3 py-1 bg-white/90 backdrop-blur-sm
                    text-xs font-bold ${feature.color} uppercase tracking-wide
                    rounded-full border border-current/20 shadow-sm
                    ${feature.tag === 'AI POWERED' ? 'animate-pulse' : ''}
                  `}>
                    {feature.tag}
                  </span>
                </div>

                {/* Background */}
                <div className={`absolute inset-0 ${feature.bgColor} opacity-50`}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-black/5"></div>
                
                {/* Icon */}
                <div className={`
                  relative z-10 w-16 h-16 ${feature.bgColor} 
                  rounded-xl flex items-center justify-center mb-6
                  shadow-md group-hover:shadow-lg
                  group-hover:scale-105 transition-all duration-500 
                  border-2 border-white/70
                `}>
                  <IconComponent 
                    className={`w-8 h-8 ${feature.color} transition-transform duration-300`} 
                    strokeWidth={2}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-gray-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm font-medium group-hover:text-gray-700 transition-colors duration-300 mb-4">
                    {feature.description}
                  </p>

                  {/* Bottom Elements */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className={`
                      w-12 h-1 ${feature.color.replace('text-', 'bg-')} 
                      rounded-full transform scale-x-0 group-hover:scale-x-100 
                      transition-transform duration-500 origin-left
                    `}></div>
                    
                    <svg className={`w-5 h-5 ${feature.color} opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-24">
          <div className="relative inline-block group">
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-700"></div>
            <button className="relative px-12 py-5 bg-white rounded-2xl leading-none flex items-center space-x-4 shadow-2xl group-hover:shadow-3xl transition-all duration-500 border-2 border-gray-100">
              <span className="text-gray-900 font-black text-xl">Experience SkillSphere</span>
              <svg className="w-7 h-7 text-indigo-600 group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;