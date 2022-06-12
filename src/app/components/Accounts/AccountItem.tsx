import React, { Fragment, useEffect, useState } from "react";
import { checkWidth } from "../../store/navigationSlice";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import "../../../sass/components/button/button.scss";
import "../../../sass/components/accounts/accountItem.scss";
import { useNavigate } from "react-router-dom";
import { IAccount } from "../../interfaces/IAccount";

interface AccountItemProps {
  account: IAccount;
}

const AccountItem = ({ account }: AccountItemProps): JSX.Element => {
  const navigate = useNavigate();

  const showAccountHandler = () => {
    navigate(`${account.AccountId}`);
  };
  return (
    <Fragment>
      <div className="account-item">
        <p className="item-1">Kod: {account.Code}</p>
        <p className="item-2">{account.Name}</p>
        <button
          onClick={showAccountHandler}
          className="btn btn-filled btn--small item-3"
        >
          Wybierz
        </button>
      </div>
    </Fragment>
  );
};

export default AccountItem;
