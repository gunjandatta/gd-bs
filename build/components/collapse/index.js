"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
require("bootstrap/js/dist/collapse");
var core_1 = require("../../core");
var base_1 = require("../base");
var HTML = require("./index.html");
/**
 * Collapse
 */
var _Collapse = /** @class */ (function (_super) {
    __extends(_Collapse, _super);
    // Constructor
    function _Collapse(props) {
        var _this = _super.call(this, HTML, props) || this;
        // Configure the collapse
        _this.configure();
        // Configure the parent
        _this.configureParent();
        // Create the collapse
        _this._bootstrapObj = core_1.jQuery ? core_1.jQuery(_this.el).collapse(_this.props.options || {}) : null;
        return _this;
    }
    // Configure the card group
    _Collapse.prototype.configure = function () {
        // Set the attributes
        this.props.id ? this.el.id = this.props.id : null;
        this.props.isMulti ? this.el.classList.add("multi-collapse") : null;
        // Set the content
        var content = this.props.content || "";
        var body = this.el.querySelector(".card");
        if (typeof (content) === "string") {
            // Set the html
            body.innerHTML = content;
        }
        else {
            // Append the element
            body.appendChild(content);
        }
        // Execute the render event
        this.props.onRender ? this.props.onRender(this.props, body) : null;
    };
    /**
     * Bootstrap
     */
    // Disposes the collapse
    _Collapse.prototype.dispose = function () { this._bootstrapObj ? this._bootstrapObj.collapse("dispose") : null; };
    // Toggles the component
    _Collapse.prototype.toggle = function () { this._bootstrapObj ? this._bootstrapObj.collapse("toggle") : null; };
    return _Collapse;
}(base_1.Base));
exports.Collapse = function (props) { return new _Collapse(props); };
