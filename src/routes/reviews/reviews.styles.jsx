import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    align-self: center;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .out {
    @media only screen and (min-width: 1000px) {
      display: none;
    }
  }
`;

export const ReviewContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 1rem;
  padding: 2rem;
  text-align: justify;
  align-items: flex-start;

  @media only screen and (max-width: 1200px) {
    padding: 1rem;
  }

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 40%;
    height: auto;
    float: left;
  }

  h1 {
    font-size: 2rem;

    &:hover {
      color: var(--secondary);
      transform: scale(1.1);
      /* transition: transform 1s cubic-bezier(0.2, 0.45, 0.45, 0.95); */
      transition: transform 0.5s;
    }
  }

  p {
    font-family: "Edu VIC WA NT Beginner", cursive;
    font-size: 1.5rem;
    font-weight: normal;
  }
`;

export const ReviewBox = styled.div`
  display: flex;
  /* grid-template-columns: repeat(2, 1fr);
  gap: 1rem; */
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 2rem;
  text-align: justify;

  img {
    width: 20%;
    height: auto;
    float: left;
  }

  h4 {
    font-family: "Edu VIC WA NT Beginner", cursive;
    font-size: 2rem;
    font-weight: normal;
    display: flex;
    justify-content: right;
  }

  p {
    margin-top: 1rem;
    font-family: "Edu VIC WA NT Beginner", cursive;
    font-size: 1.5rem;
    font-weight: normal;
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

  @media only screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
    padding: 1rem;
    align-items: stretch;
    margin: 1rem;
    border: none;

    h1 {
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
