import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../button/button.component";

export const BigBookShelfContainer = styled.div`
  h1 {
    padding: 1rem;
    text-shadow: 0 0 2px var(--tertiary);
  }
`;
export const Teste = styled.div`
  margin-top: 5rem;
  background-color: var(--tertiary);

  h1,
  h2 {
    font-family: "Edu VIC WA NT Beginner", cursive;
    color: var(--primary);
    font-size: 2.5rem;
    font-weight: normal;
    padding: 2rem;
    text-align: center;
    text-shadow: 0 0 10px white;
  }

  h2 {
    display: none;
    @media only screen and (max-width: 550px) {
      display: flex;
      margin-top: -3rem;
      padding: 0rem 1rem 2rem 1rem;
    }
  }

  .typewriting {
    @media only screen and (max-width: 550px) {
      display: none;
      visibility: hidden;
      opacity: 0;
    }
  }

  .typewritingcursor {
    @media only screen and (max-width: 550px) {
      display: none;
      visibility: hidden;
      opacity: 0;
    }
  }
`;

export const BookShelfContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* flex-direction: column; */
  column-gap: 0rem;
  padding: 1rem;
  justify-items: center;
  align-items: center;
  text-shadow: 0 0 2px var(--tertiary);

  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    justify-items: left;
  }

  a {
    text-decoration: none;
  }

  p {
    font-size: 1.5rem;

    &:hover {
      color: var(--secondary);
      transform: scale(1.1);
      /* transition: transform 1s cubic-bezier(0.2, 0.45, 0.45, 0.95); */
      transition: transform 0.5s;
    }
  }
`;

export const BookLink = styled(Link)`
  /* min-width: 165px; */
  width: auto;
  letter-spacing: 0.5px;
  line-height: 50px;
  /* padding: 0 15px 0 15px; */

  color: var(--primary);
  text-transform: uppercase;
  cursor: pointer;
  /* justify-content: left; */
`;

export const BackButton = styled(Button)`
  width: 25%;
  margin: 3rem 0rem 3rem 2rem;

  @media only screen and (max-width: 900px) {
    width: 70%;
  }
`;
