import { StickerProps as StickerContext } from "./Sticker.props";

export const STICKER_CONTEXT: StickerContext[] = [
  {
    img: {
      src: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjc5MC1udW5ueS01Mi5wbmc.png",
      alt: "img 1 wow",
      width: 100,
      height: 100,
    },
    coordinates: { x: "right: -10px;", y: "top: 50px;" },
  },
  {
    img: {
      src: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjc5MC1udW5ueS01Mi5wbmc.png",
      alt: "img 1 wow",
      width: 100,
      height: 100,
    },
    coordinates: { x: "left: -20px;", y: "top: 70px;" },
  },
  {
    img: {
      src: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjc5MC1udW5ueS01Mi5wbmc.png",
      alt: "img 1 wow",
      width: 100,
      height: 100,
    },
    coordinates: { x: "left: 50px;", y: "bottom: 50px;" },
  },
] as const;
