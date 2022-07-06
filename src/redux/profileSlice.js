import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: [],
  },
  reducers: {
    DATA_PROFILE: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { DATA_PROFILE } = profileSlice.actions;

export default profileSlice.reducer;
