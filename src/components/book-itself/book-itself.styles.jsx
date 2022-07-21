import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../button/button.component";

export const BookItSelfContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 3rem;
  padding: 1rem;
  align-items: stretch;
  margin: 1rem;

  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  img {
    width: 100%;
    height: auto;
    justify-content: center;
  }

  img:hover {
    cursor: pointer;
    transform: rotate(2deg);
    /* transition: transform 1s cubic-bezier(0.2, 0.45, 0.45, 0.95); */
    transition: transform 0.5s;
  }

  p {
    text-align: center;
  }
`;

export const BookShelfLink = styled(Link)`
  display: wrap;
  flex-wrap: wrap;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: var(--secondary);
  }
`;

export const BackButton = styled(Button)`
  width: 30%;
  margin: 1rem;
`;
