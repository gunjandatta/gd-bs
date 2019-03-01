import { a as getProps } from './chunk-57fe3db2.js';
var Toast = /** @class */ (function () {
    function Toast() {
    }
    Toast.prototype.render = function () {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        var props = getProps(this.el, {
            bodyText: this.bodyText,
            className: this.className,
            closeButtonHidden: this.closeButtonHidden,
            closeButtonText: this.closeButtonText,
            el: this.el,
            headerImgClass: this.headerImgClass,
            headerImgSrc: this.headerImgSrc,
            headerText: this.headerText
        });
        GD.Components.Toast(props);
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Toast, "is", {
        get: function () { return "bs-toast"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toast, "properties", {
        get: function () {
            return {
                "bodyText": {
                    "type": String,
                    "attr": "body-text"
                },
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "closeButtonHidden": {
                    "type": Boolean,
                    "attr": "close-button-hidden"
                },
                "closeButtonText": {
                    "type": Boolean,
                    "attr": "close-button-text"
                },
                "el": {
                    "elementRef": true
                },
                "headerImgClass": {
                    "type": String,
                    "attr": "header-img-class"
                },
                "headerImgSrc": {
                    "type": String,
                    "attr": "header-img-src"
                },
                "headerText": {
                    "type": String,
                    "attr": "header-text"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Toast;
}());
export { Toast as a };
