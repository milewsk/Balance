import React, { Fragment, useEffect, useState } from "react";
import { checkWidth } from "../../store/navigationSlice";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import "../../../sass/components/button/buttonBack.scss";
import { useNavigate } from "react-router-dom";

const Accounts = (): JSX.Element => {
  const navigate = useNavigate();

  const [accounts, setAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {}, []);

  return (
    <Fragment>
      <div className="button-back__box">
        <FontAwesomeIcon
          onClick={() => {
            navigate(-1);
          }}
          icon={faArrowCircleLeft}
        ></FontAwesomeIcon>
        <p
          onClick={() => {
            navigate(-1);
          }}
        >
          Powrót
        </p>
      </div>
      <div>
        <h2>Twoje konta</h2>
        <p>
          W tym miejscu znajdziesz wszystkie swoje konta. Aby wyświetlić
          szczegóły i historię konta po prostu kliknij na nie
        </p>
      </div>
    </Fragment>
  );
};

export default Accounts;
