const fs = require('fs');
const path = require('path');
const { stdout } = process;

stdout.write('"Secret-folder" file list:\n');

fs.readdir(
  path.join(__dirname, 'secret-folder'),
  { withFileTypes: true },
  (err, elements) => {
    if (err) {
      console.log(err);
    } else {
      elements.forEach((element) => {
        if (element.isFile()) {
          const elementPath = element.path + '\\' + element.name;
          fs.stat(elementPath, (err, stats) => {
            if (err) {
              console.log(err);
            } else {
              stdout.write(
                `${element.name.split('.').shift()} - ${element.name
                  .split('.')
                  .pop()} - ${+(stats.size / 1024).toFixed(3)} kB\n`,
              );
            }
          });
        }
      });
    }
  },
);
