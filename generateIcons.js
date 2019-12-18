const path = require("path");
const fs = require("fs");

// Get the icons directory
const dirIcons = path.join(__dirname, "node_modules/bootstrap-icons/icons");

console.log(dirIcons);
// Get the icon files
fs.readdir(dirIcons, function (err, files) {
    var code = [];
    var definitions = [];
    var icons = [];
    var variables = [];
    var switches = [];
    var types = [];
    var typeDefs = [];

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

        // Add the type
        let iconType = types.length + 1;
        types.push("\t" + varName + " = " + iconType);

        // Add the switch case statement
        switches.push("\t// " + file);
        switches.push("\tcase " + iconType + ":");
        switches.push("\t\treturn " + funcName + "(height, width);");
        switches.push("\tbreak;");

        // Add the variable definition
        definitions.push("export const " + funcName + ": (height?: number, width?: number) => HTMLElement;");

        // Add the type definition
        typeDefs.push("\t// " + file);
        typeDefs.push("\t" + varName + ": number;");
    });

    // Add the by type definition
    definitions.push("export const byType = (iconType:number) => HTMLOrSVGElement;")

    // Add the type definitions
    definitions.push([
        "export const IconTypes: {",
        typeDefs.join('\n'),
        "}"
    ].join("\n"));

    // Generate the icons file
    code.push([
        'import generateIcon from "./generate";\n',
        '// Icons to import',
        icons.join('\n') + '\n',
        '// Icon components',
        variables.join('\n')
    ].join('\n'));

    // Add the types
    code.push([
        "export enum IconTypes {",
        types.join(',\n'),
        '}'
    ].join('\n'));

    // Add the by type method
    code.push([
        "export const byType = (iconType:number, height?:number, width?:number) => {",
        "\t// Render by the icon type",
        "\tswitch(iconType) {",
        switches.join('\n'),
        "\t}",
        "}"
    ].join('\n'));

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
        stream.write(code.join('\n'));
        stream.end();

        // Log
        console.log("Icons file generated");
    });
});