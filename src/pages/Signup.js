import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export default function Signup() {
    const navigate = useNavigate();
    const[formData, setFormData] = useState({
        username : '',
        password : '',
        email : '',
    });
    useEffect(() => {
        setFormData({
          username: '',
          email: '',
          password: ''
        });
      }, []);

    const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
        ...prev,
        [name]: value
    }));
};

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted: ', formData);
    const isSuccess = true;
    if (isSuccess) {
      alert('Signup Successful! Redirecting to login...');
      navigate('/Login');
    } else {
      alert('Signup failed');
    }
};

return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign Up</h1>
        <input type = "hidden" value="prayer" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="name"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
);
}