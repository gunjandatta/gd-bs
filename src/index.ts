import "bootstrap";
import * as jQuery from "jquery";
import * as Components from "./components";
import "./sass";

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