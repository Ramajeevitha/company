import fs from 'fs';
import path from 'path';

const baseDir = path.join(process.cwd(), 'src');

const updateBorderRadius = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      updateBorderRadius(fullPath);
    } else if (fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('border-radius: 999px') || content.includes('border-radius:999px')) {
        content = content.replace(/border-radius:\s*999px/g, 'border-radius: 8px');
        fs.writeFileSync(fullPath, content);
      }
    }
  }
};

updateBorderRadius(baseDir);
console.log("Updated border-radius from 999px to 8px across all CSS files.");
