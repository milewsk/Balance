import React, { Fragment, useEffect } from "react";
import IResponse from "../interfaces/IResponse";
import { IResponseAccounts } from "../interfaces/IAccount";

const AccountService = {
  GetAccounts: async (email: string) => {
    const response = await fetch(`https://localhost:44360/api/accounts`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });

    if (response.ok) {
      const data: IResponseAccounts = await response.json();
      console.log(data);
      return data;
    } else {
      const data: IResponseAccounts = await response.json();
      return data;
    }
  },

  GetAccount: async (accountID: string) => {
    try {
      const response = await fetch(`https://localhost:44360/api//`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accountId: accountID,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        const data = await response.json();
        return data;
      }
    } catch (error: any) {
      return error;
    }
  },
};

export default AccountService;
