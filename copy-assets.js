import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceImg = 'C:/Users/MANSY/.gemini/antigravity/brain/c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c/.user_uploaded/media_1788539228409.jpg';
const sourcePdf = 'C:/Users/MANSY/.gemini/antigravity/brain/c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c/.user_uploaded/media_1788539343635.pdf';

const destImgPublic = path.join(__dirname, 'public', 'assets', 'profile.jpg');
const destImgSrc = path.join(__dirname, 'src', 'assets', 'profile.jpg');
const destPdfPublic = path.join(__dirname, 'public', 'assets', 'Abd-El-Rahman-Karkar-CV.pdf');

// Ensure destination directories exist
fs.mkdirSync(path.join(__dirname, 'public', 'assets'), { recursive: true });
fs.mkdirSync(path.join(__dirname, 'src', 'assets'), { recursive: true });

try {
  if (fs.existsSync(sourceImg)) {
    fs.copyFileSync(sourceImg, destImgPublic);
    fs.copyFileSync(sourceImg, destImgSrc);
    console.log('✅ Profile image successfully copied to assets!');
  } else {
    console.warn('⚠️ Source image not found at: ' + sourceImg);
  }

  if (fs.existsSync(sourcePdf)) {
    fs.copyFileSync(sourcePdf, destPdfPublic);
    console.log('✅ CV PDF successfully copied to public/assets/Abd-El-Rahman-Karkar-CV.pdf!');
  } else {
    console.warn('⚠️ Source PDF not found at: ' + sourcePdf);
  }
} catch (err) {
  console.error('Error copying assets:', err);
}
