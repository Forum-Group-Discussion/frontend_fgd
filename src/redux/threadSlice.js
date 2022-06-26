import { createSlice } from "@reduxjs/toolkit";

export const threadSlice = createSlice({
  name: "thread",
  initialState: {
    thread: [],
  },
  reducers: {
    DATA_THREAD: (state, action) => {
      state.thread = action.payload;
    },
  },
});

export const { DATA_THREAD } = threadSlice.actions;

export default threadSlice.reducer;
