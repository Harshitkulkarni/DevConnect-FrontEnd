import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../constant";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  // Function to handle dynamic navigation for "DevConnect"
  const handleDevConnectClick = () => {
    if (user && user._id) {
      navigate("/feed"); // Navigate to /feed if logged in
    } else {
      navigate("/login"); // Navigate to /login if not logged in
    }
  };

  // Function to handle logout
  const handleLogoutBtn = async () => {
    try {
      await axios.post(
        baseURL + "/logout",
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeUser());
      navigate("/login"); // Redirect to login on logout
    } catch (error) {
      console.error("Failed to log out:", error); // Log any errors
    }
  };

  return (
    <div>
      <div className="navbar bg-base-200">
        {/* Dynamic "DevConnect" button */}
        <div className="flex-1 mx-10">
          <button
            onClick={handleDevConnectClick}
            className="btn btn-ghost text-xl"
          >
            DevConnect
          </button>
        </div>

        {/* User-specific content */}
        {user && (
          <div className="flex-none gap-2">
            <div className="flex items-center">
              <h1 className="font-bold text-xl">{user.firstName}</h1>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                aria-label="User avatar menu"
                className="btn btn-ghost btn-circle avatar mx-10"
              >
                <div className="w-10 rounded-full">
                  <img alt="User Avatar" src={user.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <button
                    onClick={() => navigate("/profile")}
                    className="justify-between"
                  >
                    Profile
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate("/connections")}>
                    Friends
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate("/request")}>
                    Friends Request
                  </button>
                </li>
                <li>
                  <button onClick={handleLogoutBtn}>Log Out</button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
