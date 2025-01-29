import { ArrowRight, Bell, Home, MessageCircle, Search, Upload, User } from 'lucide-react';
import React from 'react';

const NavBar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-xl shadow-sm z-50">
    <div className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-blue-600">LocalHost</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Home className="h-6 w-6 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="h-6 w-6 text-gray-600" />
          </button>
          <a href="/profile" className="p-2 hover:bg-gray-100 rounded-full">
            <User className="h-6 w-6 text-gray-600" />
          </a>
        </div>
      </div>
    </div>
  </nav>
);

const ProfileCard = () => (
  <div className="bg-white/90 backdrop-blur-xl shadow-xl rounded-xl p-6">
    <div className="flex flex-col items-center">
      <img
        src="/api/placeholder/80/80"
        alt="Profile Avatar"
        className="w-20 h-20 rounded-full mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Your Name</h2>
      <p className="text-gray-500 mb-4">Security Professional</p>
      <div className="w-full border-t pt-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Posts</span>
          <span className="font-semibold">24</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Connections</span>
          <span className="font-semibold">156</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Groups</span>
          <span className="font-semibold">8</span>
        </div>
      </div>
    </div>
  </div>
);

const NewsCard = ({ title, source, time }) => (
  <div className="bg-white/90 backdrop-blur-xl shadow p-4 rounded-xl mb-4">
    <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
    <div className="flex justify-between text-sm text-gray-500">
      <span>{source}</span>
      <span>{time}</span>
    </div>
  </div>
);

const FeedPost = ({ name, title, content }) => {
  return (
    <div className="bg-white/90 backdrop-blur-xl shadow-xl rounded-xl p-6 mb-6">
      <div className="flex items-center mb-4">
        <img
          src="/api/placeholder/40/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-500">{title}</p>
        </div>
      </div>
      <p className="text-gray-600">{content}</p>
      <div className="flex items-center justify-between mt-4">
        <button className="text-blue-500 hover:text-blue-600 transition-colors">
          <MessageCircle className="h-5 w-5 mr-2" />
          Comment
        </button>
        <button className="text-blue-500 hover:text-blue-600 transition-colors">
          <ArrowRight className="h-5 w-5 mr-2" />
          Share
        </button>
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 pt-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-6">
            {/* Profile Section */}
            <div className="col-span-3">
              <div className="sticky top-24">
                <ProfileCard />
              </div>
            </div>

            {/* Main Content */}
            <div className="col-span-6">
              {/* Create Post Section */}
              <div className="bg-white/90 backdrop-blur-xl shadow-xl rounded-xl p-6 mb-6">
                <div className="flex items-center">
                  <img
                    src="/api/placeholder/40/40"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <input
                    type="text"
                    placeholder="What's on your mind?"
                    className="flex-1 py-2 px-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors">
                    <Upload className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Feed Posts */}
              <div>
                <FeedPost
                  name="John Doe"
                  title="Cybersecurity Analyst"
                  content="Just finished an engaging discussion on the latest advancements in threat detection. Excited to put these insights into practice!"
                />
                <FeedPost
                  name="Jane Smith"
                  title="Security Engineer"
                  content="Shared a new blog post on best practices for implementing a Zero Trust architecture. Let me know what you think!"
                />
                <FeedPost
                  name="Michael Johnson"
                  title="Penetration Tester"
                  content="Attended a virtual conference on ethical hacking techniques. Learned some valuable new skills to add to my toolkit."
                />
              </div>
            </div>

            {/* News Section */}
            <div className="col-span-3">
              <div className="sticky top-24">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Latest News</h2>
                <NewsCard
                  title="New Vulnerability Discovered in Popular Framework"
                  source="CyberNews"
                  time="2 hours ago"
                />
                <NewsCard
                  title="Industry Leaders Announce Security Coalition"
                  source="Tech Daily"
                  time="4 hours ago"
                />
                <NewsCard
                  title="Updates to Security Compliance Standards"
                  source="Security Weekly"
                  time="6 hours ago"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}