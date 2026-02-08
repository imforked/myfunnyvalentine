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
  "index" | "isInteractiveSticker" | "onClick" | "parrotAudioRef"
> & {
  action: StickerAction;
};

export const STICKER_CONTEXT: StickerContext[] = [
  {
    img: {
      src: mmmWAH.src,
      alt: "mmmWAH!",
      dimensions: {
        mobile: {
          width: 50,
          height: 50,
        },
        desktop: {
          width: 100,
          height: 100,
        },
      },
    },
    coordinates: {
      mobile: { x: 200, y: 325 },
      desktop: { x: 300, y: 500 },
    },
    action: {
      type: STICKER_ACTION.PLAY_ANIMATION,
      animation: ANIMATION.MMM_WAH,
    },
  },
];
