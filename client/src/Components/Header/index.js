import React from "react";
import "./styles.css";
import PaymentButton from "../../payment";
import { Link } from "react-router-dom";
function Index() {
  return (
    <div className="header">
      <Link to="/board" className="header_brand">
        Board
      </Link>
      <div className="current_time">Today, {new Date().toDateString()}</div>
      {/* <button onClick={PaymentButton}> Buy </button> */}
      <Link to="/register" className="header_register">
        <i class="far fa-user-circle"></i>
      </Link>
    </div>
  );
}

export default Index;
