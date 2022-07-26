import styled from "styled-components";

export const BaseButton = styled.button`
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 15px 0 15px;
  font-size: 1rem;
  background-color: var(--primary);
  color: white;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: bold;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0.2rem 0.2rem 0.7rem var(--secondary));

  &:hover {
    background-color: var(--secondary);
    transform: scale(1.1);
    /* transition: transform 1s cubic-bezier(0.2, 0.45, 0.45, 0.95); */
    transition: transform 0.5s;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: var(--secondary);
  opacity: 0.7;
  color: white;
  border: 1px solid var(--secondary);

  &:hover {
    background-color: var(--primary);
    opacity: 1;
    color: var(--secondary);
  }
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
