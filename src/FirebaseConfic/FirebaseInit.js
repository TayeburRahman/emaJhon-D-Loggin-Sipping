import firebaseConfig from "./FirebaseConfic";
import { initializeApp } from "firebase/app";

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default initializeAuthentication;

/*setup for authention  
----------------------
Initial Setup STP: 1
-------------------------
    Data initializeAuthentication export
        1.useFirebase.js
*/
