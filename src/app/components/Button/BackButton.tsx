import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../sass/components/button/buttonBack.scss";

const BackButton = (): JSX.Element => {
  let navigate = useNavigate();
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
    </Fragment>
  );
};

export default BackButton;
