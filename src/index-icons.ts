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

// Icons
import { Icons, IconTypes } from "./icons";
export { Icons, IconTypes }

// Bootstrap Global library
const BS = { Components, Icons, IconTypes, tippy }
window["GD"] = window["GD"] || BS;