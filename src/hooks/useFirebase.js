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
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const singInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
    // .then((result) => {
    //   console.log(result.user);
    // });
    //(.then) cain export 'Login.js' file (stp.5 name)
  };
  //   Log out
  const logOut =()=>{
    signOut(auth)
    .then(() => {
      setUser({})
    })
    .catch((error) => {});
  }

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
