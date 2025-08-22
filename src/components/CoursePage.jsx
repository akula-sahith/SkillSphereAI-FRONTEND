import React, { useState, useEffect } from 'react';
import { BookOpen, Play, CheckCircle, Clock } from 'lucide-react';

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
          },
          { 
            id: 6, 
            title: "Component Composition", 
            duration: "30 min", 
            completed: false,
            content: {
              type: "code",
              data: "// Component Composition Example\nimport React from 'react';\n\n// Reusable Button Component\nconst Button = ({ children, variant = 'primary', onClick }) => {\n  const baseClasses = 'px-4 py-2 rounded font-medium';\n  const variants = {\n    primary: 'bg-blue-500 text-white hover:bg-blue-600',\n    secondary: 'bg-gray-300 text-gray-700 hover:bg-gray-400'\n  };\n  \n  return (\n    <button \n      className={`${baseClasses} ${variants[variant]}`}\n      onClick={onClick}\n    >\n      {children}\n    </button>\n  );\n};\n\n// Card Component\nconst Card = ({ title, children }) => (\n  <div className=\"border rounded-lg p-6 shadow-md\">\n    {title && <h3 className=\"text-xl font-bold mb-4\">{title}</h3>}\n    {children}\n  </div>\n);\n\n// Composed Component\nconst UserProfile = ({ user }) => (\n  <Card title=\"User Profile\">\n    <img src={user.avatar} alt={user.name} className=\"w-16 h-16 rounded-full mb-4\" />\n    <h4 className=\"text-lg\">{user.name}</h4>\n    <p className=\"text-gray-600 mb-4\">{user.email}</p>\n    <div className=\"flex gap-2\">\n      <Button onClick={() => alert('Edit clicked')}>Edit</Button>\n      <Button variant=\"secondary\" onClick={() => alert('Delete clicked')}>Delete</Button>\n    </div>\n  </Card>\n);\n\nexport default UserProfile;"
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
          },
          { 
            id: 8, 
            title: "Event Handling in React", 
            duration: "25 min", 
            completed: false,
            content: {
              type: "code",
              data: "import React, { useState } from 'react';\n\nfunction EventHandlingExamples() {\n  const [message, setMessage] = useState('');\n  const [selectedOption, setSelectedOption] = useState('');\n  \n  // Click Event Handler\n  const handleClick = () => {\n    alert('Button clicked!');\n  };\n  \n  // Form Submit Handler\n  const handleSubmit = (e) => {\n    e.preventDefault(); // Prevent page refresh\n    console.log('Form submitted with:', message);\n  };\n  \n  // Input Change Handler\n  const handleInputChange = (e) => {\n    setMessage(e.target.value);\n  };\n  \n  // Mouse Events\n  const handleMouseEnter = () => {\n    console.log('Mouse entered!');\n  };\n  \n  // Keyboard Events\n  const handleKeyDown = (e) => {\n    if (e.key === 'Enter') {\n      console.log('Enter key pressed!');\n    }\n  };\n  \n  return (\n    <div>\n      {/* Click Events */}\n      <button onClick={handleClick}>Click Me</button>\n      \n      {/* Form Events */}\n      <form onSubmit={handleSubmit}>\n        <input\n          type=\"text\"\n          value={message}\n          onChange={handleInputChange}\n          onKeyDown={handleKeyDown}\n          placeholder=\"Type something...\"\n        />\n        <button type=\"submit\">Submit</button>\n      </form>\n      \n      {/* Mouse Events */}\n      <div\n        onMouseEnter={handleMouseEnter}\n        onMouseLeave={() => console.log('Mouse left!')}\n        style={{ padding: '20px', backgroundColor: '#f0f0f0' }}\n      >\n        Hover over me!\n      </div>\n      \n      {/* Select Events */}\n      <select \n        value={selectedOption} \n        onChange={(e) => setSelectedOption(e.target.value)}\n      >\n        <option value=\"\">Choose an option</option>\n        <option value=\"option1\">Option 1</option>\n        <option value=\"option2\">Option 2</option>\n      </select>\n      \n      <p>Current message: {message}</p>\n      <p>Selected: {selectedOption}</p>\n    </div>\n  );\n}\n\nexport default EventHandlingExamples;"
            }
          },
          { 
            id: 9, 
            title: "Forms and Controlled Components", 
            duration: "35 min", 
            completed: false,
            content: {
              type: "code",
              data: "import React, { useState } from 'react';\n\n// Controlled Form Component\nfunction ContactForm() {\n  const [formData, setFormData] = useState({\n    name: '',\n    email: '',\n    message: '',\n    category: 'general',\n    newsletter: false\n  });\n  \n  const [errors, setErrors] = useState({});\n  \n  // Handle input changes\n  const handleChange = (e) => {\n    const { name, value, type, checked } = e.target;\n    setFormData(prev => ({\n      ...prev,\n      [name]: type === 'checkbox' ? checked : value\n    }));\n    \n    // Clear error when user starts typing\n    if (errors[name]) {\n      setErrors(prev => ({ ...prev, [name]: '' }));\n    }\n  };\n  \n  // Validation\n  const validateForm = () => {\n    const newErrors = {};\n    \n    if (!formData.name.trim()) {\n      newErrors.name = 'Name is required';\n    }\n    \n    if (!formData.email.trim()) {\n      newErrors.email = 'Email is required';\n    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {\n      newErrors.email = 'Email is invalid';\n    }\n    \n    if (!formData.message.trim()) {\n      newErrors.message = 'Message is required';\n    }\n    \n    return newErrors;\n  };\n  \n  // Handle form submission\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    \n    const newErrors = validateForm();\n    if (Object.keys(newErrors).length === 0) {\n      console.log('Form submitted:', formData);\n      // Reset form\n      setFormData({\n        name: '',\n        email: '',\n        message: '',\n        category: 'general',\n        newsletter: false\n      });\n      alert('Form submitted successfully!');\n    } else {\n      setErrors(newErrors);\n    }\n  };\n  \n  return (\n    <form onSubmit={handleSubmit} className=\"max-w-md mx-auto\">\n      <div className=\"mb-4\">\n        <label className=\"block text-sm font-medium mb-2\">Name:</label>\n        <input\n          type=\"text\"\n          name=\"name\"\n          value={formData.name}\n          onChange={handleChange}\n          className=\"w-full p-2 border rounded\"\n        />\n        {errors.name && <p className=\"text-red-500 text-sm mt-1\">{errors.name}</p>}\n      </div>\n      \n      <div className=\"mb-4\">\n        <label className=\"block text-sm font-medium mb-2\">Email:</label>\n        <input\n          type=\"email\"\n          name=\"email\"\n          value={formData.email}\n          onChange={handleChange}\n          className=\"w-full p-2 border rounded\"\n        />\n        {errors.email && <p className=\"text-red-500 text-sm mt-1\">{errors.email}</p>}\n      </div>\n      \n      <div className=\"mb-4\">\n        <label className=\"block text-sm font-medium mb-2\">Category:</label>\n        <select\n          name=\"category\"\n          value={formData.category}\n          onChange={handleChange}\n          className=\"w-full p-2 border rounded\"\n        >\n          <option value=\"general\">General</option>\n          <option value=\"support\">Support</option>\n          <option value=\"feedback\">Feedback</option>\n        </select>\n      </div>\n      \n      <div className=\"mb-4\">\n        <label className=\"block text-sm font-medium mb-2\">Message:</label>\n        <textarea\n          name=\"message\"\n          value={formData.message}\n          onChange={handleChange}\n          rows=\"4\"\n          className=\"w-full p-2 border rounded\"\n        />\n        {errors.message && <p className=\"text-red-500 text-sm mt-1\">{errors.message}</p>}\n      </div>\n      \n      <div className=\"mb-4\">\n        <label className=\"flex items-center\">\n          <input\n            type=\"checkbox\"\n            name=\"newsletter\"\n            checked={formData.newsletter}\n            onChange={handleChange}\n            className=\"mr-2\"\n          />\n          Subscribe to newsletter\n        </label>\n      </div>\n      \n      <button\n        type=\"submit\"\n        className=\"w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600\"\n      >\n        Submit\n      </button>\n    </form>\n  );\n}\n\nexport default ContactForm;"
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

const CoursePage = ({ courseName = "react-fundamentals" }) => {
  // For demo purposes, defaulting to "react-fundamentals"
  // In a real React Router setup, you would use: const { courseName } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [selectedLesson, setSelectedLesson] = useState(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        setLoading(true);
        // Simulating API call - replace with actual axios call
        // const response = await axios.get(`/api/courses/${courseName}`);
        // setCourseData(response.data);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Check if we have dummy data for this course
        if (dummyCourseData[courseName]) {
          setCourseData(dummyCourseData[courseName]);
        } else {
          throw new Error('Course not found');
        }
      } catch (err) {
        setError(err.message);
        // Fallback to first dummy course if API fails
        setCourseData(Object.values(dummyCourseData)[0]);
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
    <div className="min-h-screen bg-gray-50">
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
              <div className="bg-blue-600 text-white p-6">
                <h2 className="text-2xl font-bold">
                  Module {moduleIndex + 1}: {module.title}
                </h2>
              </div>

              {/* Lessons */}
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
            </div>
          ))}
        </div>

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
    </div>
  );
};

export default CoursePage;