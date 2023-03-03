import React, { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { FormContainer, InputContainer } from "./login.styles";
import Button from "../button/button.component";

const Login = () => {
  let navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("password:", password);
    console.log("email:", email);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputContainer
        id="email"
        type="email"
        value={email}
        placeholder={"Your email address"}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputContainer
        id="password"
        type="password"
        value={password}
        placeholder={"Your password"}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit">Login &rarr;</Button>
    </FormContainer>
  );
};

export default Login;
