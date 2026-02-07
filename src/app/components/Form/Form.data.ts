import { FormFieldData as FormFieldDataType, FORM_TYPE } from "./Form.types";

export const FORM_FIELDS: FormFieldDataType = {
  [FORM_TYPE.LOVE]: {
    subjectPlaceholder: "🥹🥹🥹🥹🥹🥹",
    messagePlaceholder: "Would love to come over and just be baby.",
  },
  [FORM_TYPE.DICK]: {
    subjectPlaceholder: "🔥🔥🔥🔥🔥",
    messagePlaceholder: "Come over. Don't say anything. Just gimme me head.",
  },
  [FORM_TYPE.SNACK]: {
    subjectPlaceholder: "Eem",
    messagePlaceholder: "(1) Massaman Curry w/ Smoked Lamb Shoulder, (1) Charred Carrot Salad",
  },
};
