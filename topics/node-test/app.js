const fs = require('fs');
const csv = require('./csv');

fs.writeFileSync('csv.json', JSON.stringify(csv));
