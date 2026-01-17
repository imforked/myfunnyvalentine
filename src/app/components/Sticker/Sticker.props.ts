import { ImageProps } from "next/image";

export type StickerCoordinates = {
  x: `left: ${number}px;` | `right: ${number}px;`;
  y: `top: ${number}px;` | `bottom: ${number}px;`;
};

export type StickerProps = {
  img: ImageProps;
  coordinates: StickerCoordinates;
};