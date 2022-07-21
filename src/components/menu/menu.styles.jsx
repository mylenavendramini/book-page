import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--primary);
  height: 100%;
  text-align: right;
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  z-index: 1;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isBurgerOpen }) =>
    isBurgerOpen ? "translateX(0%)" : "translateX(100%)"};

  @media only screen and (max-width: 1000px) {
    width: 50%;
  }

  @media only screen and (min-width: 1000px) {
    transition: transform 0.3s ease-in-out;
    transform: ${({ isBurgerOpen }) =>
      isBurgerOpen ? "translateX(100%)" : "translateX(100%)"};
  }

  a {
    font-size: inherit;
    text-transform: uppercase;
    padding: 1rem 1rem;
    font-weight: bold;
    letter-spacing: 2px;
    transition: color 0.3s linear;
    color: white;
    text-decoration: none;
    padding: 1rem;
    outline: none;

    &:hover {
      color: var(--secondary);
    }
  }
`;
