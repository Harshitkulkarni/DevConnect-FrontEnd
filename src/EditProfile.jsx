import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoURL, setPhotoURL] = useState(user.photoURL);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [bio, setBio] = useState(user.bio);
  const [skills, setSkills] = useState(user.skills);
  const [error, setError] = useState("");
  const [showTost, setShowTost] = useState(false);

  const dispatch = useDispatch();

  const handleEditProfile = async () => {
    try {
      const res = await axios.patch(
        "http://localhost:1008/profile/edit",
        { firstName, lastName, photoURL, age, gender, bio, skills },
        { withCredentials: true }
      );
      //console.log(res?.data?.data);
      dispatch(addUser(res?.data?.data));
      setShowTost(true);
      const i = setTimeout(() => {
        setShowTost(false);
      }, 3000);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="ml-32">
          <div className="flex justify-center mt-8">
            <div className="card bg-base-100 w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Edit Profile</h2>
                <div>
                  <label className="input input-bordered flex items-center py-2 my-3 gap-2">
                    <input
                      type="text"
                      className="grow"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </label>
                  <label className="input input-bordered flex items-center py-2 my-3 gap-2">
                    <input
                      type="text"
                      className="grow"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </label>
                  <label className="input input-bordered flex items-center py-2 my-3 gap-2">
                    <input
                      type="text"
                      className="grow"
                      placeholder="Photo URL"
                      value={photoURL}
                      onChange={(e) => {
                        setPhotoURL(e.target.value);
                      }}
                    />
                  </label>
                  <label className="input input-bordered flex items-center py-2 my-3 gap-2">
                    <input
                      type="text"
                      className="grow"
                      placeholder="Age"
                      value={age}
                      onChange={(e) => {
                        setAge(e.target.value);
                      }}
                    />
                  </label>
                  <label className="input input-bordered flex items-center py-2 my-3 gap-2">
                    <input
                      type="text"
                      className="grow"
                      placeholder="Gender"
                      value={gender}
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                    />
                  </label>
                  <label className="input input-bordered flex items-center py-2 my-3 gap-2">
                    <input
                      type="text"
                      className="grow"
                      placeholder="Skills"
                      value={skills}
                      onChange={(e) => {
                        setSkills(e.target.value);
                      }}
                    />
                  </label>
                  <label className="form-control">
                    <div className="label">
                      <span className="label-text">Your bio</span>
                    </div>
                    <textarea
                      className="textarea textarea-bordered h-24"
                      placeholder="Bio"
                      value={bio}
                      onChange={(e) => {
                        setBio(e.target.value);
                      }}
                    ></textarea>
                  </label>
                </div>
                <p className="text-red-500 mt-4 p-0">{error}</p>
                <div className="card-actions justify-center">
                  <button
                    className="btn btn-primary"
                    onClick={handleEditProfile}
                  >
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex h-1/2 justify-center mx-10">
          <UserCard
            data={{ firstName, lastName, photoURL, age, gender, bio, skills }}
          />
        </div>
      </div>
      {showTost && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile Updated successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
