/*! Built with http://stenciljs.com */
import { h } from '../gd-bs.core.js';

import { a as getProps } from './chunk-69297144.js';

class Tooltip {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            type: this.type
        });
        GD.Components.Tooltip(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-tooltip"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "type": {
            "type": Number,
            "attr": "type"
        }
    }; }
}

export { Tooltip as a };