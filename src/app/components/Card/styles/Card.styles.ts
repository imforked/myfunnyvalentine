import { styled, css } from "styled-components";
import { drift, shake, killCard, hop, superSpin, mmmWAH } from "./animations";
import front from "../../../../../public/front-1.png";

const CARD_BORDER_RADIUS = 12;
export const FLIP_TIME_IN_MS = 800;
export const PRESS_ANIMATION_IN_MS = 250;
export const SUPER_SPIN_ANIMATION_IN_MS = 2000;
export const MMM_WAH_ANIMATION_IN_MS = 4000;

const randomTilt = (max = 5) => (Math.random() * max * 2 - max).toFixed(2);

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #dcd8b0;
  overflow: hidden;
`;

export const Container = styled.div<{
  $isBeingTouched: boolean;
  $formIsActive: boolean;
}>`
  position: relative;
  width: 415px;
  height: 609px;
  border-radius: ${CARD_BORDER_RADIUS}px;
  perspective: 900px;
  transition: transform ${PRESS_ANIMATION_IN_MS}ms ease-in-out;
  pointer-events: auto;

  ${({ $formIsActive }) =>
    $formIsActive &&
    css`
      pointer-events: none;
    `}

  ${({ $isBeingTouched }) =>
    $isBeingTouched &&
    css`
      transform: scale(0.95);
    `}

  &:hover {
    cursor: pointer;
  }
`;

export const MmmWAHLayer = styled.div<{ $playMmmWAH: boolean }>`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;

  ${({ $playMmmWAH }) =>
    $playMmmWAH &&
    css`
      animation: ${mmmWAH} ${MMM_WAH_ANIMATION_IN_MS}ms
        cubic-bezier(0.25, 1, 0.5, 1);
    `}
`;

export const HopLayer = styled.div<{ $hop: boolean }>`
  width: 100%;
  height: 100%;

  transform-style: preserve-3d;

  ${({ $hop }) =>
    $hop &&
    css`
      animation: ${hop} 1.5s ease-in-out infinite;
    `}
`;

export const DriftLayer = styled.div<{ $killCard: boolean }>`
  width: 100%;
  height: 100%;
  animation: ${({ $killCard }) =>
    $killCard
      ? css`
          ${killCard} 1s ease-in forwards
        `
      : css`
          ${drift} 10s ease-in-out infinite
        `};
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

export const Flipper = styled.div<{
  $showFront: boolean;
  $playSuperSpin?: boolean;
}>`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: ${({ $playSuperSpin }) =>
    $playSuperSpin ? "none" : `transform ${FLIP_TIME_IN_MS}ms`};

  ${({ $playSuperSpin }) =>
    $playSuperSpin &&
    css`
      animation: ${superSpin} 1.5s ease-in-out forwards;
    `}

  transform: ${({ $showFront, $playSuperSpin }) =>
    $playSuperSpin
      ? undefined
      : $showFront
      ? "rotateY(0deg)"
      : `rotateY(180deg) rotateX(2deg) rotateZ(${randomTilt()}deg)`};
`;

const Face = styled.div<{ $showFront: boolean; $isBeingTouched: boolean }>`
  position: absolute;
  inset: 0;
  border-radius: ${CARD_BORDER_RADIUS}px;
  backface-visibility: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 2;

  filter: ${({ $showFront, $isBeingTouched }) =>
    $showFront && !$isBeingTouched
      ? "drop-shadow(4px 3px 10px rgba(0, 0, 0, 0.25))"
      : "none"};

  transition: filter
    ${({ $isBeingTouched }) =>
      $isBeingTouched ? PRESS_ANIMATION_IN_MS : FLIP_TIME_IN_MS}ms;
`;

export const Front = styled(Face)`
  background-image: url(${front.src});
`;

export const Back = styled(Face)<{ $image: string }>`
  transform: rotateY(180deg);
  background-image: ${({ $image }) => $image && `url(${$image})`};
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

export const ErrorMessage = styled.h2`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
