const path = require("path");
const fs = require("fs");

// Get the icons directory
const dirIcons = path.join(__dirname, "node_modules/bootstrap-icons/icons");

console.log(dirIcons);
// Get the icon files
fs.readdir(dirIcons, function (err, files) {
    var definitions = [];
    var icons = [];
    var variables = [];

    // See if there is an error
    if (err) {
        // Log the error
        console.log("Error: " + err);
        return;
    }

    // Parse the files
    files.forEach(function (file) {
        // Ensure it's an svg
        if (!file.endsWith(".svg")) { return; }

        // Create the variable name
        var idx = 0;
        var varName = file[0].toLowerCase() + file.substr(1);
        while ((idx = varName.indexOf('-')) > 0) {
            // Find the instance
            varName = varName.substr(0, idx) + varName.charAt(idx + 1).toUpperCase() + varName.substr(idx + 2);
        }

        // Remove the extension
        varName = varName.replace(/\.svg$/, '');

        // Add the icon
        icons.push("const " + varName + " = require(\"bootstrap-icons/icons/" + file + "\");");

        // Add the variable
        var funcName = varName[0].toUpperCase() + varName.substr(1);
        variables.push("export const " + funcName + " = (height,width) => { return generateIcon(" + varName + ", height, width); }");

        // Add the variable definition
        definitions.push("export const " + funcName + ": (height?: number, width?: number) => HTMLElement;")
    });

    // Generate the icons file
    let code = [
        'import generateIcon from "./generate";\n',
        '// Icons to import',
        icons.join('\n') + '\n',
        '// Icon components',
        variables.join('\n')
    ].join('\n');

    // Delete the icons definition file
    fs.unlink("./@types/icons.d.ts", function (err) {
        // See if there is an error
        if (err) {
            // Log
            console.log(err);
            return;
        }

        // Generate the file
        var stream = fs.createWriteStream("./@types/icons.d.ts");
        stream.write(definitions.join('\n'));
        stream.end();

        // Log
        console.log("Icons definition file generated");
    });

    // Delete the icons file
    fs.unlink("./src/icons/icons.ts", function (err) {
        // See if there is an error
        if (err) {
            // Log
            console.log(err);
            return;
        }

        // Generate the file
        var stream = fs.createWriteStream("./src/icons/icons.ts");
        stream.write(code);
        stream.end();

        // Log
        console.log("Icons file generated");
    });
});