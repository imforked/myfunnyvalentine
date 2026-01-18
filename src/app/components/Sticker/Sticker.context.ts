import { StickerProps } from "./Sticker.props";
import shitpost from "../../../../public/shitpost.png";

type StickerContext = Omit<
  StickerProps,
  "index" | "onClick" | "isInteractiveSticker"
>;

export const STICKER_CONTEXT: StickerContext[] = [
  {
    img: {
      src: shitpost,
      alt: "Literally us",
      width: 100,
      height: 100,
    },
    coordinates: { x: -10, y: 80 },
  },
  {
    img: {
      src: shitpost,
      alt: "Reptilian desire",
      width: 100,
      height: 100,
    },
    coordinates: { x: 305, y: 40 },
  },
  {
    img: {
      src: shitpost,
      alt: "My queeeeeennnn",
      width: 100,
      height: 100,
    },
    coordinates: { x: 50, y: 400 },
  },
    {
    img: {
      src: shitpost,
      alt: "mmmmmWAH!",
      width: 100,
      height: 100,
    },
    coordinates: { x: 280, y: 440 },
  },
] as const;
