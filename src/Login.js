import React, { useState } from "react";
import { Link, useNavigate, } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "./firebase";
import "./Login.css";
import Amazon from "./loginimg.png";
const Login = () => {
	const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
	auth.signInWithEmailAndPassword(email,password)
	.then((auth)=>{

     navigate('/')
	})
	.catch(e=>toast.error(e.message))
  };
  const register = (e) => {
    e.preventDefault();
	auth.createUserWithEmailAndPassword(email,password)
	.then((auth)=>{
		navigate('/')
	})
	.catch(e=>toast.error(e.message))
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login_img" src={Amazon} alt="" />
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={login} className="login_signin">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to ,<strong>Amazon's Conditions</strong> of
          Use & Sale.Please see our privacy notice,our Cookies Notice and
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login_register">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
