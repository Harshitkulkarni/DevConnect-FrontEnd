import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./utils/userSlice";
import { baseURL } from "../constant";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    if (userData && userData._id) return; // Ensure user data isn't fetched repeatedly
    try {
      const res = await axios.get(baseURL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (error) {
      if (error.response?.status === 401) {
        // Use response status for error checking
        navigate("/login");
      } else {
        console.error("Failed to fetch user data:", error);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userData]); // Dependency added to avoid redundant calls

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow p-5">
        <Outlet />
      </div>
      <Footer className="bg-gray-800 text-white py-4" />
    </div>
  );
};

export default Body;
