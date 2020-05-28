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
 * Jumbotron
 */
var _Jumbotron = /** @class */ (function (_super) {
    __extends(_Jumbotron, _super);
    // Constructor
    function _Jumbotron(props) {
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
    _Jumbotron.prototype.configure = function () {
        // Set the class names
        this.props.isFluid ? this.el.classList.add("jumbotron-fluid") : null;
        // Set the title
        var title = this.el.querySelector("h1");
        if (this.props.title) {
            // Set the title
            title.innerHTML = this.props.title;
        }
        else {
            // Remove the title
            this.el.removeChild(title);
        }
        // Set the lead
        var lead = this.el.querySelector("p");
        if (this.props.lead) {
            // Set the lead
            lead.innerHTML = this.props.lead;
        }
        else {
            // Remove the lead
            this.el.removeChild(lead);
        }
        // Set the content
        var content = this.props.content || "";
        if (typeof (content) === "string") {
            // Set the html
            this.el.innerHTML += content;
        }
        else {
            // Append the element
            this.el.appendChild(content);
        }
    };
    // Configures the events
    _Jumbotron.prototype.configureEvents = function () {
        // Call the render event
        this.props.onRenderContent ? this.props.onRenderContent(this.el) : null;
    };
    return _Jumbotron;
}(base_1.Base));
exports.Jumbotron = function (props) { return new _Jumbotron(props); };
