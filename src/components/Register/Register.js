import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login pb-5">
      <div className="login-from  mt-4 pb-5 pt-5 rounded w-50">
        <div>
          <h3>Resister: Create Account</h3>
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
              <input type="password" id="" placeholder="Re- enter Passeord" />
              <br />
              <br />
              <input type="submit" value="Summit" placeholder="subbmit" />
            </form>
          </div>
          <p className="pt-2">
            Already have an account?<Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

/*
create register Route(font) 
-------------------
STP-Reg.2.1
*/
