import React from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
// import PaymentButton from "../../payment";
import { authentication } from "../../Reducers/auth";
import { Link } from "react-router-dom";
function Index() {
  const isAuthenticated = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <Link to="/board" className="header_brand">
        Board
      </Link>
      <div className="current_time">Today, {new Date().toDateString()}</div>
      {/* <button onClick={PaymentButton}> Buy </button> */}
      {!isAuthenticated ? (
        <Link to="/register" className="header_register">
          <i className="far fa-user-circle"></i>
        </Link>
      ) : (
        <button className="logout_button" onClick={dispatch(authentication())}>
          Logout
        </button>
      )}
    </div>
  );
}

export default Index;
