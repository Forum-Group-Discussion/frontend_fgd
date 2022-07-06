import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    name: "",
  },
  reducers: {
    USER_ID: (state, action) => {
      state.id = action.payload;
    },
    USER_NAME: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { USER_NAME, USER_ID } = userSlice.actions;

export default userSlice.reducer;
