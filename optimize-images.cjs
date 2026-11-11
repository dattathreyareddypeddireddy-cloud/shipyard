
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const imageFolder = path.join(__dirname, "public", "products");

async function optimizeImages() {
  const files = fs
    .readdirSync(imageFolder)
    .filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

  for (const file of files) {
    const inputPath = path.join(imageFolder, file);
    const outputPath = path.join(
      imageFolder,
      `${path.parse(file).name}.webp`
    );

    await sharp(inputPath)
      .resize({
        width: 1200,
        withoutEnlargement: true,
      })
      .webp({ quality: 78 })
      .toFile(outputPath);

    console.log(`Optimized: ${file} -> ${path.basename(outputPath)}`);
  }

  console.log("\nAll product images optimized successfully!");
}

optimizeImages().catch(console.error);
