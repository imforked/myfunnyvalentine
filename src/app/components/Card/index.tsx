"use client";

import { useState } from "react";
import * as S from "./Card.styles";

export const Card = () => {
  const [showFront, setShowFront] = useState(true);
  const [showFrontShadow, setShowFrontShadow] = useState(true);

  const handleFlip = () => {
    setShowFront(!showFront);
    // setTimeout(() => {
    //   setShowFrontShadow(!showFront);
    // }, S.FLIP_TIME_IN_MS / 1.75);
  };

  return (
    <S.Wrapper>
      <S.Container onClick={handleFlip}>
        <S.Front
          $showFront={showFront}
          $showFrontShadow={showFrontShadow}
        ></S.Front>
      </S.Container>
    </S.Wrapper>
  );
};
