/**
 * Bundle-time SSR render script.
 *
 * Run with: bun run src/render.tsx
 *
 * This uses React's renderToStaticMarkup at build time to produce a plain HTML
 * file. No JavaScript ships to the browser.
 */
import { renderToStaticMarkup } from "react-dom/server";
import { mkdirSync, writeFileSync, copyFileSync, unlinkSync } from "node:fs";
import { join } from "node:path";
import App from "./App";

const rootDir = join(import.meta.dir, "..");
const distDir = join(rootDir, "dist");

mkdirSync(distDir, { recursive: true });

const bodyHtml = renderToStaticMarkup(<App />);

const htmlShell = `<!doctype html>
<html>
    <head>
        <title>GINCo</title>
        <meta charset="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap"
            rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="style.css" />
    </head>
    ${bodyHtml}
</html>`;

// Write alongside style.css so Bun resolves the relative href correctly
const tempHtml = join(rootDir, "index.html");
writeFileSync(tempHtml, htmlShell, "utf-8");

const buildResult = await Bun.build({
  entrypoints: [tempHtml],
  outdir: distDir,
  minify: true,
});

unlinkSync(tempHtml);

if (!buildResult.success) {
  console.error("Build failed:", buildResult.logs);
  process.exit(1);
}

console.log("✓ Static site generated in dist/");
