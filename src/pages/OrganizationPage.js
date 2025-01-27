import { Calendar, MapPin, MessageCircle, TrendingUp, Users } from 'lucide-react';
{/* Previous imports remain */}


export default function OrganizationPage() {
  // Previous data remains the same
  const teamMembers = [/* ... */];
  const projects = [/* ... */];
  const achievements = [/* ... */];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto p-6">
        {/* Header Section - Now with Leaderboard Link */}
        <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Previous header content */}
            <img
              src="/api/placeholder/200/200"
              alt="Organization Logo"
              className="w-32 h-32 rounded-xl object-cover"
            />
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-800">CyberGuard Solutions</h1>
              <p className="text-gray-600 mt-2">Leading cybersecurity consulting and services</p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  San Francisco, CA
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  50-200 employees
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  Founded 2020
                </div>
              </div>

              <div className="mt-6 flex gap-4 justify-center md:justify-start">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                  <MessageCircle className="h-5 w-5 inline-block mr-2" /> Contact
                </button>
                <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">
                  <Users className="h-5 w-5 inline-block mr-2" /> Follow
                </button>
                <a 
                  href="/leaderboard" 
                  className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
                >
                  <TrendingUp className="h-5 w-5 mr-2" /> View Leaderboard
                </a>
              </div>
            </div>
            
            {/* Rest of the organization page content remains the same */}
          </div>
        </div>
        {/* ... rest of the component ... */}
      </div>
    </div>
  );
}