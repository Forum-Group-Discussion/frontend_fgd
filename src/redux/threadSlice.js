import { createSlice } from "@reduxjs/toolkit";

export const threadSlice = createSlice({
  name: "thread",
  //   initialState: {
  //     id: "",
  //     user: "",
  //     title: "",
  //     content: "",
  //     image: "",
  //     topic: "",
  //   },
  //   reducers: {
  //     THREAD_ID: (state, action) => {
  //       state.id = action.payload;
  //     },
  //     THREAD_USER: (state, action) => {
  //       state.user = action.payload;
  //     },
  //     THREAD_TITLE: (state, action) => {
  //       state.title = action.payload;
  //     },
  //     THREAD_CONTENT: (state, action) => {
  //       state.content = action.payload;
  //     },
  //     THREAD_IMAGE: (state, action) => {
  //       state.image = action.payload;
  //     },
  //     THREAD_TOPIC: (state, action) => {
  //       state.topic = action.payload;
  //     },
  //   },
  initialState: {
    thread: [],
  },
  reducers: {
    DATA_THREAD: (state, action) => {
      state.thread = action.payload;
    },
  },
});

// export const { THREAD_ID, THREAD_USER, THREAD_TITLE, THREAD_CONTENT, THREAD_IMAGE, THREAD_TOPIC } = threadSlice.actions;
export const { DATA_THREAD } = threadSlice.actions;

export default threadSlice.reducer;
