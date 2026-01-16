import { styled, keyframes, css } from "styled-components";

const CARD_BORDER_RADIUS = 12;
export const FLIP_TIME_IN_MS = 800;

const randomTilt = (max = 5) => (Math.random() * max * 2 - max).toFixed(2);

export const drift = keyframes`
  0% {
    transform: translate(0px, 0px)
      rotateZ(0deg)
      rotateX(1deg)
      rotateY(-1deg);
  }

  20% {
    transform: translate(6px, -10px)
      rotateZ(0.6deg)
      rotateX(1.8deg)
      rotateY(-0.4deg);
  }

  40% {
    transform: translate(12px, 0px)
      rotateZ(-0.4deg)
      rotateX(0.8deg)
      rotateY(0.6deg);
  }

  60% {
    transform: translate(6px, 10px)
      rotateZ(-0.8deg)
      rotateX(1.4deg)
      rotateY(0.2deg);
  }

  80% {
    transform: translate(-4px, 4px)
      rotateZ(0.3deg)
      rotateX(1deg)
      rotateY(-0.8deg);
  }

  100% {
    transform: translate(0px, 0px)
      rotateZ(0deg)
      rotateX(1deg)
      rotateY(-1deg);
  }
`;

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

export const DriftLayer = styled.div`
  width: 100%;
  height: 100%;
  animation: ${drift} 10s ease-in-out infinite;
  transform-style: preserve-3d;
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

const Face = styled.div<{ $showFront: boolean }>`
  position: absolute;
  inset: 0;
  border-radius: ${CARD_BORDER_RADIUS}px;
  backface-visibility: hidden;
  box-shadow: ${({ $showFront }) => ($showFront ? "10px" : "0px")} 5px 20px
    rgba(0, 0, 0, 0.5);
  transition: box-shadow ${FLIP_TIME_IN_MS}ms;
`;

export const Front = styled(Face)`
  background: linear-gradient(145deg, #ff4d4d, #cc0000);
  border: 2px solid #900;
`;

export const Back = styled(Face)`
  background: linear-gradient(145deg, #777, #4a4a4a);
  transform: rotateY(180deg);
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const FrontContent = styled(Content)``;

export const BackContent = styled(Content)``;
