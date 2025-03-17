import { configureStore } from "@reduxjs/toolkit";
import userReducre from "./userSlice";
import feedReducer from "./feedSlice";
import connectionsReducer from "./connectionsSlice";

const appStore = configureStore({
  reducer: {
    user: userReducre,
    feed: feedReducer,
    connections: connectionsReducer,
  },
});

export default appStore;
