// Bootstrap styles
import "./styles";

// Import the IE fix
import "./ie";

// Bootstrap Components
import * as Components from "./components";
export { Components }

// Icons
import { Icons, IconTypes } from "./icons";
export { Icons, IconTypes }

// Bootstrap Global library
const BS = { Components, Icons, IconTypes }
window["GD"] = window["GD"] || BS;