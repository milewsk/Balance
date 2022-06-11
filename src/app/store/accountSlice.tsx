import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useCallback, useEffect } from "react";

interface IAccountState {
  isLoggedIn: boolean;
  email: string | null;
  token: string | null;
  sessionRemainingTime: number | null;
}

interface ILoginCrudencials {
  email: string;
  expirationTime: number;
}

const initialState: IAccountState = {
  email: localStorage.getItem("email"),
  isLoggedIn: localStorage.getItem("email") ? true : false,
  token: null,
  sessionRemainingTime: Number(localStorage.getItem("expirationTime")),
};

let logoutTimer: NodeJS.Timeout;

export const AccountSlice = createSlice({
  name: "AccountController",
  initialState,
  reducers: {
    userLogin: (
      state: IAccountState,
      action: PayloadAction<ILoginCrudencials>
    ) => {
      console.log("it is");
      state.isLoggedIn = true;
      state.email = action.payload.email;
      state.sessionRemainingTime = calculateRemainingTime(
        action.payload.expirationTime
      );

      addCrudentialsToStorage(
        state.email,
        state.sessionRemainingTime.toString()
      );

      console.log(localStorage.getItem("email"));
      logoutTimer = setTimeout(userLogout, state.sessionRemainingTime);
    },

    userLogout: (state: IAccountState) => {
      state.isLoggedIn = false;
      state.email = "";
      state.token = null;
      state.sessionRemainingTime = 0;

      window.localStorage.removeItem("email");
      window.localStorage.removeItem("expirationTime");

      if (logoutTimer) {
        clearTimeout(logoutTimer);
      }
    },
    retriveStoredToken: (state: IAccountState) => {
      const storedToken: string | null = window.localStorage.getItem("email");
      const storedExpirationTime: string | null =
        window.localStorage.getItem("expirationTime");

      const remainingTime: number = calculateRemainingTime(
        Number(storedExpirationTime)
      );

      if (remainingTime <= 30000) {
        window.localStorage.removeItem("email");
        window.localStorage.removeItem("expirationTime");

        AccountSlice.caseReducers.userLogout(state);
      }

      console.log("stored " + storedToken);

      if (storedToken !== null) {
        console.log("triggered");
        const payload: ILoginCrudencials = {
          email: storedToken,
          expirationTime: remainingTime,
        };
        AccountSlice.caseReducers.userLogin(state, { payload, type: "login" });
      }
    },
  },
});

const addCrudentialsToStorage = (email: string, expirationTime: string) => {
  window.localStorage.setItem("email", email);
  window.localStorage.setItem("expirationTime", expirationTime);
};

const calculateRemainingTime = (expirationTime: number): number => {
  const currentTime: number = new Date().getTime();
  const remainingTime: number = expirationTime - currentTime;

  return remainingTime;
};

// const retriveStoredToken = () => {
//   const storedToken: string | null = localStorage.getItem("email");
//   const storedExpirationTime: string | null =
//     localStorage.getItem("expirationTime");

//   const remainingTime: number = calculateRemainingTime(
//     Number(storedExpirationTime)
//   );

//   if (remainingTime <= 60000) {
//     localStorage.removeItem("email");
//     localStorage.removeItem("expirationTime");

//     return null;
//   }

//   return { email: storedToken, duration: remainingTime };
// };

export const { userLogin, userLogout, retriveStoredToken } =
  AccountSlice.actions;

export default AccountSlice.reducer;
