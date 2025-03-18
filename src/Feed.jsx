import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "./utils/feedSlice";
import UserCard from "./UserCard";
import { baseURL } from "../constant";

const Feed = () => {
  const dispatch = useDispatch();
  const fetchfeed = async () => {
    const res = await axios.get(baseURL + "/feed", {
      withCredentials: true,
    });
    //console.log(res.data);
    dispatch(addFeed(res.data));
  };
  useEffect(() => {
    fetchfeed();
  }, []);

  const feedData = useSelector((store) => store.feed);
  //console.log(feedData);
  if (!feedData) return;

  if (feedData.length <= 0)
    return (
      <h1 className="text-center text-3xl mt-10">No More Feed is Avilable</h1>
    );

  return (
    feedData && (
      <div className="h-screen flex justify-center ">
        <div className="mt-28  w-6/12">
          <UserCard data={feedData[0]} />
        </div>
      </div>
    )
  );
};

export default Feed;
