"use client";

import { useState } from "react";
import * as S from "./Card.styles";
import { Sticker } from "../Sticker";
import { STICKER_CONTEXT } from "../Sticker/Sticker.context";
import { CardProps } from "./Card.types";

export const Card = ({ onStickerClick }: CardProps) => {
  const [showFront, setShowFront] = useState(true);

  const Stickers = ({
    isInteractiveStickers,
  }: {
    isInteractiveStickers: boolean;
  }) =>
    STICKER_CONTEXT.map((sticker, index) => {
      return (
        <Sticker
          key={index}
          {...sticker}
          index={index}
          onClick={onStickerClick}
          isInteractiveSticker={isInteractiveStickers}
        />
      );
    });
  return (
    <S.Wrapper>
      <S.Container onClick={() => setShowFront((prevState) => !prevState)}>
        <S.DriftLayer>
          {showFront && (
            <S.InteractiveStickersContainer>
              <Stickers isInteractiveStickers />
            </S.InteractiveStickersContainer>
          )}

          <S.Flipper $showFront={showFront}>
            <S.Front $showFront={showFront}>
              <S.FrontContent>
                <Stickers isInteractiveStickers={false} />
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
