import { spawn } from 'node:child_process';
import { setTimeout as wait } from 'node:timers/promises';
import { existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

const langArg = process.argv.find((a) => a.startsWith('--lang='));
const lang = (langArg ? langArg.split('=')[1] : 'en').toLowerCase();
if (lang !== 'en' && lang !== 'es') {
  console.error(`[pdf] Unknown lang "${lang}". Use --lang=en or --lang=es.`);
  process.exit(1);
}

const outputName =
  lang === 'es' ? 'David-Ramirez-CV-ES.pdf' : 'David-Ramirez-CV-EN.pdf';
const outputPath = resolve(projectRoot, outputName);

const PORT = 4173;
const URL = `http://localhost:${PORT}/?print=1&lang=${lang}`;

async function waitForServer(url, timeoutMs = 30_000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // server not ready yet
    }
    await wait(300);
  }
  throw new Error(`Server at ${url} did not start within ${timeoutMs}ms`);
}

async function main() {
  console.log(`[pdf] Building project (lang=${lang})...`);
  await new Promise((resolveBuild, rejectBuild) => {
    const build = spawn('npm', ['run', 'build'], {
      cwd: projectRoot,
      stdio: 'inherit',
      shell: true,
    });
    build.on('exit', (code) => {
      if (code === 0) resolveBuild();
      else rejectBuild(new Error(`vite build exited with code ${code}`));
    });
  });

  console.log(`[pdf] Starting vite preview on port ${PORT}...`);
  const server = spawn(
    'npm',
    ['run', 'preview', '--', '--port', String(PORT), '--strictPort'],
    {
      cwd: projectRoot,
      stdio: ['ignore', 'pipe', 'pipe'],
      shell: true,
    },
  );
  server.stdout.on('data', (d) => process.stdout.write(`[preview] ${d}`));
  server.stderr.on('data', (d) => process.stderr.write(`[preview!] ${d}`));

  try {
    await waitForServer(`http://localhost:${PORT}`);

    console.log('[pdf] Launching headless Chromium...');
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();

    await page.emulateMediaFeatures([
      { name: 'prefers-reduced-motion', value: 'reduce' },
    ]);

    console.log(`[pdf] Navigating to ${URL}...`);
    await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60_000 });

    await page.evaluate(async () => {
      const h = document.body.scrollHeight;
      const steps = 10;
      for (let i = 0; i <= steps; i++) {
        window.scrollTo(0, (h * i) / steps);
        await new Promise((r) => setTimeout(r, 150));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 400));
    });

    await page.emulateMediaType('print');
    await wait(500);

    if (!existsSync(dirname(outputPath))) {
      mkdirSync(dirname(outputPath), { recursive: true });
    }

    console.log(`[pdf] Writing PDF to ${outputPath}...`);
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.4in',
        bottom: '0.4in',
        left: '0.4in',
        right: '0.4in',
      },
    });

    await browser.close();
    console.log('[pdf] Done.');
  } finally {
    server.kill('SIGTERM');
    await wait(500);
    if (!server.killed) server.kill('SIGKILL');
  }
}

main().catch((err) => {
  console.error('[pdf] Failed:', err);
  process.exit(1);
});
