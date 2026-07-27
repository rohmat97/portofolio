const ghpages = require('gh-pages');
const path = require('path');

console.log('Publishing build folder to origin gh-pages branch...');
ghpages.publish(
  path.join(__dirname, '../build'),
  {
    branch: 'gh-pages',
    message: 'Deploy latest Web CV build [' + new Date().toLocaleTimeString() + ']',
  },
  (err) => {
    if (err) {
      console.error('Deploy error:', err);
      process.exit(1);
    } else {
      console.log('SUCCESS: Deployed latest build to origin/gh-pages branch!');
    }
  }
);
