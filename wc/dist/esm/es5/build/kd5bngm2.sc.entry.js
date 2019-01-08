import { a as getProps } from './chunk-69297144.js';
var Spinner = /** @class */ (function () {
    function Spinner() {
    }
    Spinner.prototype.render = function () {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            isGrowing: this.isGrowing,
            isSmall: this.isSmall,
            text: this.text,
            type: this.type
        });
        GD.Components.Spinner(props);
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Spinner, "is", {
        get: function () { return "bs-spinner"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Spinner, "properties", {
        get: function () {
            return {
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "el": {
                    "elementRef": true
                },
                "isGrowing": {
                    "type": Boolean,
                    "attr": "is-growing"
                },
                "isSmall": {
                    "type": Boolean,
                    "attr": "is-small"
                },
                "text": {
                    "type": String,
                    "attr": "text"
                },
                "type": {
                    "type": Number,
                    "attr": "type"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Spinner;
}());
export { Spinner as BsSpinner };
