import sharp from "sharp";
import { resolve } from "node:path";

// Real photographs: source pages and licences are recorded in docs/photo-credits.md.
const photos = [
  ["applications", "photo-1531482615713-2afd69097998"],
  ["plateformes", "photo-1655682597128-2b10c079cf83"],
  ["communication", "photo-1655720357872-ce227e4164ba"],
  ["data", "photo-1739300293396-9ad79111c8e4"],
  ["ia", "photo-1739300293504-234817eead52"],
  ["formation", "photo-1531498860502-7c67cf02f657"],
];

for (const [name, photo] of photos) {
  const response = await fetch(`https://images.unsplash.com/${photo}?auto=format&fit=max&w=1800&q=85`);
  if (!response.ok) throw new Error(`${name}: HTTP ${response.status}`);
  const input = Buffer.from(await response.arrayBuffer());
  const output = resolve("public/images/services", `${name}-africa.webp`);
  const info = await sharp(input).rotate().resize(1200, 800, { fit: "cover", position: name === "ia" ? "center" : "attention" }).webp({ quality: name === "plateformes" ? 72 : 82 }).toFile(output);
  console.log(`${name}: ${Math.round(info.size / 1024)} KB`);
}
