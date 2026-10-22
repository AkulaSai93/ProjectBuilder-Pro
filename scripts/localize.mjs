// Downloads Figma MCP asset URLs into public/assets and rewrites section files,
// and converts Figma font tokens (font-['Family:Style']) into family + weight classes.
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";

const dir = "src/sections";
const families = { Avenir_LT_Pro: "avenir", universalSans: "avenir", Inter: "inter", Poppins: "poppins", Montserrat: "montserrat", berkeleyMono: "mono", Newsreader: "avenir" };
const styles = {
  "35_Light": "font-light", "45_Book": "font-normal", "55_Roman": "font-normal", "65_Medium": "font-medium",
  "85_Heavy": "font-extrabold", "95_Black": "font-black", Regular: "font-normal", Medium: "font-medium",
  Semi_Bold: "font-semibold", SemiBold: "font-semibold", Bold: "font-bold", Medium_Italic: "font-medium italic",
};

for (const file of readdirSync(dir)) {
  const path = join(dir, file);
  let src = readFileSync(path, "utf8");
  src = src.replace(/font-\['([A-Za-z_]+):([A-Za-z0-9_]+)'\]/g, (m, fam, style) => {
    const f = families[fam], w = styles[style];
    if (!f || !w) throw new Error(`Unmapped font ${m} in ${file}`);
    return `font-${f} ${w}`;
  });
  const prefix = src.match(/assetPathPrefix = "([^"]+)"/)?.[1];
  if (prefix) {
    for (const [, name] of src.matchAll(/\$\{assetPathPrefix\}\/([\w.]+)/g)) {
      const out = join("public/assets", name);
      if (!existsSync(out)) {
        execFileSync("curl", ["-fsSL", "--retry", "4", "--max-time", "300", "-o", out, `${prefix}/${name}`]);
      }
    }
    src = src.replace(/const assetPathPrefix = "[^"]+";/, 'const assetPathPrefix = "/assets";');
  }
  writeFileSync(path, src);
  console.log("done", file);
}
