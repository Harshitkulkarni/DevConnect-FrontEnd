import { BrowserRouter, Routes, Route } from "react-router-dom";

import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./Feed";
import Connections from "./Connections";
import Request from "./Request";
import Chat from "./Chat";
import LandingPage from "./LandingPage";
import ChatDrawer from "./ChatDrawer";
import ChatLayout from "./ChatLayout";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />}>
              <Route index element={<LandingPage />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/request" element={<Request />} />

              <Route path="/chat" element={<ChatLayout />}>
                <Route index element={<div></div>} />{" "}
                {/* Keep empty by default */}
                <Route path=":toUserId" element={<Chat />} />{" "}
                {/* Chat loads dynamically */}
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
