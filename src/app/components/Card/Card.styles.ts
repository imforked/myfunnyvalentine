import { styled, css } from "styled-components";

const CARD_BORDER_RADIUS = 12;
export const FLIP_TIME_IN_MS = 800;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: yellow;
`;

export const Container = styled.div`
  position: relative;
  width: 400px;
  height: 560px;
  border-radius: ${CARD_BORDER_RADIUS}px;
  perspective: 800px;

  &:hover {
    cursor: pointer;
  }
`;

export const Front = styled.div<{
  $showFront: boolean;
  $showFrontShadow: boolean;
}>`
  background: linear-gradient(145deg, #ff4d4d, #cc0000);
  border: 2px solid #900;
  width: 100%;
  height: 100%;
  transition: transform ${FLIP_TIME_IN_MS}ms, box-shadow ${FLIP_TIME_IN_MS}ms;
  transform-style: preserve-3d;
  z-index: 2;
  border-radius: ${CARD_BORDER_RADIUS}px;
  box-shadow: ${({ $showFront }) => ($showFront ? "10px" : "-10px")} 5px 20px
    rgba(0, 0, 0, 0.5);

  ${({ $showFront }) =>
    !$showFront &&
    css`
      transform: rotateY(180deg);
    `}
`;
