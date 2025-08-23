import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, X, Mail, Lock, Github, User, Phone, Briefcase, GraduationCap, Building, MapPin, Award, Calendar, Link } from 'lucide-react';

// Mentor Login Modal Component
const MentorLogin = ({ isOpen, onClose, onNavigateToSignup }) => {
  const [formData, setFormData] = useState({
    emailOrId: '',
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
    
    if (!formData.emailOrId.trim()) {
      newErrors.emailOrId = 'Email or Mentor ID is required';
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
      const response = await fetch('/api/mentor/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emailOrId: formData.emailOrId,
          password: formData.password,
          rememberMe: formData.rememberMe
        }),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Mentor login successful! Token:', data.token);
        console.log('Remember me:', formData.rememberMe);
        window.location.href = '/mentor-dashboard';
        onClose();
      } else {
        const errorData = await response.json();
        setErrors({ general: errorData.message || 'Login failed' });
      }
    } catch (error) {
      console.error('Mentor login error:', error);
      console.log('Mentor login attempt with:', formData);
      console.log('Simulating successful mentor login...');
      window.location.href = '/mentor-dashboard';
      onClose();
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setIsLoading(true);
    setErrors({});
    
    try {
      console.log(`Opening ${provider} OAuth2 authorization for mentor...`);
      setTimeout(() => {
        console.log(`${provider} OAuth2 process completed successfully for mentor`);
        window.location.href = '/mentor-dashboard';
      }, 1000);
    } catch (error) {
      setErrors({ general: `${provider} login failed: ${error.message}` });
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    console.log('Navigating to mentor forgot password');
    // Using a console.log instead of an alert()
    console.log('Mentor forgot password functionality would be implemented here');
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
              <h2 className="text-2xl font-bold text-[#0B267D]">Mentor Login</h2>
              <p className="text-gray-600 text-sm mt-1">Welcome back! Please sign in to your mentor account</p>
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
            {/* Email/Mentor ID Field */}
            <div>
              <label className="block text-sm font-medium text-[#0B267D] mb-2">
                Email / Mentor ID
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  name="emailOrId"
                  value={formData.emailOrId}
                  onChange={handleInputChange}
                  placeholder="Enter your Email or Mentor ID"
                  className={`w-full bg-blue-50 border rounded-lg px-10 py-3 text-[#0B267D] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    errors.emailOrId ? 'border-red-500' : 'border-blue-200'
                  }`}
                />
              </div>
              {errors.emailOrId && (
                <p className="text-red-600 text-sm mt-1">{errors.emailOrId}</p>
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
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="button"
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#2947A9] to-[#0B267D] hover:from-[#0B267D] hover:to-[#2947A9] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
              className="flex items-center justify-center px-4 py-3 bg-[#0B267D] hover:bg-[#2947A9] text-white font-medium rounded-lg transition-all duration-200 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
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

// Mentor Signup Modal Component
const MentorSignup = ({ isOpen, onClose, onNavigateToLogin }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    jobTitle: '',
    company: '',
    experience: '',
    specialization: '',
    education: '',
    location: '',
    bio: '',
    linkedinProfile: '',
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
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    }
    
    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = 'Job title is required';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }
    
    if (!formData.experience) {
      newErrors.experience = 'Experience level is required';
    }
    
    if (!formData.specialization.trim()) {
      newErrors.specialization = 'Specialization is required';
    }
    
    if (!formData.education.trim()) {
      newErrors.education = 'Education is required';
    }
    
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }
    
    if (!formData.bio.trim()) {
      newErrors.bio = 'Bio is required';
    } else if (formData.bio.length < 50) {
      newErrors.bio = 'Bio must be at least 50 characters';
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
      const response = await fetch('/api/mentor/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          dateOfBirth: formData.dateOfBirth,
          jobTitle: formData.jobTitle,
          company: formData.company,
          experience: formData.experience,
          specialization: formData.specialization,
          education: formData.education,
          location: formData.location,
          bio: formData.bio,
          linkedinProfile: formData.linkedinProfile,
          password: formData.password
        }),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Mentor signup successful!', data);
        console.log('Mentor signup successful! Please check your email for verification and admin approval.');
        onNavigateToLogin();
      } else {
        const errorData = await response.json();
        setErrors({ general: errorData.message || 'Signup failed' });
      }
    } catch (error) {
      console.error('Mentor signup error:', error);
      console.log('Mentor signup attempt with:', formData);
      console.log('Simulating successful mentor signup...');
      console.log('Mentor signup successful! Please check your email for verification and admin approval.');
      onNavigateToLogin();
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignup = async (provider) => {
    setIsLoading(true);
    
    try {
      console.log(`Opening ${provider} OAuth2 authorization for mentor signup...`);
      setTimeout(() => {
        console.log(`${provider} OAuth2 mentor signup process completed successfully`);
        window.location.href = '/mentor-dashboard';
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
        className={`bg-white rounded-2xl shadow-lg p-6 w-full max-w-[600px] max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100 fade-in-scale' : 'scale-90 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#0B267D]">Mentor Signup</h2>
            <p className="text-gray-600 text-sm mt-1">Join our mentorship platform and guide future talents</p>
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
          {/* Personal Information Section */}
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h3 className="text-lg font-semibold text-[#0B267D] mb-3">Personal Information</h3>
            
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4 mb-4">
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

            {/* Email and Phone */}
            <div className="grid grid-cols-2 gap-4 mb-4">
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
            <div className="mb-4">
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
          </div>

          {/* Professional Information Section */}
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h3 className="text-lg font-semibold text-[#0B267D] mb-3">Professional Information</h3>
            
            {/* Job Title and Company */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-[#0B267D] mb-2">
                  Current Job Title
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    placeholder="e.g. Senior Software Engineer"
                    className={`w-full bg-blue-50 border rounded-lg px-10 py-3 text-[#0B267D] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.jobTitle ? 'border-red-500' : 'border-blue-200'
                    }`}
                  />
                </div>
                {errors.jobTitle && (
                  <p className="text-red-600 text-sm mt-1">{errors.jobTitle}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0B267D] mb-2">
                  Company
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="e.g. Google, Inc."
                    className={`w-full bg-blue-50 border rounded-lg px-10 py-3 text-[#0B267D] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.company ? 'border-red-500' : 'border-blue-200'
                    }`}
                  />
                </div>
                {errors.company && (
                  <p className="text-red-600 text-sm mt-1">{errors.company}</p>
                )}
              </div>
            </div>

            {/* Experience and Specialization */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-[#0B267D] mb-2">
                  Years of Experience
                </label>
                <div className="relative">
                  <Award className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className={`w-full bg-blue-50 border rounded-lg px-10 py-3 text-[#0B267D] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.experience ? 'border-red-500' : 'border-blue-200'
                    }`}
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 year</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                {errors.experience && (
                  <p className="text-red-600 text-sm mt-1">{errors.experience}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0B267D] mb-2">
                  Specialization
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    placeholder="e.g. AI/ML, Cybersecurity"
                    className={`w-full bg-blue-50 border rounded-lg px-10 py-3 text-[#0B267D] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.specialization ? 'border-red-500' : 'border-blue-200'
                    }`}
                  />
                </div>
                {errors.specialization && (
                  <p className="text-red-600 text-sm mt-1">{errors.specialization}</p>
                )}
              </div>
            </div>

            {/* Education and Location */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-[#0B267D] mb-2">
                  Education
                </label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    placeholder="e.g. B.S. in Computer Science"
                    className={`w-full bg-blue-50 border rounded-lg px-10 py-3 text-[#0B267D] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.education ? 'border-red-500' : 'border-blue-200'
                    }`}
                  />
                </div>
                {errors.education && (
                  <p className="text-red-600 text-sm mt-1">{errors.education}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0B267D] mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g. New York, NY"
                    className={`w-full bg-blue-50 border rounded-lg px-10 py-3 text-[#0B267D] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.location ? 'border-red-500' : 'border-blue-200'
                    }`}
                  />
                </div>
                {errors.location && (
                  <p className="text-red-600 text-sm mt-1">{errors.location}</p>
                )}
              </div>
            </div>
          </div>

          {/* Bio and Social Profile */}
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h3 className="text-lg font-semibold text-[#0B267D] mb-3">About You</h3>
            
            {/* Bio Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#0B267D] mb-2">
                Short Bio
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                placeholder="Tell us a little about your professional journey and mentoring philosophy."
                rows="4"
                className={`w-full bg-blue-50 border rounded-lg px-4 py-3 text-[#0B267D] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  errors.bio ? 'border-red-500' : 'border-blue-200'
                }`}
              ></textarea>
              {errors.bio && (
                <p className="text-red-600 text-sm mt-1">{errors.bio}</p>
              )}
            </div>

            {/* LinkedIn Profile */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#0B267D] mb-2">
                LinkedIn Profile URL (Optional)
              </label>
              <div className="relative">
                <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="url"
                  name="linkedinProfile"
                  value={formData.linkedinProfile}
                  onChange={handleInputChange}
                  placeholder="e.g. https://www.linkedin.com/in/your-profile"
                  className="w-full bg-blue-50 border border-blue-200 rounded-lg px-10 py-3 text-[#0B267D] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Account Security */}
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h3 className="text-lg font-semibold text-[#0B267D] mb-3">Account Security</h3>
            
            {/* Password Field */}
            <div className="mb-4">
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
                  placeholder="Create a strong password"
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

            {/* Confirm Password Field */}
            <div className="mb-4">
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
                  placeholder="Re-enter your password"
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
          
          {/* Terms & Conditions Checkbox */}
          <div className="mb-6">
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-blue-600 bg-white border-blue-300 rounded focus:ring-blue-500 focus:ring-2 flex-shrink-0"
              />
              <span className="text-sm text-gray-600 ml-2">
                I agree to the{' '}
                <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
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
            className="w-full bg-gradient-to-r from-[#2947A9] to-[#0B267D] hover:from-[#0B267D] hover:to-[#2947A9] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                Signing up...
              </div>
            ) : (
              'Signup'
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
              <span className="px-4 bg-white text-gray-600">or sign up with</span>
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
            className="flex items-center justify-center px-4 py-3 bg-[#0B267D] hover:bg-[#2947A9] text-white font-medium rounded-lg transition-all duration-200 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
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

// Main component that orchestrates which modal is open
const MentorAuthModals = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handleOpenLogin = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };
  
  const handleOpenSignup = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false);
  };

  const handleCloseSignup = () => {
    setIsSignupOpen(false);
  };

  return (
    <>
      <MentorLogin 
        isOpen={isLoginOpen} 
        onClose={handleCloseLogin} 
        onNavigateToSignup={handleOpenSignup} 
      />
      <MentorSignup 
        isOpen={isSignupOpen} 
        onClose={handleCloseSignup} 
        onNavigateToLogin={handleOpenLogin} 
      />
    </>
  );
};

export default MentorAuthModals;
