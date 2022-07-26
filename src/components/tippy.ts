import { Instance } from "tippy.js/index.d";
export { Instance }

import * as tippyJS from "tippy.js";
export const animateFill = tippyJS.animateFill;
export const followCursor = tippyJS.followCursor;
export const inlinePositioning = tippyJS.inlinePositioning;
export const sticky = tippyJS.sticky;

import { ITippyProps } from "./types";
const tippy: (el: HTMLElement, options: ITippyProps) => Instance = (tippyJS.default || tippyJS) as any;
export default tippy;