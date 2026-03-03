import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const receiver = process.env.CONTACT_RECEIVER_EMAIL;

    if (!receiver) {
      return NextResponse.json(
        { error: "CONTACT_RECEIVER_EMAIL is missing" },
        { status: 500 },
      );
    }

    const body = await req.json();

    const { firstName, lastName, email, phone, message } = body;

    if (!email) {
      return NextResponse.json(
        { error: "User email is required" },
        { status: 400 },
      );
    }

    // SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    /* ---------- 1. Письмо ТЕБЕ ---------- */
    await transporter.sendMail({
      from: `"iProk Website" <${process.env.SMTP_USER}>`,
      to: receiver,
      subject: "📩 Нове повідомлення з сайту iProk",
      html: `
        <h2>Нове повідомлення з форми</h2>
        <p><b>Імʼя:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Телефон:</b> ${phone}</p>
        <p><b>Повідомлення:</b></p>
        <p>${message}</p>
      `,
    });

    /* ---------- 2. АВТООТВЕТ КЛИЕНТУ ---------- */
    await transporter.sendMail({
      from: `"iProk" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Ваше повідомлення отримано ✔",
      html: `
        <p>Доброго дня, ${firstName}!</p>

        <p>Дякуємо за ваше звернення до <b>iProk</b>.</p>

        <p>Ми успішно отримали ваше повідомлення та зв’яжемося з вами найближчим часом.</p>

        <p>Гарного дня!<br/>
        Команда <b>iProk</b></p>

        <p>+38 096 812 9544</p>
        <p>м. Біла Церква, вул. Шептицького, 49</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
