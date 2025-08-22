import React, { useState, useEffect } from 'react';
import { BookOpen, Play, CheckCircle, Clock, MessageCircle, X, Users, GraduationCap, ChevronDown, ChevronUp, Send } from 'lucide-react';

// Dummy data for fallback
const dummyCourseData = {
  "react-fundamentals": {
    name: "React Fundamentals",
    overview: "Master the basics of React including components, state management, and modern hooks. This comprehensive course will take you from beginner to intermediate level with hands-on projects and real-world examples.",
    modules: [
      {
        id: 1,
        title: "Getting Started with React",
        lessons: [
          { 
            id: 1, 
            title: "What is React?", 
            duration: "15 min", 
            completed: true,
            content: {
              type: "text",
              data: "React is a powerful JavaScript library developed by Facebook for building user interfaces, particularly web applications. It's designed around the concept of components - reusable pieces of code that manage their own state and render UI elements.\n\nKey benefits of React include:\n• **Component-Based Architecture**: Build encapsulated components that manage their own state\n• **Virtual DOM**: Efficiently update and render components when data changes\n• **Learn Once, Write Anywhere**: Use React for web, mobile (React Native), and even desktop applications\n• **Strong Ecosystem**: Vast community and extensive library support\n\nReact follows a declarative paradigm, meaning you describe what the UI should look like for any given state, and React figures out how to update the DOM to match that state."
            }
          },
          { 
            id: 2, 
            title: "Setting up Development Environment", 
            duration: "20 min", 
            completed: true,
            content: {
              type: "code",
              data: "# Install Node.js (if not already installed)\n# Download from https://nodejs.org\n\n# Create a new React app\nnpx create-react-app my-first-app\n\n# Navigate to the project directory\ncd my-first-app\n\n# Start the development server\nnpm start\n\n# Your React app will open at http://localhost:3000\n\n# Project structure:\nmy-first-app/\n├── public/\n│   ├── index.html\n│   └── favicon.ico\n├── src/\n│   ├── App.js\n│   ├── App.css\n│   ├── index.js\n│   └── index.css\n└── package.json"
            }
          },
          { 
            id: 3, 
            title: "Your First React Component", 
            duration: "25 min", 
            completed: false,
            content: {
              type: "code",
              data: "// App.js - Your first React component\nimport React from 'react';\nimport './App.css';\n\nfunction App() {\n  return (\n    <div className=\"App\">\n      <header className=\"App-header\">\n        <h1>Hello, React!</h1>\n        <p>Welcome to your first React application.</p>\n        <button onClick={() => alert('Hello from React!')}>\n          Click me!\n        </button>\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n\n// Key concepts:\n// 1. JSX: HTML-like syntax in JavaScript\n// 2. Components: Functions that return JSX\n// 3. Props: Data passed to components\n// 4. Event handling: onClick, onChange, etc."
            }
          }
        ],
        quizzes: [
          {
            id: 1,
            question: "What is the main purpose of React?",
            options: [
              "Database management",
              "Building user interfaces",
              "Server-side rendering only",
              "Mobile app development"
            ],
            correctAnswer: 1
          },
          {
            id: 2,
            question: "Which method is used to create a React component?",
            options: [
              "React.createComponent()",
              "function or class",
              "new React()",
              "React.build()"
            ],
            correctAnswer: 1
          }
        ]
      },
      {
        id: 2,
        title: "Components and Props",
        lessons: [
          { 
            id: 4, 
            title: "Functional vs Class Components", 
            duration: "18 min", 
            completed: false,
            content: {
              type: "code",
              data: "// Functional Component (Modern Approach)\nimport React, { useState } from 'react';\n\nconst FunctionalComponent = ({ name }) => {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <h2>Hello, {name}!</h2>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>\n        Increment\n      </button>\n    </div>\n  );\n};\n\n// Class Component (Legacy Approach)\nimport React, { Component } from 'react';\n\nclass ClassComponent extends Component {\n  constructor(props) {\n    super(props);\n    this.state = { count: 0 };\n  }\n  \n  render() {\n    return (\n      <div>\n        <h2>Hello, {this.props.name}!</h2>\n        <p>Count: {this.state.count}</p>\n        <button onClick={() => this.setState({count: this.state.count + 1})}>\n          Increment\n        </button>\n      </div>\n    );\n  }\n}\n\n// Modern React prefers functional components with hooks"
            }
          },
          { 
            id: 5, 
            title: "Understanding Props", 
            duration: "22 min", 
            completed: false,
            content: {
              type: "text",
              data: "Props (properties) are how you pass data from parent components to child components in React. They are read-only and help make components reusable.\n\n**Key Concepts:**\n\n• **Immutable**: Props cannot be modified by the receiving component\n• **Unidirectional**: Data flows down from parent to child\n• **Any Type**: Props can be strings, numbers, objects, arrays, or functions\n• **Default Values**: You can specify default props for components\n\n**Example Usage:**\n```jsx\n// Parent Component\nfunction App() {\n  return (\n    <WelcomeMessage \n      name=\"John\" \n      age={25} \n      isStudent={true}\n    />\n  );\n}\n\n// Child Component\nfunction WelcomeMessage({ name, age, isStudent }) {\n  return (\n    <div>\n      <h1>Welcome, {name}!</h1>\n      <p>Age: {age}</p>\n      {isStudent && <p>Student Status: Active</p>}\n    </div>\n  );\n}\n```\n\nProps enable component reusability and help maintain a clean separation of concerns in your React applications."
            }
          }
        ],
        quizzes: [
          {
            id: 3,
            question: "How do you pass data to a React component?",
            options: [
              "Through props",
              "Through state only",
              "Through global variables",
              "Through localStorage"
            ],
            correctAnswer: 0
          }
        ]
      },
      {
        id: 3,
        title: "State and Event Handling",
        lessons: [
          { 
            id: 7, 
            title: "Introduction to State", 
            duration: "20 min", 
            completed: false,
            content: {
              type: "text",
              data: "State is a JavaScript object that stores component data that can change over time. Unlike props, state is mutable and is managed within the component itself.\n\n**Key Concepts:**\n\n• **Local to Component**: Each component manages its own state\n• **Triggers Re-renders**: When state changes, React re-renders the component\n• **Asynchronous Updates**: State updates may be batched for performance\n• **Immutable Updates**: Always create new state objects, don't mutate directly\n\n**useState Hook:**\nThe useState hook is the primary way to add state to functional components:\n\n```jsx\nimport React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  const [name, setName] = useState('');\n  \n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>\n        Increment\n      </button>\n      \n      <input \n        value={name}\n        onChange={(e) => setName(e.target.value)}\n        placeholder=\"Enter your name\"\n      />\n      <p>Hello, {name}!</p>\n    </div>\n  );\n}\n```"
            }
          }
        ],
        quizzes: [
          {
            id: 4,
            question: "What hook is used to manage state in functional components?",
            options: [
              "useEffect",
              "useState",
              "useContext",
              "useReducer"
            ],
            correctAnswer: 1
          }
        ]
      }
    ]
  },
  "javascript-advanced": {
    name: "Advanced JavaScript",
    overview: "Deep dive into advanced JavaScript concepts including closures, prototypes, asynchronous programming, and modern ES6+ features. Perfect for developers looking to master JavaScript.",
    modules: [
      {
        id: 1,
        title: "Closures and Scope",
        lessons: [
          { id: 1, title: "Understanding Closures", duration: "30 min", completed: false },
          { id: 2, title: "Lexical Scope", duration: "25 min", completed: false }
        ],
        quizzes: [
          {
            id: 1,
            question: "What is a closure in JavaScript?",
            options: [
              "A type of loop",
              "A function with access to outer scope",
              "A data structure",
              "An error handling mechanism"
            ],
            correctAnswer: 1
          }
        ]
      }
    ]
  }
};

// Dummy students data
const dummyStudentsData = {
  "react-fundamentals": [
    { id: 1, name: "Sarah Chen", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1-0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" },
    { id: 2, name: "Michael Rodriguez", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" },
    { id: 3, name: "Emily Johnson", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" },
    { id: 4, name: "David Kim", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" },
    { id: 5, name: "Lisa Wang", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" },
    { id: 6, name: "Alex Thompson", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" }
  ],
  "javascript-advanced": [
    { id: 1, name: "John Doe", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" },
    { id: 2, name: "Jane Smith", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" }
  ]
};

// Dummy mentors data
const dummyMentorsData = {
  "react-fundamentals": [
    {
      id: 1,
      name: "Dr. Amanda Foster",
      expertise: "React Expert, Frontend Architecture",
      experience: "8 years",
      rating: 4.9,
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      contact: "amanda.foster@email.com"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      expertise: "Full-Stack Developer, React Specialist",
      experience: "6 years",
      rating: 4.8,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      contact: "marcus.johnson@email.com"
    },
    {
      id: 3,
      name: "Priya Patel",
      expertise: "React Hooks, State Management",
      experience: "5 years",
      rating: 4.9,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      contact: "priya.patel@email.com"
    }
  ],
  "javascript-advanced": [
    {
      id: 1,
      name: "Robert Chen",
      expertise: "Advanced JavaScript, Node.js",
      experience: "10 years",
      rating: 4.9,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      contact: "robert.chen@email.com"
    }
  ]
};

const CoursePage = ({ courseName = "react-fundamentals" }) => {
  // For demo purposes, defaulting to "react-fundamentals"
  // In a real React Router setup, you would use: const { courseName } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [studentsData, setStudentsData] = useState([]);
  const [mentorsData, setMentorsData] = useState([]);
  const [expandedModules, setExpandedModules] = useState({});
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: "Hi! I'm here to help you with this course. Feel free to ask me any questions!", sender: "bot", timestamp: new Date() }
  ]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        setLoading(true);
        // Simulating API calls - replace with actual axios calls
        // const courseResponse = await axios.get(`/api/courses/${courseName}`);
        // const studentsResponse = await axios.get(`/api/students/${courseName}`);
        // const mentorsResponse = await axios.get(`/api/mentors/${courseName}`);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Check if we have dummy data for this course
        if (dummyCourseData[courseName]) {
          setCourseData(dummyCourseData[courseName]);
          setStudentsData(dummyStudentsData[courseName] || []);
          setMentorsData(dummyMentorsData[courseName] || []);
          
          // Initialize all modules as expanded
          const initialExpanded = {};
          dummyCourseData[courseName].modules.forEach(module => {
            initialExpanded[module.id] = true;
          });
          setExpandedModules(initialExpanded);
        } else {
          throw new Error('Course not found');
        }
      } catch (err) {
        setError(err.message);
        // Fallback to first dummy course if API fails
        const firstCourse = Object.values(dummyCourseData)[0];
        const firstCourseName = Object.keys(dummyCourseData)[0];
        setCourseData(firstCourse);
        setStudentsData(dummyStudentsData[firstCourseName] || []);
        setMentorsData(dummyMentorsData[firstCourseName] || []);
      } finally {
        setLoading(false);
      }
    };

    if (courseName) {
      fetchCourseData();
    }
  }, [courseName]);

  const handleQuizAnswer = (quizId, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [quizId]: answerIndex
    }));
  };

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
  };

  const closeLessonModal = () => {
    setSelectedLesson(null);
  };

  const toggleModule = (moduleId) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const userMessage = {
      id: chatMessages.length + 1,
      text: newMessage,
      sender: "user",
      timestamp: new Date()
    };
    
    setChatMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: chatMessages.length + 2,
        text: "Thanks for your question! This is a mock response. In a real implementation, this would connect to a chatbot service to provide helpful answers about the course content.",
        sender: "bot",
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const renderLessonContent = (content) => {
    if (content.type === 'code') {
      return (
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{content.data}</code>
        </pre>
      );
    } else {
      // Text content with markdown-like formatting
      return (
        <div className="prose max-w-none">
          {content.data.split('\n').map((paragraph, index) => {
            if (paragraph.trim() === '') return <br key={index} />;
            
            // Handle bold text
            let formattedText = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            // Handle bullet points
            if (paragraph.trim().startsWith('•')) {
              return (
                <li key={index} className="ml-4 mb-2" dangerouslySetInnerHTML={{ __html: formattedText.replace('•', '') }} />
              );
            }
            
            return (
              <p key={index} className="mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: formattedText }} />
            );
          })}
        </div>
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading course...</p>
        </div>
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Course Not Found</h2>
          <p className="text-gray-600">The requested course could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Course Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">{courseData.name}</h1>
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
              API Error: {error}. Showing dummy data.
            </div>
          )}
          
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Course Overview</h2>
            <p className="text-gray-700 leading-relaxed">{courseData.overview}</p>
          </div>
        </div>

        {/* Modules */}
        <div className="space-y-8">
          {courseData.modules.map((module, moduleIndex) => (
            <div key={module.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Module Header */}
              <div 
                className="bg-blue-600 text-white p-6 cursor-pointer flex items-center justify-between hover:bg-blue-700 transition-colors"
                onClick={() => toggleModule(module.id)}
              >
                <h2 className="text-2xl font-bold">
                  Module {moduleIndex + 1}: {module.title}
                </h2>
                {expandedModules[module.id] ? (
                  <ChevronUp className="h-6 w-6" />
                ) : (
                  <ChevronDown className="h-6 w-6" />
                )}
              </div>

              {/* Module Content - Collapsible */}
              {expandedModules[module.id] && (
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Play className="h-5 w-5 mr-2" />
                    Lessons
                  </h3>
                  <div className="grid gap-3 mb-8">
                    {module.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                        onClick={() => handleLessonClick(lesson)}
                      >
                        <div className="flex items-center">
                          {lesson.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          ) : (
                            <div className="h-5 w-5 border-2 border-gray-300 rounded-full mr-3"></div>
                          )}
                          <span className={`font-medium ${lesson.completed ? 'text-green-700' : 'text-gray-900'}`}>
                            {lesson.title}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {lesson.duration}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quizzes */}
                  {module.quizzes && module.quizzes.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Module Quiz
                      </h3>
                      <div className="space-y-6">
                        {module.quizzes.map((quiz, quizIndex) => (
                          <div key={quiz.id} className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                            <h4 className="text-md font-semibold text-gray-900 mb-4">
                              Question {quizIndex + 1}: {quiz.question}
                            </h4>
                            <div className="space-y-2">
                              {quiz.options.map((option, optionIndex) => {
                                const isSelected = selectedAnswers[quiz.id] === optionIndex;
                                const isCorrect = optionIndex === quiz.correctAnswer;
                                const showResult = selectedAnswers[quiz.id] !== undefined;
                                
                                return (
                                  <button
                                    key={optionIndex}
                                    onClick={() => handleQuizAnswer(quiz.id, optionIndex)}
                                    className={`w-full text-left p-3 rounded-lg border transition-colors ${
                                      showResult
                                        ? isCorrect
                                          ? 'bg-green-100 border-green-300 text-green-800'
                                          : isSelected
                                          ? 'bg-red-100 border-red-300 text-red-800'
                                          : 'bg-gray-100 border-gray-300 text-gray-600'
                                        : isSelected
                                        ? 'bg-blue-100 border-blue-300 text-blue-800'
                                        : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                                    }`}
                                    disabled={showResult}
                                  >
                                    <span className="font-medium mr-2">
                                      {String.fromCharCode(65 + optionIndex)}.
                                    </span>
                                    {option}
                                    {showResult && isCorrect && (
                                      <CheckCircle className="inline h-5 w-5 ml-2 text-green-600" />
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                            {selectedAnswers[quiz.id] !== undefined && (
                              <div className="mt-4 p-3 rounded-lg bg-blue-50 border border-blue-200">
                                <p className="text-sm text-blue-800">
                                  {selectedAnswers[quiz.id] === quiz.correctAnswer
                                    ? '✓ Correct! Well done.'
                                    : `✗ Incorrect. The correct answer is ${String.fromCharCode(65 + quiz.correctAnswer)}.`}
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Students Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Users className="h-6 w-6 mr-3 text-blue-600" />
            Students who recently learned {courseData.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {studentsData.map((student) => (
              <div key={student.id} className="text-center group cursor-pointer">
                <div className="relative mb-2">
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="w-16 h-16 rounded-full mx-auto object-cover border-4 border-gray-200 group-hover:border-blue-400 transition-colors"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                  {student.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mentors Section */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <GraduationCap className="h-6 w-6 mr-3 text-blue-600" />
            Mentors teaching this course
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mentorsData.map((mentor) => (
              <div key={mentor.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{mentor.name}</h3>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(mentor.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">{mentor.rating}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Expertise:</strong> {mentor.expertise}
                </p>
                <p className="text-sm text-gray-700 mb-4">
                  <strong>Experience:</strong> {mentor.experience}
                </p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Contact Mentor
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Chatbot Button */}
      {!isChatbotOpen && (
        <button
          onClick={() => setIsChatbotOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chatbot Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-2/5 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isChatbotOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Chatbot Header */}
          <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center">
              <MessageCircle className="h-6 w-6 mr-3" />
              <div>
                <h3 className="font-semibold">Course Assistant</h3>
                <p className="text-sm opacity-90">Ask me anything about this course</p>
              </div>
            </div>
            <button
              onClick={() => setIsChatbotOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {chatMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-900 border border-gray-200'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isChatbotOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={() => setIsChatbotOpen(false)}
        />
      )}

      {/* Lesson Content Modal */}
      {selectedLesson && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center">
                <Play className="h-6 w-6 text-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{selectedLesson.title}</h3>
                  <p className="text-sm text-gray-600 flex items-center mt-1">
                    <Clock className="h-4 w-4 mr-1" />
                    {selectedLesson.duration}
                  </p>
                </div>
              </div>
              <button
                onClick={closeLessonModal}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              {selectedLesson.content && renderLessonContent(selectedLesson.content)}
            </div>
            
            {/* Modal Footer */}
            <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center">
                {selectedLesson.completed ? (
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="font-medium">Completed</span>
                  </div>
                ) : (
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Mark as Complete
                  </button>
                )}
              </div>
              <button
                onClick={closeLessonModal}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursePage;