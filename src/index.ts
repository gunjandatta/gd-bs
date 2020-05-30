// gd-bs Library
// The bootstrap library
export * from "./bootstrap";

// The bootstrap icons
import { Icons, IconTypes } from "./icons";
export { Icons, IconTypes }

// Update the global library
window["GD"].Icons = Icons;
window["GD"].IconTypes = IconTypes;