import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import { closeMobileLinks } from "../../store/navigationSlice";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import "../../../sass/components/navigation/mobile-links.scss";

const MobileLinks = (): JSX.Element => {
  const areLinksOpen = useAppSelector(
    (state) => state.navigation.mobileLinksOpen
  );
  const dispatch = useAppDispatch();

  const active = classNames("navigation-mobile__nav", {
    "navigation-mobile__nav--open": areLinksOpen,
  });

  const closeLinksHandler = () => {
    dispatch(closeMobileLinks());
  };

  return (
    <nav className={active}>
      <ul className="navigation-mobile__list">
        <li className="navigation-mobile__item">
          <Link onClick={closeLinksHandler} to="/home">
            Start
          </Link>
        </li>
        <li className="navigation-mobile__item">
          <Link onClick={closeLinksHandler} to="/about">
            About me
          </Link>
        </li>
        <li className="navigation-mobile__item">
          <Link onClick={closeLinksHandler} to="/portfolio">
            Projects
          </Link>
        </li>
        <li className="navigation-mobile__item">
          <Link onClick={closeLinksHandler} to="/contact">
            Contact me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileLinks;
