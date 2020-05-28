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
require("bootstrap/js/dist/modal");
var core_1 = require("../../core");
var base_1 = require("../base");
var HTML = require("./index.html");
/**
 * Modal
 * @param props The modal properties.
 */
var _Modal = /** @class */ (function (_super) {
    __extends(_Modal, _super);
    // Constructor
    function _Modal(props) {
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
    _Modal.prototype.configure = function () {
        // Set the modal attributes
        this.props.id ? this.el.id = this.props.id : null;
        this.props.disableFade ? null : this.el.classList.add("fade");
        this.props.isStatic ? this.el.setAttribute("data-backdrop", "static") : null;
        // Update the dialog
        var dialog = this.el.querySelector(".modal-dialog");
        this.props.isCentered ? dialog.classList.add("modal-dialog-centered") : null;
        this.props.isLarge ? dialog.classList.add("modal-lg") : null;
        this.props.isSmall ? dialog.classList.add("modal-sm") : null;
        // Update the title
        this.setTitle(this.props.title);
        // See if we are hiding the close button
        if (this.props.hideCloseButton) {
            // Remove the close button
            dialog.querySelector("button.close").remove();
        }
        // Update the body
        var body = this.el.querySelector(".modal-body");
        var content = this.props.body || "";
        if (typeof (content) === "string") {
            // Set the HTML
            body.innerHTML = content;
        }
        else {
            // Append the element
            body.appendChild(content);
        }
        // Update the footer
        var footer = this.el.querySelector(".modal-footer");
        content = this.props.footer || "";
        if (typeof (content) === "string") {
            // Set the HTML
            footer.innerHTML = content;
        }
        else {
            // Append the element
            footer.appendChild(content);
        }
        // Get the modal options and default the show flag
        var options = this.props.options || {};
        if (typeof (options.show) !== "boolean") {
            // Default the property
            options.show = false;
        }
        // Create the modal
        this._bootstrapObj = core_1.jQuery ? core_1.jQuery(this.el).modal(options) : null;
    };
    // Configure the events
    _Modal.prototype.configureEvents = function () {
        var _this = this;
        // Execute the events
        this.props.onRenderBody ? this.props.onRenderBody(this.el.querySelector(".modal-body")) : null;
        this.props.onRenderFooter ? this.props.onRenderFooter(this.el.querySelector(".modal-footer")) : null;
        // Get the close button
        var elClose = this.el.querySelector("button.close");
        if (elClose) {
            // Add a click event
            elClose.addEventListener("click", function () {
                // Hide the modal
                _this.hide();
            });
        }
        // See if there is a close event
        if (this.props.onClose) {
            // Add a hidden event
            this._bootstrapObj ? this._bootstrapObj.on("hidden.bs.modal", function () {
                // Call the event
                _this.props.onClose(_this.el);
            }) : null;
        }
    };
    /**
     * Bootstrap
     */
    // Disposes the modal
    _Modal.prototype.dispose = function () { this._bootstrapObj ? this._bootstrapObj.modal("dispose") : null; };
    // Updates the modal
    _Modal.prototype.handleUpdate = function () { this._bootstrapObj ? this._bootstrapObj.modal("handleUpdate") : null; };
    // Hides the modal
    _Modal.prototype.hide = function () {
        // hide the modal
        this._bootstrapObj ? this._bootstrapObj.modal("hide") : null;
    };
    // Shows the modal
    _Modal.prototype.show = function () {
        // Show the modal
        this._bootstrapObj ? this._bootstrapObj.modal("show") : null;
    };
    // Toggles the modal
    _Modal.prototype.toggle = function () {
        // Toggle the modal
        this._bootstrapObj ? this._bootstrapObj.modal("toggle") : null;
    };
    Object.defineProperty(_Modal.prototype, "isVisible", {
        /**
         * Public Interface
         */
        // Returns true if the modal is visible
        get: function () { return this.el.classList.contains("show"); },
        enumerable: true,
        configurable: true
    });
    // Updates the title
    _Modal.prototype.setTitle = function (title) {
        // Get the title
        var elTitle = this.el.querySelector(".modal-title");
        // Set the text
        elTitle.innerHTML = title == null ? "" : title;
    };
    return _Modal;
}(base_1.Base));
exports.Modal = function (props) { return new _Modal(props); };
