import React from 'react';
import { User, BookOpen, Award, Bell, Play, Plus, BarChart3, Star, Clock, Users } from 'lucide-react';

const StudentDashboard = () => {
  // Dummy data
  const student = {
    name: "Alex Johnson",
    profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    overallProgress: 68,
    skills: ["JavaScript", "React", "Node.js", "Python", "SQL"]
  };

  const courses = [
    {
      id: 1,
      name: "Full Stack Web Development",
      progress: 75,
      completedModules: 15,
      totalModules: 20,
      lastAccessed: "2 hours ago"
    },
    {
      id: 2,
      name: "Data Science Fundamentals",
      progress: 45,
      completedModules: 9,
      totalModules: 20,
      lastAccessed: "1 day ago"
    },
    {
      id: 3,
      name: "Machine Learning Basics",
      progress: 30,
      completedModules: 6,
      totalModules: 20,
      lastAccessed: "3 days ago"
    }
  ];

  const notifications = [
    {
      id: 1,
      type: "mentor",
      title: "Feedback on your React project",
      message: "Great work on the component architecture!",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 2,
      type: "achievement",
      title: "New Badge Earned!",
      message: "You've completed 5 JavaScript challenges",
      time: "1 day ago",
      unread: true
    },
    {
      id: 3,
      type: "course",
      title: "New module available",
      message: "Advanced React Hooks is now available",
      time: "2 days ago",
      unread: false
    }
  ];

  const achievements = [
    { name: "JavaScript Master", icon: "⭐", color: "bg-yellow-100 text-yellow-800" },
    { name: "Quick Learner", icon: "⚡", color: "bg-blue-100 text-blue-800" },
    { name: "Problem Solver", icon: "🧩", color: "bg-purple-100 text-purple-800" },
    { name: "Team Player", icon: "🤝", color: "bg-green-100 text-green-800" }
  ];

  const ProgressBar = ({ progress, className = "" }) => (
    <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
      <div 
        className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-in-out" 
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Student Dashboard</h1>
          <p className="text-gray-600">Welcome back! Ready to continue your learning journey?</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-start space-x-6">
                <img
                  src={student.profilePicture}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{student.name}</h2>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                      <span className="text-sm font-semibold text-blue-600">{student.overallProgress}%</span>
                    </div>
                    <ProgressBar progress={student.overallProgress} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {student.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 group">
                  <BarChart3 className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-center">Get AI-Generated Roadmap</span>
                </button>
                <button className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 group">
                  <Plus className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-center">Start Learning New Concept</span>
                </button>
                <button className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-200 group">
                  <Play className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-center">Continue Learning</span>
                </button>
              </div>
            </div>

            {/* Enrolled Courses */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enrolled Courses</h3>
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{course.name}</h4>
                        <p className="text-sm text-gray-500 flex items-center mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          Last accessed {course.lastAccessed}
                        </p>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                        Resume Course
                      </button>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">
                        {course.completedModules} of {course.totalModules} modules completed
                      </span>
                      <span className="text-sm font-semibold text-blue-600">{course.progress}%</span>
                    </div>
                    <ProgressBar progress={course.progress} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Achievements */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-yellow-500" />
                Achievements
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((badge, index) => (
                  <div
                    key={index}
                    className={`${badge.color} rounded-lg p-3 text-center hover:scale-105 transition-transform cursor-pointer`}
                  >
                    <div className="text-2xl mb-1">{badge.icon}</div>
                    <div className="text-xs font-medium">{badge.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Bell className="w-5 h-5 mr-2 text-blue-500" />
                Recent Notifications
              </h3>
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-3 rounded-lg border ${
                      notification.unread 
                        ? 'bg-blue-50 border-blue-200' 
                        : 'bg-gray-50 border-gray-200'
                    } hover:shadow-sm transition-shadow`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-sm font-semibold text-gray-900">{notification.title}</h4>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                    <p className="text-xs text-gray-500">{notification.time}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium">
                View all notifications
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;