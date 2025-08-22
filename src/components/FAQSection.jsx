import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openQuestions, setOpenQuestions] = useState(new Set());

  const faqData = [
    {
      id: 1,
      question: "How does SkillSphere AI personalize my learning?",
      answer: "The platform analyzes your skills, interests, and progress to recommend the most effective learning paths for you."
    },
    {
      id: 2,
      question: "Can I track my learning progress?",
      answer: "Yes, the dashboard provides real-time updates on courses completed, skills mastered, and overall progress."
    },
    {
      id: 3,
      question: "What kind of mentorship opportunities are available?",
      answer: "Mentors can provide 1-on-1 sessions, group workshops, code reviews, and career guidance."
    },
    {
      id: 4,
      question: "How do I become a mentor?",
      answer: "Sign up as a mentor, complete a brief profile, and start guiding students through personalized sessions."
    },
    {
      id: 5,
      question: "Can I switch between different learning paths?",
      answer: "Yes, the platform allows flexibility to explore and switch between multiple learning paths anytime."
    },
    {
      id: 6,
      question: "How does the AI match me with mentors?",
      answer: "Our AI analyzes your goals and skill gaps to suggest mentors best suited to guide your learning journey."
    },
    {
      id: 7,
      question: "Is there a time limit to complete courses?",
      answer: "No, you can learn at your own pace and access the content anytime."
    },
    {
      id: 8,
      question: "Can I collaborate with other students?",
      answer: "Yes, the platform encourages collaborative projects and peer learning opportunities."
    },
    {
      id: 9,
      question: "How secure is my personal data?",
      answer: "We follow strict data privacy policies and secure encryption to protect your personal information."
    },
    {
      id: 10,
      question: "What support is available if I face issues?",
      answer: "Our support team is available 24/7 to assist you via chat, email, or help center."
    },
    {
      id: 11,
      question: "Can mentors track student success?",
      answer: "Yes, mentors get insights into student progress, engagement, and overall success through their dashboard."
    },
    {
      id: 12,
      question: "How can I get started with the platform?",
      answer: "Simply create an account, explore your learning paths, and start engaging with mentors and resources."
    }
  ];

  const toggleQuestion = (id) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(id)) {
      newOpenQuestions.delete(id);
    } else {
      newOpenQuestions.add(id);
    }
    setOpenQuestions(newOpenQuestions);
  };

  const leftColumnFAQs = faqData.slice(0, 6);
  const rightColumnFAQs = faqData.slice(6, 12);

  const renderFAQItem = (faq) => {
    const isOpen = openQuestions.has(faq.id);
    
    return (
      <div 
        key={faq.id} 
        className={`border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'border-l-4 border-l-[#2947A9] bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text' 
            : 'border-[#E0E3EB]'
        }`}
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <button
          onClick={() => toggleQuestion(faq.id)}
          className="w-full py-3 px-4 text-left flex justify-between items-center cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#2947A9] focus:ring-opacity-50 group"
          style={{ fontFamily: 'Aptos, sans-serif' }}
        >
          <span className={`font-medium transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent' 
              : 'text-[#111827] group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-yellow-400 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent'
          }`}>
            {faq.question}
          </span>
          <ChevronDown 
            className={`w-5 h-5 text-[#91A1D4] transition-all duration-300 ease-in-out group-hover:text-[#2947A9] ${isOpen ? 'transform rotate-180' : ''}`} 
          />
        </button>
        
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-3 px-4 border-t border-[#E0E3EB]" style={{ backgroundColor: '#F8F9FA' }}>
            <p 
              className="text-[#91A1D4] leading-relaxed"
              style={{ fontFamily: 'Aptos, sans-serif' }}
            >
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen py-16 px-6" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif italic transform -rotate-1 mb-16 leading-tight text-center" style={{ color: '#111827' }}>
          Frequently Asked Questions
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-6">
            {leftColumnFAQs.map(renderFAQItem)}
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            {rightColumnFAQs.map(renderFAQItem)}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-[#91A1D4] text-base" style={{ fontFamily: 'Aptos, sans-serif' }}>
            Have more questions? Contact our support team anytime!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;