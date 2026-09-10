import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";

// A local-only test server for the exact static files deployed by Render.
const root = resolve("out");
const types = { ".html": "text/html; charset=utf-8", ".txt": "text/plain; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".webp": "image/webp", ".png": "image/png", ".jpeg": "image/jpeg", ".ico": "image/x-icon", ".svg": "image/svg+xml", ".xml": "application/xml", ".webmanifest": "application/manifest+json" };
createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    const path = resolve(root, `.${pathname}`);
    if (path !== root && !path.startsWith(root + sep)) { response.writeHead(403).end(); return; }
    for (const candidate of [path, `${path}.html`, resolve(path, "index.html")]) {
      try {
        if (!(await stat(candidate)).isFile()) continue;
        response.writeHead(200, { "Content-Type": types[extname(candidate)] || "application/octet-stream" });
        response.end(await readFile(candidate));
        return;
      } catch { /* Try the next static export filename. */ }
    }
    response.writeHead(404).end("Not found");
  } catch { response.writeHead(400).end("Bad request"); }
}).listen(4180, "127.0.0.1", () => console.log("Static QA server ready on port 4180"));
