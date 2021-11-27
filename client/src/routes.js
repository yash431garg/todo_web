import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/index";
import ToDoBoard from "./Components/ToDoBoard/index";
import Register from "./Components/Auth/Register/index";
import Login from "./Components/Auth/Login/index";

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/register" element={<Register />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="/board" element={<ToDoBoard name="Yash" />}></Route>
    </Routes>
  );
}

export default AppRoutes;
