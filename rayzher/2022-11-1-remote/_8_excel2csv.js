const fs = require('fs');
const input = require('./_8_input');

fs.writeFileSync('main.json', JSON.stringify(input));
