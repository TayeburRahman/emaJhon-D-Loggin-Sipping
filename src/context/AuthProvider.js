import React from "react";
import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = (props) => {
    const allContext = useFirebase();
  const { children } = props;
  return (
  <AuthContext.Provider value={allContext}>
    {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;

/*
1.create a auth provider
2. create Context provideer
-------------
AuthProvider-STP.4
---------------
  Data AuthProvider export
    * useAuth.js
    * App.js Route
    *  
    *

*/
