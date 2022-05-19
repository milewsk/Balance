import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { checkWidth } from "../../store/navigationSlice";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";

import "../../../sass/components/account/register.scss";
import "../../../sass/components/button/button.scss";

const Register = (): JSX.Element => {
  return (
    <div className="register-page">
      <div className="register-page__intro">
        <div className="register-page__logo-box">Balance</div>
        <div className="register-page__slogan">
          Balance - kontroluj swoją firmę
        </div>
      </div>
      <form className="register-page__form">
        <h2 className="register-page__title">Zarejestruj się</h2>
        <label>Email</label>
        <input placeholder="Expample@gmail.com" type="text"></input>
        <label>Hasło</label>
        <input placeholder="Wpisz swoje hasło" type="passowrd"></input>
        <p className="register-page__redirect">
          Masz już konto? <Link to="/login">Zaloguj się</Link>
        </p>
        <button className="btn btn--medium btn-filled" type="submit">
          Dołącz teraz
        </button>
      </form>
    </div>
  );
};

export default Register;
