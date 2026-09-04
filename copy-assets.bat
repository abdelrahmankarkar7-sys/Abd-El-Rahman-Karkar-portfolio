@echo off
echo ========================================================
echo Syncing Profile Picture and CV PDF for Abd El Rahman Karkar
echo ========================================================

if not exist "public\assets" mkdir "public\assets"
if not exist "src\assets" mkdir "src\assets"

copy /Y "C:\Users\MANSY\.gemini\antigravity\brain\c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c\.user_uploaded\media_1788539228409.jpg" "public\assets\profile.jpg"
copy /Y "C:\Users\MANSY\.gemini\antigravity\brain\c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c\.user_uploaded\media_1788539228409.jpg" "src\assets\profile.jpg"
copy /Y "C:\Users\MANSY\.gemini\antigravity\brain\c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c\.user_uploaded\media_1788539343635.pdf" "public\assets\Abd-El-Rahman-Karkar-CV.pdf"

echo Done copying assets!
