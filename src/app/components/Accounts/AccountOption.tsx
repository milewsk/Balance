import React, { Fragment, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import "../../../sass/components/accounts/accountPage.scss";
import "../../../sass/components/button/button.scss";

const AccountOption = (): JSX.Element => {
  const islog = useAppSelector((state) => state.account.isLoggedIn);

  console.log(islog);
  let navigate = useNavigate();

  const activateButtonHandler = () => {
    navigate("Activate");
  };

  return (
    <Fragment>
      <div className="account-option__box">
        <button
          className="btn btn--transparent btn--medium"
          onClick={activateButtonHandler}
        >
          Aktywuj konto
        </button>
        <button className="btn btn--transparent btn--medium">
          Historia konta
        </button>
      </div>
    </Fragment>
  );
};

export default AccountOption;
