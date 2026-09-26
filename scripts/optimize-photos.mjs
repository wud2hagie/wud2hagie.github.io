// Optimize photos and generate the secondary photo slot.
// Run: node scripts/optimize-photos.mjs
import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";

const PROFILE_IN = "/home/z/my-project/public/profile-photo.jpg";
const MAIN_IN = "/home/z/my-project/public/myphoto.jpg";

// 1. Optimize profile-photo.jpg (hero) — 4:5 portrait crop for the hero frame
await sharp(PROFILE_IN)
  .resize(1200, 1500, { fit: "cover", position: "attention" })
  .jpeg({ quality: 88, progressive: true })
  .toFile("/tmp/profile-opt.jpg");
await writeFile("/home/z/my-project/public/profile-photo.jpg", await readFile("/tmp/profile-opt.jpg"));
console.log("OK profile-photo.jpg optimized (1200x1500, 4:5)");

// 2. Optimize myphoto.jpg (About main) — 3:4 portrait crop
await sharp(MAIN_IN)
  .resize(900, 1200, { fit: "cover", position: "attention" })
  .jpeg({ quality: 88, progressive: true })
  .toFile("/tmp/myphoto-opt.jpg");
await writeFile("/home/z/my-project/public/myphoto.jpg", await readFile("/tmp/myphoto-opt.jpg"));
console.log("OK myphoto.jpg optimized (900x1200, 3:4)");

// 3. Create my2photo.jpg as a square crop of myphoto (top-center for head visibility)
await sharp(MAIN_IN)
  .resize(800, 800, { fit: "cover", position: "top" })
  .jpeg({ quality: 88, progressive: true })
  .toFile("/home/z/my-project/public/my2photo.jpg");
console.log("OK my2photo.jpg generated (800x800, 1:1 from top of myphoto)");

