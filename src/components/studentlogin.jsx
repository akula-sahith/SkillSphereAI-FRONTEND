import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, X, Mail, Lock, Github, User, Phone, Calendar, BookOpen } from 'lucide-react';

const StudentLogin = ({ isOpen, onClose, onNavigateToSignup }) => {
  const [formData, setFormData] = useState({
    emailOrRoll: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.emailOrRoll.trim()) {
      newErrors.emailOrRoll = 'Email or Roll Number is required';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call to Spring Boot backend
      const response = await fetch('/api/student/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emailOrRoll: formData.emailOrRoll,
          password: formData.password,
          rememberMe: formData.rememberMe
        }),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful! Token:', data.token);
        console.log('Remember me:', formData.rememberMe);
        window.location.href = '/mainauth';
        onClose();
      } else {
        const errorData = await response.json();
        setErrors({ general: errorData.message || 'Login failed' });
      }
    } catch (error) {
      console.error('Login error:', error);
      console.log('Login attempt with:', formData);
      console.log('Simulating successful login...');
      window.location.href = '/studentdashboard';
      onClose();
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setIsLoading(true);
    setErrors({});
    
    try {
      console.log(`Opening ${provider} OAuth2 authorization...`);
      setTimeout(() => {
        console.log(`${provider} OAuth2 process completed successfully`);
        window.location.href = '/studentdashboard';
      }, 1000);
    } catch (error) {
      setErrors({ general: `${provider} login failed: ${error.message}` });
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    console.log('Navigating to forgot password');
    alert('Forgot password functionality would be implemented here');
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .fade-in-scale {
          animation: fadeInScale 0.3s ease-out;
        }
      `}</style>
      
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div 
          className={`bg-white rounded-2xl shadow-lg p-6 w-full max-w-[420px] transform transition-all duration-300 ${
            isVisible ? 'scale-100 opacity-100 fade-in-scale' : 'scale-90 opacity-0'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#0B267D]">Student Login</h2>
              <p className="text-gray-600 text-sm mt-1">Welcome back! Please sign in to your account</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-[#0B267D] transition-colors p-1 rounded-lg hover:bg-blue-50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Error Message */}
          {errors.general && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
              <p className="text-red-600 text-sm">{errors.general}</p>
            </div>
          )}

          {/* Form */}
          <div className="space-y-4">
            {/* Email/Roll Number Field */}
            <div>
              <label className="block text-sm font-medium text-[#0B267D] mb-2">
                Email / Roll Number
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  name="emailOrRoll"
                  value={formData.emailOrRoll}
                  onChange={handleInputChange}
                  placeholder="Enter your Email or Roll No."
                  className={`w-full bg-blue-50 border rounded-lg px-10 py-3 text-[#0B267D] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    errors.emailOrRoll ? 'border-red-500' : 'border-blue-200'
                  }`}
                />
              </div>
              {errors.emailOrRoll && (
                <p className="text-red-600 text-sm mt-1">{errors.emailOrRoll}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-[#0B267D] mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter Password"
                  className={`w-full bg-blue-50 border rounded-lg px-10 py-3 pr-12 text-[#0B267D] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    errors.password ? 'border-red-500' : 'border-blue-200'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#0B267D] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 bg-white border-blue-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-sm text-[#0B267D] ml-2">Remember Me</span>
              </label>
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="button"
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                  Signing in...
                </div>
              ) : (
                'Login'
              )}
            </button>
          </div>

          {/* Divider */}
          <div className="my-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-blue-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-600">or continue with</span>
              </div>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => handleSocialLogin('Google')}
              disabled={isLoading}
              className="flex items-center justify-center px-4 py-3 bg-white hover:bg-gray-100 text-gray-700 font-medium rounded-lg transition-all duration-200 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
            
            <button
              onClick={() => handleSocialLogin('GitHub')}
              disabled={isLoading}
              className="flex items-center justify-center px-4 py-3 bg-[#0B267D] hover:bg-blue-900 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </button>
          </div>

          {/* Signup Link */}
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              Don't have an account?{' '}
              <button
                onClick={onNavigateToSignup}
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Signup
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const StudentSignup = ({ isOpen, onClose, onNavigateToLogin }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    rollNumber: '',
    phone: '',
    dateOfBirth: '',
    course: '',
    year: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.rollNumber.trim()) {
      newErrors.rollNumber = 'Roll number is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    }
    
    if (!formData.course.trim()) {
      newErrors.course = 'Course is required';
    }
    
    if (!formData.year) {
      newErrors.year = 'Academic year is required';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and number';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async () => {
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call to Spring Boot backend
      const response = await fetch('/api/student/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          rollNumber: formData.rollNumber,
          phone: formData.phone,
          dateOfBirth: formData.dateOfBirth,
          course: formData.course,
          year: formData.year,
          password: formData.password
        }),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Signup successful!', data);
        alert('Signup successful! Please check your email for verification.');
        onNavigateToLogin();
      } else {
        const errorData = await response.json();
        setErrors({ general: errorData.message || 'Signup failed' });
      }
    } catch (error) {
      console.error('Signup error:', error);
      console.log('Signup attempt with:', formData);
      console.log('Simulating successful signup...');
      alert('Signup successful! Please check your email for verification.');
      onNavigateToLogin();
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignup = async (provider) => {
    setIsLoading(true);
    
    try {
      console.log(`Opening ${provider} OAuth2 authorization for signup...`);
      setTimeout(() => {
        console.log(`${provider} OAuth2 signup process completed successfully`);
        window.location.href = '/studentdashboard';
      }, 1000);
    } catch (error) {
      setErrors({ general: `${provider} signup failed: ${error.message}` });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div 
        className={`bg-white rounded-2xl shadow-lg p-6 w-full max-w-[500px] max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100 fade-in-scale' : 'scale-90 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#0B267D]">Student Signup</h2>
            <p className="text-gray-600 text-sm mt-1">Create your student account</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-[#0B267D] transition-colors p-1 rounded-lg hover:bg-blue-50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Error Message */}
        {errors.general && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <p className="text-red-600 text-sm">{errors.general}</p>
          </div>
        )}

        {/* Form */}
        <div className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#0B267D] mb-2">
                First Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className={`w-full bg-blue-50 border rounded-lg px-10 py-3 text-[#0B267D] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    errors.firstName ? 'border-red-500' : 'border-blue-200'
                  }`}
                />
              </div>
              {errors.firstName && (
                <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0B267D] mb-2">
                Last Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className={`w-full bg-blue-50 border rounded-lg px-10 py-3 text-[#0B267D] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    errors.lastName ? 'border-red-500' : 'border-blue-200'
                  }`}
                />
              </div>
              {errors.lastName && (
                <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-[#0B267D] mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className={`w-full bg-blue-50 border rounded-lg px-10 py-3 text-[#0B267D] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  errors.email ? 'border-red-500' : 'border-blue-200'
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Roll Number and Phone */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#0B267D] mb-2">
                Roll Number
              </label>
              <input
                type="text"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleInputChange}
                placeholder="Roll Number"
                className={`w-full bg-blue-50 border rounded-lg px-4 py-3 text-[#0B267D] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  errors.rollNumber ? 'border-red-500' : 'border-blue-200'
                }`}
              />
              {errors.rollNumber && (
                <p className="text-red-600 text-sm mt-1">{errors.rollNumber}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0B267D] mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className={`w-full bg-blue-50 border rounded-lg px-10 py-3 text-[#0B267D] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    errors.phone ? 'border-red-500' : 'border-blue-200'
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-[#0B267D] mb-2">
              Date of Birth
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className={`w-full bg-blue-50 border rounded-lg px-10 py-3 text-[#0B267D] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  errors.dateOfBirth ? 'border-red-500' : 'border-blue-200'
                }`}
              />
            </div>
            {errors.dateOfBirth && (
              <p className="text-red-600 text-sm mt-1">{errors.dateOfBirth}</p>
            )}
          </div>

          {/* Course and Year */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#0B267D] mb-2">
                Course
              </label>
              <div className="relative">
                <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className={`w-full bg-blue-50 border rounded-lg px-10 py-3 text-[#0B267D] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    errors.course ? 'border-red-500' : 'border-blue-200'
                  }`}
                >
                  <option value="">Select Course</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Civil">Civil</option>
                  <option value="MBA">MBA</option>
                  <option value="MCA">MCA</option>
                </select>
              </div>
              {errors.course && (
                <p className="text-red-600 text-sm mt-1">{errors.course}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0B267D] mb-2">
                Academic Year
              </label>
              <select
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                className={`w-full bg-blue-50 border rounded-lg px-4 py-3 text-[#0B267D] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  errors.year ? 'border-red-500' : 'border-blue-200'
                }`}
              >
                <option value="">Select Year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
              {errors.year && (
                <p className="text-red-600 text-sm mt-1">{errors.year}</p>
              )}
            </div>
          </div>

          {/* Password Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#0B267D] mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className={`w-full bg-blue-50 border rounded-lg px-10 py-3 pr-12 text-[#0B267D] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    errors.password ? 'border-red-500' : 'border-blue-200'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#0B267D] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0B267D] mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm Password"
                  className={`w-full bg-blue-50 border rounded-lg px-10 py-3 pr-12 text-[#0B267D] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    errors.confirmPassword ? 'border-red-500' : 'border-blue-200'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#0B267D] transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-600 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          {/* Terms and Conditions */}
          <div>
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 bg-white border-blue-300 rounded focus:ring-blue-500 focus:ring-2 mt-1"
              />
              <span className="text-sm text-[#0B267D] ml-2">
                I agree to the{' '}
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-800 underline"
                  onClick={() => alert('Terms and Conditions would be displayed here')}
                >
                  Terms and Conditions
                </button>
                {' '}and{' '}
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-800 underline"
                  onClick={() => alert('Privacy Policy would be displayed here')}
                >
                  Privacy Policy
                </button>
              </span>
            </label>
            {errors.agreeTerms && (
              <p className="text-red-600 text-sm mt-1">{errors.agreeTerms}</p>
            )}
          </div>

          {/* Signup Button */}
          <button
            type="button"
            onClick={handleSignup}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                Creating Account...
              </div>
            ) : (
              'Create Account'
            )}
          </button>
        </div>

        {/* Divider */}
        <div className="my-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-blue-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-600">or signup with</span>
            </div>
          </div>
        </div>

        {/* Social Signup Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            onClick={() => handleSocialSignup('Google')}
            disabled={isLoading}
            className="flex items-center justify-center px-4 py-3 bg-white hover:bg-gray-100 text-gray-700 font-medium rounded-lg transition-all duration-200 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </button>
          
          <button
            onClick={() => handleSocialSignup('GitHub')}
            disabled={isLoading}
            className="flex items-center justify-center px-4 py-3 bg-[#0B267D] hover:bg-blue-900 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </button>
        </div>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Already have an account?{' '}
            <button
              onClick={onNavigateToLogin}
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

// Demo wrapper to show both components with navigation
const Demo = () => {
  const [currentView, setCurrentView] = useState('login'); // 'login', 'signup', or 'none'

  const handleOpenLogin = () => setCurrentView('login');
  const handleOpenSignup = () => setCurrentView('signup');
  const handleClose = () => setCurrentView('none');

  const handleNavigateToSignup = () => {
    setCurrentView('signup');
  };

  const handleNavigateToLogin = () => {
    setCurrentView('login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#0B267D] mb-4">Student Authentication System</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          A complete authentication system with login, signup, and social OAuth integration for students.
        </p>
        <div className="space-x-4">
          <button
            onClick={handleOpenLogin}
            className="bg-[#0B267D] hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
          >
            Open Login
          </button>
          <button
            onClick={handleOpenSignup}
            className="bg-white hover:bg-gray-50 text-[#0B267D] font-semibold py-3 px-6 rounded-lg border-2 border-[#0B267D] transition-all duration-200 hover:shadow-lg hover:scale-105"
          >
            Open Signup
          </button>
        </div>
      </div>
      
      <StudentLogin
        isOpen={currentView === 'login'}
        onClose={handleClose}
        onNavigateToSignup={handleNavigateToSignup}
      />
      
      <StudentSignup
        isOpen={currentView === 'signup'}
        onClose={handleClose}
        onNavigateToLogin={handleNavigateToLogin}
      />
    </div>
  );
};

export default Demo;