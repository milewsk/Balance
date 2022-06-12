import React, { Fragment, useEffect } from "react";
import IResponse from "../interfaces/IResponse";
import { IResponseAccount, IResponseAccounts } from "../interfaces/IAccount";

const AccountService = {
  GetAccounts: async (email: string | null) => {
    const response = await fetch(
      `https://localhost:44360/api/accounts/${email}`,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const data: IResponseAccounts = await response.json();
      console.log(data);
      return data;
    } else {
      const data: IResponseAccounts = await response.json();
      return data;
    }
  },

  GetAccount: async (email: string | null, accountID: string | undefined) => {
    const response = await fetch(
      `https://localhost:44360/api/accounts/${email}/${accountID}`,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const data: IResponseAccount = await response.json();
      console.log(data);
      return data;
    } else {
      const data: IResponseAccount = await response.json();
      return data;
    }
  },
};

export default AccountService;
