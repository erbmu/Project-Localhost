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
        <div className="flex gap-4">
      <div className="flex-1">
        <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
          First Name
        </label>
        <input
        type="text"
        name="firstname"
        id="firstname"
        value={formData.firstname}
        onChange={handleChange}
        placeholder="Enter your first name"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
        />
      </div>
        <div className="flex-1">
        <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
        Last Name
        </label>
        <input
        type="text"
        name="lastname"
        id="lastname"
        value={formData.lastname}
        onChange={handleChange}
        placeholder="Enter your last name"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
        />
      </div>
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
          <div>
            <label htmlFor="Date of Birth" className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              name="dateofbirth"
              id="dateofbirth"
              value={formData.dateofbirth}
              onChange={handleChange}
              placeholder="Enter your date of birth"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="hiddenQuestion" className="block text-sm font-medium text-gray-700">
              Hidden Question
            </label>
            <select
              name="hiddenQuestion"
              id="hiddenQuestion"
              value={formData.hiddenQuestion}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="" disabled>
                Select a hidden question
              </option>
              <option value="What is your favorite color?">
                What is your favorite color?
              </option>
              <option value="What was your first pet's name?">
                What was your first pet's name?
              </option>
              <option value="What is your mother's maiden name?">
                What is your mother's maiden name?
              </option>
            </select>
          </div>
          <div>
            <label htmlFor="Hidden Password" className="block text-sm font-medium text-gray-700">
              Hidden Password
            </label>
            <input
              type="hiddenpassword"
              name="hiddenpassword"
              id="hiddenpassword"
              value={formData.hiddenpassword}
              onChange={handleChange}
              placeholder="Enter your password to the question above"
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
