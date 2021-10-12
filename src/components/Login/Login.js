import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useFirebase from "../../hooks/useFirebase";

import "./Login.css";

const Login = () => {
  //   Login (only) stp-2.4 end
  //const {user, singInUsingGoogle } = useFirebase();
  //    [OR/]
  //    usAuth hooks use stp.4
  const { singInUsingGoogle } = useAuth();

  //user successfully login for back to home(other) stp.7
  const location = useLocation();
  const history = useHistory();
  // successfully login and back to (set url)stp.7.1 end
  const redirect_uri = location.state?.from || "/";
  const hendlePasGoogleLogin = () => {
    singInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div className="login pb-5">
      <div className="login-from  mt-4 pb-5 pt-5 rounded w-75">
        <div>
          <h3>Login</h3>
          <hr />
          <div>
            <form>
              <h5>Email</h5>
              <input type="email" name="" id="" placeholder="Your email" />
              <br />
              <br />
              <h5>Password</h5>
              <input type="password" name="" id="" placeholder="password" />
              <br />
              <br />
              <input type="submit" value="Summit" placeholder="subbmit" />
            </form>
          </div>
          <p>
            new to coder shop website?<Link to="/register">Crite Account</Link>
          </p>
          <br />
          <button onClick={hendlePasGoogleLogin} className="btn btn-secondary">
            Google Sin in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

/*
create Login Route (font) 
-------------------
STP-Lo.2.1
*/
