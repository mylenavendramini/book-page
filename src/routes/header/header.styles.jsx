import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 30vh;
  width: 100%;
  display: flex;
  justify-content: left;

  background-image: url("https://i.ibb.co/F39BrCj/template.png");
  background-repeat: no-repeat;
  background-size: 1550px 700px;

  /* top: 0;
    z-index: 1111; */
  /* background-color: var(--secondary); */

  h1 {
    display: none;
    font-family: "Edu VIC WA NT Beginner", cursive;
    font-size: 4.5rem;
    color: white;
    text-align: center;
    text-decoration: none;
    margin-left: 13rem;
    margin-top: 3rem;
    text-shadow: 0 0 2px #ffffff;

    @media only screen and (max-width: 600px) {
      display: flex;
      margin-left: 8rem;
    }
  }
`;

export const HeaderLink = styled(Link)`
  /* padding-top: 1rem; */
  font-family: "Edu VIC WA NT Beginner", cursive;
  font-size: 4.5rem;
  color: white;
  text-align: center;
  text-decoration: none;
  margin-left: 13rem;
  margin-top: 3rem;
  text-shadow: 0 0 2px #ffffff;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
