# Portfolio Setup Guide

This guide will help you set up both the frontend and backend for your portfolio.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:3001`

## Frontend Setup

1. In the root directory, install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory (optional):
```env
VITE_API_URL=http://localhost:3001
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:8080`

## Features

### Contact Form
- Click "Get in Touch" button in the Navbar, Hero section, or Footer
- Fill out the form with:
  - Name
  - Email Address
  - Message
- Submit the form to send a message to the backend

### Backend API
- POST `/api/contact` - Submit contact form
- GET `/api/messages` - View all messages (for admin)
- GET `/api/health` - Health check

## Production Deployment

### Backend
- Deploy to services like Heroku, Railway, or Render
- Set environment variables
- Consider adding a database (MongoDB, PostgreSQL) for message storage
- Add email notifications using SendGrid or Nodemailer

### Frontend
- Build the frontend: `npm run build`
- Deploy to Vercel, Netlify, or similar
- Update `VITE_API_URL` to point to your production backend

## Notes

- Messages are currently stored in-memory (will be lost on server restart)
- For production, integrate with a database
- Add authentication for admin endpoints
- Configure CORS properly for production

