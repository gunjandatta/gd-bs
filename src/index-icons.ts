// gd-bs Library
export * from "./index";

// Icons
import { Icons, IconTypes } from "./icons";
export { Icons, IconTypes }

// Update the global library
import * as GD from "./core";
GD["Icons"] = Icons;
GD["IconTypes"] = IconTypes;
window["GD"] = GD;

export default GD;