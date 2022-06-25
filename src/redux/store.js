import { configureStore } from "@reduxjs/toolkit/";
import userReducer from "./userSlice";
import threadReducer from "./threadSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    thread: threadReducer,
  },
});
