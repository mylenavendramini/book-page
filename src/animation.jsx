import styled, { keyframes } from "styled-components";

import { slideInLeft, slideInRight, pulse, fadeInUp } from "react-animations";

const slideInLeftAnimation = keyframes`${slideInLeft}`;
const slideInRightAnimation = keyframes`${slideInRight}`;
const pulseAnimation = keyframes`${pulse}`;
const fadeInUpAnimation = keyframes`${fadeInUp}`;

export const SlideInLeftDiv = styled.div`
  animation: 1s ${slideInLeftAnimation};
`;

export const SlideInRightDiv = styled.div`
  animation: 2s ${slideInRightAnimation};
`;

export const PulseDiv = styled.div`
  animation: 2s ${pulseAnimation};
`;

export const FadeInUpDiv = styled.div`
  animation: 5s ${fadeInUpAnimation};
  animation-delay: 3s;
`;
