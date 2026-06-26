require('dotenv').config();
const axios = require('axios');

// FB Page Details (Load from .env file)
const PAGE_ID = process.env.FB_PAGE_ID;
const ACCESS_TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;
const API_VERSION = 'v19.0'; // Change based on current Meta API version

/**
 * Post a text status to the Facebook Page
 */
async function postText(message) {
  try {
    const response = await axios.post(
      `https://graph.facebook.com/${API_VERSION}/${PAGE_ID}/feed`,
      null,
      {
        params: {
          message: message,
          access_token: ACCESS_TOKEN
        }
      }
    );
    console.log('✅ Text Posted Successfully! Post ID:', response.data.id);
    return response.data;
  } catch (error) {
    console.error('❌ Error posting text:', error.response ? error.response.data : error.message);
  }
}

/**
 * Post a photo with a caption to the Facebook Page
 */
async function postPhoto(imageUrl, caption) {
  try {
    const response = await axios.post(
      `https://graph.facebook.com/${API_VERSION}/${PAGE_ID}/photos`,
      null,
      {
        params: {
          url: imageUrl,
          message: caption,
          access_token: ACCESS_TOKEN
        }
      }
    );
    console.log('✅ Photo Posted Successfully! Post ID:', response.data.id);
    return response.data;
  } catch (error) {
    console.error('❌ Error posting photo:', error.response ? error.response.data : error.message);
  }
}

// ==========================================
// EXPORT FOR CLAUDE TO INTEGRATE/SCHEDULE
// ==========================================
module.exports = {
  postText,
  postPhoto
};

// If run directly for testing:
if (require.main === module) {
  // Test Text Post
  // postText("Test kedua dari sistem integrasi AG & Claude! 🚀🔥");
  
  // Test Photo Post
  // postPhoto(
  //   "https://fleks-epoxy-website.vercel.app/processed/hero-epoxy-desktop.webp", 
  //   "Hasil kerja epoxy premium yang memukau! Hubungi kami untuk lawatan tapak percuma di Sabah. ✨"
  // );
}
