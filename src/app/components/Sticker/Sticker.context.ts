import { StickerProps } from "./Sticker.props";

type StickerContext = Omit<
  StickerProps,
  "index" | "onClick" | "isInteractiveSticker"
>;

export const STICKER_CONTEXT: StickerContext[] = [
  {
    img: {
      src: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjc5MC1udW5ueS01Mi5wbmc.png",
      alt: "img 1 wow",
      width: 100,
      height: 100,
    },
    coordinates: { x: -10, y: 80 },
  },
  {
    img: {
      src: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjc5MC1udW5ueS01Mi5wbmc.png",
      alt: "img 2 wow",
      width: 100,
      height: 100,
    },
    coordinates: { x: 305, y: 40 },
  },
  {
    img: {
      src: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjc5MC1udW5ueS01Mi5wbmc.png",
      alt: "img 3 wow",
      width: 100,
      height: 100,
    },
    coordinates: { x: 50, y: 400 },
  },
] as const;
