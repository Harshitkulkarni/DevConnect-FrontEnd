import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL } from "../constant";

const Connections = () => {
  const [allConnections, setAllConnections] = useState([]);

  const fetchConnections = async () => {
    const res = await axios.get(baseURL + "/connection/view", {
      withCredentials: true,
    });
    setAllConnections(res.data);
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (allConnections.length === 0) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
            No Connections Yet
          </h1>
          <p className="text-neutral-600 mt-2">
            Start connecting with other developers to grow your network
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-auto">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
          Your Connections
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allConnections.map((connection) => (
            <div
              key={connection._id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-base-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="avatar">
                    <div className="w-16 h-16 rounded-full ring ring-primary-200 ring-offset-2">
                      <img
                        src={connection.photoURL || "/default-avatar.png"}
                        alt={`${connection.firstName || "User"}'s profile`}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-neutral">
                      {connection.firstName && connection.lastName
                        ? `${connection.firstName} ${connection.lastName}`
                        : "Name not available"}
                    </h2>
                    <p className="text-sm text-neutral-600">
                      {connection.age && connection.gender
                        ? `${connection.age}, ${connection.gender}`
                        : "Profile details not specified"}
                    </p>
                  </div>
                </div>

                <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                  {connection.bio || "No bio available"}
                </p>

                <div className="text-sm text-neutral-600 mb-6">
                  <div className="font-medium mb-1">Skills</div>
                  <p className="line-clamp-1">
                    {connection.skills || "No skills listed"}
                  </p>
                </div>

                <Link
                  to={"/chat/" + connection._id}
                  className="btn w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white border-0"
                >
                  Start Chat
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Connections;
