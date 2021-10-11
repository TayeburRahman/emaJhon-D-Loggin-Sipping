import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ProviteRoute = ({ children, ...rest }) => {
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
