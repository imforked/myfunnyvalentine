import { useState, useCallback } from "react";
import axios from "axios";

type SendEmailArgs = {
  subject: string;
  message: string;
};

export enum Status {
  Sending = "sending",
  Success = "success",
  Fail = "fail",
}

export function useSendEmail() {
  const [status, setStatus] = useState<Status | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const sendEmail = useCallback(async ({ subject, message }: SendEmailArgs) => {
    setIsLoading(true);
    setStatus(Status.Sending);
    setError(null);

    try {
      await axios.post("/api/send-email", {
        subject,
        message,
      });

      setStatus(Status.Success);
    } catch (err) {
      console.error(err);
      setError(err);
      setStatus(Status.Fail);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    sendEmail,
    status,
    isLoading,
    error,
  };
}
