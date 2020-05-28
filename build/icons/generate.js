"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Helper function to generate the icon element
exports.default = (function (svg, height, width) {
    if (height === void 0) { height = 32; }
    if (width === void 0) { width = 32; }
    // Get the icon element
    var elDiv = document.createElement("div");
    elDiv.innerHTML = svg;
    var icon = elDiv.firstChild;
    if (icon) {
        // Set the height/width
        icon.setAttribute("height", (height ? height : 32).toString());
        icon.setAttribute("width", (width ? width : 32).toString());
    }
    // Return the icon
    return icon;
});
