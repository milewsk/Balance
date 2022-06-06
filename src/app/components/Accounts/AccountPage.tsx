import React, { Fragment, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { checkWidth } from "../../store/navigationSlice";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import "../../../sass/components/accounts/accountPage.scss";
import "../../../sass/components/button/button.scss";

const AccountPage = (): JSX.Element => {
  let navigate = useNavigate();

  const activateButtonHandler = () => {
    navigate("Activate");
  };

  return (
    <Fragment>
      <ul className="accounts-page__list">
        <li>
          <button
            className="btn btn--transparent btn--medium"
            onClick={activateButtonHandler}
          >
            Aktywuj konto
          </button>
        </li>
        <li>
          <button className="btn btn--transparent btn--medium" onClick={}>
            Historia konta
          </button>
        </li>
      </ul>
    </Fragment>
  );
};

export default AccountPage;
