import React from "react";
import "./LoginStyles.css";
import validateLogin from "./LoginLogic";

function LoginScreen() {
  return (
    <div className="login-container">
      <h1>Login Page</h1>

      <input type="text" placeholder="Username" />

      <br />
      <br />

      <input type="password" placeholder="Password" />

      <br />
      <br />

      <button
  onClick={() => {
    alert(validateLogin("admin", "1234"));
  }}
>
  Login
</button>
    </div>
  );
}

export default LoginScreen;
