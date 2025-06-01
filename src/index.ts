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

// Bootstrap Global library
const BS = { Components, render }
window["GD"] = window["GD"] || BS;