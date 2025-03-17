import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "./utils/userSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleLogoutBtn = async () => {
    const logout = await axios.post(
      "http://localhost:1008/logout",
      {},
      {
        withCredentials: true,
      }
    );
    //console.log(logout);
    dispatch(removeUser());
    navigate("/login");
  };
  //console.log(user);
  return (
    <div className="">
      <div className="navbar bg-base-200">
        <div className="flex-1 mx-10">
          <Link to="/" className="btn btn-ghost text-xl">
            DecConnect
          </Link>
        </div>
        {user && (
          <div className="flex-none gap-2">
            <div className="flex items-center">
              <h1 className=" font-bold text-xl">{user.firstName}</h1>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar mx-10"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/connections">Friends</Link>
                </li>
                <li>
                  <Link to="/request">Friends Request</Link>
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
