import * as S from "./Form.styles";
import { useForm } from "react-hook-form";
import { FormValues, FORM_FIELD, FormProps } from "./Form.types";
import { useSendEmail } from "@/app/hooks/useSendEmail";
import { FORM_FIELDS } from "./Form.data";

export const Form = ({ variant }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const formFieldData = FORM_FIELDS[variant];

  const { sendEmail, status, isLoading, error } = useSendEmail();
  // TODO: use this hook like this:
  // disabled={isLoading}
  //  {status && <p>{status}</p>}

  const onSubmit = ({ subject, message }: FormValues) => {
    sendEmail({ subject, message });
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Input
          id={FORM_FIELD.SUBJECT}
          {...register(FORM_FIELD.SUBJECT, { required: true })}
          placeholder={formFieldData.subjectPlaceholder}
        />
        <S.TextArea
          id={FORM_FIELD.MESSAGE}
          {...register(FORM_FIELD.MESSAGE, { required: true })}
          placeholder={formFieldData.messagePlaceholder}
        />
        <S.SubmitButton type="submit">Submit Meeee</S.SubmitButton>
      </S.Form>
    </S.Container>
  );
};
