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
  },
});

export const { openMobileLinks, closeMobileLinks } = NavigationSlice.actions;

export default NavigationSlice.reducer;
