
// GdBs: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './gd-bs.core.js';
import { COMPONENTS } from './gd-bs.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
