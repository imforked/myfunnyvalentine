import * as S from "./Sticker.styles";
import { StickerProps } from "./Sticker.props";
import Image from "next/image";

export const Sticker = ({
  img,
  coordinates,
  index,
  onClick,
  isInteractiveSticker,
}: StickerProps) => {
  return (
    <S.Container
      $coordinates={coordinates}
      $index={index}
      $isInteractiveSticker={isInteractiveSticker}
      onClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
        onClick();
      }}
    >
      <Image {...img} />
    </S.Container>
  );
};
