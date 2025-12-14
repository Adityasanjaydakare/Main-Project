# 🚀 Run Commands

## First Time Setup (One-time)

### 1. Install Backend Dependencies
```bash
cd server
npm install
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Setup Email Configuration
```bash
cd server
node setup-email.js
```
Then edit `server/.env` and add:
- `GMAIL_USER=your-email@gmail.com`
- `GMAIL_APP_PASSWORD=your-app-password`

Get App Password: https://myaccount.google.com/apppasswords

---

## Daily Use - Run These Commands

### Terminal 1 - Start Backend:
```bash
cd server
npm run dev
```

### Terminal 2 - Start Frontend:
```bash
npm run dev
```

---

## Or Use Batch Files (Windows)

### Double-click:
- `start-backend.bat` - Starts backend server
- `start-frontend.bat` - Starts frontend server

---

## URLs

- **Frontend:** http://localhost:8080
- **Backend:** http://localhost:3001
- **Emails sent to:** adakare@gmail.com

---

## Quick Test

1. Open http://localhost:8080
2. Click "Get in Touch"
3. Submit form
4. Check email at **adakare@gmail.com**

