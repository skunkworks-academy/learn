import {existsSync, readFileSync, readdirSync} from 'node:fs';
import {join} from 'node:path';

const root = process.cwd();
const requiredFiles = [
  'course.config.json',
  'docusaurus.config.js',
  'src/pages/index.jsx',
  'src/pages/register.jsx',
  'src/pages/enrol.jsx',
  'src/pages/login.jsx',
  'src/theme/Navbar/index.jsx',
  'src/css/custom.css',
  'static/robots.txt',
  '.github/workflows/quality.yml',
  '.github/workflows/deploy-pages.yml',
  'docs/ACCESS-CONTROL.md'
];
const errors = [];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) errors.push(`Missing required file: ${file}`);
}

const configPath = join(root, 'course.config.json');
if (existsSync(configPath)) {
  const course = JSON.parse(readFileSync(configPath, 'utf8'));
  const requiredFields = ['courseCode', 'title', 'summary', 'description', 'siteUrl', 'repository', 'locale', 'level', 'estimatedHours', 'audience', 'prerequisites', 'outcomes', 'modules', 'registrationUrl', 'enrolmentUrl', 'loginUrl', 'supportEmail', 'accessPolicy'];
  for (const field of requiredFields) {
    if (course[field] === undefined || course[field] === null || course[field] === '') errors.push(`course.config.json is missing: ${field}`);
  }
  for (const field of ['siteUrl', 'registrationUrl', 'enrolmentUrl', 'loginUrl']) {
    try {
      const url = new URL(course[field]);
      if (url.protocol !== 'https:') errors.push(`${field} must use HTTPS`);
    } catch {
      errors.push(`${field} must be a valid URL`);
    }
  }
  if (!Array.isArray(course.modules) || course.modules.length < 1) errors.push('At least one curriculum module is required');
  if (!Array.isArray(course.outcomes) || course.outcomes.length < 3) errors.push('At least three measurable outcomes are required');
  if (!/^\S+@\S+\.\S+$/.test(course.supportEmail || '')) errors.push('supportEmail must be valid');
  if (!Number.isFinite(course.estimatedHours) || course.estimatedHours <= 0) errors.push('estimatedHours must be greater than zero');
  if (!course.accessPolicy?.publicContent || !course.accessPolicy?.protectedContent || !course.accessPolicy?.deliveryPlatform) errors.push('accessPolicy must declare public, protected and delivery boundaries');
}

const docusaurusPath = join(root, 'docusaurus.config.js');
if (existsSync(docusaurusPath)) {
  const source = readFileSync(docusaurusPath, 'utf8');
  const requiredSnippets = ['academy-navigation.js', "docs: false", "blog: false", 'sitemap:', 'onBrokenLinks'];
  for (const snippet of requiredSnippets) {
    if (!source.includes(snippet)) errors.push(`docusaurus.config.js is missing required configuration: ${snippet}`);
  }
}

const protectedDirectory = join(root, 'protected-content');
if (existsSync(protectedDirectory)) {
  const unexpected = readdirSync(protectedDirectory).filter((name) => name !== 'README.md');
  if (unexpected.length) errors.push(`Protected learning files must not be stored publicly: ${unexpected.join(', ')}`);
}

if (errors.length) {
  console.error('Learning content template validation failed.');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Learning content template validation passed (${requiredFiles.length} required files checked).`);
