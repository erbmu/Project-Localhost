import { ArrowRight, FileText, Shield } from 'lucide-react'; // Importing icons
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function GetStarted() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="text-center max-w-xl mx-auto p-12 rounded-xl shadow-xl bg-white/90 backdrop-blur-sm">
        {/* Logo/Icon Area */}
        <div className="mb-8 flex justify-center">
          <div className="h-20 w-20 bg-blue-500 rounded-xl flex items-center justify-center">
            <FileText className="h-12 w-12 text-white" />
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to <span className="text-blue-500">CIPHER</span>
        </h1>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          Translate and simplify medical documents using our powerful AI tool
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="p-4 rounded-lg bg-blue-50">
            <FileText className="h-6 w-6 text-blue-500 mb-2 mx-auto" />
            <p className="text-sm text-gray-600">Instant Document Processing</p>
          </div>
          <div className="p-4 rounded-lg bg-blue-50">
            <Shield className="h-6 w-6 text-blue-500 mb-2 mx-auto" />
            <p className="text-sm text-gray-600">Secure & Confidential</p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => navigate('/cipher')}
          className="group bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:shadow-lg flex items-center justify-center mx-auto space-x-2"
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