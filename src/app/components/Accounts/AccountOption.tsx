import React, { Fragment, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import "../../../sass/components/accounts/accountOption.scss";
import "../../../sass/components/button/button.scss";

const AccountOption = (): JSX.Element => {
  let navigate = useNavigate();

  const activateButtonHandler = () => {
    navigate("activate");
  };
  const allAccountsButtonHandler = () => {
    navigate("accounts");
  };
  return (
    <Fragment>
      <div className="account-option__box">
        <button
          className="btn btn-filled btn--big"
          onClick={activateButtonHandler}
        >
          Aktywuj konto
        </button>
        <button
          className="btn btn-filled btn--big"
          onClick={allAccountsButtonHandler}
        >
          Wszystkie konta
        </button>
      </div>
    </Fragment>
  );
};

export default AccountOption;
