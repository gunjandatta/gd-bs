// Bootstrap styles
import "./bs";

// Export the core
export * from "./index-core";

// Icons
import { Icons, IconTypes } from "./icons";
export { Icons, IconTypes }

// Include the Icons in the Global library
window["GD"].Icons = Icons;
window["GD"].IconTypes = IconTypes;