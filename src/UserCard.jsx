import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "./utils/feedSlice";
import { baseURL } from "../constant";

const UserCard = ({ data }) => {
  const dispatch = useDispatch();
  // console.log(data);
  const {
    _id,
    firstName,
    lastName,
    age,
    gender,
    bio,
    skills,
    photoURL,
    previewURL,
  } = data;

  const handleSendRequest = async (status, id) => {
    const res = await axios.post(
      baseURL + "/request/send/" + status + "/" + id,
      {},
      { withCredentials: true }
    );
    //console.log(res);
    dispatch(removeUserFromFeed(id));
  };
  const handleSwipe = (direction) => {
    handleSendRequest(direction === "left" ? "ignored" : "interested", userId);
  };
  const truncateString = (str, strLength) => {
    return str.length > strLength ? str.slice(0, strLength) + "..." : str;
  };
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="w-6/12 h-max">
        <img src={photoURL || previewURL} alt="Album" />
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
    // <TinderCard
    //   onSwipe={handleSwipe}
    //   className="card max-w-sm border border-gray-200 rounded-lg overflow-hidden cursor-grab active:cursor-grab"
    //   swipeRequirementType="position"
    //   swipeThreshold={100}
    //   preventSwipe={["up", "down"]}
    // >
    //   <div className="flex flex-col h-full">
    //     <img
    //       src={photoURL}
    //       draggable="false"
    //       loading="lazy"
    //       className="h-[60%] w-full object-cover"
    //       alt="user"
    //     />
    //     <div className="p-4 bg-base-200 flex flex-col justify-between h-[40%]">
    //       <div>
    //         <h2 className="text-lg sm:text-xl font-semibold">{firstName}</h2>
    //         <p className="text-sm sm:text-base text-gray-600 sm:mt-1 mb-2">{`${age}, ${gender}`}</p>
    //         <p className="text-gray-300 text-sm sm:text-base">
    //           {truncateString(bio, 50) || "No description available"}
    //         </p>
    //       </div>
    //       <div className="card-actions hidden sm:flex justify-between space-x-2 mt-4">
    //         <button
    //           onClick={() => handleSendRequest("ignored")}
    //           className="btn btn-error btn-sm sm:btn-md flex-1"
    //         >
    //           ignored
    //         </button>
    //         <button
    //           onClick={() => handleSendRequest("interested")}
    //           className="btn btn-primary btn-sm sm:btn-md flex-1"
    //         >
    //           interested
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </TinderCard>
  );
};

export default UserCard;
