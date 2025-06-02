import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../constant";
import {
  FaUserCircle,
  FaUsers,
  FaComments,
  FaBell,
  FaSignOutAlt,
} from "react-icons/fa";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  // Function to handle dynamic navigation for "DevConnect"
  const handleDevConnectClick = () => {
    if (user && user._id) {
      navigate("/feed");
    } else {
      navigate("/"); // Navigate to landing page when logged out
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
    <div className="sticky top-0 z-50">
      <div className="navbar bg-base-100 border-b shadow-sm">
        {/* Background Shapes */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute -top-4 right-0 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute -top-4 right-48 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -top-4 right-96 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="navbar-start">
          <button
            onClick={handleDevConnectClick}
            className="btn btn-ghost normal-case text-xl gap-2 hover:bg-base-200 px-2"
          >
            <span className="text-2xl transform transition-transform duration-200 hover:scale-110">
              👨‍💻
            </span>
            <span className="font-bold">DevConnect</span>
          </button>
        </div>

        {user && (
          <>
            <div className="navbar-center hidden md:flex items-center gap-2">
              <button
                onClick={() => navigate("/feed")}
                className="btn btn-ghost gap-2"
                title="Feed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3m0 0l3-3m-3 3V8"
                  />
                </svg>
                <span className="hidden lg:inline">Feed</span>
              </button>

              <button
                onClick={() => navigate("/connections")}
                className="btn btn-ghost gap-2"
                title="Connections"
              >
                <FaUsers className="h-5 w-5" />
                <span className="hidden lg:inline">Connections</span>
              </button>

              <button
                onClick={() => navigate("/chat")}
                className="btn btn-ghost gap-2"
                title="Messages"
              >
                <FaComments className="h-5 w-5" />
                <span className="hidden lg:inline">Messages</span>
              </button>

              <button
                onClick={() => navigate("/request")}
                className="btn btn-ghost gap-2"
                title="Notifications"
              >
                <div className="indicator">
                  <FaBell className="h-5 w-5" />
                  <span className="badge badge-primary badge-sm indicator-item">
                    2
                  </span>
                </div>
                <span className="hidden lg:inline">Notifications</span>
              </button>
            </div>

            <div className="navbar-end">
              <div className="hidden md:flex items-center gap-2">
                {/* Profile Button */}
                <button
                  onClick={() => navigate("/profile")}
                  className="btn btn-ghost gap-2"
                >
                  <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src={
                          user.photoURL ||
                          "https://ui-avatars.com/api/?name=" + user.firstName
                        }
                        alt="Profile"
                      />
                    </div>
                  </div>
                  <span className="font-medium hidden lg:inline">
                    {user.firstName}
                  </span>
                </button>

                <div className="divider divider-horizontal"></div>

                <button
                  onClick={handleLogoutBtn}
                  className="btn btn-ghost gap-2 text-error"
                  title="Log Out"
                >
                  <FaSignOutAlt className="h-5 w-5" />
                  <span className="hidden lg:inline">Log Out</span>
                </button>
              </div>

              {/* Mobile Menu */}
              <div className="dropdown dropdown-end md:hidden">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a
                      onClick={() => navigate("/profile")}
                      className="flex items-center gap-2"
                    >
                      <div className="avatar">
                        <div className="w-6 rounded-full">
                          <img
                            src={
                              user.photoURL ||
                              "https://ui-avatars.com/api/?name=" +
                                user.firstName
                            }
                            alt="Profile"
                          />
                        </div>
                      </div>
                      Profile
                    </a>
                  </li>
                  <li>
                    <a onClick={() => navigate("/feed")}>Feed</a>
                  </li>
                  <li>
                    <a onClick={() => navigate("/connections")}>Connections</a>
                  </li>
                  <li>
                    <a onClick={() => navigate("/chat")}>Messages</a>
                  </li>
                  <li>
                    <a
                      onClick={() => navigate("/request")}
                      className="flex items-center justify-between"
                    >
                      Notifications
                      <span className="badge badge-primary badge-sm">2</span>
                    </a>
                  </li>
                  <div className="divider my-0"></div>
                  <li>
                    <a onClick={handleLogoutBtn} className="text-error">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
