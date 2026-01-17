import * as S from "./Sticker.styles";
import { StickerProps } from "./Sticker.props";
import Image from "next/image";

export const Sticker = ({ img, coordinates }: StickerProps) => {
  return (
    <S.Container $coordinates={coordinates}>
      {/* <Image {...img} /> */}
      {/* TODO: use Next Image */}
      <img {...img} />
    </S.Container>
  );
};
