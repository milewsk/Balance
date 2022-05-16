import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import "../../../sass/components/navigation/mobile-navigation.scss";
import { closeMobileLinks, openMobileLinks } from "../../store/navigationSlice";
import classNames from "classnames";

const MobileNavigation = (): JSX.Element => {
  const areLinksOpen = useAppSelector(
    (state) => state.navigation.mobileLinksOpen
  );
  const dispatch = useAppDispatch();

  const active = classNames("navigation__menu", {
    "navigation__menu--open": areLinksOpen,
  });

  const changeNavBackground = classNames("navigation__mobile", {
    "full-fill": areLinksOpen,
  });

  const burgerMenuHandler = () => {
    if (areLinksOpen) {
      dispatch(closeMobileLinks());
    } else {
      dispatch(openMobileLinks());
    }
  };

  return (
    <nav className={changeNavBackground}>
      <Link className="navigation__logo" to="/home">
        Balance
      </Link>
      <button
        className={active}
        aria-label="Toggle Mobile Menu Button"
        onClick={burgerMenuHandler}
      >
        <span className="hm-bar hm-bar-one"></span>
        <span className="hm-bar hm-bar-two"></span>
        <span className=" hm-bar hm-bar-three"></span>
      </button>
    </nav>
  );
};

export default MobileNavigation;
