import React from "react";

const UserCard = ({ data }) => {
  //console.log(data);
  const { firstName, lastName, age, gender, bio, skills, photoURL } = data;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl  mt-5">
      <figure className="w-6/12">
        <img src={photoURL} alt="Album" />
      </figure>
      <div className="card-body">
        <h1 className="card-title ">{firstName + " " + lastName}</h1>
        <div>
          <p className="mt-2">{age + ", " + gender}</p>
          <p className="mt-2">{bio}</p>
          <p className="mt-2">{skills}</p>
        </div>
        <div className="card-actions justify-center mt-36">
          <button className="btn btn-primary px-5 mx-2 text-base">
            Ignore
          </button>
          <button className="btn btn-primary px-5 mx-2 text-base">
            Intrested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
