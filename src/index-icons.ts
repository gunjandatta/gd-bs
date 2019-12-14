import "bootstrap";
import * as jQuery from "jquery";
import * as Components from "./components";
import * as Icons from "./icons";
import "./sass/bootstrap";

export {
    Components,
    Icons,
    jQuery
}

// Global Library
window["GD"] = {
    Components,
    Icons,
    jQuery
}

// Execute a jQuery no conflict by default.
jQuery.noConflict(true);