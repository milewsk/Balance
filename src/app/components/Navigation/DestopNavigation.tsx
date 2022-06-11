import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../sass/components/navigation/desktop-navigation.scss";
import "../../../sass/components/button/button.scss";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { userLogout } from "../../store/accountSlice";

const DesktopNavigation = (): JSX.Element => {
  const navigate = useNavigate();

  const typeOfNavigation = useAppSelector(
    (state) => state.navigation.navigation
  );
  const isLogged = useAppSelector((state) => state.account.isLoggedIn);
  const dispatch = useAppDispatch();

  return (
    <nav className="navigation__desktop">
      <Link className="navigation__logo" to="/home">
        Balance
      </Link>
      <ul className="navigation__links--desktop">
        <li className="navigation__link--desktop">
          <Link to="about">Start</Link>
        </li>
        <li className="navigation__link--desktop">
          <Link to="account">Konta</Link>
        </li>
        <li className="navigation__link--desktop">
          <Link to="operation">Operacje</Link>
        </li>
        {!isLogged && (
          <button
            onClick={() => {
              navigate("/login", { replace: true });
            }}
            className="btn btn--small btn--transparent navigation_desktop__btn"
          >
            Zaczynamy
          </button>
        )}
        {isLogged && (
          <button
            onClick={() => {
              dispatch(userLogout());
              // navigate("/", { replace: true });
            }}
            className="btn  btn--transparent btn__desktop--medium"
          >
            Wyloguj
          </button>
        )}
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
