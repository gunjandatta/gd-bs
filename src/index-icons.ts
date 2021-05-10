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

// Icons
import { Icons, IconTypes } from "./icons";
export { Icons, IconTypes }

// Bootstrap Global library
const BS = { Components, createPopper, Icons, IconTypes }
window["GD"] = window["GD"] || BS;