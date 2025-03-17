import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "./utils/connectionsSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const allConnections = useSelector((store) => store.connections);

  // State to handle loading and errors
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1008/user/view/connections",
        {
          withCredentials: true,
        }
      );
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.error("Failed to fetch connections:", err);
      setError("Failed to load connections. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, [dispatch]);

  if (loading) {
    return (
      <h1 className="text-4xl text-center mt-24 font-bold text-blue-400">
        Loading...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-4xl text-center mt-24 font-bold text-red-400">
        {error}
      </h1>
    );
  }

  if (!allConnections || allConnections.length === 0) {
    return (
      <h1 className="text-4xl text-center mt-24 font-bold text-red-400">
        No Connections Found
      </h1>
    );
  }

  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Friends</h1>
      {allConnections.map((connection) => (
        <div key={connection._id} className="flex flex-col items-center">
          <div className="stats shadow mt-10 w-1/2">
            <div className="stat">
              <div className="text-3xl font-bold">
                {connection.firstName && connection.lastName
                  ? connection.firstName + " " + connection.lastName
                  : "Name not available"}
              </div>
              <p className="mt-2">{connection.bio || "Bio not available"}</p>
              <div className="stat-desc mt-2 text-sm">
                {connection.skills || "No skills listed"}
              </div>
              <div className="stat-desc mt-2 text-sm">
                {connection.age && connection.gender
                  ? `${connection.age}, ${connection.gender}`
                  : "Age and gender not specified"}
              </div>
              <div className="stat-figure text-secondary">
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img
                      src={connection.photoURL || "defaultImageURL"}
                      alt={`${connection.firstName || "User"}'s profile`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Connections;
