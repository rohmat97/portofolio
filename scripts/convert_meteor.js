const fs = require('fs');

try {
  const filePath = '/Users/rohmat.dasuki/.gemini/antigravity-ide/brain/ff31da89-1de4-419c-97de-aca9f324c9df/realistic_flaming_meteor_1785181656326.png';
  const fileBuffer = fs.readFileSync(filePath);
  const base64Str = fileBuffer.toString('base64');
  const dataUrl = `data:image/png;base64,${base64Str}`;
  
  const content = `export const REAL_METEOR_BASE64 = "${dataUrl}";\n`;
  fs.writeFileSync('/Users/rohmat.dasuki/Documents/portofolio/src/assets/realMeteorBase64.js', content);
  console.log('SUCCESS: Real 3D Flaming Meteor Base64 asset created!');
} catch (err) {
  console.error('Error creating base64 asset:', err.message);
}
