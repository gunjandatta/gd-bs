var fs = require('fs');

// Deletes a directory
function deleteDirectory(src) {
    // Ensure the directory exists
    if (fs.existsSync(src) && fs.lstatSync(src).isDirectory()) {
        // Get each item in the directory
        fs.readdirSync(src).forEach(function (item) {
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
deleteDirectory("./libs");
deleteDirectory("./src/icons");

// Create the directories
fs.mkdirSync("./libs");
fs.mkdirSync("./src/icons");
fs.mkdirSync("./src/icons/svgs");

// Copy the popper library
fs.copyFileSync("node_modules/@popperjs/core/dist/umd/popper.min.js", "libs/popper.min.js");

// Log
console.log("Successfully cleaned the library");