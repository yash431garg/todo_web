import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: false,
  },
  reducers: {
    authentication: (state) => {
      state.value = true;
    },
  },
});
export const { authentication } = authSlice.actions;
export default authSlice.reducer;
