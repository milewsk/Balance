import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Account from "./app/components/Accounts/Account";
import AccountPage from "./app/components/Accounts/AccountPage";
import Accounts from "./app/components/Accounts/Accounts";
import AccountHistory from "./app/components/Accounts/History/AccountHistory";
import Home from "./app/components/Home/Home";
import Layout from "./app/components/Layout/Layout";
import Login from "./app/components/Login/Login";
import NewOperation from "./app/components/Operation/NewOperation";
import Operation from "./app/components/Operation/Operation";
import Register from "./app/components/Register/Register";
import Welcome from "./app/components/Start/Welcome";
import "./sass/app.scss";

function App() {
  const isLogged = true;
  return (
    <Routes>
      {isLogged && (
        <Route path="/">
          <Route
            path="newOperation"
            element={<NewOperation></NewOperation>}
          ></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="account" element={<Account></Account>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route index element={<Welcome></Welcome>}></Route>
        </Route>
      )}
      {!isLogged && (
        <Route path="/" element={<Layout></Layout>}>
          <Route path="home" element={<Home></Home>}></Route>
          <Route path="account">
            <Route path="accounts" element={<Accounts></Accounts>}>
              <Route path=":accountId">
                <AccountHistory></AccountHistory>
              </Route>
            </Route>
            <Route index element={<AccountPage></AccountPage>}></Route>
          </Route>
          <Route path="operation" element={<Operation></Operation>}></Route>
          <Route path="createPDF"></Route>
        </Route>
      )}
      <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  );
}

export default App;
