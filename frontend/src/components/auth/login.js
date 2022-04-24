import React from "react";
import { useRef } from "react";
import { useAuth } from "./authContext";
import { useHistory } from "react-router-dom";
import "./login.css"


export default function Login() {
  const email = useRef();
  const password = useRef();
  const auth = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    auth.signIn(email, password);
    window.history.back();
  };

  return (
    <>
      <div className="container" onclick="onclick">
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="center">
          <h2>Please Sign In</h2>
          <input type="email" ref={email} placeholder="email" />
          <input type="password" ref={password} placeholder="password" />
          <button className="raise" onClick={handleSubmit}>Sign In</button>
        </div>
      </div>
    </>
  );
}