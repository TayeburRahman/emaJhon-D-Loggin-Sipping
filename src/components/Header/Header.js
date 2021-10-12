import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  // usAuth hooks use stp.4.1 end (other )
  const { user, logOut } = useAuth();
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <div className="row login-heder">
        <div className="col-9 ">
          <nav>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/review">Order Review</NavLink>
            <NavLink to="/inventory">Manage Inventory</NavLink>
          </nav>
        </div>
        <div className="col-3 p-2">
        {/* <p>{user.displayName}</p> */}
          {user.email ? (
            // Log-Out STP.6.1 end
            <button onClick={logOut} className="button-Logout rounded">
              Log Out
            </button>
          ) : (
            <NavLink className="p-2" to="/login">
              Login
            </NavLink>
          )}
          <NavLink className="p-2" to="/register">
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;

/*Create Header Slo.1.1
----------------------
Initial Setup
*/
