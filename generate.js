const path = require("path");
const fs = require("fs");
const readline = require("readline");

// Log
console.log("Generating the css file");

// See if the library exists
var dstFile = path.join(__dirname, "src/styles/bs.scss");
if (fs.existsSync(dstFile)) {
    // Log
    console.log("Deleting the library");

    // Delete the file
    fs.unlinkSync(dstFile);
}

// Read the file
var srcStream = readline.createInterface({
    input: fs.createReadStream(path.join(__dirname, "node_modules/bootstrap/dist/css/bootstrap.css"))
});

// Read each line
let bsClass = [];
let bodyClass = [];
var foundFl = false;
srcStream.on("line", function (line) {
    // Trim the line
    line = line.trim();

    // See if this is the .modal class
    if (line.indexOf(".modal-open") == 0 || line.indexOf(".modal-backdrop") == 0) {
        // Set the flag
        foundFl = true;
    }

    // Append the line
    foundFl ? bodyClass.push(line) : bsClass.push("\t" + line);

    // See if the flag is set and this is the end of the class
    if (foundFl && line == "}") {
        // Set the flag
        foundFl = false;
    }
});

// Wait for the file to be read
srcStream.on("close", function () {
    // Write the file
    fs.writeFileSync(dstFile, [
        bodyClass.join('\n'),
        ".bs {",
        bsClass.join('\n'),
        "}"
    ].join('\n'));

    // Log
    console.log("Completed");
});