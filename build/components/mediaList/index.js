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
var media_1 = require("../media");
var base_1 = require("../base");
var HTML = require("./index.html");
/**
 * Media List
 */
var _MediaList = /** @class */ (function (_super) {
    __extends(_MediaList, _super);
    // Constructor
    function _MediaList(props) {
        var _this = _super.call(this, HTML, props) || this;
        // Configure the collapse
        _this.configure();
        // Configure the parent
        _this.configureParent();
        return _this;
    }
    // Configure the card group
    _MediaList.prototype.configure = function () {
        // Render the items
        this.renderItems();
    };
    // Renders the items
    _MediaList.prototype.renderItems = function () {
        // Parse the items
        var items = this.props.items || [];
        for (var i = 0; i < items.length; i++) {
            // Render the media object
            var mediaObj = media_1.Media(items[i]);
            // Create the list item
            var item = document.createElement("li");
            item.className = mediaObj.el.className;
            this.el.appendChild(item);
            // Move the media elements to the item
            while (mediaObj.el.firstChild) {
                // Move the element
                item.appendChild(mediaObj.el.firstChild);
            }
        }
    };
    return _MediaList;
}(base_1.Base));
exports.MediaList = function (props) { return new _MediaList(props); };
