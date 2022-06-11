import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AccountOption from "./app/components/Accounts/AccountOption";
import Accounts from "./app/components/Accounts/Accounts";
import Home from "./app/components/Home/Home";
import Layout from "./app/components/Layout/Layout";
import Login from "./app/components/Login/Login";

import Operation from "./app/components/Operation/Operation";
import Register from "./app/components/Register/Register";
import Welcome from "./app/components/Start/Welcome";
import UserService from "./app/services/UserService";
import { retriveStoredToken, userLogin } from "./app/store/accountSlice";
import { useAppDispatch, useAppSelector } from "./app/store/storeHooks";
import "./sass/app.scss";

function App() {
  const isLogged = useAppSelector((state) => state.account.isLoggedIn);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(retriveStoredToken());
  }, []);

  return (
    <Routes>
      {!isLogged && (
        <Route path="/">
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route index element={<Welcome></Welcome>}></Route>
          <Route path="*" element={<Navigate to="login"></Navigate>}></Route>
        </Route>
      )}
      {isLogged && (
        <Route path="/" element={<Layout></Layout>}>
          <Route path="home" element={<Home></Home>}></Route>
          <Route path="account">
            <Route path="accounts" element={<Accounts></Accounts>}>
              <Route path=":accountId"></Route>
            </Route>
            <Route index element={<AccountOption></AccountOption>}></Route>
          </Route>
          <Route path="operation" element={<Operation></Operation>}></Route>
          <Route path="createPDF"></Route>
          <Route index element={<AccountOption></AccountOption>}></Route>
          <Route path="*" element={<Navigate to="account"></Navigate>}></Route>
        </Route>
      )}
      <Route path=""></Route>
    </Routes>
  );
}

export default App;
