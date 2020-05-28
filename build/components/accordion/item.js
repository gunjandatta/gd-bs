"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var button_1 = require("../button");
var HTML = require("./item.html");
/**
 * Accordion Item
 */
var AccordionItem = /** @class */ (function () {
    // Constructor
    function AccordionItem(parentId, itemId, props) {
        this._el = null;
        this._elHeader = null;
        this._id = null;
        this._itemId = null;
        this._parentId = null;
        this._props = null;
        // Save the properties
        this._id = "collapse_" + itemId;
        this._itemId = itemId;
        this._parentId = parentId;
        this._props = props;
        // Create the item
        var elItem = document.createElement("div");
        elItem.innerHTML = HTML;
        this._el = elItem.firstChild;
        // Render the header
        this.renderHeader();
        // Render the content
        this.renderContent();
        // Configure the collapse element
        this.configureCollapse();
        // Configure the events
        this.configureEvents();
    }
    // Configures the collapse element
    AccordionItem.prototype.configureCollapse = function () {
        var elCollapse = this._el.querySelector(".collapse");
        this._props.showFl ? elCollapse.classList.add("show") : null;
        elCollapse.setAttribute("aria-labelledby", this._itemId);
        elCollapse.setAttribute("data-parent", "#" + this._parentId);
        elCollapse.id = this._id;
    };
    // Configures the events
    AccordionItem.prototype.configureEvents = function () {
        var _this = this;
        // See if there is a click event
        if (this._props.onClick) {
            // Add a click event
            this._elHeader.el.addEventListener("click", function () {
                // Call the click event
                _this._props.onClick(_this._elHeader.el, _this._props);
            });
        }
        // Execute the render event
        this._props.onRender ? this._props.onRender(this._el.querySelector(".card-body"), this._props) : null;
    };
    // Renders the content
    AccordionItem.prototype.renderContent = function () {
        var elCardBody = this._el.querySelector(".card-body");
        var content = this._props.content || "";
        if (typeof (content) === "string") {
            // Set the html
            elCardBody.innerHTML = content;
        }
        else {
            // Append the element
            elCardBody.appendChild(content);
        }
    };
    // Renders the header
    AccordionItem.prototype.renderHeader = function () {
        var elHeader = this._el.querySelector(".card-header");
        elHeader.id = this._itemId;
        // Render the button to the header
        var btnProps = this._props.btnProps || {};
        typeof (btnProps.type) === "number" ? null : btnProps.type = button_1.ButtonTypes.Link;
        btnProps.controls = "collapse_" + this._itemId;
        btnProps.isExpanded = this._props.showFl ? true : false;
        btnProps.target = '#' + btnProps.controls;
        btnProps.toggle = "collapse";
        btnProps.el = elHeader;
        this._elHeader = button_1.Button(btnProps);
    };
    Object.defineProperty(AccordionItem.prototype, "el", {
        /**
         * Public Properties
         */
        // The component HTML element
        get: function () { return this._el; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionItem.prototype, "elCollapse", {
        // The collapse element
        get: function () { return this._el.querySelector(".collapse") || this._el.querySelector(".collapsing"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionItem.prototype, "elHeader", {
        // The header element
        get: function () { return this._elHeader.el; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionItem.prototype, "id", {
        // The item id
        get: function () { return this._id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionItem.prototype, "isExpanded", {
        // Returns true if the item is expanded
        get: function () {
            // See if the item is expanded
            return this.elCollapse.classList.contains("show");
        },
        enumerable: true,
        configurable: true
    });
    // Toggles the item
    AccordionItem.prototype.toggle = function () {
        // See if it's expanded
        if (this.elCollapse.classList.contains("show")) {
            // Hide it
            this.elCollapse.classList.remove("show");
        }
        else {
            // Show it
            this.elCollapse.classList.add("show");
        }
    };
    return AccordionItem;
}());
exports.AccordionItem = AccordionItem;
