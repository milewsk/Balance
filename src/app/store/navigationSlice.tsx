import { createSlice } from "@reduxjs/toolkit";

interface INavigationState {
  mobileLinksOpen: boolean;
  navigation: string;
}

const initialState: INavigationState = {
  mobileLinksOpen: false,
  navigation: window.innerWidth > 767 ? "desktop" : "mobile",
};

export const NavigationSlice = createSlice({
  name: "NavigationController",
  initialState,
  reducers: {
    openMobileLinks: (state: INavigationState) => {
      state.mobileLinksOpen = true;
    },

    closeMobileLinks: (state: INavigationState) => {
      state.mobileLinksOpen = false;
    },

    checkWidth: (state: INavigationState) => {
      if (window.innerWidth > 767) {
        state.navigation = "desktop";
      } else {
        state.navigation = "mobile";
      }
    },
  },
});

export const { openMobileLinks, closeMobileLinks, checkWidth } =
  NavigationSlice.actions;

export default NavigationSlice.reducer;
