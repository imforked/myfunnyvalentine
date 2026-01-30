"use client";

import { useState, useRef } from "react";
import * as S from "./styles/Card.styles";
import { CardProps } from "./Card.types";
import { Tabs } from "../Tabs";
import { STICKER_CONTEXT } from "../Sticker/Sticker.context";
import { Sticker } from "../Sticker";

const PRESS_ANIMATION_DELAY = 250;
const SHAKE_DURATION = 500;
const TAB_REVEAL_DELAY = 500;

export const Card = ({ onStickerClick }: CardProps) => {
  const [showFront, setShowFront] = useState(true);
  const [isBeingTouched, setIsBeingTouched] = useState(false);
  const [featuresUnlocked, setFeaturesUnlocked] = useState(false);
  const [shakeCard, setShakeCard] = useState(false);

  const pressTimeoutRef = useRef<number | null>(null);
  const shakeTimeoutRef = useRef<number | null>(null);
  const unlockTimeoutRef = useRef<number | null>(null);

  const ignoreNextClickRef = useRef(false);

  const clearAllTimeouts = () => {
    if (pressTimeoutRef.current) clearTimeout(pressTimeoutRef.current);
    if (shakeTimeoutRef.current) clearTimeout(shakeTimeoutRef.current);
    if (unlockTimeoutRef.current) clearTimeout(unlockTimeoutRef.current);

    pressTimeoutRef.current = null;
    shakeTimeoutRef.current = null;
    unlockTimeoutRef.current = null;
  };

  const clickHandler = () => {
    if (ignoreNextClickRef.current) {
      ignoreNextClickRef.current = false;
      return;
    }
    setShowFront((prev) => !prev);
  };

  const mouseDownHandler = () => {
    pressTimeoutRef.current = window.setTimeout(() => {
      setIsBeingTouched(true);

      shakeTimeoutRef.current = window.setTimeout(() => {
        setShakeCard(true);
        ignoreNextClickRef.current = true;

        unlockTimeoutRef.current = window.setTimeout(
          () => {
            setFeaturesUnlocked(true);
          },
          S.PRESS_ANIMATION_IN_MS + SHAKE_DURATION + TAB_REVEAL_DELAY,
        );
      }, S.PRESS_ANIMATION_IN_MS + SHAKE_DURATION);
    }, PRESS_ANIMATION_DELAY);
  };

  const mouseUpHandler = () => {
    setIsBeingTouched(false);
    setShakeCard(false);
    clearAllTimeouts();
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
        onMouseLeave={mouseUpHandler}
        onTouchStart={mouseDownHandler}
        onTouchEnd={mouseUpHandler}
        onClick={clickHandler}
        $isBeingTouched={isBeingTouched}
      >
        {!showFront && (
          <S.InteractiveStickersContainer>
            <Stickers isInteractiveStickers />
          </S.InteractiveStickersContainer>
        )}

        <S.ShakeLayer $shake={shakeCard}>
          <S.DriftLayer>
            <S.Flipper $showFront={showFront}>
              <S.Front $showFront={showFront} $isBeingTouched={isBeingTouched}>
                <S.FrontContent />
              </S.Front>

              <Tabs reveal={featuresUnlocked} />

              <S.Back $showFront={showFront} $isBeingTouched={isBeingTouched}>
                <S.BackContent>
                  <Stickers isInteractiveStickers={false} />
                </S.BackContent>
              </S.Back>
            </S.Flipper>
          </S.DriftLayer>
        </S.ShakeLayer>
      </S.Container>
    </S.Wrapper>
  );
};
