
const fs = require('fs');
const os = require('os');

fs.writeFileSync("dummy.txt","trying with fs module");

console.log(os.hostname());