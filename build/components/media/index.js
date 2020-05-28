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
 * Media Images Types
 */
var MediaImageTypes;
(function (MediaImageTypes) {
    MediaImageTypes[MediaImageTypes["Bottom"] = 1] = "Bottom";
    MediaImageTypes[MediaImageTypes["Center"] = 2] = "Center";
    MediaImageTypes[MediaImageTypes["Top"] = 3] = "Top";
})(MediaImageTypes = exports.MediaImageTypes || (exports.MediaImageTypes = {}));
/**
 * Media Images Class Names
 */
var MediaImagesClassNames = new classNames_1.ClassNames([
    "align-self-end",
    "align-self-center",
    "align-self-start"
]);
/**
 * Media Order Types
 */
var MediaOrderTypes;
(function (MediaOrderTypes) {
    MediaOrderTypes[MediaOrderTypes["Left"] = 1] = "Left";
    MediaOrderTypes[MediaOrderTypes["Right"] = 2] = "Right";
})(MediaOrderTypes = exports.MediaOrderTypes || (exports.MediaOrderTypes = {}));
/**
 * Media
 */
var _Media = /** @class */ (function (_super) {
    __extends(_Media, _super);
    // Constructor
    function _Media(props) {
        var _this = _super.call(this, HTML, props) || this;
        // Configure the collapse
        _this.configure();
        // Configure the parent
        _this.configureParent();
        return _this;
    }
    // Configure the card group
    _Media.prototype.configure = function () {
        // See if we are rendering the body first
        if (this.props.order == MediaOrderTypes.Right) {
            // Render the components
            this.renderBody();
            this.renderIcon();
            this.renderImage();
        }
        else {
            // Render the components
            this.renderIcon();
            this.renderImage();
            this.renderBody();
        }
    };
    // Method to render the body
    _Media.prototype.renderBody = function () {
        // Create the element
        var body = document.createElement("div");
        body.classList.add("media-body");
        this.el.appendChild(body);
        // Set the body content
        var content = this.props.body || "";
        if (typeof (content) === "string") {
            // Set the html
            body.innerHTML = content;
        }
        else {
            // Append the element
            body.appendChild(content);
        }
        // Parse the items
        var items = this.props.items || [];
        for (var i = 0; i < items.length; i++) {
            // Append the media object
            body.appendChild(exports.Media(items[i]).el);
        }
        // Call the render event
        this.props.onRenderBody ? this.props.onRenderBody(body) : null;
    };
    // Method to render the icon
    _Media.prototype.renderIcon = function () {
        // See if the icon properties exist
        if (this.props.icon) {
            // Create the icon
            var icon = GD.Icons ? GD.Icons(this.props.icon.icon, this.props.icon.height, this.props.icon.width) : null;
            if (icon) {
                // Parse the class names
                var classNames = (this.props.icon.className || "").trim().split(' ');
                for (var i = 0; i < classNames.length; i++) {
                    var className_1 = classNames[i];
                    // Add the class name
                    className_1 ? icon.classList.add(className_1) : null;
                }
                // Get the icon type
                var className = MediaImagesClassNames.getByType(this.props.icon.type);
                if (className) {
                    icon.classList.add(className);
                }
                // See if this is a link
                if (this.props.icon.url) {
                    // Create a link
                    var link = document.createElement("a");
                    link.href = this.props.image.url;
                    link.appendChild(icon);
                    this.el.appendChild(link);
                    // See if a click event exists
                    if (this.props.icon.onClick) {
                        // Add the click event
                        link.addEventListener("click", this.props.icon.onClick);
                    }
                }
                else {
                    // Add the icon
                    this.el.appendChild(icon);
                    // See if a click event exists
                    if (this.props.icon.onClick) {
                        // Add the click event
                        icon.addEventListener("click", this.props.icon.onClick);
                    }
                }
            }
        }
    };
    // Method to render the image
    _Media.prototype.renderImage = function () {
        // Create the image
        var image = this.props.image ? document.createElement("img") : null;
        if (image) {
            // Set the properties
            image.alt = this.props.image.alt;
            image.className = this.props.image.className || "";
            image.src = this.props.image.src == null ? "" : this.props.image.src;
            // Get the image type
            var className = MediaImagesClassNames.getByType(this.props.icon.type);
            if (className) {
                image.classList.add(className);
            }
            // See if this is a link
            if (this.props.image.url) {
                // Create a link
                var link = document.createElement("a");
                link.href = this.props.image.url;
                link.appendChild(image);
                this.el.insertBefore(link, this.el.firstChild);
                // See if a click event exists
                if (this.props.icon.onClick) {
                    // Add the click event
                    link.addEventListener("click", this.props.icon.onClick);
                }
            }
            else {
                // Add the image
                this.el.appendChild(image);
                // See if a click event exists
                if (this.props.icon.onClick) {
                    // Add the click event
                    image.addEventListener("click", this.props.icon.onClick);
                }
            }
        }
    };
    return _Media;
}(base_1.Base));
exports.Media = function (props) { return new _Media(props); };
