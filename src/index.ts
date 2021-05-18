// Bootstrap styles
import "./bs";

// Import the IE fix
import "./ie";

// Bootstrap Components
import * as Components from "./components";
export { Components }

// TippyJS library
import { tippy } from "./libs";
export { tippy }

// Bootstrap Global library
const BS = { Components, tippy }
window["GD"] = window["GD"] || BS;