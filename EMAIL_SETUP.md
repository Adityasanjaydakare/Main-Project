# Email Setup Guide

Your contact form will now send emails to **adakare@gmail.com** when someone submits the form.

## Quick Setup (Gmail - Recommended)

1. **Install backend dependencies:**
   ```bash
   cd server
   npm install
   ```

2. **Enable 2-Step Verification on your Google Account:**
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification if not already enabled

3. **Generate an App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Click "Generate"
   - Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

4. **Create `.env` file in the `server` folder:**
   ```env
   PORT=3001
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=abcdefghijklmnop
   ```
   ⚠️ **Important:** Remove spaces from the app password when adding it to `.env`

5. **Start the server:**
   ```bash
   npm run dev
   ```

## Testing

1. Submit the contact form on your website
2. Check your email at **adakare@gmail.com**
3. You should receive an email with:
   - Sender's name
   - Sender's email address
   - Their message
   - Timestamp

## Troubleshooting

### Email not sending?
- Check that your `.env` file is in the `server` folder
- Verify the Gmail App Password is correct (no spaces)
- Make sure 2-Step Verification is enabled
- Check the server console for error messages

### Using a different email provider?
See `server/README.md` for SMTP configuration options.

## Email Format

The email you receive will include:
- **Subject:** "New Contact Form Submission from [Name]"
- **HTML formatted email** with all contact details
- **Plain text version** for email clients that don't support HTML

You can reply directly to the email to respond to the person who submitted the form!

