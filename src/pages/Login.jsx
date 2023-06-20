import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = ({ isAuth, setIsAuth }) => {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log("signed in");
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
      navigate("/");
    });
  };
  return (
    <div className="loginPage">
      Sign in with google
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        SignIn with Google
      </button>
    </div>
  );
};

export default Login;
