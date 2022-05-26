import React, { Fragment } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import "../../../sass/components/layout/layout.scss";
import Navigation from "../Navigation/Navigation";

const Layout = (): JSX.Element => {
  const typeOfNavigation = useAppSelector((state) => state.navigation);
  const dispatch = useAppDispatch();
  return (
    <Fragment>
      <Navigation></Navigation>
      <main>
        <Outlet></Outlet>
      </main>
    </Fragment>
  );
};

export default Layout;
