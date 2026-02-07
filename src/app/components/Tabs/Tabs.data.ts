import { TabsData } from "./Tabs.types";
import heart1 from "../../../../public/heart-1.png";
import { FORM_TYPE } from "../Form/Form.types";

export const TABS_DATA: TabsData = [
  {
    formType: FORM_TYPE.DICK,
    coordinates: { x: -30, y: 25 },
    img: {
      src: heart1.src,
      alt: "Heart tab frame 1",
      width: 106,
      height: 44,
    },
  },
  {
    formType: FORM_TYPE.LOVE,
    coordinates: { x: -30, y: 75 },
    img: {
      src: heart1.src,
      alt: "Heart tab frame 1",
      width: 106,
      height: 44,
    },
  },
  {
    formType: FORM_TYPE.SNACK,
    coordinates: { x: -30, y: 125 },
    img: {
      src: heart1.src,
      alt: "Heart tab frame 1",
      width: 106,
      height: 44,
    },
  },
];
