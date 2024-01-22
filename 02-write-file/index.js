const fs = require('fs');
const path = require('path');
const { stdout, stdin } = process;
const output = fs.WriteStream(path.join(__dirname, 'output.txt'), 'utf-8');

fs.writeFile(path.join(__dirname, 'output.txt'), '', (err) => {
  if (err) throw err;
});

stdout.write('Hello! Please write your text:\n');

stdin.on('data', (chunk) => {
  const chunkToString = chunk.toString();
  if (chunkToString.includes('exit') && chunkToString.length == 6) {
    process.exit();
  } else {
    output.write(chunk);
  }
});

process.on('SIGINT', () => process.exit());

process.on('exit', () => stdout.write('See you later!\n'));
