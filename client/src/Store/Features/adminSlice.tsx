import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { adminState } from "../../Interface/interface";
import { getAdminAccessTokenFromLocalStorage } from "../../Services/helpers";

const initialState: adminState = {
  token: getAdminAccessTokenFromLocalStorage(),
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    adminLogin: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
  },
});
export const { adminLogin } = adminSlice.actions;

export default adminSlice.reducer;