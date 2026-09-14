import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceImg = 'C:/Users/MANSY/.gemini/antigravity/brain/c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c/.user_uploaded/media_1788539228409.jpg';
const sourcePdf = 'C:/Users/MANSY/.gemini/antigravity/brain/c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c/.user_uploaded/media_1788539343635.pdf';
const sourceLogo = 'C:/Users/MANSY/.gemini/antigravity/brain/c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c/.user_uploaded/media_1789410685783.png';

const destImgPublic = path.join(__dirname, 'public', 'assets', 'profile.jpg');
const destImgSrc = path.join(__dirname, 'src', 'assets', 'profile.jpg');
const destPdfPublic = path.join(__dirname, 'public', 'assets', 'Abd-El-Rahman-Karkar-CV.pdf');
const destLogoPublic = path.join(__dirname, 'public', 'assets', 'logo.png');
const destLogoSrc = path.join(__dirname, 'src', 'assets', 'logo.png');
const destFaviconPng = path.join(__dirname, 'public', 'favicon.png');

// Ensure destination directories exist
fs.mkdirSync(path.join(__dirname, 'public', 'assets'), { recursive: true });
fs.mkdirSync(path.join(__dirname, 'src', 'assets'), { recursive: true });

try {
  if (fs.existsSync(sourceImg)) {
    fs.copyFileSync(sourceImg, destImgPublic);
    fs.copyFileSync(sourceImg, destImgSrc);
    console.log('✅ Profile image successfully copied!');
  }

  if (fs.existsSync(sourcePdf)) {
    fs.copyFileSync(sourcePdf, destPdfPublic);
    console.log('✅ CV PDF successfully copied!');
  }

  if (fs.existsSync(sourceLogo)) {
    fs.copyFileSync(sourceLogo, destLogoPublic);
    fs.copyFileSync(sourceLogo, destLogoSrc);
    fs.copyFileSync(sourceLogo, destFaviconPng);
    console.log('✅ Custom AK Logo successfully copied!');
  }
} catch (err) {
  console.error('Error copying assets:', err);
}
