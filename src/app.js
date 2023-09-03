/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const copyFile = () => {
  const [src, dest] = process.argv.slice(2);
  const sameDir = path.dirname(src) === dest;

  const fileExt = path.extname(src);
  const fileName = path.basename(src, fileExt);
  const copiedFileName = `${fileName}-copy${fileExt}`;

  if (sameDir) {
    console.log("You're trying to copy file into the same location");

    return;
  }

  try {
    fs.copyFileSync(src, path.resolve(dest, copiedFileName));
  } catch (err) {
    console.log(err.message);
  }
};

copyFile();

module.exports = { copyFile };
