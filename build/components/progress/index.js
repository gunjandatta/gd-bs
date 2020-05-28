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
var base_1 = require("../base");
var HTML = require("./index.html");
/**
 * Progress
 */
var _Progress = /** @class */ (function (_super) {
    __extends(_Progress, _super);
    // Constructor
    function _Progress(props) {
        var _this = _super.call(this, HTML, props) || this;
        // Configure the collapse
        _this.configure();
        // Configure the parent
        _this.configureParent();
        return _this;
    }
    // Configure the card group
    _Progress.prototype.configure = function () {
        // Set the default values
        var maxValue = typeof (this.props.max) === "number" ? this.props.max : 100;
        var minValue = typeof (this.props.min) === "number" ? this.props.min : 0;
        var size = typeof (this.props.size) === "number" ? this.props.size : 0;
        // Update the progress bar
        var progressBar = this.el.querySelector(".progress-bar");
        progressBar.style.width = size + "%";
        progressBar.setAttribute("aria-valuenow", size.toString());
        progressBar.setAttribute("aria-valuemin", minValue.toString());
        progressBar.setAttribute("aria-valuemax", maxValue.toString());
        this.props.isAnimated ? progressBar.classList.add("progress-bar-animated") : null;
        this.props.isStriped ? progressBar.classList.add("progress-bar-striped") : null;
        this.props.label ? progressBar.innerHTML = this.props.label : null;
    };
    Object.defineProperty(_Progress.prototype, "progressBar", {
        /**
         * Public Interface
         */
        // Return the progress bar element
        get: function () { return this.el.querySelector(".progress-bar"); },
        enumerable: true,
        configurable: true
    });
    return _Progress;
}(base_1.Base));
exports.Progress = function (props) { return new _Progress(props); };
