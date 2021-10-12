import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


// ProviteRoute compo default Login 5
const ProviteRoute = ({ children, ...rest }) => {
  // default Login(use firebass data) 5.1
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      render={({location}) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              // default Login'user not login for slid page, set route' 5.2
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default ProviteRoute;
// ProviteRoute compo default Login (set app.js ProviteRoute) 5.3 end

/*

create private route
-------------------
STP-Reg.5
----------------------
useAuth()
-------------------
Data ProviteRoute export
* App.js 5.1
* 

*/
