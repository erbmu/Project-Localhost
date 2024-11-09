import { ArrowRight, FileText, Shield } from 'lucide-react'; // Importing icons
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function GetStarted() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-50 p-4">
      <div className="text-center max-w-xl mx-auto p-12 rounded-xl shadow-2xl bg-white/90 backdrop-blur-xl">
        {/* Logo/Icon Area */}
        <div className="mb-8 flex justify-center">
          <div className="h-20 w-20 bg-gradient-to-r from-blue-400 to-teal-400 rounded-xl flex items-center justify-center shadow-lg">
            <FileText className="h-12 w-12 text-white" />
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Welcome to <span className="text-blue-500">CIPHER</span>
        </h1>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-xs mx-auto">
          Translate and simplify medical documents using our powerful AI tool
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 shadow-md hover:shadow-xl transition-all">
            <FileText className="h-6 w-6 text-blue-500 mb-2 mx-auto" />
            <p className="text-sm text-gray-600 font-semibold">Instant Document Processing</p>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-r from-teal-50 to-teal-100 shadow-md hover:shadow-xl transition-all">
            <Shield className="h-6 w-6 text-teal-500 mb-2 mx-auto" />
            <p className="text-sm text-gray-600 font-semibold">Secure & Confidential</p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => navigate('/cipher')}
          className="group bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-2xl flex items-center justify-center mx-auto space-x-2"
        >
          <span>Get Started</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Additional Info */}
        <p className="mt-6 text-sm text-gray-500">
          HIPAA Compliant | Secure Processing | 24/7 Support
        </p>
      </div>
    </div>
  );
}