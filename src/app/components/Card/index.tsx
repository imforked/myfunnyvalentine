"use client";

import { useState } from "react";
import * as S from "./Card.styles";

export const Card = () => {
  const [showFront, setShowFront] = useState(true);

  return (
    <S.Wrapper>
      <S.Container onClick={() => setShowFront((prevState) => !prevState)}>
        <S.DriftLayer>
          <S.Flipper $showFront={showFront}>
            <S.Front $showFront={showFront}>
              <S.FrontContent>{/* stickers go here */}</S.FrontContent>
            </S.Front>

            <S.Back $showFront={showFront}>
              <S.BackContent>{/* back design */}</S.BackContent>
            </S.Back>
          </S.Flipper>
        </S.DriftLayer>
      </S.Container>
    </S.Wrapper>
  );
};
