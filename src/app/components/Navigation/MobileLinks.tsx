import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";

const MobileLinks = (): JSX.Element => {
  const typeOfNavigation = useAppSelector((state) => state.navigation);
  const dispatch = useAppDispatch();
  return <div></div>;
};

export default MobileLinks;
