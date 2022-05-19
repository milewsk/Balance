import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../sass/components/account/login.scss";
import "../../../sass/components/button/button.scss";

import { useAppDispatch, useAppSelector } from "../../store/storeHooks";

const Login = (): JSX.Element => {
  return (
    <div className="login-page">
      <div className="login-page__intro">
        <div className="login-page__logo-box">Balance</div>
        <div className="login-page__slogan">
          Balance - kontroluj swoją firmę
        </div>
      </div>
      <form className="login-page__form">
        <h2 className="login-page__title">Zaloguj się</h2>
        <label>Email</label>
        <input placeholder="Expample@gmail.com" type="text"></input>
        <label>Hasło</label>
        <input placeholder="Wpisz swoje hasło" type="passowrd"></input>
        <p className="login-page__forgot-password">Nie pamiętasz hasła?</p>
        <p className="login-page__redirect">
          Nie masz konta? <Link to="/register">Zarejestruj się</Link>
        </p>
        <button className="btn btn--medium btn-filled" type="submit">
          Zaloguj się
        </button>
      </form>
    </div>
  );
};

export default Login;
