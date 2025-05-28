import { Outlet, useParams } from "react-router-dom";
import ChatDrawer from "./ChatDrawer";

const ChatLayout = () => {
  const { toUserId } = useParams();

  return (
    <div className="flex h-screen">
      {/* Sidebar: Always Visible */}
      <div className="w-1/4 border-r border-gray-300">
        <ChatDrawer />
      </div>

      {/* Chat Window: Only Render When a Chat is Open */}
      <div className="flex-grow">
        {toUserId ? (
          <Outlet />
        ) : (
          <h1 className="text-4xl text-center mt-24 font-bold text-red-400">
            Step into a new conversation
          </h1>
        )}
      </div>
    </div>
  );
};

export default ChatLayout;
