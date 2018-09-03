/*! Built with http://stenciljs.com */
import { h } from "./gd-bs.core.js";
var Tooltip = /** @class */ (function () {
    function Tooltip() {
    }
    Tooltip.prototype.componentDidLoad = function () { var t = {}; if (this.btnProps)
        try {
            t = JSON.parse(this.btnProps);
        }
        catch (o) {
            t = {}, console.log("Error parsing the JSON string."), console.log(this.btnProps);
        } var o = {}; if (this.options)
        try {
            o = JSON.parse(this.options);
        }
        catch (t) {
            o = {}, console.log("Error parsing the JSON string."), console.log(this.options);
        } return GD.Components.Tooltip({ btnProps: t, className: this.className, el: this.el.children[0], options: o, type: this.type }); };
    Tooltip.prototype.render = function () { return h("div", null); };
    Object.defineProperty(Tooltip, "is", {
        get: function () { return "bs-tooltip"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tooltip, "properties", {
        get: function () { return { btnProps: { type: String, attr: "btn-props" }, className: { type: String, attr: "class-name" }, el: { elementRef: !0 }, options: { type: String, attr: "options" }, type: { type: Number, attr: "type" } }; },
        enumerable: true,
        configurable: true
    });
    return Tooltip;
}());
export { Tooltip as a };
