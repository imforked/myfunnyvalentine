import { StickerProps } from "./Sticker.props";
import shitpost from "../../../../public/shitpost.png";
import love from "../../../../public/gimme-love.png";
import snack from "../../../../public/gimme-snack.png";
import dick from "../../../../public/gimme-dick.png";

type StickerContext = Omit<
  StickerProps,
  "index" | "onClick" | "isInteractiveSticker"
>;

export const STICKER_CONTEXT: StickerContext[] = [
  {
    img: {
      src: love,
      alt: "Literally us",
      width: 75,
      height: 69.6,
    },
    coordinates: { x: 0, y: 80 },
  },
  {
    img: {
      src: snack,
      alt: "Reptilian desire",
      width: 75,
      height: 76.5,
    },
    coordinates: { x: 340, y: 40 },
  },
  {
    img: {
      src: dick,
      alt: "My queeeeeennnn",
      width: 75,
      height: 111.5,
    },
    coordinates: { x: 40, y: 440 },
  },
  {
    img: {
      src: shitpost,
      alt: "mmmmmWAH!",
      width: 75,
      height: 75,
    },
    coordinates: { x: 300, y: 460 },
  },
] as const;
