import * as jQuery from "jquery";
import * as Components from "./components";

// Library
export {
    Components,
    jQuery
}

// Global Library
window["GD"] = {
    Components,
    jQuery
}

// Execute a jQuery no conflict by default.
jQuery.noConflict(true);