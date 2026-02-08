import { RefObject } from "react";

type Coordinates = {
  x: number;
  y: number;
};

export type StickerCoordinates = {
  mobile: Coordinates;
  desktop: Coordinates;
};

export type ImgDimensions = {
  width: number;
  height: number;
};

type Img = {
  src: string;
  alt: string;
  dimensions: {
    mobile: ImgDimensions;
    desktop: ImgDimensions;
  };
};

export type StickerProps = {
  img: Img;
  coordinates: StickerCoordinates;
  index: number;
  isInteractiveSticker: boolean;
  onClick: () => void;
  parrotAudioRef: RefObject<HTMLAudioElement | null>;
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
