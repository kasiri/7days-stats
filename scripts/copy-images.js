const { existsSync, cpSync } = require('fs');
const { join } = require('path');

const projectRoot = join(__dirname, '..');
const src = join(projectRoot, 'images');
const dest = join(projectRoot, 'dist', 'images');

if (!existsSync(src)) {
  console.log('[copy-images] No "images" folder found at', src);
  process.exit(0);
}

try {
  cpSync(src, dest, { recursive: true });
  console.log('[copy-images] Copied images to', dest);
} catch (err) {
  console.error('[copy-images] Error copying images:', err);
  process.exit(1);
}
