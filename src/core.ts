// Import the IE fix
import "./ie";

// The bootstrap library
import * as bootstrap from "../libs/bootstrap.min.js";
import * as popper from "../libs/popper.min.js";

// JS components
import * as Components from "./components";

// Global library
window["GD"] = { bootstrap, Components, popper }

// Export the core libraries
export { bootstrap, Components, popper }