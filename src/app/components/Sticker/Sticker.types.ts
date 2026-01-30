import { ImageProps } from "next/image";

export type StickerCoordinates = {
  x: number;
  y: number;
};

export type StickerProps = {
  img: ImageProps;
  coordinates: StickerCoordinates;
  index: number;
  isInteractiveSticker: boolean;
  onClick: () => void
};

export enum STICKER_ACTION {
  OPEN_TOOLTIP = "open-tooltip",
  PLAY_ANIMATION = "play-animation",
  NONE = "none",
}

export enum ANIMATION {
  MMM_WAH = "mmm-wah",
}

export enum TOOLTIP {}

export type StickerAction =
  | { type: STICKER_ACTION.OPEN_TOOLTIP; tooltipId: TOOLTIP }
  | {
      type: STICKER_ACTION.PLAY_ANIMATION;
      animation: ANIMATION;
    }
  | { type: STICKER_ACTION.NONE };
