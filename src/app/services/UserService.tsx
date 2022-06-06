import React, { Fragment, useEffect } from "react";

const UserService = {
  LoginUser: async (email: string, passowrd: string) => {
    try {
      const response = await fetch(
        `https://localhost:44360/api/user/${email}/${passowrd}`,
        { method: "GET" }
      );

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

export default UserService;
