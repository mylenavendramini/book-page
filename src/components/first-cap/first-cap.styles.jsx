import styled from "styled-components";
import Button from "../button/button.component";

export const FirstCapContainer = styled.div`
  h2 {
    padding-left: 1rem;
    font-family: "Edu VIC WA NT Beginner", cursive;
    font-size: 2rem;
    font-weight: normal;
  }

  h3 {
    font-size: 1.2rem;
    text-align: justify;
  }

  h4 {
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.2rem;
    text-align: justify;
  }
`;

export const FirstCapBox = styled.div`
  padding: 2px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 1rem;
  padding: 1rem;
  align-items: center;
  margin: 1rem;

  @media only screen and (max-width: 1200px) {
    column-gap: 0rem;
  }

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 100%;
    padding: 3rem;
    height: auto;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0.5rem 0.5rem 1rem black);

    @media only screen and (max-width: 1320px) {
      padding: 0rem 2rem 0rem 0rem;
    }

    @media only screen and (max-width: 1100px) {
      padding: 0rem 1rem 0rem 0rem;
    }

    @media only screen and (max-width: 1000px) {
      padding: 0rem 18rem 0rem 18rem;
    }

    @media only screen and (max-width: 950px) {
      padding: 0rem 15rem 0rem 15rem;
    }

    @media only screen and (max-width: 850px) {
      padding: 0rem 12rem 0rem 12rem;
    }

    @media only screen and (max-width: 750px) {
      padding: 0rem 10rem 0rem 10rem;
    }

    @media only screen and (max-width: 650px) {
      padding: 0rem 6rem 0rem 6rem;
    }

    @media only screen and (max-width: 550px) {
      padding: 0rem 3rem 0rem 3rem;
    }
  }
`;

export const ChapterButton = styled(Button)`
  width: 30%;
  margin: 1rem;

  &:hover {
    transform: none;
  }

  @media only screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const BackButton = styled(Button)`
  width: 30%;
  margin: 3rem 0rem 3rem 2rem;

  @media only screen and (max-width: 900px) {
    width: 80%;
  }
`;

export const Dropdown = styled.div``;
