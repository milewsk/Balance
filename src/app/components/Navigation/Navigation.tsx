import React, { Fragment, useEffect } from "react";
import { checkWidth } from "../../store/navigationSlice";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import DesktopNavigation from "./DestopNavigation";
import MobileNavigation from "./MobileNavigation";

const Navigation = (): JSX.Element => {
  const typeOfNavigation = useAppSelector(
    (state) => state.navigation.navigation
  );
  const dispatch = useAppDispatch();

  //once
  useEffect(() => {
    dispatch(checkWidth());
  });

  //every time resize is triggered
  useEffect(() => {
    const checkViewportWidth = (element: UIEvent) => {
      dispatch(checkWidth());
    };
    window.addEventListener("resize", checkViewportWidth);

    return () => {
      window.removeEventListener("resize", checkViewportWidth);
    };
  }, [dispatch]);

  return (
    <Fragment>
      {typeOfNavigation === "desktop" && (
        <DesktopNavigation></DesktopNavigation>
      )}
      {typeOfNavigation === "mobile" && <MobileNavigation></MobileNavigation>}
    </Fragment>
  );
};

export default Navigation;
