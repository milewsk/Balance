import React, { Fragment, useEffect, useState } from "react";
import { checkWidth } from "../../store/navigationSlice";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import "../../../sass/components/accounts/accountsPage.scss";
import { useNavigate } from "react-router-dom";
import AccountService from "../../services/AccountService";
import { IAccount } from "../../interfaces/IAccount";
import AccountItem from "./AccountItem";
import BackButton from "../Button/BackButton";

const Accounts = (): JSX.Element => {
  const navigate = useNavigate();

  const [accounts, setAccounts] = useState<Array<IAccount>>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const LoadAccounts = async () => {
      const response = await AccountService.GetAccounts(
        localStorage.getItem("email")
      );

      if (response.Status === 200) {
        setAccounts(response.ReturnData);
        setIsLoading(false);
      }
    };

    LoadAccounts().catch((err) => {
      setIsLoading(false);
    });
  }, []);

  console.log(accounts);
  const AccountList = accounts.map((account) => {
    return (
      <AccountItem key={account.AccountId} account={account}></AccountItem>
    );
  });

  return (
    <Fragment>
      <BackButton></BackButton>
      <div className="accounts-description">
        <h2>Twoje konta</h2>
        <p>
          W tym miejscu znajdziesz wszystkie swoje konta. Aby wyświetlić
          szczegóły i historię konta po prostu kliknij na dowolne z nich.
        </p>
      </div>
      <div className="accounts-list">{AccountList}</div>
    </Fragment>
  );
};

export default Accounts;
