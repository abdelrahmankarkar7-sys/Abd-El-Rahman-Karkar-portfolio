@echo off
title Abd El Rahman Karkar - AI Engineer Portfolio
echo ========================================================
echo Starting Abd El Rahman Karkar - AI Engineer Portfolio
echo ========================================================

cd /d "%~dp0"

echo [1/3] Ensuring assets (profile image & CV PDF) are copied...
call copy-assets.bat

if not exist "node_modules\" (
    echo [2/3] Installing dependencies (React, Vite, Tailwind CSS, Lucide, Framer Motion)...
    call npm install
) else (
    echo [2/3] Dependencies already installed!
)

echo [3/3] Launching development server on http://localhost:3000 ...
call npm run dev
pause
