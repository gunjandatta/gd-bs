var fs = require('fs');

// Copy the javascript reference
fs.copyFileSync("src/custom-elements.js", "build/custom-elements.js");

// Log
console.log("Successfully copied the custom elements reference");