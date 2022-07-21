import styled from "styled-components";

export const NavigationComponent = styled.div`
  height: 5vh;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 2rem;
    color: var(--primary);

    &:hover {
      color: var(--secondary);
      transform: scale(1.1);
      /* transition: transform 1s cubic-bezier(0.2, 0.45, 0.45, 0.95); */
      transition: transform 0.5s;
    }
  }
`;
