import * as S from "./Form.styles";
import { useForm } from "react-hook-form";
import { FormValues, FORM_FIELD, FormProps } from "./Form.types";
import { useSendEmail, Status } from "@/app/hooks/useSendEmail";
import { FORM_FIELDS } from "./Form.data";
import { useEffect } from "react";
import { SUPER_SPIN_ANIMATION_IN_MS } from "../Card/styles/Card.styles";

export const Form = ({
  variant,
  closeForm,
  setShakeCard,
  setKillCard,
  setIsSubmitting,
  setPlaySuperSpin,
  setPlayThumbsUp,
  setShowFront,
  setActiveForm,
}: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const formFieldData = FORM_FIELDS[variant];

  const { sendEmail, status, isLoading, error } = useSendEmail();

  const onSubmit = ({ subject, message }: FormValues) => {
    sendEmail({ subject, message });
  };

  const onSuccessfulSubmit = () => {
    setIsSubmitting(false);

    const animationType = Math.random() < 0 ? "superSpin" : "thumbsUp";

    if (animationType === "superSpin") {
      setPlaySuperSpin(true);

      setTimeout(() => {
        setPlaySuperSpin(false);
        setShowFront(true);
        setActiveForm(undefined);
      }, SUPER_SPIN_ANIMATION_IN_MS);
    } else {
      setPlayThumbsUp(true);

      setTimeout(() => {
        setPlayThumbsUp(false);
        setShowFront(true);

        setTimeout(() => {
          setActiveForm(undefined);
        }, 500);
      }, 2300);
    }
  };

  useEffect(() => {
    if (status === Status.Sending) {
      setIsSubmitting(true);
    }
    if (status === Status.Success) {
      onSuccessfulSubmit();
    }
    if (status === Status.Fail) {
      setKillCard(true);
      setIsSubmitting(false);
    }
  }, [status]);

  return (
    <S.Container>
      <S.CloseButton onClick={closeForm} />
      <S.Form
        onSubmit={handleSubmit(onSubmit)}
        onInvalid={() => setShakeCard(true)}
      >
        <S.Input
          id={FORM_FIELD.SUBJECT}
          {...register(FORM_FIELD.SUBJECT, { required: true })}
          required
          placeholder={formFieldData.subjectPlaceholder}
        />
        <S.TextArea
          id={FORM_FIELD.MESSAGE}
          {...register(FORM_FIELD.MESSAGE, { required: true })}
          required
          placeholder={formFieldData.messagePlaceholder}
        />
        <S.SubmitButton type="submit" disabled={isSubmitting} />
      </S.Form>
    </S.Container>
  );
};
