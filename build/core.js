"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jQuery = require("jquery");
exports.jQuery = jQuery;
var Components = require("./components");
exports.Components = Components;
// Global Library
window["GD"] = {
    Components: Components,
    jQuery: jQuery
};
// Execute a jQuery no conflict by default.
jQuery.noConflict(true);
