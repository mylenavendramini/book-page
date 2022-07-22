import styled from "styled-components";

export const AllBooksContainer = styled.div`
  width: 100%;

  img {
    filter: drop-shadow(0.2rem 0.2rem 0.7rem black);
  }

  img:hover {
    cursor: pointer;
    transform: rotate(2deg);
    /* transition: transform 1s cubic-bezier(0.2, 0.45, 0.45, 0.95); */
    transition: transform 0.5s;
  }

  @media screen and (min-width: 200px) {
    .swiper {
      width: 400px;
    }
  }

  @media screen and (min-width: 768px) {
    .swiper {
      width: 768px !important;
    }
  }

  @media screen and (min-width: 1300px) {
    .swiper {
      width: 1300px !important;
    }
  }
`;

export const ReviewsContainer = styled.div`
  background-color: var(--tertiary);
  padding-bottom: 1rem;

  p {
    font-family: "Edu VIC WA NT Beginner", cursive;
    font-weight: normal;
    text-align: justify;
    font-size: 1.5rem;
    padding-left: 8rem;
    padding-right: 7rem;
    padding-bottom: 1rem;

    @media only screen and (max-width: 1200px) {
      padding-left: 5rem;
      padding-right: 4rem;
      padding-bottom: 0rem;
    }
    @media only screen and (max-width: 1100px) {
      padding-left: 3rem;
      padding-right: 2rem;
    }
    @media only screen and (max-width: 700px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }

  h4 {
    font-family: "Edu VIC WA NT Beginner", cursive;
    font-weight: normal;
    font-size: 2rem;
    padding-left: 20rem;
    padding-right: 4rem;
    padding-bottom: 1rem;

    @media only screen and (max-width: 1200px) {
      padding-left: 15rem;
      padding-right: 3rem;
      padding-bottom: 0rem;
    }
    @media only screen and (max-width: 1100px) {
      padding-left: 10rem;
      padding-right: 0rem;
      padding-bottom: 0rem;
    }
    @media only screen and (max-width: 700px) {
      padding-left: 1rem;
    }
  }
`;

export const LeftQuote = styled.div`
  height: 2rem;
  font-size: 15rem;
  color: white;
  opacity: 0.2;
  text-align: start;
  margin-bottom: 1rem;
  margin-left: 1rem;

  @media only screen and (max-width: 1200px) {
    font-size: 12rem;
  }
  @media only screen and (max-width: 1100px) {
    font-size: 10rem;
  }
  @media only screen and (max-width: 700px) {
    font-size: 8rem;
  }
`;

export const RightQuote = styled.div`
  height: 1px;
  font-size: 15rem;
  color: white;
  opacity: 0.2;
  text-align: end;
  margin-bottom: 8rem;
  margin-top: -10rem;
  margin-right: 1rem;

  @media only screen and (max-width: 1200px) {
    font-size: 12rem;
  }
  @media only screen and (max-width: 1100px) {
    font-size: 10rem;
  }
  @media only screen and (max-width: 700px) {
    font-size: 8rem;
  }
`;
