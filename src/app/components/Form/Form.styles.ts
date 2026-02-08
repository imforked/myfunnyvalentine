import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 600px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  position: absolute;
  top: 122px;
  width: 75%;
  height: 35px;
  line-height: 55px;
  background: transparent;
  border: none;
  transform: rotate(2deg);
  pointer-events: auto;

  &:focus {
    outline: none;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    -webkit-text-fill-color: inherit;
    transition: background-color 5000s ease-in-out 0s;
  }

  &::placeholder {
    color: #7a7f87d9;
    font-weight: 200;
  }
`;

export const TextArea = styled.textarea`
  position: absolute;
  top: 200px;
  width: 75%;
  height: 300px;
  background: transparent;
  border: none;
  transform: rotate(2deg);
  resize: none;
  padding: 12px;
  pointer-events: auto;

  &:focus {
    outline: none;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    -webkit-text-fill-color: inherit;
    transition: background-color 5000s ease-in-out 0s;
  }

  &::placeholder {
    color: #7a7f87d9;
    font-weight: 200;
  }
`;

export const SubmitButton = styled.button`
  position: absolute;
  top: 510px;
  width: 77%;
  height: 70px;
  transform: rotate(2deg);
  pointer-events: auto;
`;

export const CloseButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 999px;
  position: absolute;
  right: 40px;
  top: 47px;
  pointer-events: auto;
`;
