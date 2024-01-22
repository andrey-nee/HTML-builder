const fs = require('fs');
const path = require('path');
const { stdout } = process;
const stream = fs.ReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
stream.on('data', (chunk) => stdout.write(chunk));
