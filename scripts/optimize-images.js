import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');
const OUTPUT_DIR = path.join(__dirname, '../public/optimized');
const QUALITY = 80; // 0-100 arası kalite değeri
const MAX_WIDTH = 1920; // maksimum genişlik

async function ensureDir(dirPath) {
    try {
        await fs.access(dirPath);
    } catch {
        await fs.mkdir(dirPath, { recursive: true });
    }
}

async function optimizeImage(inputPath) {
    const ext = path.extname(inputPath).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return;

    try {
        const relativePath = path.relative(PUBLIC_DIR, inputPath);
        const outputPath = path.join(OUTPUT_DIR, relativePath);
        const outputDir = path.dirname(outputPath);
        
        await ensureDir(outputDir);

        const image = sharp(inputPath);
        const metadata = await image.metadata();

        // Eğer görüntü çok genişse, oranı koruyarak yeniden boyutlandır
        if (metadata.width > MAX_WIDTH) {
            image.resize(MAX_WIDTH, null, {
                fit: 'inside',
                withoutEnlargement: true
            });
        }

        // Format'a göre optimize et
        if (ext === '.png') {
            await image
                .png({ quality: QUALITY, compressionLevel: 9 })
                .toFile(outputPath);
        } else if (ext === '.webp') {
            await image
                .webp({ quality: QUALITY })
                .toFile(outputPath);
        } else {
            await image
                .jpeg({ quality: QUALITY, mozjpeg: true })
                .toFile(outputPath);
        }

        const inputStats = await fs.stat(inputPath);
        const outputStats = await fs.stat(outputPath);
        const savings = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(2);
        
        console.log(`Optimized: ${relativePath}`);
        console.log(`  Original: ${(inputStats.size / 1024 / 1024).toFixed(2)}MB`);
        console.log(`  Optimized: ${(outputStats.size / 1024 / 1024).toFixed(2)}MB`);
        console.log(`  Saved: ${savings}%\n`);
    } catch (error) {
        console.error(`Error optimizing ${inputPath}:`, error);
    }
}

async function processDirectory(directory) {
    try {
        const files = await fs.readdir(directory);
        
        for (const file of files) {
            const fullPath = path.join(directory, file);
            const stat = await fs.stat(fullPath);
            
            if (stat.isDirectory() && file !== 'optimized') {
                await processDirectory(fullPath);
            } else if (!stat.isDirectory()) {
                await optimizeImage(fullPath);
            }
        }
    } catch (error) {
        console.error(`Error processing directory ${directory}:`, error);
    }
}

// Optimize işlemini başlat
console.log('Image optimization started...');
ensureDir(OUTPUT_DIR)
    .then(() => processDirectory(PUBLIC_DIR))
    .then(() => console.log('Image optimization completed!'))
    .catch(console.error);
