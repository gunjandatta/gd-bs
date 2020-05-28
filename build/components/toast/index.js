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
require("bootstrap/js/dist/toast");
require("bootstrap/js/dist/util");
var core_1 = require("../../core");
var base_1 = require("../base");
var HTML = require("./index.html");
/**
 * Toast
 * @param props - The toast properties.
 */
var _Toast = /** @class */ (function (_super) {
    __extends(_Toast, _super);
    // Constructor
    function _Toast(props) {
        var _this = _super.call(this, HTML, props) || this;
        // Configure the collapse
        _this.configure();
        // Configure the events
        _this.configureEvents();
        // Configure the parent
        _this.configureParent();
        return _this;
    }
    // Configure the card group
    _Toast.prototype.configure = function () {
        var header = this.el.querySelector(".toast-header");
        // See if we are rendering an image
        var img = header.querySelector("img");
        if (this.props.headerImgSrc) {
            // Create the image
            img.className = this.props.headerImgClass || "";
            img.src = this.props.headerImgSrc;
        }
        else {
            // Remove the image
            img.remove();
        }
        // See if header text is defined
        var headerText = header.querySelector("strong");
        if (this.props.headerText) {
            // Update the header text
            headerText.innerHTML = this.props.headerText;
        }
        else {
            // Remove the header
            headerText.remove();
        }
        // See if muted text is defined
        var mutedText = header.querySelector("small");
        if (this.props.mutedText) {
            // Create the text
            mutedText.innerHTML = this.props.mutedText;
        }
        else {
            // Remove the element
            mutedText.remove();
        }
        // See if we are creating the close button
        var closeButton = header.querySelector("button");
        if (this.props.hideCloseButton) {
            // Remove the button
            closeButton.remove();
        }
        // Update the body
        var body = this.el.querySelector(".toast-body");
        var content = this.props.body || "";
        if (typeof (content) === "string") {
            // Set the html
            body.innerHTML = content;
        }
        else {
            // Append the element
            body.appendChild(content);
        }
        // Initialize the toast component
        var options = this.props.options || {};
        this._bootstrapObj = core_1.jQuery ? core_1.jQuery(this.el).toast(options) : null;
        // See if we are showing this toast
        if (options.autohide == false) {
            // Show the toast
            this.show();
        }
    };
    // Configures the events
    _Toast.prototype.configureEvents = function () {
        var _this = this;
        // Execute the render events
        this.props.onRenderHeader ? this.props.onRenderHeader(this.el.querySelector(".toast-header"), this.props.data) : null;
        this.props.onRenderBody ? this.props.onRenderBody(this.el.querySelector(".toast-body"), this.props.data) : null;
        // See if the click event exists
        if (this.props.onClick) {
            // Set the click event
            this.el.addEventListener("click", function () {
                // Execute the click event
                _this.props.onClick(_this.el, _this.props.data);
            });
        }
    };
    /**
     * Bootstrap
     */
    // Hides the toast
    _Toast.prototype.hide = function () { this._bootstrapObj ? this._bootstrapObj.toast("hide") : null; };
    // Shows the toast
    _Toast.prototype.show = function () { this._bootstrapObj ? this._bootstrapObj.toast("show") : null; };
    return _Toast;
}(base_1.Base));
exports.Toast = function (props) { return new _Toast(props); };
