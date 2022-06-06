import React, { Fragment, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { checkWidth } from "../../store/navigationSlice";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import "../../../sass/components/accounts/accountPage.scss";
import "../../../sass/components/button/button.scss";

const ActivateAccount = (): JSX.Element => {
  let navigate = useNavigate();
  const [renderComponent, setRenderComponent] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);

  const goBackButtonHandler = () => {
    navigate(-1);
  };

  // on component mount
  useEffect(() => {
    // async fetch logic
  }, []);

  // on submit update
  useEffect(() => {
    // re-render after submit
  }, [renderComponent]);

  const onSubmitHandler = (event: React.SyntheticEvent<HTMLFormElement>) => {};

  return (
    <Fragment>
      <div className="navigate-box">
        <button
          onClick={goBackButtonHandler}
          className="btn btn--filled btn--small"
        >
          Powrót
        </button>
      </div>
      <section className="activate-account__box">
        <h3 className="activate-account__header">Aktywuj konto</h3>
        <p className="activate-account__description">
          Wybierz z listy konto, które chcesz zasilić wartością początkową.
        </p>
        <p className="activate-account__description">
          Następnie podaj dodatnią wartość początkową konta.
        </p>
        <form onSubmit={onSubmitHandler}>
          <select></select>
          <label>Stan początkowy</label>
          <input type="number"></input>
          <button className="btn btn--filled btn--small"></button>
        </form>
      </section>
    </Fragment>
  );
};

export default ActivateAccount;
