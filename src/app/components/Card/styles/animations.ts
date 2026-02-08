import { keyframes } from "styled-components";

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

export const shake = keyframes`
  0% {
    transform: translate(0, 0) rotateZ(0deg);
  }

  10% {
    transform: translate(-3px, -2px) rotateZ(-0.45deg);
  }

  20% {
    transform: translate(3px, 2px) rotateZ(0.45deg);
  }

  30% {
    transform: translate(-2px, 3px) rotateZ(-0.35deg);
  }

  40% {
    transform: translate(2px, -3px) rotateZ(0.35deg);
  }

  50% {
    transform: translate(-3px, 2px) rotateZ(-0.5deg);
  }

  60% {
    transform: translate(3px, -2px) rotateZ(0.5deg);
  }

  70% {
    transform: translate(-2px, 2px) rotateZ(-0.25deg);
  }

  80% {
    transform: translate(2px, -2px) rotateZ(0.25deg);
  }

  90% {
    transform: translate(-1px, 1px) rotateZ(-0.15deg);
  }

  100% {
    transform: translate(0, 0) rotateZ(0deg);
  }
`;

export const killCard = keyframes`
  0% {
    transform: translate(0, 0)
      rotateZ(0deg)
      scale(1);
  }

  30% {
    transform: translate(0, 10px)
      rotateZ(-2deg)
      scale(0.98);
  }

  70% {
    transform: translate(0, 80px)
      rotateZ(6deg)
      scale(0.9);
  }

  100% {
    transform: translate(0, 3000px)
      rotateZ(12deg)
      scale(0.85);
  }
`;

export const hop = keyframes`
  0%, 20%, 50%, 70%, 100% { transform: translateY(0); }
  10% { transform: translateY(11px); }
  30% { transform: translateY(11px); }
`;

export const superSpin = keyframes`
  0%   { transform: rotateY(180deg); }
  100% { transform: rotateY(720deg); }
`;
