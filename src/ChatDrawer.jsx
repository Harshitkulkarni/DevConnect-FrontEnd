import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "./utils/connectionsSlice";
import { baseURL } from "../constant";
import { Link, useParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const ChatDrawer = () => {
  const dispatch = useDispatch();
  const { toUserId } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  const fetchConnections = async () => {
    try {
      const res = await axios.get(baseURL + "/user/view/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.error("Failed to fetch connections:", err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  const allConnections = useSelector((store) => store.connections);
  const filteredConnections = allConnections?.filter((connection) =>
    (connection.firstName + " " + connection.lastName)
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      {/* Search Header */}
      <div className="p-4 border-b border-base-200">
        <div className="relative">
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered w-full pl-10"
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40" />
        </div>
      </div>

      {/* Conversations List */}
      <div className="overflow-y-auto flex-1">
        {filteredConnections?.length > 0 ? (
          filteredConnections.map((connection) => (
            <Link
              key={connection._id}
              to={"/chat/" + connection._id}
              className={`block transition-colors hover:bg-base-200 ${
                toUserId === connection._id ? "bg-base-200" : ""
              }`}
            >
              <div className="flex items-center gap-3 p-4 border-b border-base-200">
                <div className="avatar online">
                  <div className="w-12 rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src={
                        connection.photoURL ||
                        `https://ui-avatars.com/api/?name=${connection.firstName}`
                      }
                      alt={connection.firstName}
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-base-content truncate">
                    {connection.firstName} {connection.lastName}
                  </h3>
                  <p className="text-sm text-base-content/60 truncate">
                    {connection.email}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="p-8 text-center text-base-content/60">
            {searchTerm
              ? "No matching conversations found"
              : "No conversations yet"}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatDrawer;
