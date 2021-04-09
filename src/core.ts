// Import the IE fix
import "./ie";

// The bootstrap library
import * as bootstrap from "../libs/bootstrap.bundle.min.js";

// JS components
import * as Components from "./components";

// Global library
window["GD"] = { bootstrap, Components }

// Export the core libraries
export { bootstrap, Components }