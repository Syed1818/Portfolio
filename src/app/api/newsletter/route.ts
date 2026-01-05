import { NewsletterTemplate } from "@/components/newsletter-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const Subscription = z.object({
  email: z.string().email({ message: "Email is invalid!" }),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("[api/newsletter] received body", body);

    const { success: zodSuccess, data: zodData, error: zodError } =
      Subscription.safeParse(body);

    if (!zodSuccess) {
      console.log("[api/newsletter] validation failed", zodError?.format());
      return NextResponse.json({ error: zodError?.message }, { status: 400 });
    }

    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Portfolio Newsletter <onboarding@resend.dev>",
      to: [config.email],
      subject: "New Newsletter Subscriber! 📰",
      react: NewsletterTemplate({
        email: zodData.email,
      }),
    });

    console.log("[api/newsletter] resend result", { resendData, resendError });

    if (resendError) {
      return NextResponse.json({ resendError }, { status: 500 });
    }

    return NextResponse.json({ ok: true, data: resendData });
  } catch (error) {
    console.error("[api/newsletter] error", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
