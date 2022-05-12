import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";

const Navigation = (): JSX.Element => {
  const typeOfNavigation = useAppSelector((state) => state.navigation);
  const dispatch = useAppDispatch();
  return <div></div>;
};
