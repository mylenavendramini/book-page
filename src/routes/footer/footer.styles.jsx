import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  padding: 1rem;
  /* width: 100%; */
  background-color: var(--primary);
  width: auto;
  letter-spacing: 0.5px;
  line-height: 50px;
  text-transform: uppercase;
  justify-content: left;

  a:after {
    content: "";
    display: block;
    width: 2px;
  }
`;

export const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  color: white;

  &:hover {
    color: var(--secondary);
  }
`;
