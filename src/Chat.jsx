import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "./utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { baseURL } from "../constant";

const Chat = () => {
  const { toUserId } = useParams();
  const user = useSelector((store) => store.user);

  const [message, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messageContainerRef = useRef(null); // Ref for the message container

  const { _id: fromUserId, firstName, lastName, photoURL } = user || {};

  const fetchChatMessage = async () => {
    const res = await axios.get(baseURL + "/chat/" + toUserId, {
      withCredentials: true,
    });
    const chatMessages = res.data.message.map((msg) => ({
      firstName: msg.senderId.firstName,
      lastName: msg.senderId.lastName,
      text: msg.text,
      photoURL: msg.senderId.photoURL,
    }));
    //console.log(chatMessages);
    setMessage(chatMessages);
  };

  useEffect(() => {
    fetchChatMessage();
  }, [toUserId]);

  useEffect(() => {
    if (!fromUserId || !toUserId) return;

    const socket = createSocketConnection();
    socket.emit("joinChat", { fromUserId, toUserId });

    socket.on("recivedMessage", ({ firstName, text, photoURL }) => {
      setMessage((message) => [...message, { firstName, text, photoURL }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [fromUserId, toUserId]);

  useEffect(() => {
    // Automatically scroll the message container to the bottom
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [message]);

  const sendMessage = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      fromUserId,
      toUserId,
      firstName,
      lastName,
      photoURL,
      text: newMessage,
    });
    setNewMessage("");
  };

  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="relative w-6/12 border h-3/4 border-gray-400 rounded-lg  mt-4 flex flex-col">
        {/* Messages Section */}

        <div
          className="flex-grow p-5  overflow-y-auto"
          ref={messageContainerRef} // Attach the ref to the message container
        >
          {message.map((msg, index) => (
            <div
              key={index}
              className={
                "chat " +
                (user?.firstName === msg?.firstName ? "chat-end" : "chat-start")
              }
            >
              <div className="chat-image avatar my-2">
                <div className="w-10 rounded-full">
                  <img alt="Avatar" src={msg.photoURL} />
                </div>
              </div>
              <div className="chat-bubble">{msg.text}</div>
            </div>
          ))}
        </div>
        {/* Input Section */}
        <div className="p-3 bg-gray-100 flex items-center border-t border-gray-300">
          <input
            value={newMessage}
            type="text"
            placeholder="Type your message"
            className="input input-bordered flex-grow mx-2"
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={sendMessage} className="btn btn-active w-32">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
