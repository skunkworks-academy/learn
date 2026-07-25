import {readdirSync, readFileSync, statSync} from 'node:fs';
import {extname, join, relative} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = process.cwd();
const thisFile = relative(root, fileURLToPath(import.meta.url));
const ignoredDirectories = new Set(['.git', 'node_modules', 'build', '.docusaurus']);
const scannedExtensions = new Set(['.md', '.mdx', '.html', '.js', '.jsx', '.ts', '.tsx', '.json', '.yml', '.yaml']);
const restrictedTerms = ['eco' + 'system'];
const failures = [];

function walk(directory) {
  for (const entry of readdirSync(directory)) {
    if (ignoredDirectories.has(entry)) continue;
    const fullPath = join(directory, entry);
    const relativePath = relative(root, fullPath);
    const stats = statSync(fullPath);
    if (stats.isDirectory()) {
      walk(fullPath);
      continue;
    }
    if (relativePath === thisFile || !scannedExtensions.has(extname(entry).toLowerCase())) continue;
    const content = readFileSync(fullPath, 'utf8');
    for (const term of restrictedTerms) {
      const expression = new RegExp(`\\b${term}\\b`, 'ig');
      const matches = content.match(expression);
      if (matches?.length) failures.push(`${relativePath}: ${matches.length} restricted occurrence(s)`);
    }
  }
}

walk(root);

if (failures.length) {
  console.error('Brand terminology validation failed.');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('Brand terminology validation passed.');
