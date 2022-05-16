import React from "react";
import { Link } from "react-router-dom";
import "../../../sass/components/navigation/desktop-navigation.scss";
import "../../../sass/components/button/button.scss";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";

const DesktopNavigation = (): JSX.Element => {
  const typeOfNavigation = useAppSelector(
    (state) => state.navigation.navigation
  );
  const dispatch = useAppDispatch();
  return (
    <nav className="navigation__desktop">
      <Link className="navigation__logo" to="/home">
        Balance
      </Link>
      <ul className="navigation__links--desktop">
        <li className="navigation__link--desktop">
          <Link to="/about">About</Link>
        </li>
        <li className="navigation__link--desktop">
          <Link to="/account">Account</Link>
        </li>
        <li className="navigation__link--desktop">
          <Link to="/operation">Operation</Link>
        </li>
        {<button className="btn btn--small btn--transparent">Sign in</button>}
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
