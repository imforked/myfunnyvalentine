"use client";

import { useState } from "react";
import * as S from "./Card.styles";
import { Sticker } from "../Sticker";
import { STICKER_CONTEXT } from "../Sticker/Sticker.context";

export const Card = () => {
  const [showFront, setShowFront] = useState(true);

  return (
    <S.Wrapper>
      <S.Container onClick={() => setShowFront((prevState) => !prevState)}>
        <S.DriftLayer>
          <S.Flipper $showFront={showFront}>
            <S.Front $showFront={showFront}>
              <S.FrontContent>
                {STICKER_CONTEXT.map((sticker, index) => {
                  return <Sticker key={index} {...sticker} />;
                })}
              </S.FrontContent>
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
