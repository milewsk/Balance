import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./app/components/Home/Home";
import Layout from "./app/components/Layout/Layout";
import Login from "./app/components/Login/Login";
import Register from "./app/components/Register/Register";
import Welcome from "./app/components/Start/Welcome";
import "./sass/app.scss";

function App() {
  const isLogged = true;
  return (
    <Routes>
      {isLogged && (
        <Route path="/">
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route index element={<Welcome></Welcome>}></Route>
        </Route>
      )}
      {!isLogged && (
        <Route path="/" element={<Layout></Layout>}>
          <Route path="home" element={<Home></Home>}></Route>
          <Route path="account">
            <Route path="history">
              <Route path=":accountId"></Route>
            </Route>
          </Route>
          <Route path="operation"></Route>
          <Route path="createPDF"></Route>
        </Route>
      )}
      <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  );
}

export default App;
