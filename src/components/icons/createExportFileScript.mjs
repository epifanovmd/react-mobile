import fs from 'fs';
import path from 'path';
import {promisify} from 'util';

const fsRename = promisify(fs.rename);
const fsReaddir = promisify(fs.readdir);
const fsWrite = promisify(fs.writeFile);
const fsReadFile = promisify(fs.readFile);

const workDir = path.resolve(path.dirname(''), 'warning');

const files = await fsReaddir(workDir);
const names =   files.filter(item => item !== 'index.ts').map((fileName) => {
  const name = fileName.replace('.tsx', 'Icon');
  const file = fileName.replace('.tsx', '');

  return `export { ${name} } from './${file}';\n`;
});

await fsWrite(`${workDir}/index.ts`, names.toString().replace(/,/gm, ''));
