import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../button/button.component";

export const BookShelfContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: right;
  margin: 1rem;

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

export const BookLink = styled(Link)`
  /* min-width: 165px; */
  width: auto;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 15px 0 15px;
  font-size: 1rem;
  color: var(--primary);
  text-transform: uppercase;
  cursor: pointer;
  justify-content: left;

  &:hover {
    color: var(--secondary);
  }
`;

export const BackButton = styled(Button)`
  width: 30%;
  margin: 1rem;
`;
