import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaDiscord,
  FaCode,
  FaUserFriends,
  FaComments,
  FaLightbulb,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-base-200 relative py-4">
      {/* Background Shapes - Subtle version */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-0 right-20 w-20 h-20 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-0 right-40 w-20 h-20 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {/* Brand Section */}
          <div className="space-y-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl">👨‍💻</span>
              <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                DevConnect
              </span>
            </Link>
            <p className="text-neutral-600 text-xs">
              Where developers connect, collaborate, and create.
            </p>
          </div>

          {/* Features Section */}
          <div>
            <h3 className="font-semibold text-neutral text-sm mb-2">
              Features
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/connections"
                  className="text-neutral-600 hover:text-primary-600 flex items-center gap-1 text-xs"
                >
                  <FaUserFriends className="w-3 h-3" />
                  <span>Connect with Peers</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/chat"
                  className="text-neutral-600 hover:text-primary-600 flex items-center gap-1 text-xs"
                >
                  <FaComments className="w-3 h-3" />
                  <span>Real-time Chat</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/feed"
                  className="text-neutral-600 hover:text-primary-600 flex items-center gap-1 text-xs"
                >
                  <FaCode className="w-3 h-3" />
                  <span>Developer Feed</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h3 className="font-semibold text-neutral text-sm mb-2">
              Community
            </h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="text-neutral-600 hover:text-primary-600 text-xs"
                >
                  Guidelines
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-600 hover:text-primary-600 text-xs"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-600 hover:text-primary-600 text-xs"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h3 className="font-semibold text-neutral text-sm mb-2">Connect</h3>
            <div className="flex gap-2">
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-base-200 flex items-center justify-center text-neutral hover:bg-primary-50 hover:text-primary-600 transition-colors duration-300"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-base-200 flex items-center justify-center text-neutral hover:bg-primary-50 hover:text-primary-600 transition-colors duration-300"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-base-200 flex items-center justify-center text-neutral hover:bg-primary-50 hover:text-primary-600 transition-colors duration-300"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-base-200 flex items-center justify-center text-neutral hover:bg-primary-50 hover:text-primary-600 transition-colors duration-300"
              >
                <FaDiscord className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-base-200 mt-4 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-600 text-xs">
            © {new Date().getFullYear()} DevConnect. All rights reserved.
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a
              href="#"
              className="text-neutral-600 hover:text-primary-600 text-xs"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-neutral-600 hover:text-primary-600 text-xs"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-neutral-600 hover:text-primary-600 text-xs"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
