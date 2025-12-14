@echo off
echo Starting Backend Server...
cd server
if not exist .env (
    echo Creating .env file...
    node setup-email.js
    echo.
    echo Please edit server\.env and add your Gmail credentials!
    echo Press any key to continue anyway...
    pause >nul
)
npm run dev

