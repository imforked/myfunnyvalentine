export type FormProps = {
  variant: FormType;
};

export enum FORM_FIELD {
  SUBJECT = "subject",
  MESSAGE = "message",
}

export type FormValues = {
  [FORM_FIELD.SUBJECT]: string;
  [FORM_FIELD.MESSAGE]: string;
};

export enum FORM_TYPE {
  LOVE = "love",
  SNACK = "snack",
  DICK = "dick",
}

type FormType = FORM_TYPE;

type FormField = {
  subjectPlaceholder: string;
  messagePlaceholder: string;
};

export type FormFieldData = {
  [K in FormType]: FormField;
};
