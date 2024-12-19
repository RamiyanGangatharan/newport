import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This function deletes the dist folder when the server is reloaded
export default function(eleventyConfig, outputDirectoryName) {
    eleventyConfig.on("eleventy.before", () => {
        const outputDirectory = path.join(__dirname, "..", outputDirectoryName);
        if (fs.existsSync(outputDirectory)) { fs.rmSync(outputDirectory, { recursive: true, force: true }); }
    });
}