var fs = require('fs');

// Delete the txt file
fs.rmSync("./build/tippy.js.LICENSE.txt");

// Log
console.log("Successfully removed the webpack output txt file.");

// Copy the type definition file
fs.copyFileSync("src/icons/svgs/index.d.ts", "build/icons/svgs/index.d.ts");

// Log
console.log("Successfully copied the icons definition");