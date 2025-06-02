import React from "react";

const CollaborationSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 400"
      className="w-full h-full"
    >
      {/* Connection Lines */}
      <path
        d="M400 200 L200 150 L600 150 L400 200 L300 300 L500 300 L400 200"
        fill="none"
        stroke="rgba(0,0,0,0.8)"
        strokeWidth="2"
        strokeDasharray="5,5"
        className="animate-pulse"
      />

      {/* Developer Nodes */}
      <g className="animate-bounce" style={{ animationDelay: "0s" }}>
        <circle cx="200" cy="150" r="25" fill="#4F46E5" />
        <text x="200" y="155" textAnchor="middle" fill="white" fontSize="18">
          👩‍💻
        </text>
      </g>

      <g className="animate-bounce" style={{ animationDelay: "0.2s" }}>
        <circle cx="600" cy="150" r="25" fill="#4F46E5" />
        <text x="600" y="155" textAnchor="middle" fill="white" fontSize="18">
          👨‍💻
        </text>
      </g>

      <g className="animate-bounce" style={{ animationDelay: "0.4s" }}>
        <circle cx="300" cy="300" r="25" fill="#4F46E5" />
        <text x="300" y="305" textAnchor="middle" fill="white" fontSize="18">
          👨‍💻
        </text>
      </g>

      <g className="animate-bounce" style={{ animationDelay: "0.6s" }}>
        <circle cx="500" cy="300" r="25" fill="#4F46E5" />
        <text x="500" y="305" textAnchor="middle" fill="white" fontSize="18">
          👩‍💻
        </text>
      </g>

      <g className="animate-bounce" style={{ animationDelay: "0.8s" }}>
        <circle cx="400" cy="200" r="30" fill="#4F46E5" />
        <text x="400" y="205" textAnchor="middle" fill="white" fontSize="20">
          🌐
        </text>
      </g>

      {/* Connection Dots */}
      <circle cx="300" cy="175" r="4" fill="#4F46E5" className="animate-ping" />
      <circle cx="500" cy="175" r="4" fill="#4F46E5" className="animate-ping" />
      <circle cx="350" cy="250" r="4" fill="#4F46E5" className="animate-ping" />
      <circle cx="450" cy="250" r="4" fill="#4F46E5" className="animate-ping" />
    </svg>
  );
};

export default CollaborationSvg;
