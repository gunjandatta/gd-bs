// Bootstrap styles
import "./bs";

// Import the IE fix
import "./ie";

// Bootstrap Components
import * as Components from "./components";
export { Components }

// Render method
import { render } from "./render";
export { render };

// TippyJS library
import tippy from "tippy.js";
export { tippy }

// Bootstrap Global library
const BS = { Components, render, tippy }
window["GD"] = window["GD"] || BS;