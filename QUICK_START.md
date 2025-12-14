# Quick Start Commands

## 1. Install Dependencies

### Backend:
```bash
cd server
npm install
```

### Frontend (from root):
```bash
npm install
```

## 2. Setup Email (One-time setup)

### Option A: Automatic Setup
```bash
cd server
node setup-email.js
```
Then edit `server/.env` and add your Gmail credentials.

### Option B: Manual Setup
1. Create `server/.env` file with:
```env
PORT=3001
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

2. Get Gmail App Password:
   - Go to: https://myaccount.google.com/apppasswords
   - Generate App Password for "Mail"
   - Copy the 16-character password (remove spaces)

## 3. Run Everything

### Terminal 1 - Backend:
```bash
cd server
npm run dev
```

### Terminal 2 - Frontend:
```bash
npm run dev
```

## That's it! 🎉

- Backend runs on: http://localhost:3001
- Frontend runs on: http://localhost:8080
- Emails sent to: **adakare@gmail.com**

## Test the Contact Form

1. Open http://localhost:8080
2. Click "Get in Touch" button
3. Fill and submit the form
4. Check your email at **adakare@gmail.com**

