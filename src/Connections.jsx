import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "./utils/connectionsSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const allConnections = useSelector((store) => store.connections);
  const fetchConnections = async () => {
    const res = await axios.get("http://localhost:1008/user/view/connections", {
      withCredentials: true,
    });
    //console.log(res.data.data);
    dispatch(addConnections(res.data.data));
  };
  useEffect(() => {
    fetchConnections();
  }, []);

  if (!allConnections) return;

  if (allConnections.length === 0) return <h1>No Connections Found</h1>;
  //console.log(allConnections);
  return (
    <div>
      {allConnections.map((connection) => (
        <div key={connection._id} className="flex flex-col items-center">
          <h1 className="text-4xl text-center mt-10">Connections</h1>
          <div className="stats shadow mt-10 w-1/2 ">
            <div className="stat">
              <div className="text-3xl font-bold">
                {connection.firstName + " " + connection.lastName}
              </div>
              <div className="stat-title mt-2">{connection.bio}</div>
              <div className="stat-desc mt-2 text-sm">{connection.skills}</div>
              <div className="stat-desc mt-2 text-sm">
                {connection.age &&
                  connection.gender &&
                  connection.age + ", " + connection.gender}
              </div>
              <div className="stat-figure text-secondary">
                <div className="avatar ">
                  <div className="w-16 rounded-full">
                    <img src={connection.photoURL} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Connections;
