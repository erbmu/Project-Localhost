import { FileText, MessageCircle, Shield } from 'lucide-react';
import React from 'react';

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-2 gap-8 min-h-[90vh]">
          {/* Left Half - Profile Section */}
          <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-xl p-8 flex flex-col items-center">
            <img
              src="/api/placeholder/400/400"
              alt="User Avatar"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
            <p className="text-gray-500">Cybersecurity Analyst</p>
            <div className="mt-6 space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                <MessageCircle className="h-5 w-5 inline-block mr-2" /> Message
              </button>
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg transition-colors">
                <Shield className="h-5 w-5 inline-block mr-2" /> View Profile
              </button>
            </div>
          </div>

          {/* Right Half - About & Activity */}
          <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-xl p-8 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">About Me</h3>
              <p className="text-gray-600">
                I'm a cybersecurity professional with a passion for protecting organizations from
                evolving threats. I've been in the industry for 5 years and have experience
                in incident response, threat hunting, and security architecture.
              </p>
              <p className="text-gray-600 mt-4">
                Outside of work, I enjoy staying up-to-date with the latest security research,
                attending industry conferences, and mentoring aspiring cybersecurity
                professionals.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">My Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FileText className="h-6 w-6 text-blue-500 mr-4" />
                  <p className="text-gray-600">Commented on "Securing Your Remote Workforce" discussion</p>
                </div>
                <div className="flex items-center">
                  <FileText className="h-6 w-6 text-blue-500 mr-4" />
                  <p className="text-gray-600">Shared a new blog post: "Implementing Zero Trust in Enterprise Networks"</p>
                </div>
                <div className="flex items-center">
                  <FileText className="h-6 w-6 text-blue-500 mr-4" />
                  <p className="text-gray-600">Joined the "Cybersecurity Professionals" group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}