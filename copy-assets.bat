@echo off
echo ========================================================
echo Syncing Profile Picture, Logo, CV PDF, and Project Images for Abd El Rahman Karkar
echo ========================================================

if not exist "public\assets" mkdir "public\assets"
if not exist "src\assets" mkdir "src\assets"

copy /Y "C:\Users\MANSY\.gemini\antigravity\brain\c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c\.user_uploaded\media_1788539228409.jpg" "public\assets\profile.jpg"
copy /Y "C:\Users\MANSY\.gemini\antigravity\brain\c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c\.user_uploaded\media_1788539228409.jpg" "src\assets\profile.jpg"
copy /Y "C:\Users\MANSY\.gemini\antigravity\brain\c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c\.user_uploaded\media_1788539343635.pdf" "public\assets\Abd-El-Rahman-Karkar-CV.pdf"

copy /Y "C:\Users\MANSY\.gemini\antigravity\brain\c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c\.user_uploaded\media_1789410685783.png" "public\assets\logo.png"
copy /Y "C:\Users\MANSY\.gemini\antigravity\brain\c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c\.user_uploaded\media_1789410685783.png" "src\assets\logo.png"
copy /Y "C:\Users\MANSY\.gemini\antigravity\brain\c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c\.user_uploaded\media_1789410685783.png" "public\favicon.png"

copy /Y "C:\Users\MANSY\.gemini\antigravity\brain\c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c\.user_uploaded\media_1789996453654.png" "public\assets\deepfake-project.png"
copy /Y "C:\Users\MANSY\.gemini\antigravity\brain\c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c\.user_uploaded\media_1789996453654.png" "src\assets\deepfake-project.png"

copy /Y "C:\Users\MANSY\.gemini\antigravity\brain\c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c\.user_uploaded\media_1789997952624.png" "public\assets\brain-tumor-project.png"
copy /Y "C:\Users\MANSY\.gemini\antigravity\brain\c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c\.user_uploaded\media_1789997952624.png" "src\assets\brain-tumor-project.png"

copy /Y "C:\Users\MANSY\.gemini\antigravity\brain\c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c\.user_uploaded\media_1790000083243.jpg" "public\assets\bank-risk-project.jpg"
copy /Y "C:\Users\MANSY\.gemini\antigravity\brain\c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c\.user_uploaded\media_1790000083243.jpg" "src\assets\bank-risk-project.jpg"

echo Done copying all assets including Bank Risk Project Image!
