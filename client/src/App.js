import React from "react";
import "./App.css";
import Header from "./Components/Header/index";
import AppRoutes from "./routes";

function App() {
  return (
    <React.Fragment>
      <Header />
      <AppRoutes />
    </React.Fragment>
  );
}

export default App;
