import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
function Index() {
  return (
    <div className="header">
      <Link to="/board" className="header_brand">
        Board
      </Link>
      <div className="current_time">Today {new Date().toDateString()}</div>
      <Link to="/register" className="header_register">
        <i class="far fa-user-circle"></i>
      </Link>
    </div>
  );
}

export default Index;
