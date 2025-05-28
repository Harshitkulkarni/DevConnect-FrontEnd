import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "./utils/connectionsSlice";
import { baseURL } from "../constant";
import Chat from "./Chat";
import { Link } from "react-router-dom";

const ChatDrawer = () => {
  const dispatch = useDispatch();
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
  //console.log(allConnections);
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {allConnections?.length > 0 ? (
              allConnections.map((connection) => (
                <Link to={"/chat/" + connection._id}>
                  <li key={connection.id}>
                    <div className="justify-between">
                      <h1>
                        {connection.firstName + " " + connection.lastName}
                      </h1>
                      <img
                        alt="User Avatar"
                        className="rounded-full w-16"
                        src={connection.photoURL}
                      />
                    </div>
                  </li>
                </Link>
              ))
            ) : (
              <li>No connections found.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChatDrawer;
