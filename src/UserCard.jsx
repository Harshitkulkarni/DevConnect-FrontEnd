import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "./utils/feedSlice";

const UserCard = ({ data }) => {
  const dispatch = useDispatch();
  //console.log(data);
  const { _id, firstName, lastName, age, gender, bio, skills, photoURL } = data;

  const handleSendRequest = async (status, id) => {
    const res = await axios.post(
      "/api/request/send/" + status + "/" + id,
      {},
      { withCredentials: true }
    );
    console.log(res);
    dispatch(removeUserFromFeed(id));
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="w-6/12 h-max">
        <img src={photoURL} alt="Album" />
      </figure>
      <div className="card-body">
        <h1 className="card-title ">{firstName + " " + lastName}</h1>
        <div>
          <p className="mt-2">{age + ", " + gender}</p>
          <p className="mt-2">{bio}</p>
          <p className="mt-2">{skills}</p>
        </div>
        <div className="card-actions justify-center mt-14">
          <button
            className="btn btn-primary px-5 mx-2 text-base"
            onClick={() => handleSendRequest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-primary px-5 mx-2 text-base"
            onClick={() => handleSendRequest("intrested", _id)}
          >
            Intrested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
