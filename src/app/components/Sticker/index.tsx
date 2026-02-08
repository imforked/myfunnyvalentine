import { useRef } from "react";
import * as S from "./Sticker.styles";
import { StickerProps } from "./Sticker.types";

export const Sticker = ({
  img,
  coordinates,
  index,
  isInteractiveSticker,
  onClick,
  parrotAudioRef,
}: StickerProps) => {
  const handlePlay = () => {
    if (!parrotAudioRef.current) return;

    try {
      parrotAudioRef.current.currentTime = 0;
      parrotAudioRef.current.play().catch((err) => {
        if (err.name !== "AbortError") console.error(err);
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <S.Container
      $coordinates={coordinates}
      $index={index}
      $isInteractiveSticker={isInteractiveSticker}
      onClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
        onClick();
        handlePlay();
      }}
    >
      <S.StyledImage
        src={img.src}
        alt={img.alt}
        $dimensions={img.dimensions}
        width={img.dimensions.mobile.width}
        height={img.dimensions.mobile.height}
      />
    </S.Container>
  );
};
