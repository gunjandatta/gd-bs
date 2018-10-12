import * as jQuery from "jquery";
import "bootstrap";
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