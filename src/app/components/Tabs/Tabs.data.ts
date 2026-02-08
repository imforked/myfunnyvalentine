import { TabsData } from "./Tabs.types";
import heart from "../../../../public/heart.png";
import wink from "../../../../public/wink.png";
import snack from "../../../../public/snack.png";
import heartBack from "../../../../public/heart-back.png";
import winkBack from "../../../../public/wink-back.png";
import snackBack from "../../../../public/snack-back.png";
import { FORM_TYPE } from "../Form/Form.types";

export const TABS_DATA: TabsData = [
  {
    formType: FORM_TYPE.LOVE,
    coordinates: { x: -35, y: 25 },
    img: {
      src: { front: heart.src, back: heartBack.src },
      alt: "Gimme love",
      width: 106,
      height: 44,
    },
  },
  {
    formType: FORM_TYPE.DICK,
    coordinates: { x: -35, y: 75 },
    img: {
      src: { front: wink.src, back: winkBack.src },
      alt: "Gimme dick",
      width: 106,
      height: 44,
    },
  },
  {
    formType: FORM_TYPE.SNACK,
    coordinates: { x: -35, y: 125 },
    img: {
      src: { front: snack.src, back: snackBack.src },
      alt: "Gimme snack",
      width: 106,
      height: 44,
    },
  },
];
