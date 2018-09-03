import "bootstrap";
import * as jQuery from "jquery";
import * as Components from "./components";
import "./styles.scss";

export {
    Components,
    jQuery
}

// Global Library
window["GD"] = {
    Components,
    jQuery
}