import React from "react";
import { Link } from "react-router-dom";
import { FaUserFriends, FaComments, FaCode, FaLightbulb } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Connect. Code. Create.
              </h1>
              <p className="text-xl mb-8">
                Join the community where passionate developers meet,
                collaborate, and grow together.
              </p>
              <div className="space-x-4">
                <Link
                  to="/register"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
                >
                  Get Started
                </Link>
                <Link
                  to="/login"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
                >
                  Sign In
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/assets/collaboration.svg"
                alt="Developer Collaboration"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose DevConnect?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<FaUserFriends className="w-8 h-8" />}
              title="Connect with Peers"
              description="Build meaningful connections with developers who share your interests and goals."
            />
            <FeatureCard
              icon={<FaComments className="w-8 h-8" />}
              title="Real-time Chat"
              description="Engage in seamless conversations with your connections through our real-time messaging system."
            />
            <FeatureCard
              icon={<FaCode className="w-8 h-8" />}
              title="Share Knowledge"
              description="Exchange ideas, share code snippets, and learn from experienced developers."
            />
            <FeatureCard
              icon={<FaLightbulb className="w-8 h-8" />}
              title="Grow Together"
              description="Collaborate on projects and help each other grow in your development journey."
            />
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Join the Community?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Start your journey with DevConnect today and connect with thousands
            of developers worldwide.
          </p>
          <Link
            to="/register"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Join DevConnect Now
          </Link>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default LandingPage;
