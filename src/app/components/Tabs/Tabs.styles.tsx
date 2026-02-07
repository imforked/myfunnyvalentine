import { styled, keyframes, css } from "styled-components";

const popOut = keyframes`
  0% {
    transform: translateX(-30px);
    opacity: 0;
  }

  1% {
    opacity: 1;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const HoverContainer = styled.div<{ $canPlayHoverAnimation: boolean }>`
  transition: 200ms;

  ${({ $canPlayHoverAnimation }) =>
    $canPlayHoverAnimation &&
    css`
      &:hover {
        transform: translateX(10px);
      }
    `}
`;

export const AnimateContainer = styled.div<{
  $coordinates: { x: number; y: number };
  $index: number;
  $playAnimation: boolean;
}>`
  position: absolute;
  z-index: 1;

  ${({ $coordinates }) => `
    top: ${$coordinates.y}px;
    right: ${$coordinates.x}px;
  `}

  ${({ $playAnimation }) =>
    $playAnimation
      ? css`
          animation: ${popOut} 420ms cubic-bezier(0.22, 1, 0.36, 1);
        `
      : css`
          display: none;
        `}

  animation-delay: ${({ $index }) => $index * 80}ms;
  animation-fill-mode: both;
`;
