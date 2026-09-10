import { copyFile, readdir } from "node:fs/promises";
import { join } from "node:path";

// Next 16.3 exports nested RSC segment filenames with Windows separators.
// The client requests the same segments with dots on every platform.
// Keep the export portable; Linux builds already have the expected filenames.
if (process.platform === "win32") {
  const root = join(process.cwd(), "out");
  async function visit(parts = []) {
    const entries = await readdir(join(root, ...parts), { withFileTypes: true });
    for (const entry of entries) {
      const pathParts = [...parts, entry.name];
      if (entry.isDirectory()) {
        await visit(pathParts);
      } else if (entry.isFile() && entry.name.endsWith(".txt")) {
        const segmentIndex = pathParts.findIndex(part => part.startsWith("__next."));
        if (segmentIndex >= 0 && segmentIndex < pathParts.length - 1) {
          const destination = [...pathParts.slice(0, segmentIndex), pathParts.slice(segmentIndex).join(".")];
          await copyFile(join(root, ...pathParts), join(root, ...destination));
        }
      }
    }
  }
  await visit();
}
