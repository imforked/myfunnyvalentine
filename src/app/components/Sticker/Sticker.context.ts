import {
  StickerProps,
  StickerAction,
  STICKER_ACTION,
  ANIMATION,
} from "./Sticker.types";
import love from "../../../../public/gimme-love.png";
import snack from "../../../../public/gimme-snack.png";
import dick from "../../../../public/gimme-dick.png";
import mmmWAH from "../../../../public/mmmWAH.png";

type StickerContext = Omit<
  StickerProps,
  "index" | "isInteractiveSticker" | "onClick"
> & {
  action: StickerAction;
};

export const STICKER_CONTEXT: StickerContext[] = [
  // {
  //   img: {
  //     src: love,
  //     alt: "Literally us",
  //     width: 75,
  //     height: 69.6,
  //   },
  //   coordinates: { x: 0, y: 80 },
  //   action: {
  //     type: STICKER_ACTION.NONE,
  //   },
  // },
  // {
  //   img: {
  //     src: snack,
  //     alt: "Reptilian desire",
  //     width: 75,
  //     height: 76.5,
  //   },
  //   coordinates: { x: 340, y: 40 },
  //   action: {
  //     type: STICKER_ACTION.NONE,
  //   },
  // },
  // {
  //   img: {
  //     src: dick,
  //     alt: "My queeeeeennnn",
  //     width: 75,
  //     height: 111.5,
  //   },
  //   coordinates: { x: 40, y: 440 },
  //   action: {
  //     type: STICKER_ACTION.NONE,
  //   },
  // },
  {
    img: {
      src: mmmWAH,
      alt: "mmmmmWAH!",
      width: 100,
      height: 100,
    },
    coordinates: { x: 300, y: 500 },
    action: {
      type: STICKER_ACTION.PLAY_ANIMATION,
      animation: ANIMATION.MMM_WAH,
    },
  },
] as const;
