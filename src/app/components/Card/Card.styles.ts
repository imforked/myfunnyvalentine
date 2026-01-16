import { styled, css } from "styled-components";

const CARD_BORDER_RADIUS = 12;
export const FLIP_TIME_IN_MS = 800;

const randomTilt = (max = 5) => (Math.random() * max * 2 - max).toFixed(2);

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
  perspective: 900px;

  &:hover {
    cursor: pointer;
  }
`;

export const Flipper = styled.div<{ $showFront: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform ${FLIP_TIME_IN_MS}ms;
  transform: ${({ $showFront }) =>
    $showFront
      ? "rotateY(0deg)"
      : `rotateY(180deg) rotateX(2deg) rotateZ(${randomTilt()}deg)`};
`;

const Face = styled.div`
  position: absolute;
  inset: 0;
  border-radius: ${CARD_BORDER_RADIUS}px;
  backface-visibility: hidden;
`;

export const Front = styled(Face)`
  background: linear-gradient(145deg, #ff4d4d, #cc0000);
  border: 2px solid #900;
  box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.5);
`;

export const Back = styled(Face)`
  background: linear-gradient(145deg, #333, #111);
  transform: rotateY(180deg);
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const FrontContent = styled(Content)``;

export const BackContent = styled(Content)``;
