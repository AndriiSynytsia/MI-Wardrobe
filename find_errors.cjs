const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\Verto\\OneDrive\\Desktop\\HTML\\site.html', 'utf8');

const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/);
const scriptCode = scriptMatch[1];

// Let's search for any other potential undeclared variables
const matches = scriptCode.match(/[a-zA-Z0-9_$]+\s*(?=\.)|[a-zA-Z0-9_$]+/g);
console.log('Script length:', scriptCode.length);
