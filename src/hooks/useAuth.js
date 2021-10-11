import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};
export default useAuth;

/*
-------------
auth hooks-STP.4.1
---------------
  Data AuthProvider export
    * Login.js
    * Heder.js
    *ProviteRoute.js
    *Shipping.js

*/
