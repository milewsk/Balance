import React from "react";
import { deflate } from "zlib";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";

const DesktopNavigation = (): JSX.Element => {
  const typeOfNavigation = useAppSelector((state) => state.navigation);
  const dispatch = useAppDispatch();
  return <div></div>;
};

export default DesktopNavigation;
