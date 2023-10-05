const fs = require('fs');
const path = require('path');

const logDir = path.join(process.cwd(), 'Logs');

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

process.chdir(logDir);

for (let i = 0; i < 10; i++) {
  const filename = `log${i}.txt`;
  fs.writeFileSync(filename, 'Some log text');
  console.log(filename);
}
