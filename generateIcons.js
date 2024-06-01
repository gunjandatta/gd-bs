const path = require("path");
const fs = require("fs");

// Get the icons directory
const dirIcons = path.join(__dirname, "node_modules/bootstrap-icons/icons");

// Get the icon files
fs.readdir(dirIcons, function (err, files) {
    var icons = [];
    var iconDefs = [];
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
        var varName = file[0].toLowerCase() + file.substring(1);
        while ((idx = varName.indexOf('-')) > 0) {
            // Find the instance
            varName = varName.substring(0, idx) + varName.charAt(idx + 1).toUpperCase() + varName.substring(idx + 2);
        }

        // Determine the variable and function names
        varName = varName.replace(/\.svg$/, '');
        varName = varName == "window" ? "window_" : varName;
        varName = parseInt(varName) >= 0 ? "_" + varName : varName;
        var funcName = varName[0].toUpperCase() + varName.substring(1);

        // Add the type
        let iconType = types.length + 1;
        types.push("\t" + funcName + " = " + iconType);

        // Add the icon definition
        iconDefs.push("// " + file);
        iconDefs.push("export const " + varName + ": (height?:number, width?:number, className?:string) => HTMLElement;");

        // Add the switch case statement
        switches.push("\t\t// " + file);
        switches.push("\t\tcase " + iconType + ":");
        switches.push("\t\t\treturn SVGIcons." + varName + "(height, width, className);");

        // Add the type definition
        typeDefs.push("\t// " + file);
        typeDefs.push("\t" + funcName + ": number;");

        // Add an export for this file
        icons.push("export * from \"./" + varName + "\";");

        // Convert the svg to a typescript file
        var stream = fs.createWriteStream("./src/icons/svgs/" + varName + ".ts");
        stream.write([
            'import { generateIcon } from "../generate";',
            'export function ' + varName + '(height, width, className?) {',
            ('  return generateIcon(`' + fs.readFileSync(dirIcons + "/" + file) + '`, height, width, className);').replace(/\"/g, "'").replace(/\n/g, ' '),
            '}'
        ].join('\n'));
        stream.end();

        // Convert the svg to a typescript definition file
        stream = fs.createWriteStream("./src/icons/svgs/" + varName + ".d.ts");
        stream.write("export const " + varName + ": (height?:number, width?:number, className?:string) => HTMLElement;");
        stream.end();
    });

    // Delete the files
    try { fs.unlinkSync("./src/icons/svgs/index.d.ts"); } catch { }
    try { fs.unlinkSync("./src/icons/index.ts"); } catch { }
    try { fs.unlinkSync("./src/icons/index.d.ts"); } catch { }
    try { fs.unlinkSync("./src/icons/iconTypes.ts"); } catch { }

    // Generate the file
    var stream = fs.createWriteStream("./src/icons/index.d.ts");
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
        "export const Icons: (iconType:number, height?:number, width?:number, className?:string) => HTMLElement;",
        `\n/**
 * Icon Types
*/`,
        "export const IconTypes: {",
        typeDefs.join('\n'),
        "}"
    ].join("\n"));
    stream.end();

    // Generate the svgs definitions file
    var stream = fs.createWriteStream("./src/icons/svgs/index.d.ts");
    stream.write(iconDefs.join('\n'));
    stream.close();

    // Log
    console.log("Icons definition file generated");

    // Generate the svgs index file
    var stream = fs.createWriteStream("./src/icons/svgs/index.ts");
    stream.write(icons.join('\n'));
    stream.close();

    // Generate the icons index file
    stream = fs.createWriteStream("./src/icons/generate.ts");
    stream.write([
        '// Generates the html for an icon',
        'export const generateIcon = (svg: string, height: number = 32, width: number = 32, className?: string, placeholders?: number) => {',
        '\t// See if placeholders exist',
        '\tif (placeholders > 0) {',
        '\t\t// Parse the number of placeholders',
        '\t\tfor (let i = 0; i < placeholders; i++) {',
        '\t\t\tlet regex = new RegExp("/\\{" + i + "\\}/g");\n',
        '\t\t\t// Replace the placeholder',
        '\t\t\tsvg = svg.replace(regex, Date.now().toString());',
        '\t\t}',
        '\t}\n',
        '\t// Get the icon element',
        '\tlet elDiv = document.createElement("div");',
        '\telDiv.innerHTML = svg;',
        '\tlet icon = elDiv.firstChild as HTMLElement;',
        '\tif (icon) {',
        '\t    // See if a class name exists',
        '\t    if (className) {',
        '\t      // Parse the class names',
        '\t      let classNames = className.split(\' \');',
        '\t      for (let i = 0; i < classNames.length; i++) {',
        '\t        // Add the class name',
        '\t        icon.classList.add(classNames[i]);',
        '\t      }',
        '\t    }\n',
        '\t    // Make this icon invisible to the screen reader',
        '\t    icon.setAttribute("aria-hidden", "true");\n',
        '\t    // Set the height/width',
        '\t    icon.setAttribute("height", (height ? height : 32).toString());',
        '\t    icon.setAttribute("width", (width ? width : 32).toString());\n',
        '\t    // Update the styling',
        '\t    icon.style.pointerEvents = "none";\n',
        '\t    // Support for IE',
        '\t    icon.setAttribute("focusable", "false");',
        '\t}\n',
        '\t// Return the icon',
        '\treturn icon;',
        '}\n'
    ].join('\n'));
    stream.end();

    // Generate the icons index file
    stream = fs.createWriteStream("./src/icons/index.ts");
    stream.write([
        'export * from "./iconTypes";',
        '// Icons to import',
        'import * as SVGIcons from "./svgs";\n',
        "// Renders an icon by type",
        "export const Icons = (iconType:number, height?:number, width?:number, className?:string) => {",
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