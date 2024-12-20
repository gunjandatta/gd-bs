var fs = require('fs');

// Copy the type definition file
fs.copyFileSync("src/icons/svgs/index.d.ts", "build/icons/svgs/index.d.ts");
fs.readdirSync("src/icons/svgs").filter(fn => fn.endsWith(".d.ts")).forEach(filename => {
    fs.copyFileSync(`src/icons/svgs/${filename}`, `build/icons/svgs/${filename}`);
});

// Log
console.log("Successfully copied the icons definition");