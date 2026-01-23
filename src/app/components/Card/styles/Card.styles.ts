import { styled, css } from "styled-components";
import { drift, shake } from "./animations";
import backgroundImg from "../../../../../public/card-background.png";

const CARD_BORDER_RADIUS = 12;
export const FLIP_TIME_IN_MS = 800;
export const PRESS_ANIMATION_IN_MS = 250;

const randomTilt = (max = 5) => (Math.random() * max * 2 - max).toFixed(2);

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #dcd8b0;
`;

export const Container = styled.div<{ $isBeingTouched: boolean }>`
  position: relative;
  width: 415px;
  height: 609px;
  border-radius: ${CARD_BORDER_RADIUS}px;
  perspective: 900px;
  transition: transform ${PRESS_ANIMATION_IN_MS}ms ease-in-out;

  ${({ $isBeingTouched }) =>
    $isBeingTouched &&
    css`
      transform: scale(0.95);
    `}

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

export const ShakeLayer = styled.div<{ $shake: boolean }>`
  ${({ $shake }) =>
    $shake &&
    css`
      animation: ${shake} 1s linear forwards;
    `}

  width: 100%;
  height: 100%;
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

const Face = styled.div<{ $showFront: boolean; $isBeingTouched: boolean }>`
  position: absolute;
  inset: 0;
  border-radius: ${CARD_BORDER_RADIUS}px;
  backface-visibility: hidden;

  background-image: url(${backgroundImg.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  filter: ${({ $showFront, $isBeingTouched }) =>
    $showFront && !$isBeingTouched
      ? "drop-shadow(10px 5px 20px rgba(0, 0, 0, 0.5))"
      : "none"};

  transition: filter
    ${({ $isBeingTouched }) =>
      $isBeingTouched ? PRESS_ANIMATION_IN_MS : FLIP_TIME_IN_MS}ms;
`;

export const Front = styled(Face)`
`;

export const Back = styled(Face)`
  transform: rotateY(180deg);
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const FrontContent = styled(Content)``;

export const BackContent = styled(Content)``;

export const InteractiveStickersContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
`;
