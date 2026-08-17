import React, { useState } from "react";
import "./LoginStyles.css";
import validateLogin from "./LoginLogic";

function LoginScreen() {
  const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
  return (
    <div className="login-container">
      <h1>Login Page</h1>

      <input
    type="text"
    placeholder="Username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
/>

      <br />
      <br />

      <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
/>

      <br />
      <br />

      <button
  onClick={() => {
    alert(validateLogin(username, password));
  }}
>
  Login
</button>
    </div>
  );
}

export default LoginScreen;
