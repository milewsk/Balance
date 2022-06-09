import React, { Fragment, useEffect } from "react";
import { JsonObjectExpression } from "typescript";
import IResponse from "../interfaces/IResponse";

const UserService = {
  LoginUser: async (email: string, passowrd: string) => {
    const response = await fetch(
      `https://localhost:44360/api/user/${email}/${passowrd}`,
      { method: "GET" }
    );

    if (response.ok) {
      const data: IResponse = await response.json();
      console.log(data);
      return data;
    } else {
      const data: IResponse = await response.json();
      return data;
    }
  },

  RegisterUser: async (email: string, passowrd: string) => {
    try {
      const response = await fetch(`https://localhost:44360/api/user/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: email,
          Password: passowrd,
        }),
      });

      if (response.ok) {
        const data: string = await response.json();
        return data;
      } else {
        const data: string = await response.json();
        return data;
      }
    } catch (error: any) {
      return "error";
    }
  },
};

export default UserService;
