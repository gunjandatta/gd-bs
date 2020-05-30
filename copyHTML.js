var fs = require('fs');

// Copies the html files
function copyHTMLFiles(src) {
    // Ensure the directory exists
    if (fs.existsSync(src) && fs.lstatSync(src).isDirectory()) {
        // Get each item in the directory
        fs.readdirSync(src).forEach(function (item) {
            var srcPath = src + "/" + item;

            // See if this is a directory
            if (fs.lstatSync(srcPath).isDirectory()) {
                // Delete the folder recursively
                copyHTMLFiles(srcPath);
            }
            // Else, see if this is an html file
            else if (srcPath.endsWith(".html")) {
                // Read the file
                var html = fs.readFileSync(srcPath);

                // Write the file
                fs.writeFileSync(srcPath.replace("/src/", "/build/") + ".js", [
                    "module.exports = `",
                    html,
                    "`;"
                ].join('\n'));
            }
        });
    }
};

// Log
console.log("Copying the HTML files...");

// Copy the HTML files
copyHTMLFiles("./src");

// Log
console.log("Successfully copied the files");