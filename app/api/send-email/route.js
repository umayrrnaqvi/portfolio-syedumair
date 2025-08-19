import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return Response.json({ success: false, error: "All fields are required." }, { status: 400 });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO, // your own email to receive messages
      subject: subject,
      html: `
  <div style="font-family: 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: auto; padding: 30px; background-color: #f4f6f8; color: #1a1a1a; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
    <h2 style="color: #4a90e2; border-bottom: 2px solid #e1e1e1; padding-bottom: 10px;">📬 New Message from Portfolio Contact</h2>

    <p><strong>👤 Name:</strong> ${name}</p>
    <p><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #4a90e2; text-decoration: none;">${email}</a></p>
    <p><strong>📝 Subject:</strong> ${subject}</p>

    <div style="margin-top: 20px;">
      <p><strong>💬 Message:</strong></p>
      <div style="background-color: #ffffff; padding: 15px 20px; border-radius: 6px; border: 1px solid #e0e0e0; line-height: 1.6; white-space: pre-wrap;">
        ${message}
      </div>
    </div>

    <div style="margin-top: 30px; text-align: center;">
      <a href="mailto:${email}" style="display: inline-block; padding: 12px 25px; background-color: #4a90e2; color: #fff; border-radius: 6px; text-decoration: none; font-weight: 600;">
        🔁 Reply to ${name}
      </a>
    </div>
  </div>
`


    };

    // Send email
    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
