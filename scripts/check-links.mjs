import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = path.join(projectRoot, "dist");
const htmlFiles = [];
const failures = [];
const documentIds = new Map();

async function collectHtml(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) await collectHtml(entryPath);
    else if (entry.isFile() && entry.name.endsWith(".html")) htmlFiles.push(entryPath);
  }
}

function resolveReference(pagePath, reference) {
  const cleanReference = decodeURIComponent(reference.split(/[?#]/, 1)[0]);
  if (!cleanReference) return pagePath;

  const candidate = cleanReference.startsWith("/")
    ? path.join(outputRoot, cleanReference.slice(1))
    : path.resolve(path.dirname(pagePath), cleanReference);

  return cleanReference.endsWith("/") ? path.join(candidate, "index.html") : candidate;
}

async function idsFor(pagePath) {
  if (!documentIds.has(pagePath)) {
    const html = await readFile(pagePath, "utf8");
    documentIds.set(pagePath, new Set([...html.matchAll(/\sid=["']([^"']+)["']/g)].map((match) => match[1])));
  }
  return documentIds.get(pagePath);
}

async function exists(candidate) {
  try {
    const details = await stat(candidate);
    if (details.isDirectory()) return stat(path.join(candidate, "index.html")).then(() => true, () => false);
    return details.isFile();
  } catch {
    return false;
  }
}

await collectHtml(outputRoot);

for (const pagePath of htmlFiles) {
  const html = await readFile(pagePath, "utf8");
  const references = [...html.matchAll(/(?:href|src)=["']([^"']+)["']/g)].map((match) => match[1]);

  for (const reference of references) {
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(reference)) continue;
    const target = resolveReference(pagePath, reference);
    if (!(await exists(target))) {
      failures.push(`${path.relative(outputRoot, pagePath)} -> ${reference}`);
      continue;
    }

    const fragment = reference.includes("#") ? decodeURIComponent(reference.slice(reference.indexOf("#") + 1)) : "";
    if (fragment && target.endsWith(".html") && !(await idsFor(target)).has(fragment)) {
      failures.push(`${path.relative(outputRoot, pagePath)} -> ${reference} (missing fragment)`);
    }
  }
}

if (failures.length > 0) {
  console.error(`Broken local references:\n${failures.map((failure) => `- ${failure}`).join("\n")}`);
  process.exitCode = 1;
} else {
  console.log(`Checked ${htmlFiles.length} HTML files: all local links and assets resolve.`);
}
