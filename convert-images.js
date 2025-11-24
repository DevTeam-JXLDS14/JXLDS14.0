import sharp from "sharp";
import { readdir } from "fs/promises";
import { join } from "path";

/**
 * Image Conversion Script
 * Converts JPEG/JPG images to WebP format with optimization
 *
 * Usage:
 * 1. Place your images in a source folder
 * 2. Update the sourceDir and targetDir variables below
 * 3. Run: node convert-images.js
 *
 * Examples:
 * - OC Photos: sourceDir = './OC Photos', targetDir = './public/images/oc'
 * - Facilitators: sourceDir = './Faci Photos', targetDir = './public/images/facilitators'
 */

// Configuration
const sourceDir = "./OC Photos"; // Change this to your source folder
const targetDir = "./public/images/oc"; // Change this to your target folder
const imageSize = 400; // Size in pixels (square)
const quality = 85; // WebP quality (0-100)

async function convertImages() {
  try {
    const files = await readdir(sourceDir);
    const jpegFiles = files.filter(
      (file) =>
        file.toLowerCase().endsWith(".jpg") ||
        file.toLowerCase().endsWith(".jpeg")
    );

    if (jpegFiles.length === 0) {
      console.log("No JPEG/JPG files found in the source directory.");
      return;
    }

    console.log(`Found ${jpegFiles.length} images to convert...`);
    console.log(`Source: ${sourceDir}`);
    console.log(`Target: ${targetDir}`);
    console.log(`Size: ${imageSize}x${imageSize}px`);
    console.log(`Quality: ${quality}%\n`);

    for (const file of jpegFiles) {
      const inputPath = join(sourceDir, file);
      const outputName = file.replace(/\.(jpg|jpeg)$/i, ".webp");
      const outputPath = join(targetDir, outputName);

      await sharp(inputPath)
        .resize(imageSize, imageSize, {
          fit: "cover",
          position: "center",
        })
        .webp({ quality: quality })
        .toFile(outputPath);

      console.log(`✓ Converted ${file} to ${outputName}`);
    }

    console.log(`\n✅ All ${jpegFiles.length} images converted successfully!`);
  } catch (error) {
    console.error("❌ Error converting images:", error);
    console.error("\nMake sure:");
    console.error("1. The source directory exists and contains images");
    console.error("2. The target directory exists (create it if needed)");
    console.error("3. Sharp is installed: npm install sharp --save-dev");
  }
}

convertImages();
