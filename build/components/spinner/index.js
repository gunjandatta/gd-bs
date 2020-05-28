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
var classNames_1 = require("../classNames");
var HTML = require("./index.html");
/**
 * Spinner Types
 */
var SpinnerTypes;
(function (SpinnerTypes) {
    SpinnerTypes[SpinnerTypes["Danger"] = 1] = "Danger";
    SpinnerTypes[SpinnerTypes["Dark"] = 2] = "Dark";
    SpinnerTypes[SpinnerTypes["Info"] = 3] = "Info";
    SpinnerTypes[SpinnerTypes["Light"] = 4] = "Light";
    SpinnerTypes[SpinnerTypes["Primary"] = 5] = "Primary";
    SpinnerTypes[SpinnerTypes["Secondary"] = 6] = "Secondary";
    SpinnerTypes[SpinnerTypes["Success"] = 7] = "Success";
    SpinnerTypes[SpinnerTypes["Warning"] = 8] = "Warning";
})(SpinnerTypes = exports.SpinnerTypes || (exports.SpinnerTypes = {}));
/**
 * Spinner Class Names
 */
exports.SpinnerClassNames = new classNames_1.ClassNames([
    "text-danger",
    "text-dark",
    "text-info",
    "text-light",
    "text-primary",
    "text-secondary",
    "text-success",
    "text-warning"
]);
/**
 * Spinner
 * @param props The spinner properties.
 */
var _Spinner = /** @class */ (function (_super) {
    __extends(_Spinner, _super);
    // Constructor
    function _Spinner(props) {
        var _this = _super.call(this, HTML, props) || this;
        // Configure the collapse
        _this.configure();
        // Configure the parent
        _this.configureParent();
        return _this;
    }
    // Configure the card group
    _Spinner.prototype.configure = function () {
        // Set the class name
        if (this.props.isGrowing) {
            // Set the class
            this.el.classList.add("spinner-grow" + (this.props.isSmall ? "-sm" : ""));
        }
        else {
            // Set the class
            this.el.classList.add("spinner-border" + (this.props.isSmall ? "-sm" : ""));
        }
        // Set the class name
        this.el.classList.add(exports.SpinnerClassNames.getByType(this.props.type) || exports.SpinnerClassNames.getByType(SpinnerTypes.Primary));
        // See if text is defined
        if (this.props.text) {
            // Update the text
            this.el.querySelector("span").innerHTML = this.props.text;
        }
    };
    return _Spinner;
}(base_1.Base));
exports.Spinner = function (props) { return new _Spinner(props); };
