const fs = require('fs');
const path = require('path');

const logDir = path.join(process.cwd(), 'Logs');

if (fs.existsSync(logDir)) {
  const files = fs.readdirSync(logDir);

  files.forEach(file => {
    const filePath = path.join(logDir, file);
    fs.unlinkSync(filePath);
    console.log(`delete files...${file}`);
  });

  fs.rmdirSync(logDir);
}
