import { Outlet, useParams } from "react-router-dom";
import ChatDrawer from "./ChatDrawer";

const ChatLayout = () => {
  const { toUserId } = useParams();

  return (
    <div className="container mx-auto max-w-6xl px-4 py-6">
      <div className="flex h-[calc(100vh-200px)] bg-base-100 rounded-lg shadow-lg overflow-hidden">
        {/* Sidebar: Always Visible */}
        <div className="w-72 border-r border-base-200 bg-base-100">
          <ChatDrawer />
        </div>

        {/* Chat Window: Only Render When a Chat is Open */}
        <div className="flex-grow">
          {toUserId ? (
            <Outlet />
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-8">
              <div className="text-center space-y-4">
                <div className="text-5xl mb-4">💬</div>
                <h1 className="text-xl font-bold text-base-content">
                  Welcome to DevConnect Chat
                </h1>
                <p className="text-sm text-base-content/60">
                  Select a conversation or start a new one
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
