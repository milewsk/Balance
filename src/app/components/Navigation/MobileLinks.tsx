import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import { closeMobileLinks } from "../../store/navigationSlice";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import "../../../sass/components/navigation/mobile-links.scss";
import { userLogout } from "../../store/accountSlice";

const MobileLinks = (): JSX.Element => {
  const areLinksOpen = useAppSelector(
    (state) => state.navigation.mobileLinksOpen
  );

  const isLogged = useAppSelector((state) => state.account.isLoggedIn);
  const dispatch = useAppDispatch();

  const active = classNames("navigation-mobile__nav", {
    "navigation-mobile__nav--open": areLinksOpen,
  });

  const closeLinksHandler = () => {
    dispatch(closeMobileLinks());
  };

  const logoutHandler = () => {
    dispatch(closeMobileLinks());
    dispatch(userLogout());
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
          <Link onClick={closeLinksHandler} to="/account">
            Konta
          </Link>
        </li>
        <li className="navigation-mobile__item">
          <Link onClick={closeLinksHandler} to="/operation">
            Operacje
          </Link>
        </li>
        {isLogged && (
          <li className="navigation-mobile__item">
            <Link onClick={logoutHandler} to="/contact">
              Wyloguj
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default MobileLinks;
