import { styled, keyframes, css } from "styled-components";

const THUMB_WIDTH = 383;
const THUMB_SHAKE_ADJUSTMENT = -30;

const DOM_WIDTH = 258;

const revealDom = keyframes`
  0% {
    transform: translateX(${DOM_WIDTH}px) rotate(0deg);
  }
  20% {
    transform: translateX(0) rotate(-25deg);
  }
  65% { 
    transform: translateX(0) rotate(-25deg);
  }
  80% {
    transform: translateX(${DOM_WIDTH}px) rotate(0deg);
  }
  100% {
    transform: translateX(${DOM_WIDTH}px) rotate(0deg);
  }
`;

const revealThumb = keyframes`
  0% {
    transform: translateX(0) rotate(0deg);
  }
  40% {
    transform: translateX(-${
      THUMB_WIDTH + THUMB_SHAKE_ADJUSTMENT
    }px) rotate(0deg); 
  }
  50% {
    transform: translateX(-${
      THUMB_WIDTH + THUMB_SHAKE_ADJUSTMENT
    }px) rotate(7deg); 
  }
  60% {
    transform: translateX(-${
      THUMB_WIDTH + THUMB_SHAKE_ADJUSTMENT
    }px) rotate(-7deg); 
  }
  70% {
    transform: translateX(-${
      THUMB_WIDTH + THUMB_SHAKE_ADJUSTMENT
    }px) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg); 
  }
`;

export const Container = styled.div``;

export const ThumbsContainer = styled.div`
  position: absolute;
  z-index: 999;
  left: -${THUMB_WIDTH}px;
  top: 50%;
  transform: rotateY(180deg) translateY(-50%);
`;

export const Thumb = styled.img<{ $index: number; $playAnimation: boolean }>`
  transition: transform 1s ease-in-out;
  z-index: 999;

  ${({ $playAnimation, $index }) =>
    $playAnimation &&
    css`
      animation: ${revealThumb} 1.5s ease-in-out forwards;
      animation-delay: ${$index * 0.2 + 0.4}s;
    `}
`;

export const Face = styled.img<{ $playAnimation: boolean }>`
  position: absolute;
  bottom: -40px;
  right: 0;
  z-index: 999;

  transform: translateX(${DOM_WIDTH}px) rotate(0deg);

  ${({ $playAnimation }) =>
    $playAnimation &&
    css`
      animation: ${revealDom} 3s ease-in-out forwards;
    `}
`;
