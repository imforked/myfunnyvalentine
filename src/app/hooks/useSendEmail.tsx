import { useState, useCallback } from "react";
import axios from "axios";

type SendEmailArgs = {
  subject: string;
  message: string;
};

export function useSendEmail() {
  const [status, setStatus] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const sendEmail = useCallback(
    async ({ subject, message }: SendEmailArgs) => {
      setIsLoading(true);
      setStatus("Sending...");
      setError(null);

      try {
        await axios.post("/api/send-email", {
          subject,
          message,
        });

        setStatus("Email sent! 📬");
      } catch (err) {
        console.error(err);
        setError(err);
        setStatus("Failed to send email ❌");
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return {
    sendEmail,
    status,
    isLoading,
    error,
  };
}
