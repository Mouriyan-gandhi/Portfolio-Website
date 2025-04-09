import { NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"

// Use the provided API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const msg = {
      to: "nishthadeep3@gmail.com", // Recipient email (Nishtha's email)
      from: "nishthadeep3@gmail.com", // Verified sender email
      replyTo: email, // Set reply-to as the sender's email
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #9333ea;">New message from your portfolio website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #9333ea;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
      `,
    }

    await sgMail.send(msg)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Error sending email:", error.response?.body || error.message)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
