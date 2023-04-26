import * as fs from 'fs';
import * as path from 'path';

function generateIndex(dirPath) {
  const files = fs.readdirSync(dirPath);
  const allowedExtensions = ['.ts', '.tsx', '.jsx', '.js'];

  const indexContents = files
    .filter((file) => {
      const extension = path.extname(file);
      const name = path.parse(file).name;
      return allowedExtensions.includes(extension) && name !== 'index';
    })
    .map((file) => {
      const name = path.parse(file).name;
      return `export * from './${name}'`;
    })
    .join('\n');

  fs.writeFileSync(path.join(dirPath, 'index.ts'), indexContents);
  console.log('Creado exitosamente');
}

// eslint-disable-next-line no-undef
const args = process.argv.slice(2);
const dirPath = args[0];
generateIndex(dirPath);
