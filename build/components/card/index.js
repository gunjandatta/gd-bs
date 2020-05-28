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
var nav_1 = require("../nav");
var HTML = require("./index.html");
var item_1 = require("./item");
/**
 * Card
 */
var _Card = /** @class */ (function (_super) {
    __extends(_Card, _super);
    // Constructor
    function _Card(props) {
        var _this = _super.call(this, HTML, props) || this;
        // Configure the card
        _this.configure();
        // Configure the parent
        _this.configureParent();
        return _this;
    }
    // Configure the card
    _Card.prototype.configure = function () {
        // See if the top image exists
        if (this.props.imgTop) {
            // Add the top image
            var img = document.createElement("img");
            img.alt = this.props.imgTop.alt == null ? "" : this.props.imgTop.alt;
            img.className = "card-img-top";
            img.src = this.props.imgTop.src == null ? "" : this.props.imgTop.src;
            this.el.appendChild(img);
        }
        // Configure the header
        this.configureHeader();
        // Render the cards
        this.renderCards();
        // Configure the footer
        this.configureFooter();
        // See if the bottom image exists
        if (this.props.imgBottom) {
            // Add the bottom image
            var img = document.createElement("img");
            img.alt = this.props.imgBottom.alt == null ? "" : this.props.imgBottom.alt;
            img.className = "card-img-bottom";
            img.src = this.props.imgBottom.src == null ? "" : this.props.imgBottom.src;
            this.el.appendChild(img);
        }
    };
    // Configure the events
    _Card.prototype.configureEvents = function (body) {
        var _this = this;
        // See if there is a click event
        if (this.props.onClick) {
            // Set the click event
            body.el.addEventListener("click", function (ev) {
                // Execute the event
                _this.props.onClick(body.props);
            });
        }
    };
    // Configure the header
    _Card.prototype.configureHeader = function () {
        // See if the header exists
        if (this.props.header) {
            // See if the navigation exists
            if (this.props.header.nav) {
                var navProps = this.props.header.nav;
                // Set the class
                navProps.className = [
                    navProps.className || "",
                    "card-header-tabs"
                ].join(' ');
                // Render the navigation
                this.el.appendChild(nav_1.Nav(navProps).el);
            }
            else {
                // Render the header
                var header = document.createElement("div");
                header.className = this.props.header.className || "";
                header.classList.add("card-header");
                this.el.appendChild(header);
                // Set the content
                var content = this.props.header.content == null ? "" : this.props.header.content;
                if (typeof (content) === "string") {
                    // Set the html
                    header.innerHTML = content;
                }
                else {
                    // Append the element
                    header.appendChild(content);
                }
            }
        }
    };
    // Configure the footer
    _Card.prototype.configureFooter = function () {
        // See if the footer exists
        if (this.props.footer) {
            // Add the footer
            var footer = document.createElement("div");
            footer.className = this.props.footer.className || "";
            footer.classList.add("card-footer");
            this.el.appendChild(footer);
            // Set the content
            var content = this.props.footer.content == null ? "" : this.props.footer.content;
            if (typeof (content) === "string") {
                // Set the html
                footer.innerHTML = content;
            }
            else {
                // Append the element
                footer.appendChild(content);
            }
        }
    };
    // Render the cards
    _Card.prototype.renderCards = function () {
        // Parse the body cards
        var items = this.props.body || [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            // Append the body card
            var body = new item_1.CardBody(item);
            this.el.appendChild(body.el);
            // Configure the events
            this.configureEvents(body);
        }
    };
    return _Card;
}(base_1.Base));
exports.Card = function (props) { return new _Card(props); };
