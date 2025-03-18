import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "./utils/request";
import { baseURL } from "../constant";

const Request = () => {
  const dispatch = useDispatch();
  const allRequest = useSelector((store) => store.request);

  // States to manage loading and error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all requests
  const fetchRequest = async () => {
    try {
      setLoading(true); // Ensure loading is set during retry
      const res = await axios.get(baseURL + "/user/request/recived", {
        withCredentials: true,
      });
      dispatch(addRequest(res.data.data));
    } catch (err) {
      console.error("Error fetching requests:", err);
      setError("Failed to load requests. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Handle request actions (Accept/Reject)
  const handleRequest = async (status, id) => {
    try {
      await axios.post(
        baseURL + `/request/review/${status}/${id}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(id));
    } catch (err) {
      console.error(`Failed to ${status} request:`, err);
      setError(`Failed to ${status} the request. Please try again.`);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, [dispatch]);

  // Optimized request rendering using useMemo
  const renderRequests = useMemo(() => {
    return (
      allRequest &&
      allRequest.map((request) => {
        if (!request.fromUserId) {
          return (
            <div key={request._id || Math.random()} className="text-center">
              <p>Request data is missing or incomplete.</p>
            </div>
          );
        }

        const { _id, firstName, lastName, age, gender, bio, skills, photoURL } =
          request.fromUserId;

        return (
          <div key={_id} className="flex flex-col items-center">
            <div className="stats shadow mt-10 w-1/2">
              <div className="stat">
                <div className="text-3xl font-bold">
                  {firstName && lastName
                    ? `${firstName} ${lastName}`
                    : "Name not available"}
                </div>
                <p className="mt-2">{bio || "No bio provided"}</p>
                <div className="stat-desc mt-2 text-sm">
                  {skills || "No skills listed"}
                </div>
                <div className="stat-desc mt-2 text-sm">
                  {age && gender
                    ? `${age}, ${gender}`
                    : "Age and gender unknown"}
                </div>
                <div className="mt-4">
                  <button
                    className="btn btn-success mx-2 px-10"
                    onClick={() => handleRequest("accepted", request._id)}
                    aria-label={`Accept request from ${firstName || "User"}`}
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-error mx-2 px-10"
                    onClick={() => handleRequest("rejected", request._id)}
                    aria-label={`Reject request from ${firstName || "User"}`}
                  >
                    Reject
                  </button>
                </div>
                <div className="stat-figure text-secondary">
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img
                        src={photoURL || "https://via.placeholder.com/150"}
                        alt={`${firstName || "User"}'s profile`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })
    );
  }, [allRequest]);

  // Conditional rendering for loading, error, and empty states
  if (loading) {
    return (
      <h1 className="text-4xl text-center mt-24 font-bold text-blue-400">
        Loading Requests...
      </h1>
    );
  }

  if (error) {
    return (
      <div className="text-center">
        <h1 className="text-4xl mt-24 font-bold text-red-400">{error}</h1>
        <button
          className="btn btn-primary mt-4"
          onClick={() => {
            setError(null);
            fetchRequest();
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  if (!allRequest || allRequest.length === 0) {
    return (
      <h1 className="text-4xl text-center mt-24 font-bold text-red-400">
        No Requests Found
      </h1>
    );
  }

  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Friend Requests</h1>
      {renderRequests}
    </div>
  );
};

export default Request;
