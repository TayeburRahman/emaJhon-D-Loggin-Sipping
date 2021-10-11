import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
 
import "./Login.css"

const Login = () => {
  const {singInUsingGoogle} = useAuth();
  // STP.5 cng past 
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/'
  const hendlePasGoogleLogin = () =>{ 
    singInUsingGoogle()
    .then(result =>{
      history.push(redirect_uri)

    });
  };
  return (
     <div className="login pb-5">
       <div className="login-from  mt-4 pb-5 pt-5 rounded w-50">
      
      <div>
        <h3>Login</h3>
        <hr />
        <div>
          <form>
            <h5>Email</h5>
            <input type="email" name="" id="" placeholder="Your email" />
            <br /><br />
            <h5>Password</h5>
            <input type="password" name="" id="" placeholder="password" /><br /><br />
            <input type="submit" value="Summit" placeholder="subbmit" />
          </form>
        </div> 
        <p>
          new to coder shop?<Link to="/register">Crite Account</Link> 
        </p>
        <br />
        <button
        onClick={hendlePasGoogleLogin}
         className="btn btn-secondary">Google Sin in</button>
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
