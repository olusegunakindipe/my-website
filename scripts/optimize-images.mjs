import sharp from "sharp";
import fs from "fs";
import path from "path";

const assetsDir = "./public/assets";

const filesToOptimize = [
  "fergie-pic.png",
  "web-pic.png",
  "project-1.jpg",
  "project-2.jpg",
  "project-3.jpg",
  "zktube.jpeg",
  "my-pics.png",
];

async function optimize() {
  console.log("🚀 Starting image optimization...");

  for (const file of filesToOptimize) {
    const filePath = path.join(assetsDir, file);
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️ Skipping ${file} (not found)`);
      continue;
    }

    const ext = path.extname(file);
    const name = path.basename(file, ext);
    const outputPath = path.join(assetsDir, `${name}.webp`);

    try {
      console.log(`📦 Optimizing ${file}...`);
      await sharp(filePath)
        .resize({ width: 2000, withoutEnlargement: true }) // Prevent massive dimensions
        .webp({ quality: 80 })
        .toFile(outputPath);

      const oldSize = (fs.statSync(filePath).size / 1024 / 1024).toFixed(2);
      const newSize = (fs.statSync(outputPath).size / 1024 / 1024).toFixed(2);
      console.log(`✅ ${file}: ${oldSize}MB -> ${newSize}MB (WebP)`);
    } catch (err) {
      console.error(`❌ Error optimizing ${file}:`, err);
    }
  }

  console.log("⭐ Optimization complete!");
}

optimize();
