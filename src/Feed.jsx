import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "./utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const fetchfeed = async () => {
    const res = await axios.get("http://localhost:1008/feed", {
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

  return (
    feedData && (
      <div className="h-screen flex justify-center ">
        <div className="mt-28  w-6/12">
          <UserCard data={feedData[1]} />
        </div>
      </div>
    )
  );
};

export default Feed;
