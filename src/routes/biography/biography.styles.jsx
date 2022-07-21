import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";

export const BiographyContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 1rem;
  padding: 2rem;
  text-align: justify;
  align-items: flex-start;

  @media only screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 40%;
    height: auto;
    float: left;

    @media only screen and (max-width: 900px) {
      float: none;
      width: 100%;
    }
  }

  h1,
  h2 {
    font-size: 2rem;

    &:hover {
      color: var(--secondary);
      transform: scale(1.1);
      /* transition: transform 1s cubic-bezier(0.2, 0.45, 0.45, 0.95); */
      transition: transform 0.5s;

      @media only screen and (max-width: 900px) {
        transform: none;
      }
    }
  }

  h2 {
    cursor: pointer;
  }

  p {
    font-family: "Edu VIC WA NT Beginner", cursive;
    font-size: 1.5rem;
    font-weight: normal;
  }
`;

export const ProfileImg = styled.img`
  padding: 1rem;
  /* border-radius: 10%; */
  margin-right: 1rem;
  margin-top: 1rem;

  @media only screen and (max-width: 900px) {
    padding: 1rem 6rem 0rem 6rem;
  }
`;

export const AllBooksContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  margin: 1rem;
  border: 1px solid var(--primary);

  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
    padding: 1rem;
    align-items: stretch;
    margin: 1rem;
    border: none;

    h2 {
      display: none;
    }
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  img {
    width: 70%;
    height: auto;
    /* object-fit: cover; */
    justify-content: center;
    /* flex: 1 1 auto; */
  }

  img:hover {
    cursor: pointer;
    transform: rotate(2deg);
    /* transition: transform 1s cubic-bezier(0.2, 0.45, 0.45, 0.95); */
    transition: transform 0.5s;
  }
`;

export const BookShelfLink = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 0.2rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: var(--secondary);
  }
`;

export const BackButton = styled(Button)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const CheckButton = styled(Button)`
  @media only screen and (min-width: 1100px) {
    display: none;
  }
`;
