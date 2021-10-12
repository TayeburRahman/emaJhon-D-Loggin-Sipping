import React from "react";
import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

//   contex provider Stp.3.1
export const AuthContext = createContext();
//   contex provider Stp.3
const AuthProvider = (props) => {
  //   contex provider Stp.3.4 end
    const allContext = useFirebase();
  const { children } = props;
  return (
  <AuthContext.Provider value={allContext}>
    {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;
  // AuthProvider contex set route-prantesh (app.js) Stp.3.5 end



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
