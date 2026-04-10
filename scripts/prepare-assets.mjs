import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const rootDir = resolve(process.cwd());
const distDir = resolve(rootDir, ".dist");

if (existsSync(distDir)) {
  rmSync(distDir, { recursive: true, force: true });
}
mkdirSync(distDir, { recursive: true });

const copyTargets = ["index.html", "image"];
for (const target of copyTargets) {
  const from = resolve(rootDir, target);
  const to = resolve(distDir, target);
  cpSync(from, to, { recursive: true });
}

console.log("Prepared assets in .dist");

