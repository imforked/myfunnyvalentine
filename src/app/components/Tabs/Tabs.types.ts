import { Dispatch, SetStateAction } from "react";
import { FORM_TYPE } from "../Form/Form.types";

type Coordinates = { x: number; y: number };

type Image = {
  src: { front: string; back: string };
  alt: string;
  width: number;
  height: number;
};

export type TabProps = {
  coordinates: Coordinates;
  img: Image;
  reveal: boolean;
  frontIsActive: boolean;
  index: number;
  setActiveForm: Dispatch<SetStateAction<FORM_TYPE | undefined>>;
  formType: FORM_TYPE;
};

export type TabsData = (Omit<
  TabProps,
  "index" | "reveal" | "frontIsActive" | "setActiveForm"
> & { formType: FORM_TYPE })[];

export type TabsProps = {
  reveal: boolean;
  frontIsActive: boolean;
  setActiveForm: Dispatch<SetStateAction<FORM_TYPE | undefined>>;
};
