import React, { Fragment, useEffect, useState } from "react";
import { checkWidth } from "../../store/navigationSlice";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import "../../../sass/components/button/button.scss";
import { useNavigate } from "react-router-dom";

const AccountItem = (): JSX.Element => {
  const navigate = useNavigate();

  const showAccountHandler = () => {
    navigate("/");
  };
  return (
    <Fragment>
      <div className="account-item">
        <p>code</p>
        <p>name</p>
        <p>typ</p>
        <button
          onClick={showAccountHandler}
          className="btn btn-filled btn--small"
        >
          Wybierz
        </button>
      </div>
    </Fragment>
  );
};

export default AccountItem;
