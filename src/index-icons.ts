import "bootstrap";
import * as jQuery from "jquery";
import * as Components from "./components";
import { Icons, IconTypes } from "./icons";
import "./sass/bootstrap";

export {
    Components,
    Icons, IconTypes,
    jQuery
}

// Global Library
window["GD"] = {
    Components,
    Icons, IconTypes,
    jQuery
}

// Execute a jQuery no conflict by default.
jQuery.noConflict(true);