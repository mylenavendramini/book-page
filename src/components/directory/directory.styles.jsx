import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  padding-right: 2rem;
  padding-left: 2rem;
  align-items: center;
  text-align: justify;

  @media only screen and (max-width: 1200px) {
    column-gap: 0rem;
  }

  @media only screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 100%;
    padding: 5rem;
    height: auto;

    @media only screen and (max-width: 1100px) {
      height: 700px;
      padding: 5rem 0rem 0rem 0rem;
    }

    @media only screen and (max-width: 600px) {
      height: auto;
    }
  }

  h1 {
    font-family: "Edu VIC WA NT Beginner", cursive;
    font-size: 2.5rem;
    font-weight: normal;
    padding-left: 5rem;
    padding-top: 2rem;

    @media only screen and (max-width: 1200px) {
      padding-top: 4rem;
    }

    @media only screen and (max-width: 1100px) {
      padding-top: 0rem;
    }
  }

  h4 {
    font-family: "Edu VIC WA NT Beginner", cursive;
    font-size: 2rem;
    font-weight: normal;
    padding-left: 20rem;
    padding-bottom: 2rem;

    @media only screen and (max-width: 1200px) {
      padding-left: 10rem;
      padding-bottom: 4rem;
    }
    @media only screen and (max-width: 1100px) {
      padding-left: 10rem;
      padding-bottom: 0rem;
    }
  }

  p {
    padding: 1rem;
    font-family: "Edu VIC WA NT Beginner", cursive;
    font-size: 1.5rem;
    font-weight: normal;

    /* @media only screen and (max-width: 1300px) {
      margin-left: -2rem;
      margin-right: 2rem;
    }

    @media only screen and (max-width: 900px) {
      margin-left: 0rem;
      margin-right: 0rem;
    } */
  }
`;

export const BookDirectory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2rem;
    cursor: pointer;

    &:hover {
      color: var(--secondary);
      transform: scale(1.1);
      /* transition: transform 1s cubic-bezier(0.2, 0.45, 0.45, 0.95); */
      transition: transform 0.5s;
    }
  }
`;

export const AllBooksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
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

export const NewsLetter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--tertiary);

  h1 {
    font-size: 2rem;
  }

  p {
    color: var(--primary);
    font-size: 1.1rem;
    padding: 0rem 1rem 0rem 1rem;
    text-align: justify;
  }
`;
