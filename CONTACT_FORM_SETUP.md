# Contact Form Email Setup

The contact form is now functional and ready to send emails. Currently, it logs submissions to the console for development. To enable actual email sending in production, follow one of the setup options below.

## Current Status

- ✅ Contact form is functional
- ✅ API route created at `/app/api/contact/route.ts`
- ✅ Form validation implemented
- ✅ Error handling in place
- ⚠️ Email service needs to be configured (currently logs to console)

## Email Service Options

### Option 1: Resend (Recommended for Next.js)

Resend is a modern email API that works great with Next.js.

1. **Install Resend:**
   ```bash
   npm install resend
   ```

2. **Get API Key:**
   - Sign up at [resend.com](https://resend.com)
   - Create an API key
   - Add to `.env.local`:
     ```
     RESEND_API_KEY=re_xxxxxxxxxxxxx
     ```

3. **Update API Route:**
   Uncomment and configure the Resend code in `app/api/contact/route.ts`:
   ```typescript
   const { Resend } = require('resend');
   const resend = new Resend(process.env.RESEND_API_KEY);
   const { data, error } = await resend.emails.send({
     from: 'Contact Form <contact@fivebrotherslegacy.org>',
     to: ['info@fivebrotherslegacy.org'],
     subject: `Contact Form: ${subject}`,
     text: emailContent,
     replyTo: email,
   });
   if (error) throw error;
   ```

### Option 2: Nodemailer with SMTP

Use any SMTP server (Gmail, SendGrid, AWS SES, etc.).

1. **Install Nodemailer:**
   ```bash
   npm install nodemailer
   ```

2. **Add SMTP credentials to `.env.local`:**
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   SMTP_FROM=contact@fivebrotherslegacy.org
   ```

3. **Update API Route:**
   Uncomment and configure the Nodemailer code in `app/api/contact/route.ts`

### Option 3: SendGrid

1. **Install SendGrid:**
   ```bash
   npm install @sendgrid/mail
   ```

2. **Get API Key:**
   - Sign up at [sendgrid.com](https://sendgrid.com)
   - Create an API key
   - Add to `.env.local`:
     ```
     SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
     ```

3. **Update API Route:**
   Add SendGrid code to `app/api/contact/route.ts`:
   ```typescript
   const sgMail = require('@sendgrid/mail');
   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
   await sgMail.send({
     to: 'info@fivebrotherslegacy.org',
     from: 'contact@fivebrotherslegacy.org',
     subject: `Contact Form: ${subject}`,
     text: emailContent,
     replyTo: email,
   });
   ```

## Testing

1. **Development:** Submissions are logged to the console
2. **Production:** Configure one of the email services above

## Form Fields

The contact form collects:
- Name (required)
- Email (required, validated)
- Subject (required)
- Message (required)

All submissions are sent to: **info@fivebrotherslegacy.org**

## Security Notes

- Form validation is performed on both client and server
- Email format is validated
- Rate limiting should be added in production (consider using middleware)
- Consider adding CAPTCHA for spam protection

