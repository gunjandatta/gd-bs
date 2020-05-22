// gd-bs Library
export * from "./index";

// Icons
import { Icons, IconTypes } from "./icons";
export { Icons, IconTypes }

// Global Library
window["GD"].Icons = Icons;
window["GD"].IconTypes = IconTypes;