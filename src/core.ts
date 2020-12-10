// Import the IE fix
import "./ie";

// The bootstrap library
import * as bootstrap from "bootstrap";
import * as popper from "@popperjs/core";

// JS components
import * as Components from "./components";

export { bootstrap, Components, popper }

// Global library
window["GD"] = { bootstrap, Components, popper }