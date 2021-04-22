// Bootstrap styles
import "./bs";

// Import the IE fix
import "./ie";

// Bootstrap Components
import * as Components from "./components";
export { Components }

// Bootstrap Global library
const BS = { Components }
window["GD"] = window["GD"] || BS;