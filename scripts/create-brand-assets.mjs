// Builds the web brand assets from the official NEURALIS logo (3D ribbon N on a dark background).
// Usage: node scripts/create-brand-assets.mjs [path/to/logo_neuralis.jpeg]
import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const source = process.argv[2] ?? path.resolve("../logo_neuralis.jpeg");
const outDir = path.resolve("public/brand");

// Bounds measured on the 1600x533 official logo; padding keeps the glow.
const MARK = { left: 352, top: 141, width: 288, height: 288 };
const LOCKUP = { left: 352, top: 141, width: 912, height: 288 };
const BACKGROUND_LEVEL = 22;
const FULL_OPACITY_LEVEL = 96;

/** Turns the dark logo background into transparency while keeping the glow soft. */
async function knockOutBackground(region) {
  const { data, info } = await sharp(source).extract(region).raw().toBuffer({ resolveWithObject: true });
  const rgba = Buffer.alloc(info.width * info.height * 4);

  for (let pixel = 0; pixel < info.width * info.height; pixel += 1) {
    const [r, g, b] = [data[pixel * 3], data[pixel * 3 + 1], data[pixel * 3 + 2]];
    const level = Math.max(r, g, b);
    const alpha = Math.min(1, Math.max(0, (level - BACKGROUND_LEVEL) / (FULL_OPACITY_LEVEL - BACKGROUND_LEVEL)));
    const lift = alpha > 0 ? Math.min(255 / Math.max(level, 1), 1 / alpha) : 1;
    rgba[pixel * 4] = Math.min(255, Math.round(r * lift));
    rgba[pixel * 4 + 1] = Math.min(255, Math.round(g * lift));
    rgba[pixel * 4 + 2] = Math.min(255, Math.round(b * lift));
    rgba[pixel * 4 + 3] = Math.round(alpha * 255);
  }

  return sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } });
}

async function appIcon(size, file) {
  const inner = Math.round(size * 0.78);
  const mark = await sharp(source).extract(MARK).resize(inner, inner).toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: "#05080f" } })
    .composite([{ input: mark, gravity: "center" }])
    .png()
    .toFile(path.join(outDir, file));
}

await mkdir(outDir, { recursive: true });
await (await knockOutBackground(MARK)).png().toFile(path.join(outDir, "neuralis-mark.png"));
await (await knockOutBackground(MARK)).webp({ quality: 92, alphaQuality: 100 }).toFile(path.join(outDir, "neuralis-mark.webp"));
await (await knockOutBackground(LOCKUP)).png().toFile(path.join(outDir, "neuralis-logo.png"));
await appIcon(512, "neuralis-icon-512.png");
await appIcon(192, "neuralis-icon-192.png");
await appIcon(180, "apple-touch-icon.png");
await appIcon(48, "favicon-48.png");
console.log(`Brand assets written to ${outDir}`);
