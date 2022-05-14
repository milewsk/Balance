import React from "react";
import { Link } from "react-router-dom";
import { deflate } from "zlib";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";

const DesktopNavigation = (): JSX.Element => {
  const typeOfNavigation = useAppSelector((state) => state.navigation);
  const dispatch = useAppDispatch();
  return (
    <nav className="navigation__desktop">
      <Link className="navigation__logo" to="/home">
        Balance
      </Link>
      <ul>
        <li>
          <Link to="/about"></Link>
        </li>
        <li>
          <Link to="/about"></Link>
        </li>
        <li>{<button>Sign in</button>}</li>
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
