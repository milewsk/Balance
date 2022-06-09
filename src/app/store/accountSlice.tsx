import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

interface IAccountState {
  isLoggedIn: boolean;
  email: string;
  token: string | null;
  sessionRemainingTime: number;
}

const initialState: IAccountState = {
  isLoggedIn: false,
  email: "",
  token: null,
  sessionRemainingTime: 0,
};

export const AccountSlice = createSlice({
  name: "AccountController",
  initialState,
  reducers: {
    userLogin: (state: IAccountState, action: PayloadAction<string>) => {
      state.isLoggedIn = true;
      state.email = action.payload;
    },

    userLogout: (state: IAccountState) => {
      state.isLoggedIn = false;
      state.email = "";
      state.token = null;
      state.sessionRemainingTime = 0;
    },
  },
});

const calculateRemainingTime = (expirationTime: number): number => {
  const currentTime: number = new Date().getTime();

  const remainingTime: number = expirationTime - currentTime;

  return remainingTime;
};

const retriveStoredToken = () => {
  const storedToken: string | null = localStorage.getItem("token");
  const storedExpirationTime: string | null =
    localStorage.getItem("expirationTime");

  const remainingTime: number = calculateRemainingTime(
    Number(storedExpirationTime)
  );
};

export const { userLogin, userLogout } = AccountSlice.actions;

export default AccountSlice.reducer;
