import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const receiver = process.env.CONTACT_RECEIVER_EMAIL;
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || "465");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!receiver || !host || !user || !pass) {
      console.error("Missing env for email sending");
      return NextResponse.json(
        { error: "Server misconfigured: email env missing" },
        { status: 500 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const { firstName, lastName, email, phone, message, agree } = body as {
      firstName?: string;
      lastName?: string;
      email?: string;
      phone?: string;
      message?: string;
      agree?: boolean;
    };

    if (!agree) {
      return NextResponse.json(
        { error: "Policies not accepted" },
        { status: 422 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const subject = `Нова заявка з сайту iProk: ${firstName ?? ""} ${
      lastName ?? ""
    }`.trim();

    const text = [
      "Нова заявка з контактної форми iProk",
      "",
      `Ім'я: ${firstName ?? ""}`,
      `Прізвище: ${lastName ?? ""}`,
      `Email: ${email ?? ""}`,
      `Телефон: ${phone ?? ""}`,
      "",
      "Повідомлення:",
      `${message ?? ""}`,
    ].join("\n");

    await transporter.sendMail({
      from: `"iProk Website" <${user}>`,
      to: receiver,
      replyTo: email || undefined,
      subject,
      text,
    });

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("CONTACT API ERROR:", e);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
