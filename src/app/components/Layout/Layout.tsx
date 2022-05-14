import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import Navigation from "../Navigation/Navigation";

const Layout = (): JSX.Element => {
  const typeOfNavigation = useAppSelector((state) => state.navigation);
  const dispatch = useAppDispatch();
  return (
    <Fragment>
      <Navigation></Navigation>
      <main>
        {/* <Routes>
          <Route element={<div></div>}></Route>
          <Route path="/"></Route>
        </Routes> */}
      </main>
    </Fragment>
  );
};

export default Layout;
