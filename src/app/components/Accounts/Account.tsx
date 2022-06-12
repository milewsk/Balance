import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IAccount } from "../../interfaces/IAccount";
import AccountService from "../../services/AccountService";
import { checkWidth } from "../../store/navigationSlice";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import BackButton from "../Button/BackButton";

const Account = (): JSX.Element => {
  let params = useParams();

  const [account, setAccount] = useState<IAccount>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const LoadAccount = async () => {
      const response = await AccountService.GetAccount(
        localStorage.getItem("email"),
        params.accountId
      );

      if (response.Status === 200) {
        setAccount(response.ReturnData);
        setIsLoading(false);
      }
    };

    LoadAccount().catch((err) => {
      setIsLoading(false);
    });
  }, []);

  console.log(account);

  return (
    <Fragment>
      <BackButton></BackButton>
      {!isLoading && (
        <div className="account">
          <div className="account__title">
            <h2>{account?.Name}</h2>
            <h5>Kod: {account?.Code}</h5>
            <h6>Kod rodzica: {account?.ParentCode}</h6>
          </div>
          <div className="account__balance">
            <h5>Balans</h5>
            <p>Aktualny bilans: {account?.OverallBalance} </p>
            <p>Stan początkowy: {account?.InitialState} </p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Account;
