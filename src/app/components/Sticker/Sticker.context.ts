import { StickerProps } from "./Sticker.props";
import shitpost from "../../../../public/shitpost.png";

type StickerContext = Omit<
  StickerProps,
  "index" | "onClick" | "isInteractiveSticker"
>;

const STICKER_DIMENSIONS = {
  width: 75,
  height: 75,
};

export const STICKER_CONTEXT: StickerContext[] = [
  {
    img: {
      src: shitpost,
      alt: "Literally us",
      width: STICKER_DIMENSIONS.width,
      height: STICKER_DIMENSIONS.height,
    },
    coordinates: { x: -20, y: 80 },
  },
  {
    img: {
      src: shitpost,
      alt: "Reptilian desire",
      width: STICKER_DIMENSIONS.width,
      height: STICKER_DIMENSIONS.height,
    },
    coordinates: { x: 340, y: 40 },
  },
  {
    img: {
      src: shitpost,
      alt: "My queeeeeennnn",
      width: STICKER_DIMENSIONS.width,
      height: STICKER_DIMENSIONS.height,
    },
    coordinates: { x: 40, y: 440 },
  },
  {
    img: {
      src: shitpost,
      alt: "mmmmmWAH!",
      width: STICKER_DIMENSIONS.width,
      height: STICKER_DIMENSIONS.height,
    },
    coordinates: { x: 300, y: 460 },
  },
] as const;
