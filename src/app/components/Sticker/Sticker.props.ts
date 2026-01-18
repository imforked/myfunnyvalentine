import { ImageProps } from "next/image";

export type StickerCoordinates = {
  x: number;
  y: number;
};

export type StickerProps = {
  img: ImageProps;
  coordinates: StickerCoordinates;
  index: number;
  onClick: () => void;
  isInteractiveSticker: boolean;
};
