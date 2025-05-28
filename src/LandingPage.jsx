import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to Our Platform!
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Connect, explore, and engage with others.
      </p>

      <div className="mt-6 space-x-4">
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
