import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

export default function App() {
  const { handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className="App">
      <input
        name="username"
        type="text"
        placeholder="Username"
      />
      <div className="pass-wrapper">
        <input
          placeholder="Password"
          name="password"
          type={passwordShown ? "text" : "password"}
        />
        <i onClick={togglePasswordVisiblity}>{eye}</i>
      </div>
      <button type="submit" onClick={handleSubmit(onSubmit)}>
        Submit
      </button>
    </div>
  );
}