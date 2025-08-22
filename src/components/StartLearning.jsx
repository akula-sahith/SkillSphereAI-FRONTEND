import React, { useState } from 'react';
import { Search, BookOpen, Play, Loader2, AlertCircle, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const StartLearning = () => {
  const [topic, setTopic] = useState('');
  const [overview, setOverview] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasOverview, setHasOverview] = useState(false);

   const navigate = useNavigate(); // ✅ keep it here


  const handleStartCourse = () => {
    navigate(`/course/${encodeURIComponent(topic)}`);
  };

  // Simulated API response - replace with actual axios call
  const simulatedApiResponses = {
    'react': {
      title: 'React.js Development',
      description: 'Learn to build modern, interactive web applications with React.js, the popular JavaScript library for building user interfaces.',
      duration: '8-12 weeks',
      difficulty: 'Intermediate',
      topics: [
        'Components and JSX',
        'State and Props',
        'Event Handling',
        'Hooks (useState, useEffect)',
        'Context API',
        'React Router',
        'State Management',
        'Testing React Apps'
      ],
      prerequisites: ['JavaScript fundamentals', 'HTML/CSS basics', 'ES6+ features']
    },
    'python': {
      title: 'Python Programming',
      description: 'Master Python programming from basics to advanced concepts. Learn data structures, algorithms, and popular Python libraries.',
      duration: '10-14 weeks',
      difficulty: 'Beginner to Intermediate',
      topics: [
        'Python Syntax and Basics',
        'Data Types and Variables',
        'Control Flow',
        'Functions and Modules',
        'Object-Oriented Programming',
        'File Handling',
        'Popular Libraries (NumPy, Pandas)',
        'Web Development with Django/Flask'
      ],
      prerequisites: ['Basic computer literacy', 'Logical thinking']
    },
    'machine learning': {
      title: 'Machine Learning Fundamentals',
      description: 'Dive into the world of machine learning. Learn algorithms, data preprocessing, model evaluation, and practical implementation.',
      duration: '12-16 weeks',
      difficulty: 'Advanced',
      topics: [
        'Introduction to ML',
        'Supervised Learning',
        'Unsupervised Learning',
        'Data Preprocessing',
        'Feature Engineering',
        'Model Evaluation',
        'Neural Networks Basics',
        'Popular ML Libraries'
      ],
      prerequisites: ['Python programming', 'Statistics basics', 'Linear algebra']
    }
  };

  const handleGetOverview = async () => {
    if (!topic.trim()) {
      setError('Please enter a topic name');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // In real implementation, replace this with:
      // const response = await axios.get(`/api/courses/${encodeURIComponent(topic)}`);
      // const data = response.data;

      const data = simulatedApiResponses[topic.toLowerCase()] || {
        title: `${topic.charAt(0).toUpperCase() + topic.slice(1)} Course`,
        description: `Comprehensive course covering ${topic} fundamentals and advanced concepts. This course will take you from beginner to proficient level.`,
        duration: '8-12 weeks',
        difficulty: 'Intermediate',
        topics: [
          `${topic} Fundamentals`,
          `${topic} Best Practices`,
          'Hands-on Projects',
          'Real-world Applications',
          'Advanced Concepts'
        ],
        prerequisites: ['Basic programming knowledge']
      };

      setOverview(data);
      setHasOverview(true);
    } catch (err) {
      setError('Failed to fetch course overview. Please try again.');
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

 

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) {
      handleGetOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-blue-600 mr-2" />
            <h1 className="text-4xl font-bold text-gray-900">Start Learning</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover new topics and begin your learning journey. Enter any subject you're curious about!
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="mb-6">
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
              What would you like to learn?
            </label>
            <div className="relative">
              <input
                id="topic"
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="e.g., React, Python, Machine Learning, Data Science..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                disabled={loading}
              />
              <Search className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <button
            onClick={handleGetOverview}
            disabled={loading || !topic.trim()}
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Fetching Overview...
              </>
            ) : (
              <>
                <BookOpen className="w-5 h-5 mr-2" />
                Get Overview
              </>
            )}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 flex items-center">
            <AlertCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Overview Display */}
        {hasOverview && overview && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-fade-in">
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{overview.title}</h2>
              <p className="text-lg text-gray-600">{overview.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Course Details */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{overview.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className={`font-medium px-2 py-1 rounded-full text-sm ${
                      overview.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      overview.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      overview.difficulty === 'Advanced' ? 'bg-red-100 text-red-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {overview.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              {/* Prerequisites */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Prerequisites</h3>
                <ul className="space-y-2">
                  {overview.prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      {prereq}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Topics Covered */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {overview.topics.map((topicItem, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-800">{topicItem}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Start Course Button */}
            <div className="text-center">
              <button
                onClick={handleStartCourse}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center mx-auto shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Start This as a Course
              </button>
              <p className="text-sm text-gray-500 mt-2">
                Ready to begin your learning journey?
              </p>
            </div>
          </div>
        )}

        {/* Popular Topics Suggestions */}
        {!hasOverview && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Topics</h3>
            <div className="flex flex-wrap gap-3">
              {['React', 'Python', 'Machine Learning', 'Data Science', 'JavaScript', 'Node.js', 'SQL', 'Docker'].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setTopic(suggestion)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 text-sm font-medium"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartLearning;