const fs = require('fs');
const path = require('path');

const srcDir = '/Users/rohmat.dasuki/.gemini/antigravity-ide/brain/ff31da89-1de4-419c-97de-aca9f324c9df';
const destDir = '/Users/rohmat.dasuki/Documents/portofolio/src/assets';

try {
  fs.copyFileSync(
    path.join(srcDir, 'planet_cyber_cyan_1785180030477.png'),
    path.join(destDir, 'planet_cyber_cyan.png')
  );
  fs.copyFileSync(
    path.join(srcDir, 'planet_emerald_matrix_1785180043676.png'),
    path.join(destDir, 'planet_emerald_matrix.png')
  );
  fs.copyFileSync(
    path.join(srcDir, 'planet_violet_nebula_1785180056194.png'),
    path.join(destDir, 'planet_violet_nebula.png')
  );
  console.log('SUCCESS: Generated 3D planet assets copied to src/assets!');
} catch (err) {
  console.error('Error copying assets:', err);
}
