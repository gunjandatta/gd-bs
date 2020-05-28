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
require("bootstrap/js/dist/alert");
var core_1 = require("../../core");
var base_1 = require("../base");
var classNames_1 = require("../classNames");
var HTML = require("./index.html");
/**
 * Alert Types
 */
var AlertTypes;
(function (AlertTypes) {
    AlertTypes[AlertTypes["Danger"] = 1] = "Danger";
    AlertTypes[AlertTypes["Dark"] = 2] = "Dark";
    AlertTypes[AlertTypes["Info"] = 3] = "Info";
    AlertTypes[AlertTypes["Light"] = 4] = "Light";
    AlertTypes[AlertTypes["Primary"] = 5] = "Primary";
    AlertTypes[AlertTypes["Secondary"] = 6] = "Secondary";
    AlertTypes[AlertTypes["Success"] = 7] = "Success";
    AlertTypes[AlertTypes["Warning"] = 8] = "Warning";
})(AlertTypes = exports.AlertTypes || (exports.AlertTypes = {}));
/**
 * Alert Class Names
 */
exports.AlertClassNames = new classNames_1.ClassNames([
    "alert-danger",
    "alert-dark",
    "alert-info",
    "alert-light",
    "alert-primary",
    "alert-secondary",
    "alert-success",
    "alert-warning"
]);
/**
 * Alert
 */
var _Alert = /** @class */ (function (_super) {
    __extends(_Alert, _super);
    // Constructor
    function _Alert(props) {
        var _this = _super.call(this, HTML, props) || this;
        // Set the default styling
        _this.el.classList.add(exports.AlertClassNames.getByType(_this.props.type) || exports.AlertClassNames.getByType(AlertTypes.Primary));
        // Render the header
        _this.renderHeader();
        // Configure the alert
        _this.configure();
        // Configure the parent element
        _this.configureParent();
        // Create the bootstrap object
        _this._bootstrapObj = core_1.jQuery ? core_1.jQuery(_this.el) : null;
        return _this;
    }
    // Configure the alert
    _Alert.prototype.configure = function () {
        var content = this.props.content || "";
        // See if the content is a string
        if (typeof (content) === "string") {
            // Set the html
            this.el.innerHTML += content;
        }
        else {
            // Append the element
            this.el.appendChild(content);
        }
        // See if we need to add the dismiss icon
        if (this.props.isDismissible) {
            // Add the class
            this.el.classList.add("alert-dismissible");
            // Create the button
            var btn = document.createElement("button");
            btn.className = "close";
            btn.type = "button";
            btn.setAttribute("data-dismiss", "alert");
            btn.setAttribute("aria-label", "Close");
            btn.innerHTML = '<span aria-hidden="true">&times;</span>';
            // Append the button
            this.el.appendChild(btn);
        }
    };
    // Render the header
    _Alert.prototype.renderHeader = function () {
        var header = this.el.querySelector(".alert-heading");
        // See if a header was defined
        if (this.props.header) {
            // Set the heading
            header.innerHTML = this.props.header;
        }
        else {
            // Remove the element
            this.el.removeChild(header);
        }
    };
    /**
     * Bootstrap
     */
    // Closes the alert
    _Alert.prototype.close = function () { this._bootstrapObj ? this._bootstrapObj.alert("toggle") : null; };
    // Disposes the alert
    _Alert.prototype.dispose = function () { this._bootstrapObj ? this._bootstrapObj.alert("dispose") : null; };
    /**
     * Public Properties
     */
    // Clears the alert and updates the text
    _Alert.prototype.setText = function (alertText) {
        // Clear the element
        while (this.el.firstChild) {
            this.el.removeChild(this.el.firstChild);
        }
        // Set the text
        var elText = document.createTextNode(alertText == null ? "" : alertText);
        // Append the text
        this.el.appendChild(elText);
    };
    // Updates the alert template type
    _Alert.prototype.setType = function (alertType) {
        var _this = this;
        // Parse the class names
        exports.AlertClassNames.parse(function (className) {
            // Remove the class name
            _this.el.classList.remove(className);
        });
        // Set the alert type
        this.el.classList.add(exports.AlertClassNames.getByType(alertType) || exports.AlertClassNames.getByType(AlertTypes.Primary));
    };
    return _Alert;
}(base_1.Base));
exports.Alert = function (props) { return new _Alert(props); };
