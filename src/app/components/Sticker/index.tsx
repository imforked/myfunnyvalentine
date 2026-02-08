import { useRef } from "react";
import * as S from "./Sticker.styles";
import { StickerProps } from "./Sticker.types";
import Image from "next/image";

export const Sticker = ({
  img,
  coordinates,
  index,
  isInteractiveSticker,
  onClick,
}: StickerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
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
      <Image {...img} />
      <audio ref={audioRef} src="/mmmWAH-sound.mov" />
    </S.Container>
  );
};
