import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserFriends,
  FaComments,
  FaCode,
  FaLightbulb,
  FaArrowRight,
  FaVideo,
  FaPencilAlt,
  FaUsers,
  FaRocket,
} from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        {/* Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          <div className="absolute top-0 right-96 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        </div>

        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full">
                  <span className="text-primary-600 text-sm font-semibold">
                    Join the Developer Community
                  </span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-neutral">
                  Where Developers
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                    Connect & Create
                  </span>
                </h1>

                <p className="text-xl text-neutral-600 max-w-2xl">
                  Join a thriving community of developers where you can connect,
                  collaborate, and grow together. Share knowledge, build
                  projects, and make lasting connections.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/login"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get Started
                    <FaArrowRight className="ml-2" />
                  </Link>
                  <Link
                    to="/login"
                    className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition duration-300"
                  >
                    Sign In
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8">
                  <div>
                    <h3 className="text-3xl font-bold text-neutral">10k+</h3>
                    <p className="text-neutral-600">Active Developers</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-neutral">50k+</h3>
                    <p className="text-neutral-600">Connections Made</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-neutral">100+</h3>
                    <p className="text-neutral-600">Countries</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Illustration */}
              <div className="relative lg:pl-8">
                <div className="relative w-full max-w-lg mx-auto">
                  <div className="absolute top-0 -left-4 w-72 h-72 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                  <div className="absolute top-0 -right-4 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                  <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                  <div className="relative">
                    <img
                      src="/assets/collaboration.svg"
                      alt="Developer Collaboration"
                      className="relative rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-base-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-neutral">
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

      {/* Coming Soon Section */}
      <div className="py-20 bg-white relative overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-96 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full mb-8">
              <span className="text-primary-600 text-sm font-semibold flex items-center gap-2">
                <FaRocket className="w-4 h-4" />
                Coming Soon
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral mb-6">
              Exciting New Features
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                On the Horizon
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              We're working on powerful new ways for developers to connect and
              collaborate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Video Calling Feature */}
            <div className="bg-base-100 p-8 rounded-2xl shadow-lg border border-base-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <FaVideo className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral mb-4">
                    Video Calling
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    Face-to-face collaboration with crystal-clear video calls.
                    Perfect for code reviews, pair programming, and team
                    meetings.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-neutral-600">
                      <FaUsers className="w-4 h-4 text-primary-500" />
                      <span>Group video calls with up to 8 participants</span>
                    </li>
                    <li className="flex items-center gap-2 text-neutral-600">
                      <FaCode className="w-4 h-4 text-primary-500" />
                      <span>Built-in code sharing during calls</span>
                    </li>
                    <li className="flex items-center gap-2 text-neutral-600">
                      <FaLightbulb className="w-4 h-4 text-primary-500" />
                      <span>Screen sharing for better collaboration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Collaborative Drawing Feature */}
            <div className="bg-base-100 p-8 rounded-2xl shadow-lg border border-base-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center flex-shrink-0">
                  <FaPencilAlt className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral mb-4">
                    Live Drawing Board
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    Inspired by Excalidraw, our real-time collaborative drawing
                    board helps you visualize ideas and explain concepts
                    effectively.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-neutral-600">
                      <FaUsers className="w-4 h-4 text-secondary-500" />
                      <span>Real-time collaboration with multiple users</span>
                    </li>
                    <li className="flex items-center gap-2 text-neutral-600">
                      <FaPencilAlt className="w-4 h-4 text-secondary-500" />
                      <span>
                        Sketch diagrams, flowcharts, and architectures
                      </span>
                    </li>
                    <li className="flex items-center gap-2 text-neutral-600">
                      <FaCode className="w-4 h-4 text-secondary-500" />
                      <span>Export drawings as SVG or PNG</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              to="/login"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              Join the Waitlist
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 bg-base-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neutral">
            Ready to Join the Community?
          </h2>
          <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto">
            Start your journey with DevConnect today and connect with thousands
            of developers worldwide.
          </p>
          <Link
            to="/login"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Join DevConnect Now
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-base-100 p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-base-300">
      <div className="text-primary-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-neutral">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
};

export default LandingPage;
