require('dotenv').config();
const Anthropic = require('@anthropic-ai/sdk');
const { postPhoto, postText } = require('./post-to-fb');

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Brand context — DNA FLEKS Epoxy
const BRAND_CONTEXT = `
Kamu adalah copywriter untuk FLEKS Borneo Flooring — syarikat lantai epoksi premium di Kota Kinabalu, Sabah.
Brand voice: profesional, mesra, bangga dengan hasil kerja, target pelanggan Malaysia (BM + sikit English ok).
Servis: Rumah (RM25/sqft), Komersial (RM32/sqft), Industri (RM20/sqft), Garaj/Gudang (RM22/sqft).
USP: Lawatan tapak percuma, ukuran on-site, tiada hidden charges, liputan seluruh Sabah.
WhatsApp: 60146211263
Website: https://fleks-epoxy-website.vercel.app
`;

// Post topics — rotate setiap hari
const POST_TOPICS = [
  'tunjuk hasil kerja lantai epoksi rumah yang berkilat dan moden',
  'promosi lawatan tapak percuma — tiada obligasi',
  'perbandingan sebelum dan selepas pasang lantai epoksi',
  'testimoni pelanggan puas hati di Sabah',
  'tips jaga lantai epoksi supaya tahan lama',
  'showcase lantai epoksi garaj yang tough dan tahan minyak',
  'lantai epoksi untuk premis komersial — kedai, klinik, pejabat',
];

async function generateCaption(topic) {
  const msg = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 300,
    messages: [{
      role: 'user',
      content: `${BRAND_CONTEXT}\n\nBuat caption Facebook post yang menarik tentang: ${topic}\n\nFormat:\n- 2-3 ayat caption power\n- 3-5 emoji relevan\n- 3 hashtag BM + 2 hashtag English\n- CTA ringkas (WhatsApp atau website)\n\nJangan letak label/header, terus caption je.`
    }]
  });
  return msg.content[0].text;
}

async function generatePosterBrief(topic) {
  const msg = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 150,
    messages: [{
      role: 'user',
      content: `Buat 1 ayat ringkas (English) untuk describe poster design lantai epoksi: ${topic}. Gaya: modern, clean, teal color scheme. Untuk Adobe Express image generation.`
    }]
  });
  return msg.content[0].text;
}

// Pilih topic based on hari (rotate automatik)
function getTodayTopic() {
  const day = new Date().getDay();
  return POST_TOPICS[day % POST_TOPICS.length];
}

async function runDailyPost(imageUrl = null) {
  const topic = getTodayTopic();
  console.log(`📋 Topic hari ni: ${topic}`);

  const caption = await generateCaption(topic);
  console.log(`\n✍️ Caption generated:\n${caption}\n`);

  if (imageUrl) {
    await postPhoto(imageUrl, caption);
  } else {
    // Guna gambar dari website FLEKS sebagai fallback
    const fallbackImages = [
      'https://fleks-epoxy-website.vercel.app/processed/hero-epoxy-desktop.webp',
      'https://fleks-epoxy-website.vercel.app/processed/gallery-1.webp',
      'https://fleks-epoxy-website.vercel.app/processed/gallery-2.webp',
      'https://fleks-epoxy-website.vercel.app/processed/gallery-3.webp',
    ];
    const img = fallbackImages[new Date().getDate() % fallbackImages.length];
    console.log(`🖼️ Guna gambar: ${img}`);
    await postPhoto(img, caption);
  }
}

module.exports = { generateCaption, generatePosterBrief, runDailyPost };

// Run terus kalau panggil dari terminal
if (require.main === module) {
  runDailyPost().catch(console.error);
}
