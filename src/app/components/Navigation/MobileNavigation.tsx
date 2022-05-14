import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";

const MobileNavigation = (): JSX.Element => {
  const typeOfNavigation = useAppSelector((state) => state.navigation);
  const dispatch = useAppDispatch();
  return <div>mobile nav</div>;
};

export default MobileNavigation;
