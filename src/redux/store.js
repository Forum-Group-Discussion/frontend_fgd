import { configureStore } from "@reduxjs/toolkit/";
import userReducer from "./userSlice";
import threadReducer from "./threadSlice";
import profileReducer from "./profileSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    thread: threadReducer,
    profile: profileReducer,
  },
});
