/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const copyFile = (src, dest) => {
  const sameDir = path.dirname(src) === dest;

  const fileExt = path.extname(src);
  const fileName = path.basename(src, fileExt);
  const copiedFileName = `${fileName}-copy${fileExt}`;

  if (sameDir) {
    return;
  }

  try {
    fs.copyFileSync(src, path.resolve(dest, copiedFileName));
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { copyFile };
