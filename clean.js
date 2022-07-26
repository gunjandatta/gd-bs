var fs = require('fs');

// Deletes a directory
function deleteDirectory(src) {
    // Ensure the directory exists
    if (fs.existsSync(src) && fs.lstatSync(src).isDirectory()) {
        // Get each item in the directory
        fs.readdirSync(src).forEach(function(item) {
            var srcPath = src + "/" + item;

            // See if this is a directory
            if (fs.lstatSync(srcPath).isDirectory()) {
                // Delete the folder recursively
                deleteDirectory(srcPath);
            } else {
                // Delete the file
                fs.unlinkSync(srcPath);
            }
        });

        // Delete the directory
        fs.rmdirSync(src);
    }
};

// Log
console.log("Cleaning the library...");

// Delete the folders
deleteDirectory("./build");
deleteDirectory("./dist");
deleteDirectory("./docs");
deleteDirectory("./src/icons");

// Create the directories
fs.mkdirSync("./src/icons");
fs.mkdirSync("./src/icons/svgs");

// Copy the popper library
var popperConfig = require("./node_modules/@popperjs/core/package.json");
fs.copyFileSync("./node_modules/@popperjs/core/" + popperConfig.main, "./src/tippy.js/popper.js");

// Copy the tippy.js library
var tippyConfig = require("./node_modules/tippy.js/package.json");
var tippyJS = fs.readFileSync("./node_modules/tippy.js/" + tippyConfig.main).toString();
fs.writeFileSync("./src/tippy.js/tippy.js", tippyJS.replace("var core = require('@popperjs/core');", "var core = require('./popper');"));

// Log
console.log("Successfully cleaned the library");