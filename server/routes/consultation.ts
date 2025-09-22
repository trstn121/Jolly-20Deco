import { Request, Response } from "express";
import nodemailer from "nodemailer";

interface ConsultationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  source: string;
  message: string;
}

export async function handleConsultation(req: Request, res: Response) {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      source,
      message,
    }: ConsultationData = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !address) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // For now, we'll use a simple Gmail SMTP configuration
    // In production, you should use environment variables for email configuration
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    // Email content
    const emailSubject = `New Consultation Request from ${firstName} ${lastName}`;
    const emailBody = `
      New consultation request received:

      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Service Address: ${address}
      How they heard about us: ${source || 'Not specified'}
      
      Message:
      ${message || 'No additional message provided'}

      --
      Sent from The Jolly Deco Co. website
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'tristonduda@gmail.com',
      subject: emailSubject,
      text: emailBody,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a4d35;">New Consultation Request</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #e05252; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Service Address:</strong> ${address}</p>
            <p><strong>How they heard about us:</strong> ${source || 'Not specified'}</p>
          </div>

          ${message ? `
          <div style="background-color: #f0f7f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1a4d35; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          ` : ''}

          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            This email was sent from The Jolly Deco Co. website consultation form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: 'Consultation request submitted successfully' });
  } catch (error) {
    console.error('Error sending consultation email:', error);
    res.status(500).json({ error: 'Failed to submit consultation request' });
  }
}
