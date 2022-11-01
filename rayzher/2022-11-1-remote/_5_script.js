const fs = require('fs');

fs.writeFileSync(
  'inputPath.txt',
  `${fs.readFileSync('inputFolder.txt')}\\${fs.readFileSync(
    'inputFileName.txt'
  )}`
);
