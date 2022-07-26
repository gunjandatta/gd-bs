const tippyJS = require("./tippy.js");

// Plugins
export const animateFill = tippyJS.animateFill;
export const createSingleton = tippyJS.createSingleton;
export const delegate = tippyJS.delegate;
export const followCursor = tippyJS.followCursor;
export const hideAll = tippyJS.hideAll;
export const inlinePositioning = tippyJS.inlinePositioning;
export const roundArrow = tippyJS.roundArrow;
export const sticky = tippyJS.sticky;

// Default
const tippy = tippyJS.default || tippyJS;
export default tippy;