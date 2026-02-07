import { TabsData } from "./Tabs.types";
import heart from "../../../../public/heart.png";
import wink from "../../../../public/wink.png";
import snack from "../../../../public/snack.png";
import { FORM_TYPE } from "../Form/Form.types";

export const TABS_DATA: TabsData = [
  {
    formType: FORM_TYPE.LOVE,
    coordinates: { x: -35, y: 25 },
    img: {
      src: heart.src,
      alt: "Gimme love",
      width: 106,
      height: 44,
    },
  },
  {
    formType: FORM_TYPE.DICK,
    coordinates: { x: -35, y: 75 },
    img: {
      src: wink.src,
      alt: "Gimme dick",
      width: 106,
      height: 44,
    },
  },
  {
    formType: FORM_TYPE.SNACK,
    coordinates: { x: -35, y: 125 },
    img: {
      src: snack.src,
      alt: "Gimme snack",
      width: 106,
      height: 44,
    },
  },
];
