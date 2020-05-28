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
var HTMLItem = require("./item.html");
/**
 * Pagination Alignment
 */
var PaginationAlignment;
(function (PaginationAlignment) {
    PaginationAlignment[PaginationAlignment["Center"] = 1] = "Center";
    PaginationAlignment[PaginationAlignment["Left"] = 2] = "Left";
    PaginationAlignment[PaginationAlignment["Right"] = 3] = "Right";
})(PaginationAlignment = exports.PaginationAlignment || (exports.PaginationAlignment = {}));
/**
 * Pagination
 */
var _Pagination = /** @class */ (function (_super) {
    __extends(_Pagination, _super);
    // Constructor
    function _Pagination(props) {
        var _this = _super.call(this, HTML, props) || this;
        _this._items = null;
        // Configure the collapse
        _this.configure();
        // Configure the parent
        _this.configureParent();
        return _this;
    }
    // Configure the card group
    _Pagination.prototype.configure = function () {
        // Update the nav properties
        this.props.label ? this.el.setAttribute("aria-label", this.props.label) : null;
        // Update the list
        var list = this.el.querySelector("ul");
        this.props.isLarge ? list.classList.add("pagination-lg") : null;
        this.props.isSmall ? list.classList.add("pagination-sm") : null;
        // Read the alignment
        switch (this.props.alignment) {
            // Danger
            case PaginationAlignment.Center:
                list.classList.add("justify-content-center");
                break;
            // Dark
            case PaginationAlignment.Right:
                list.classList.add("justify-content-end");
                break;
        }
        // Render the page numbers
        this.renderPageNumbers(list);
    };
    // Configures the next/previous buttons, based on the active index
    _Pagination.prototype.configureNextPrevButtons = function (activePage) {
        // Update the previous button
        var prevItem = this._items[0];
        if (activePage == 1) {
            // Ensure the previous item is disabled
            prevItem.classList.add("disabled");
        }
        else {
            // Ensure the previous item is enabled
            prevItem.classList.remove("disabled");
        }
        // Update the next button
        var nextItem = this._items[this._items.length - 1];
        if (activePage == this._items.length - 2) {
            // Ensure the previous item is disabled
            nextItem.classList.add("disabled");
        }
        else {
            // Ensure the previous item is enabled
            nextItem.classList.remove("disabled");
        }
    };
    // Configure the events
    _Pagination.prototype.configureEvents = function (item) {
        var _this = this;
        // See if this is the next or previous item and skip it
        var link = item.querySelector("a").getAttribute("aria-label");
        if (link == "Previous" || link == "Next") {
            var isPrevious_1 = link == "Previous";
            // Add a click event
            item.addEventListener("click", function (ev) {
                // Prevent the page from moving to the top
                ev.preventDefault();
                // Do nothing if it's disabled
                if (item.classList.contains("disabled")) {
                    return;
                }
                // Parse the items, excluding the next/previous items
                for (var i = 1; i < _this._items.length - 1; i++) {
                    var item_1 = _this._items[i];
                    // See if this item is active
                    if (item_1.classList.contains("active")) {
                        // See if the previous button was clicked
                        if (isPrevious_1) {
                            // Click the previous item if it's available
                            i - 1 > 0 ? _this._items[i - 1].click() : null;
                        }
                        else {
                            // Click the next item if it's available
                            i < _this._items.length - 2 ? _this._items[i + 1].click() : null;
                        }
                        // Break from the loop
                        break;
                    }
                }
            });
        }
        else {
            var pageNumber_1 = parseInt(link);
            // Add a click event
            item.addEventListener("click", function (ev) {
                // Prevent the page from moving to the top
                ev.preventDefault();
                // Parse the active items
                var activeItems = _this.el.querySelectorAll(".page-item.active");
                for (var i = 0; i < activeItems.length; i++) {
                    var item_2 = activeItems[i];
                    // Clear the active class
                    item_2.classList.remove("active");
                    // Remove the active span
                    var span_1 = item_2.querySelector("span");
                    span_1 ? span_1.remove() : null;
                }
                // Make this item active
                item.classList.add("active");
                // Add the span
                var span = document.createElement("span");
                span.classList.add("sr-only");
                span.innerHTML = "(current)";
                item.appendChild(span);
                // Configure the next/previous buttons
                _this.configureNextPrevButtons(pageNumber_1);
                // Class the click event
                _this.props.onClick ? _this.props.onClick(parseInt(item.innerHTML), ev) : null;
            });
        }
    };
    // Creates an page number item
    _Pagination.prototype.createItem = function (text) {
        // Create the item
        var el = document.createElement("div");
        el.innerHTML = HTMLItem;
        var item = el.firstChild;
        this._items.push(item);
        // Update the link
        var link = item.querySelector("a");
        link.innerHTML = text;
        link.setAttribute("aria-label", link.innerHTML);
        // Configure the events
        this.configureEvents(item);
        // Return the item
        return item;
    };
    // Renders the page numbers
    _Pagination.prototype.renderPageNumbers = function (list) {
        // Clear the items
        this._items = [];
        // Create the previous link
        var item = this.createItem("Previous");
        list.appendChild(item);
        // Loop for the number of pages to create
        // Parse the number of pages
        var pages = this.props.numberOfPages || 1;
        for (var i = 1; i <= pages; i++) {
            // Create a link
            item = this.createItem(i.toString());
            list.appendChild(item);
        }
        // Create the next link
        item = this.createItem("Next");
        list.appendChild(item);
        // Set the first page number as active
        this._items[1].click();
    };
    return _Pagination;
}(base_1.Base));
exports.Pagination = function (props) { return new _Pagination(props); };
