import { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../FirebaseConfic/FirebaseInit";

initializeAuthentication();
const useFirebase = () => {
  // google log in STP.2
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const singInUsingGoogle = () => {
    //[this value(return) stp.7]
    return signInWithPopup(auth, googleProvider);
    // .then((result) => {
    //   console.log(result.user);
    // });
    //(.then) cain export 'Login.js' file (ditale stp.5 name)
  };
  //   Log out STP-6
  const logOut =()=>{
    signOut(auth)
    .then(() => {
      setUser({})
    })
    .catch((error) => {});
  };
  // google log in STP.2.1
  // manage user [observe]
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  return {
    user,
    singInUsingGoogle,
    logOut,
  };
};
export default useFirebase;

/*
1 Firebase googol sing in (project.Fier- Google sin-in)
1 Firebase googol sing out (project.Fier- Google sin-in)
2. auth state Changed[observe](project.Fier- manage user)
-------------
Firebase-STP.3
---------------
  Data useFirebase export
    *AuthProvider.js (useFirebase)
    * heder.js (logOut)

*/
