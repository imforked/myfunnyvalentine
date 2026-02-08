"use client";

import { useState, useRef, useEffect } from "react";
import * as S from "./styles/Card.styles";
import { Tabs } from "../Tabs";
import { STICKER_CONTEXT } from "../Sticker/Sticker.context";
import { Sticker } from "../Sticker";
import { Form } from "../Form";
import {
  StickerAction,
  STICKER_ACTION,
  TOOLTIP,
  ANIMATION,
} from "../Sticker/Sticker.types";
import { FORM_TYPE } from "../Form/Form.types";
import formImg from "../../../../public/form.png";
import backImg from "../../../../public/front-1.png";
import { SuccessThumbsUp } from "../SuccessThumbsUp/SuccessThumbsUp";

const PRESS_ANIMATION_DELAY = 250;
const SHAKE_DURATION = 500;
const TAB_REVEAL_DELAY = 500;

export const Card = () => {
  const [showFront, setShowFront] = useState(true);
  const [isBeingTouched, setIsBeingTouched] = useState(false);
  const [featuresUnlocked, setFeaturesUnlocked] = useState(false);
  const [shakeCard, setShakeCard] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<TOOLTIP | null>(null);
  const [playAnimation, setPlayAnimation] = useState<ANIMATION | null>(null);
  const [activeForm, setActiveForm] = useState<FORM_TYPE | undefined>(
    undefined
  );
  const [killCard, setKillCard] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [playSuperSpin, setPlaySuperSping] = useState(false);
  const [playMmmWAH, setPlayMmmWAH] = useState(false);
  const [playThumbsUp, setPlayThumbsUp] = useState(false);

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

  const parrotAudioRef = useRef<HTMLAudioElement>(null);

  const clickHandler = () => {
    if (activeForm) {
      return;
    }
    if (ignoreNextClickRef.current) {
      ignoreNextClickRef.current = false;
      return;
    }
    setShowFront((prev) => !prev);
  };

  const mouseDownHandler = () => {
    if (!showFront) {
      return;
    }
    pressTimeoutRef.current = window.setTimeout(() => {
      setIsBeingTouched(true);

      shakeTimeoutRef.current = window.setTimeout(() => {
        setShakeCard(true);
        ignoreNextClickRef.current = true;

        unlockTimeoutRef.current = window.setTimeout(() => {
          setFeaturesUnlocked(true);
        }, S.PRESS_ANIMATION_IN_MS + SHAKE_DURATION + TAB_REVEAL_DELAY);
      }, S.PRESS_ANIMATION_IN_MS + SHAKE_DURATION);
    }, PRESS_ANIMATION_DELAY);
  };

  const mouseUpHandler = () => {
    setIsBeingTouched(false);
    setShakeCard(false);
    clearAllTimeouts();
  };

  const handleStickerAction = (action: StickerAction) => {
    // Reset the animation so it can replay
    setPlayMmmWAH(false);
    setTimeout(() => setPlayMmmWAH(true), 0);

    // Play audio immediately from start
    if (parrotAudioRef.current) {
      parrotAudioRef.current.pause(); // stop any ongoing playback
      parrotAudioRef.current.currentTime = 0; // rewind to start
      parrotAudioRef.current.play(); // play immediately
    }
  };

  const closeForm = () => {
    setShowFront(true);
    setTimeout(() => {
      setActiveForm(undefined);
    }, S.FLIP_TIME_IN_MS);
  };

  useEffect(() => {
    const audio = parrotAudioRef.current;
    if (!audio) return;

    const handleAudioEnd = () => {
      setPlayMmmWAH(false);
    };

    audio.addEventListener("ended", handleAudioEnd);

    return () => {
      audio.removeEventListener("ended", handleAudioEnd);
    };
  }, []);

  const Stickers = ({
    isInteractiveStickers,
    parrotAudioRef,
  }: {
    isInteractiveStickers: boolean;
    parrotAudioRef: React.RefObject<HTMLAudioElement | null>;
  }) =>
    STICKER_CONTEXT.map((sticker, index) => (
      <Sticker
        key={index}
        {...sticker}
        index={index}
        isInteractiveSticker={isInteractiveStickers}
        onClick={() => handleStickerAction(sticker.action)}
        parrotAudioRef={parrotAudioRef}
      />
    ));

  return (
    <S.Wrapper>
      <SuccessThumbsUp playAnimation={playThumbsUp} />
      <S.Container
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
        onMouseLeave={mouseUpHandler}
        onTouchStart={mouseDownHandler}
        onTouchEnd={mouseUpHandler}
        onClick={clickHandler}
        $isBeingTouched={isBeingTouched}
        $formIsActive={Boolean(activeForm)}
      >
        <audio ref={parrotAudioRef} src="/mmmWAH-sound.mov" />
        {!showFront && (
          <S.InteractiveStickersContainer>
            <Stickers isInteractiveStickers parrotAudioRef={parrotAudioRef} />
          </S.InteractiveStickersContainer>
        )}

        {killCard && (
          <S.ErrorMessage>
            something out of my control went wrong. just text me.
          </S.ErrorMessage>
        )}
        <S.MmmWAHLayer $playMmmWAH={playMmmWAH}>
          <S.HopLayer $hop={isSubmitting}>
            <S.ShakeLayer $shake={shakeCard}>
              <S.DriftLayer $killCard={killCard}>
                <S.Flipper
                  $showFront={showFront}
                  $playSuperSpin={playSuperSpin}
                >
                  <S.Front
                    $showFront={showFront}
                    $isBeingTouched={isBeingTouched}
                  >
                    <S.FrontContent />
                  </S.Front>

                  <Tabs
                    reveal={featuresUnlocked}
                    canClick={showFront}
                    setActiveForm={setActiveForm}
                  />

                  <S.Back
                    $showFront={showFront}
                    $isBeingTouched={isBeingTouched}
                    $image={activeForm ? formImg.src : backImg.src}
                  >
                    <S.BackContent>
                      {activeForm && (
                        <Form
                          variant={activeForm}
                          closeForm={closeForm}
                          setShakeCard={setShakeCard}
                          setKillCard={setKillCard}
                          setIsSubmitting={setIsSubmitting}
                          setPlaySuperSpin={setPlaySuperSping}
                          setPlayThumbsUp={setPlayThumbsUp}
                          setShowFront={setShowFront}
                          setActiveForm={setActiveForm}
                        />
                      )}
                      <Stickers
                        isInteractiveStickers={false}
                        parrotAudioRef={parrotAudioRef}
                      />
                    </S.BackContent>
                  </S.Back>
                </S.Flipper>
              </S.DriftLayer>
            </S.ShakeLayer>
          </S.HopLayer>
        </S.MmmWAHLayer>
      </S.Container>
    </S.Wrapper>
  );
};
