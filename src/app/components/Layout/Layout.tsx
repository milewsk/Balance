import React, { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import Navigation from "../Navigation/Navigation";

const Layout = (): JSX.Element => {
  const typeOfNavigation = useAppSelector((state) => state.navigation);
  const dispatch = useAppDispatch();
  return (
    <Fragment>
      <Navigation></Navigation>
      <main></main>
    </Fragment>
  );
};
