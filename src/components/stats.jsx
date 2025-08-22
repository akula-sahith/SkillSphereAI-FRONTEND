import React, { useEffect, useRef } from 'react';

const Stats = () => {
  const statsRef = useRef(null);
  const counterRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate stat items
          const statItems = document.querySelectorAll('.stat-item-fade');
          statItems.forEach((item, index) => {
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, index * 150);
          });

          // Start counter animation
          setTimeout(() => {
            animateCounters();
          }, 300);
          
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  const animateCounters = () => {
    const counters = counterRefs.current;
    const duration = 2500; // 2.5 seconds
    const startTime = Date.now();
    
    const finalValues = [1200, 150, 35, 220];

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easing function
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      counters.forEach((counter, index) => {
        if (!counter) return;
        
        // Start from finalValues and animate down to 0
        const startValue = finalValues[index];
        const endValue = 0;
        const currentValue = Math.floor(startValue - (startValue - endValue) * easeOutCubic);
        
        counter.innerText = currentValue.toLocaleString();
      });
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Set final value to 0
        counters.forEach((counter) => {
          if (counter) {
            counter.innerText = "0";
          }
        });
      }
    };
    
    animate();
  };

  return (
    <div 
      className="py-16 px-8 md:px-16" 
      style={{ backgroundColor: '#E0E3EB' }}
      ref={statsRef}
    >
      {/* Custom animations */}
      <style jsx>{`
        .stat-item-fade {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .underline-green {
          position: relative;
        }
        .underline-green::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 3px;
          background-color: #2947A9;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          
          {/* Left Side - Header */}
          <div className="max-w-md stat-item-fade">
            <h1 className="text-3xl md:text-4xl text-gray-700 font-serif italic transform -rotate-1 mb-6 leading-tight">
              Empowering Learning
            </h1>
            <h2 className="text-3xl md:text-4xl text-gray-700 font-serif italic transform -rotate-1 mb-6 leading-tight">
                Through Innovation
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our comprehensive AI-powered platform has connected thousands of students with expert mentors, creating exceptional learning outcomes.
            </p>
          </div>

          {/* Right Side - Stats Grid */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-12">
            
            {/* Total Students */}
            <div className="text-center stat-item-fade">
              <div className="mb-3">
                <div className="w-8 h-8 rounded-full mx-auto mb-3" style={{ backgroundColor: '#2947A9' }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
              <div 
                ref={el => counterRefs.current[0] = el}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                1200
              </div>
              <p className="text-gray-500 text-sm font-medium">Total Students</p>
            </div>

            {/* Total Mentors */}
            <div className="text-center stat-item-fade">
              <div className="mb-3">
                <div className="w-8 h-8 mx-auto mb-3 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="12" rx="2" fill="#2947A9"/>
                    <path d="M7 8h10M7 12h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <div 
                ref={el => counterRefs.current[1] = el}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                150
              </div>
              <p className="text-gray-500 text-sm font-medium">Total Mentors</p>
            </div>

            {/* Courses Available */}
            <div className="text-center stat-item-fade">
              <div className="mb-3">
                <div className="w-8 h-8 mx-auto mb-3 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 7L12 2L21 7L12 12L3 7Z" fill="#2947A9"/>
                    <path d="M3 17L12 22L21 17" stroke="#2947A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 12L12 17L21 12" stroke="#2947A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div 
                ref={el => counterRefs.current[2] = el}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                35
              </div>
              <p className="text-gray-500 text-sm font-medium">Courses Available</p>
            </div>

            {/* Projects Completed */}
            <div className="text-center stat-item-fade">
              <div className="mb-3">
                <div className="w-8 h-8 mx-auto mb-3 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="6" cy="6" r="2" fill="#2947A9"/>
                    <circle cx="18" cy="6" r="2" fill="#2947A9"/>
                    <circle cx="6" cy="18" r="2" fill="#2947A9"/>
                    <path d="M8 6H16M6 8V16M8 18H12" stroke="#2947A9" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <div 
                ref={el => counterRefs.current[3] = el}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                220
              </div>
              <p className="text-gray-500 text-sm font-medium">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;