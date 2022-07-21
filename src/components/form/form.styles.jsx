import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-align: justify;
  padding: 1rem;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const InputContainer = styled.input`
  border: none;
  outline: none;
  padding: 1rem;
  font-size: 1rem;

  &::placeholder {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
  }

  :-ms-input-placeholder {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
  }
`;
