import { configureStore } from "@reduxjs/toolkit";
import userReducre from "./userSlice";
import feedReducer from "./feedSlice";
import connectionsReducer from "./connectionsSlice";
import requestReducer from "./request";

const appStore = configureStore({
  reducer: {
    user: userReducre,
    feed: feedReducer,
    connections: connectionsReducer,
    request: requestReducer,
  },
});

export default appStore;
