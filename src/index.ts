// Bootstrap styles
import "./bs";

// Import the IE fix
import "./ie";

// Bootstrap Components
import * as Components from "./components";
export { Components }

// Popper Lib
import { createPopper } from "../libs/popper.min.js";
export { createPopper }

// Bootstrap Global library
const BS = { Components, createPopper }
window["GD"] = window["GD"] || BS;