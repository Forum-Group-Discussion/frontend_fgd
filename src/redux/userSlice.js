import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
  },
  reducers: {
    USER_NAME: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { USER_NAME } = userSlice.actions;

export default userSlice.reducer;
