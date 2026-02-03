import { Resend } from "resend";

const resend = new Resend(`${process.env.RESEND_TOKEN}`);

const requiredEnvVariables = ["RESEND_TOKEN", "EMAIL_FROM", "EMAIL_TO"] as const;

for (const key of requiredEnvVariables) {
  if (!process.env[key]) {
    throw new Error(`Missing environment variable: ${key}`);
  }
}

export async function POST(req: Request) {
  try {
    const { subject, message } = await req.json();

    if (!subject || !message) {
      return new Response(
        JSON.stringify({ error: "Missing subject or message" }),
        { status: 400 },
      );
    }

    const result = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject,
      text: message,
    });

    console.log("Resend result:", result);

    if (result.error) {
      return new Response(JSON.stringify({ error: result.error }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
