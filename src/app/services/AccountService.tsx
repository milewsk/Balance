import React, { Fragment, useEffect } from "react";

const AccountService = {
  GetAccounts: async (UserID: number) => {
    try {
      const response = await fetch(`https://localhost:44360/api/accounts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: UserID }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        const data = await response.json();
        throw new Error(data.message);
      }
    } catch (error: any) {
      console.log(error.message);
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
