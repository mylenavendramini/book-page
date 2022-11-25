import React, { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { FormContainer, InputContainer } from "./login.styles";
import Button from "../button/button.component";

const Signin = () => {
  let navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("name:", name);
    console.log("email:", email);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Create your account:</h2>
      <InputContainer
        id="name"
        type="name"
        value={name}
        placeholder={"Your name"}
        onChange={(e) => setName(e.target.value)}
      />
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

      <Button type="submit">Signin &rarr;</Button>
    </FormContainer>
  );
};

export default Signin;
