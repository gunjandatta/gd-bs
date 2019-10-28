"use strict";
// GdBs: Custom Elements Define Library, ES Module/es5 Target
Object.defineProperty(exports, "__esModule", { value: true });
var gd_bs_core_js_1 = require("./gd-bs.core.js");
var gd_bs_components_js_1 = require("./gd-bs.components.js");
function defineCustomElements(win, opts) {
    return gd_bs_core_js_1.defineCustomElement(win, gd_bs_components_js_1.COMPONENTS, opts);
}
exports.defineCustomElements = defineCustomElements;
