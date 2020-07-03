const path = require("path");
const fs = require("fs");

// Get the icons directory
const dirIcons = path.join(__dirname, "node_modules/bootstrap-icons/icons");

// Get the icon files
fs.readdir(dirIcons, function (err, files) {
    var icons = [];
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

        // Determine the variable and function names
        varName = varName.replace(/\.svg$/, '');
        var funcName = varName[0].toUpperCase() + varName.substr(1);

        // Add the icon reference
        icons.push("const " + varName + " = `" + fs.readFileSync(dirIcons + "/" + file) + "`;");

        // Add the type
        let iconType = types.length + 1;
        types.push("\t" + funcName + " = " + iconType);

        // Add the switch case statement
        switches.push("\t\t// " + file);
        switches.push("\t\tcase " + iconType + ":");
        switches.push("\t\t\treturn generateIcon(" + varName + ", height, width);");

        // Add the type definition
        typeDefs.push("\t// " + file);
        typeDefs.push("\t" + funcName + ": number;");
    });

    // Delete the files
    try { fs.unlinkSync("./@types/icons.d.ts"); } catch { }
    try { fs.unlinkSync("./src/icons/icons.ts"); } catch { }
    try { fs.unlinkSync("./src/icons/iconTypes.ts"); } catch { }

    // Generate the file
    var stream = fs.createWriteStream("./@types/icons.d.ts");
    stream.write([
`/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Create the icon and append it to the target element
 *         var elIcon = $REST.Icons($REST.IconTypes.Alarm, 32, 32);
 *         document.querySelector("#demo").appendChild(elIcon);
 *     });
 * </script>
*/`,
`\n/**
 * ### Icons
 * 
 * Renders an icon by type
 * 
 * \`\`\`ts
 * import { Icons, IconTypes } from "gd-sprest-bs";
 * 
 * // Create the icon and append it to the target element
 * let elIcon = Icons(IconTypes.Alarm, 32, 32);
 * document.querySelector("#icon").appendChild(elIcon);
 * \`\`\`
 */`,
        "export const Icons: (iconType:number, height?:number, width?:number) => HTMLElement;",
`\n/**
 * Icon Types
*/`,
        "export const IconTypes: {",
        typeDefs.join('\n'),
        "}"
    ].join("\n"));
    stream.end();

    // Log
    console.log("Icons definition file generated");

    // Generate the file
    var stream = fs.createWriteStream("./src/icons/icons.ts");
    stream.write([
        'import generateIcon from "./generate";\n',
        '// Icons to import',
        icons.join('\n'),
        "\n// Renders an icon by type",
        "export const Icons = (iconType:number, height?:number, width?:number) => {",
        "\t// See which icon is selected",
        "\tswitch(iconType) {",
        switches.join('\n'),
        "\t}",
        "}"
    ].join('\n'));
    stream.end();

    // Generate the icon types
    var stream = fs.createWriteStream("./src/icons/iconTypes.ts");
    stream.write([
        "// Icon Types",
        "export enum IconTypes {",
        types.join(',\n'),
        '}'
    ].join('\n'));
    stream.end();

    // Log
    console.log("Icons file generated");
});