import { useState } from "react";

import { FormContainer, InputContainer } from "./form.styles";

import Button from "../button/button.component";
// import { BUTTON_TYPE_CLASSES } from "../button/button.component";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("name:", name);
    console.log("email:", email);
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputContainer
        id="name"
        type="text"
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

      <Button type="submit">Submit &rarr;</Button>
    </FormContainer>
  );
};

export default Form;
