import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const { name, company, email, phone, message } = await request.json()

  // Configure the email transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    // Send the email
    await transporter.sendMail({
      from: email, // Sender's email
      to: 'contact@taily.jp', // Destination email
      subject: `お問い合わせ: ${name}`,
      text: `
        お名前: ${name}
        会社名: ${company}
        メールアドレス: ${email}
        電話番号: ${phone}
        メッセージ: ${message}
      `,
    })

    return NextResponse.json({ message: 'お問い合わせを受け付けました' }, { status: 200 })
  } catch (error) {
    console.error('メール送信エラー:', error)
    return NextResponse.json({ message: 'エラーが発生しました' }, { status: 500 })
  }
}