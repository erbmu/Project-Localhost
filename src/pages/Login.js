import { Lock, User } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle authentication
    console.log('Login credentials:', credentials);
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center max-w-xl mx-auto p-12 rounded-xl shadow-2xl bg-white/90 backdrop-blur-xl">
          {/* Logo/Icon Area */}
          <div className="mb-8 flex justify-center">
            <div className="h-20 w-20 bg-gradient-to-r from-blue-400 to-teal-400 rounded-xl flex items-center justify-center shadow-lg">
              <Lock className="h-12 w-12 text-white" />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
            Welcome to <span className="text-blue-500">BackDoor</span>
          </h1>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {/* Username Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  placeholder="Username"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-600 bg-white/50"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-600 bg-white/50"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-2xl"
            >
              Sign In
            </button>
          </form>

          {/* Link to Signup */}
          <p className="mt-6 text-sm text-gray-500">
            Don't have an account? {' '}
            <Link to = "/Signup" className = "text-blue-500 hover:underline">
             Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
