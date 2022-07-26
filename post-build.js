var fs = require('fs');

// Copy the type definition file
fs.copyFileSync("src/icons/svgs/index.d.ts", "build/icons/svgs/index.d.ts");

// Log
console.log("Successfully copied the icons definition");