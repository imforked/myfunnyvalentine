"use client";

import { useState, useRef } from "react";
import * as S from "./styles/Card.styles";
import { Sticker } from "../Sticker";
import { STICKER_CONTEXT } from "../Sticker/Sticker.context";
import { CardProps } from "./Card.types";

const PRESS_ANIMATION_DELAY = 250;
const SHAKE_DURATION = 500;

export const Card = ({ onStickerClick }: CardProps) => {
  const [showFront, setShowFront] = useState(true);
  const [isBeingTouched, setIsBeingTouched] = useState(false);
  const [featuresUnlocked, setFeaturesUnlocked] = useState(false);

  const timeoutRef = useRef<number | null>(null);
  const ignoreNextClickRef = useRef(false);

  const clickHandler = () => {
    if (ignoreNextClickRef.current) {
      ignoreNextClickRef.current = false;
      return;
    }
    setShowFront((prev) => !prev);
  };

  const mouseDownHandler = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsBeingTouched(true);

      setTimeout(() => {
        setFeaturesUnlocked(true);

        // Ignore the next clicks that follow a long press
        ignoreNextClickRef.current = true;
      }, S.PRESS_ANIMATION_IN_MS + SHAKE_DURATION);
    }, PRESS_ANIMATION_DELAY);
  };

  const mouseUpHandler = () => {
    setIsBeingTouched(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const Stickers = ({
    isInteractiveStickers,
  }: {
    isInteractiveStickers: boolean;
  }) =>
    STICKER_CONTEXT.map((sticker, index) => (
      <Sticker
        key={index}
        {...sticker}
        index={index}
        onClick={onStickerClick}
        isInteractiveSticker={isInteractiveStickers}
      />
    ));

  return (
    <S.Wrapper>
      <S.Container
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
        onClick={clickHandler}
        $isBeingTouched={isBeingTouched}
      >
        {showFront && (
          <S.InteractiveStickersContainer>
            <Stickers isInteractiveStickers />
          </S.InteractiveStickersContainer>
        )}
        <S.ShakeLayer $shake={featuresUnlocked}>
          <S.DriftLayer>
            <S.Flipper $showFront={showFront}>
              <S.Front $showFront={showFront} $isBeingTouched={isBeingTouched}>
                <S.FrontContent>
                  <Stickers isInteractiveStickers={false} />
                </S.FrontContent>
              </S.Front>

              <S.Back $showFront={showFront} $isBeingTouched={isBeingTouched}>
                <S.BackContent>
                  <h1>BACK CONTENT GOES HERE</h1>
                </S.BackContent>
              </S.Back>
            </S.Flipper>
          </S.DriftLayer>
        </S.ShakeLayer>
      </S.Container>
    </S.Wrapper>
  );
};
