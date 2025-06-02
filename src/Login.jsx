import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
import { useNavigate, Link } from "react-router-dom";
import { baseURL } from "../constant";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CollaborationSvg from "./components/CollaborationSvg";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        baseURL + "/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate("/feed");
    } catch (error) {
      setError(error?.response?.data);
    }
  };

  const handleSignup = async () => {
    try {
      const res = await axios.post(
        baseURL + "/signup",
        { firstName, lastName, password, email, phone },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (error) {
      setError(error?.response?.data);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-600 to-indigo-400 items-center justify-center p-12">
        <div className="max-w-lg">
          <div className="w-full h-64">
            <CollaborationSvg />
          </div>
          <div className="mt-8">
            <h2 className="text-4xl font-bold text-white mb-4">
              Connect. Collaborate. Create.
            </h2>
            <p className="text-indigo-100 text-lg">
              Join our community of developers and build amazing things
              together.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link to="/" className="block mb-8">
            <span className="text-2xl font-bold text-indigo-600">
              👨‍💻 DevConnect
            </span>
          </Link>

          {/* Welcome Text */}
          <h1 className="text-3xl font-bold text-neutral mb-2">
            {isLoginForm ? "Welcome Back!" : "Create Account"}
          </h1>
          <p className="text-neutral-600 mb-8">
            {isLoginForm
              ? "Let's build something amazing together!"
              : "Join our community of developers"}
          </p>

          {/* Form */}
          <div className="space-y-6">
            {!isLoginForm && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full h-12 px-4 border-2 border-neutral-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full h-12 px-4 border-2 border-neutral-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-neutral mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 border-2 border-neutral-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
              />
            </div>

            {!isLoginForm && (
              <div>
                <label className="block text-sm font-medium text-neutral mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-12 px-4 border-2 border-neutral-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-neutral mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 px-4 border-2 border-neutral-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                >
                  {showPassword ? (
                    <FaEyeSlash className="w-5 h-5" />
                  ) : (
                    <FaEye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {isLoginForm && (
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    /* Handle forgot password */
                  }}
                  className="text-sm text-indigo-600 hover:text-indigo-700 hover:underline"
                >
                  Forgot your password?
                </button>
              </div>
            )}

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm text-center">{error}</p>
              </div>
            )}

            <button
              onClick={isLoginForm ? handleLogin : handleSignup}
              className="w-full h-12 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {isLoginForm ? "Log In" : "Create Account"}
            </button>

            <div className="text-center">
              <button
                onClick={() => {
                  setIsLoginForm(!isLoginForm);
                  setError("");
                }}
                className="text-sm text-neutral-600 hover:text-neutral-800"
              >
                {isLoginForm
                  ? "Don't have an account? Sign up"
                  : "Already have an account? Log in"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
