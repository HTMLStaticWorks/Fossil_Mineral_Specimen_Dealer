const fs = require('fs');
const path = require('path');

const dir = './';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove from desktop menu
    content = content.replace(/<a href="minerals\.html" class="[^"]*">Minerals<\/a>\r?\n\s*/g, '');
    content = content.replace(/<a href="authenticity\.html" class="[^"]*">Authenticity<\/a>\r?\n\s*/g, '');

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
}
