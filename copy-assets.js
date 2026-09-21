import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceImg = 'C:/Users/MANSY/.gemini/antigravity/brain/c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c/.user_uploaded/media_1788539228409.jpg';
const sourcePdf = 'C:/Users/MANSY/.gemini/antigravity/brain/c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c/.user_uploaded/media_1788539343635.pdf';
const sourceLogo = 'C:/Users/MANSY/.gemini/antigravity/brain/c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c/.user_uploaded/media_1789410685783.png';
const sourceDeepfake = 'C:/Users/MANSY/.gemini/antigravity/brain/c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c/.user_uploaded/media_1789996453654.png';
const sourceBrainTumor = 'C:/Users/MANSY/.gemini/antigravity/brain/c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c/.user_uploaded/media_1789997952624.png';
const sourceBankRisk = 'C:/Users/MANSY/.gemini/antigravity/brain/c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c/.user_uploaded/media_1790000083243.jpg';
const sourceSmartParking = 'C:/Users/MANSY/.gemini/antigravity/brain/c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c/.user_uploaded/media_1790001266678.jpg';

const destImgPublic = path.join(__dirname, 'public', 'assets', 'profile.jpg');
const destImgSrc = path.join(__dirname, 'src', 'assets', 'profile.jpg');
const destPdfPublic = path.join(__dirname, 'public', 'assets', 'Abd-El-Rahman-Karkar-CV.pdf');
const destLogoPublic = path.join(__dirname, 'public', 'assets', 'logo.png');
const destLogoSrc = path.join(__dirname, 'src', 'assets', 'logo.png');
const destFaviconPng = path.join(__dirname, 'public', 'favicon.png');

const destDeepfakePublic = path.join(__dirname, 'public', 'assets', 'deepfake-project.png');
const destDeepfakeSrc = path.join(__dirname, 'src', 'assets', 'deepfake-project.png');
const destBrainTumorPublic = path.join(__dirname, 'public', 'assets', 'brain-tumor-project.png');
const destBrainTumorSrc = path.join(__dirname, 'src', 'assets', 'brain-tumor-project.png');
const destBankRiskPublic = path.join(__dirname, 'public', 'assets', 'bank-risk-project.jpg');
const destBankRiskSrc = path.join(__dirname, 'src', 'assets', 'bank-risk-project.jpg');
const destSmartParkingPublic = path.join(__dirname, 'public', 'assets', 'smart-parking-project.jpg');
const destSmartParkingSrc = path.join(__dirname, 'src', 'assets', 'smart-parking-project.jpg');

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

  if (fs.existsSync(sourceDeepfake)) {
    fs.copyFileSync(sourceDeepfake, destDeepfakePublic);
    fs.copyFileSync(sourceDeepfake, destDeepfakeSrc);
    console.log('✅ Deepfake project image successfully copied!');
  }

  if (fs.existsSync(sourceBrainTumor)) {
    fs.copyFileSync(sourceBrainTumor, destBrainTumorPublic);
    fs.copyFileSync(sourceBrainTumor, destBrainTumorSrc);
    console.log('✅ Brain Tumor project image successfully copied!');
  }

  if (fs.existsSync(sourceBankRisk)) {
    fs.copyFileSync(sourceBankRisk, destBankRiskPublic);
    fs.copyFileSync(sourceBankRisk, destBankRiskSrc);
    console.log('✅ Bank Risk project image successfully copied!');
  }

  if (fs.existsSync(sourceSmartParking)) {
    fs.copyFileSync(sourceSmartParking, destSmartParkingPublic);
    fs.copyFileSync(sourceSmartParking, destSmartParkingSrc);
    console.log('✅ Smart Parking project image successfully copied!');
  }
} catch (err) {
  console.error('Error copying assets:', err);
}
