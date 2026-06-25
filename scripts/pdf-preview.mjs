import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import { setTimeout as wait } from 'node:timers/promises';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

const PORT = 4174;
const URL = `http://localhost:${PORT}`;

async function waitForServer(url, timeoutMs = 30_000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {}
    await wait(300);
  }
  throw new Error(`Server did not start: ${url}`);
}

const server = spawn(
  'npm',
  ['run', 'preview', '--', '--port', String(PORT), '--strictPort'],
  { cwd: projectRoot, stdio: ['ignore', 'pipe', 'pipe'], shell: true },
);
server.stdout.on('data', (d) => process.stdout.write(`[preview] ${d}`));
server.stderr.on('data', (d) => process.stderr.write(`[preview!] ${d}`));

try {
  await waitForServer(URL);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1697, deviceScaleFactor: 1 });
  await page.emulateMediaFeatures([
    { name: 'prefers-reduced-motion', value: 'reduce' },
  ]);

  await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60_000 });
  await wait(800);
  await page.emulateMediaType('print');
  await wait(500);

  await page.screenshot({
    path: resolve(projectRoot, 'pdf-preview-fullpage.jpg'),
    type: 'jpeg',
    quality: 80,
    fullPage: true,
  });

  await browser.close();
  console.log('done');
} finally {
  server.kill('SIGTERM');
  await wait(500);
  if (!server.killed) server.kill('SIGKILL');
}
