import React, { useState } from "react";
import "./LoginStyles.css";

function LoginScreen() {

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("normal");

  const correctPassword = "6511";

  const checkPassword = () => {

    if(password === correctPassword){
      setStatus("happy");

      setTimeout(() => {
        window.location.href = "/home";
      },1500);

    }else{
      setStatus("sad");
    }

  };


  return (

    <div className="login-container">

      <div className={`girl ${status}`}>

        <div className="face">

          <div className="eyes">
            {showPassword ? "👀" : "😊"}
          </div>

          <div className="mouth">
            {status === "sad" ? "😢" : status === "happy" ? "😁" : "🙂"}
          </div>

        </div>

      </div>


      <h1>Welcome</h1>


      <input

        type={showPassword ? "text" : "password"}

        placeholder="Enter Password"

        value={password}

        onChange={(e)=>{

          setPassword(e.target.value);
          setStatus("normal");

        }}

      />


      <button

        onMouseDown={()=>setShowPassword(true)}

        onMouseUp={()=>setShowPassword(false)}

        onClick={checkPassword}

      >

        Login

      </button>


      {
        status === "sad" &&

        <p className="error">
          Wrong Password 😢
        </p>
      }


      {
        status === "happy" &&

        <p className="success">
          Welcome ❤️
        </p>
      }


    </div>

  );

}


export default LoginScreen;
