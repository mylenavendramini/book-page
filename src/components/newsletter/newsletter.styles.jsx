import styled from "styled-components";

export const NewsLetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--tertiary);

  h1 {
    font-size: 2rem;
    text-shadow: 0 0 2px var(--secondary);

    @media only screen and (max-width: 600px) {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }

  p {
    color: var(--primary);
    font-size: 1.1rem;
    padding: 0rem 1rem 0rem 1rem;
    text-align: justify;
  }
`;
