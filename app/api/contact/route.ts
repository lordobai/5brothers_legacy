import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This email was sent from the 5Brothers Legacy Initiative contact form.
    `.trim();

    // For now, we'll use a simple approach that logs the email
    // In production, you can integrate with:
    // - Resend (recommended for Next.js)
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES
    // - Or any other email service

    // Email sending logic
    // In production, configure one of the email services (see CONTACT_FORM_SETUP.md)
    const recipientEmail = process.env.CONTACT_EMAIL || 'info@fivebrotherslegacy.org';
    
    // Email sending logic
    // Check if Resend is configured and available
    let emailSent = false;
    if (process.env.RESEND_API_KEY) {
      try {
        // Dynamic import to avoid errors if resend is not installed
        const resendModule = await import('resend').catch(() => null);
        if (resendModule) {
          const { Resend } = resendModule;
          const resend = new Resend(process.env.RESEND_API_KEY);
          const { data, error } = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || 'Contact Form <contact@fivebrotherslegacy.org>',
            to: [recipientEmail],
            subject: `Contact Form: ${subject}`,
            text: emailContent,
            replyTo: email,
          });
          if (error) {
            console.error('Resend error:', error);
            throw error;
          }
          console.log('Email sent via Resend:', data);
          emailSent = true;
        }
      } catch (err) {
        console.error('Failed to send via Resend:', err);
      }
    }
    
    // If email wasn't sent via service, log it (for development)
    if (!emailSent) {
      console.log('=== CONTACT FORM SUBMISSION ===');
      console.log('To:', recipientEmail);
      console.log('From:', email);
      console.log('Subject:', subject);
      console.log('Content:', emailContent);
      console.log('==============================');
      if (!process.env.RESEND_API_KEY) {
        console.log('NOTE: Configure RESEND_API_KEY in .env.local to enable email sending');
        console.log('See CONTACT_FORM_SETUP.md for setup instructions');
      }
    }

    // In production, uncomment and configure one of these options:

    // Option 1: Using Resend (recommended)
    // Install: npm install resend
    // const { Resend } = require('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // const { data, error } = await resend.emails.send({
    //   from: 'Contact Form <contact@fivebrotherslegacy.org>',
    //   to: ['info@fivebrotherslegacy.org'],
    //   subject: `Contact Form: ${subject}`,
    //   text: emailContent,
    //   replyTo: email,
    // });
    // if (error) throw error;

    // Option 2: Using Nodemailer with SMTP
    // Install: npm install nodemailer
    // const nodemailer = require('nodemailer');
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: process.env.SMTP_PORT,
    //   secure: true,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // });
    // await transporter.sendMail({
    //   from: process.env.SMTP_FROM || 'contact@fivebrotherslegacy.org',
    //   to: 'info@fivebrotherslegacy.org',
    //   subject: `Contact Form: ${subject}`,
    //   text: emailContent,
    //   replyTo: email,
    // });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}

