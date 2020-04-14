const fs = require('fs');
const path = require('path');
const root = '../src';
const outputFile = '../src/modules/containers/ModulesBarrel.ts';
const watchDirs = [
  '/modules/controllers',
  '/modules/drivers',
  '/modules/factories',
  '/modules/gateways',
  '/modules/middlewares',
  '/modules/presenters',
  '/modules/providers',
  '/modules/repositories',
  '/modules/serializers',
  '/modules/services',
  '/modules/supports',
  '/modules/translators',
  '/modules/usecases',
  '/vue/drivers',
  '/vue/states',
];
let count = 0;
let outputLines = [];

const extractModuleNames = function(file) {
  const data = fs.readFileSync(file, 'utf-8');
  const lines = data.split('\n');
  const names = lines
    .map(line => {
      const matches = line.match(/^\s*export\s+(interface|class)\s+(\w+)/);
      return matches ? matches[2] : null;
    })
    .filter(name => Boolean(name));
  return names.length ? names : null;
};

const fileCallback = function(file) {
  if (!file.match(/.*\.ts$/g) || !watchDirs.some(dir => file.match(dir))) {
    return;
  }
  count++;
  // if (count < 10) {
  const names = extractModuleNames(file);
  if (names) {
    const relative = path.relative(path.dirname(outputFile), file);
    const dir = path.dirname(relative);
    const module = path.basename(relative, path.extname(relative));
    const outputLine = `export { ${names.join(', ')} } from \'${dir}/${module}\';`;
    console.log(outputLine);
    outputLines.push(outputLine);
  }
  // }
};

const errCallback = function(err) {
  console.error('error. err: ', err);
};

const walk = function(p, fileCallback, errCallback) {
  const files = fs.readdirSync(p);
  // console.log('* files: ', files);
  files.forEach(function(f) {
    const fp = path.join(p, f);
    if (fs.statSync(fp).isDirectory()) {
      walk(fp, fileCallback);
    } else {
      fileCallback(fp);
    }
  });
};
console.log('barrel-gen start.');
console.log('root: ' + root);
console.log('path: ' + outputFile);
walk(root, fileCallback, errCallback);
outputLines.push('\n');

try {
  fs.unlinkSync(outputFile);
} catch (e) {}

fs.writeFileSync(outputFile, outputLines.join('\n'));
console.log('end.');

