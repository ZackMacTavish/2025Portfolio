const fs = require("node:fs");
const path = require("node:path");

const filePath = path.join(
  process.cwd(),
  "node_modules",
  "@types",
  "three",
  "src",
  "textures",
  "ExternalTexture.d.ts"
);

if (!fs.existsSync(filePath)) {
  process.exit(0);
}

const source = fs.readFileSync(filePath, "utf8");
const referenceLine = '/// <reference types="@webgpu/types" />\n\n';

if (!source.includes(referenceLine)) {
  process.exit(0);
}

fs.writeFileSync(filePath, source.replace(referenceLine, ""));