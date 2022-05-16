import { createSlice } from "@reduxjs/toolkit";

interface IAccountState {
  isLoggedIn: boolean;
  token: string | null;
  sessionRemainingTime: number;
}

const initialState: IAccountState = {
  isLoggedIn: false,
  token: null,
  sessionRemainingTime: 0,
};

export const AccountSilce = createSlice({
  name: "AccountController",
  initialState,
  reducers: {
    userLogin: (state: IAccountState) => {},

    userLogout: (state: IAccountState) => {
      state.isLoggedIn = false;
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
