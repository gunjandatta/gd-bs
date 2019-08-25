import "bootstrap";
import * as jQuery from "jquery";
import * as Components from "./components";
import "./sass/bootstrap";

export {
    Components,
    jQuery
}

// Global Library
window["GD"] = {
    Components,
    jQuery
}