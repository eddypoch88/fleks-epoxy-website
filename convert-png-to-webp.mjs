import sharp from 'sharp';
import { resolve } from 'path';

const input = resolve('./public/processed/teal_epoxy_floor.png');
const output = resolve('./public/processed/teal_epoxy_floor.webp');

sharp(input)
  .webp({ quality: 82 })
  .toFile(output)
  .then(info => {
    console.log('✅ Converted! Output size:', Math.round(info.size / 1024), 'KiB');
    console.log('   (was 744 KiB PNG)');
  })
  .catch(err => {
    console.error('❌ Error:', err.message);
  });
