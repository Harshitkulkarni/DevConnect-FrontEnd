import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";

const EditProfile = ({ user }) => {
  const [formData, setFormData] = useState({
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    photoURL: user.photoURL || "",
    age: user.age || "",
    gender: user.gender || "",
    bio: user.bio || "",
    skills: user.skills || "",
  });
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditProfile = async () => {
    try {
      const res = await axios.patch(
        "http://localhost:1008/profile/edit",
        formData,
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update profile");
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
                  {[
                    { label: "First Name", name: "firstName" },
                    { label: "Last Name", name: "lastName" },
                    { label: "Photo URL", name: "photoURL" },
                    { label: "Age", name: "age" },
                    { label: "Gender", name: "gender" },
                    { label: "Skills", name: "skills" },
                  ].map(({ label, name }) => (
                    <label
                      key={name}
                      className="input input-bordered flex items-center py-2 my-3 gap-2"
                    >
                      <input
                        type="text"
                        className="grow"
                        placeholder={label}
                        name={name}
                        value={formData[name]}
                        onChange={handleInputChange}
                      />
                    </label>
                  ))}
                  <label className="form-control">
                    <div className="label">
                      <span className="label-text">Your bio</span>
                    </div>
                    <textarea
                      className="textarea textarea-bordered h-24"
                      placeholder="Bio"
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                    ></textarea>
                  </label>
                </div>
                <p className="text-red-500 mt-4">{error}</p>
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
        <div className="w-full flex h-1/2 justify-center my-24 mx-10">
          <UserCard data={formData} />
        </div>
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile updated successfully!</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
