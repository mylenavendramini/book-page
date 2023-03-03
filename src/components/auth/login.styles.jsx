import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-align: justify;
  padding: 1rem;
  min-height: 47vh;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const InputContainer = styled.input`
  border: 2px solid var(--primary);
  border-radius: 5px;
  outline: none;
  padding: 1rem;
  font-size: 1rem;

  &::placeholder,
  :-ms-input-placeholder {
    font-weight: bold;
  }
`;
