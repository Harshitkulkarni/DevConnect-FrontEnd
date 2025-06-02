import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "./utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { baseURL } from "../constant";
import { FaPaperPlane, FaSmile } from "react-icons/fa";

const Chat = () => {
  const { toUserId } = useParams();
  const user = useSelector((store) => store.user);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messageContainerRef = useRef(null);
  const { _id: fromUserId, firstName, lastName, photoURL } = user || {};

  const fetchChatMessage = async () => {
    try {
      const res = await axios.get(baseURL + "/chat/" + toUserId, {
        withCredentials: true,
      });
      const chatMessages = res.data.message.map((msg) => ({
        firstName: msg.senderId.firstName,
        lastName: msg.senderId.lastName,
        text: msg.text,
        photoURL: msg.senderId.photoURL,
        timestamp: new Date(msg.createdAt).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      }));
      setMessages(chatMessages);
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  };

  useEffect(() => {
    fetchChatMessage();
  }, [toUserId]);

  useEffect(() => {
    if (!fromUserId || !toUserId) return;

    const socket = createSocketConnection();
    socket.emit("joinChat", { fromUserId, toUserId });

    socket.on("receivedMessage", ({ firstName, text, photoURL, timestamp }) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { firstName, text, photoURL, timestamp },
      ]);
      setIsTyping(false);
    });

    socket.on("userTyping", () => {
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 3000);
    });

    return () => {
      socket.disconnect();
    };
  }, [fromUserId, toUserId]);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const timestamp = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      fromUserId,
      toUserId,
      text: newMessage,
      firstName,
      photoURL,
      timestamp,
    });

    setMessages((prev) => [
      ...prev,
      { firstName, text: newMessage, photoURL, timestamp },
    ]);
    setNewMessage("");
  };

  const handleTyping = (e) => {
    setNewMessage(e.target.value);
    const socket = createSocketConnection();
    socket.emit("typing", { fromUserId, toUserId });
  };

  if (!user) {
    return (
      <div className="h-full flex items-center justify-center">Loading...</div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="px-4 py-3 border-b border-base-200 bg-base-100">
        <div className="flex items-center gap-2">
          <div className="avatar online">
            <div className="w-8 rounded-full">
              <img
                src={
                  messages[0]?.photoURL ||
                  "https://ui-avatars.com/api/?name=User"
                }
                alt="Chat Avatar"
              />
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-base-content">
              {messages[0]?.firstName} {messages[0]?.lastName}
            </h2>
            <p className="text-xs text-base-content/60">
              {isTyping ? "typing..." : "online"}
            </p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div
        ref={messageContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-3 bg-base-100/50"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-end gap-2 ${
              msg.firstName === firstName ? "flex-row-reverse" : ""
            }`}
          >
            <div className="flex flex-col items-end gap-1">
              <div
                className={`max-w-xs ${
                  msg.firstName === firstName
                    ? "bg-primary text-primary-content"
                    : "bg-base-200 text-base-content"
                } rounded-2xl px-3 py-2`}
              >
                <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
              </div>
              <span className="text-[10px] text-base-content/60">
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-3 border-t border-base-200 bg-base-100">
        <div className="flex items-center gap-2">
          <button className="btn btn-circle btn-ghost btn-sm">
            <FaSmile className="h-4 w-4 text-base-content/60" />
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={handleTyping}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type your message..."
            className="input input-sm input-bordered flex-1 bg-base-100 focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="btn btn-circle btn-primary btn-sm"
          >
            <FaPaperPlane className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
