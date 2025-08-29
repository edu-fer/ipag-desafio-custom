import path from 'node:path';
import { platform } from 'node:process';

const currentFilePath = new URL(import.meta.url).pathname;
let __dirname = path.dirname(currentFilePath);

if (platform === 'win32') {
  __dirname = __dirname.substring(3);
}

__dirname = path.join(__dirname, '..', '..');

export const currentPath = { __dirname };
