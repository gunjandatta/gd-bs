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
require("bootstrap/js/dist/carousel");
require("bootstrap/js/dist/util");
var core_1 = require("../../core");
var base_1 = require("../base");
var HTML = require("./index.html");
var item_1 = require("./item");
/**
 * Carousel
 * @param props - The carousel properties.
 */
var _Carousel = /** @class */ (function (_super) {
    __extends(_Carousel, _super);
    // Constructor
    function _Carousel(props) {
        var _this = _super.call(this, HTML, props) || this;
        // Configure the carousel
        _this.configure();
        // Configure the parent
        _this.configureParent();
        // Create the bootstrap object
        _this._bootstrapObj = core_1.jQuery ? core_1.jQuery(_this.el).carousel(_this.props.options || {}) : null;
        return _this;
    }
    // Configure the card group
    _Carousel.prototype.configure = function () {
        // Set the attributes
        this.el.id = "carousel_" + (this.props.id == null ? "" : this.props.id);
        this.props.enableCrossfade ? this.el.classList.add("carousel-fade") : null;
        // Render the indicators
        this.renderIndicators();
        // Render the controls
        this.renderControls();
        // Render the slides
        this.renderSlides();
    };
    // Renders the controls
    _Carousel.prototype.renderControls = function () {
        // Get the controls
        var nextControl = this.el.querySelector(".carousel-control-next");
        var prevControl = this.el.querySelector(".carousel-control-prev");
        // See if we are rendering controls
        if (this.props.enableControls) {
            // Configure the controls
            nextControl.href = "#" + this.el.id;
            prevControl.href = "#" + this.el.id;
        }
        else {
            // Remove the controls
            this.el.removeChild(nextControl);
            this.el.removeChild(prevControl);
        }
    };
    // Renders the indicators
    _Carousel.prototype.renderIndicators = function () {
        // Get the indicators
        var indicators = this.el.querySelector(".carousel-indicators");
        // See if we are enabling indicators
        if (this.props.enableIndicators) {
            // Parse the items
            var items = this.props.items || [];
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                // Create the item
                var elItem = document.createElement("li");
                elItem.setAttribute("data-target", "#" + this.el.id);
                elItem.setAttribute("data-slide-to", i.toString());
                item.isActive ? elItem.classList.add("active") : null;
                // Add the item
                indicators.appendChild(elItem);
            }
        }
        else {
            // Remove the indicators
            this.el.removeChild(indicators);
        }
    };
    // Renders the slides
    _Carousel.prototype.renderSlides = function () {
        // Get the indicators
        var slides = this.el.querySelector(".carousel-inner");
        // Parse the items
        var items = this.props.items || [];
        for (var i = 0; i < items.length; i++) {
            var slide = new item_1.CarouselItem(items[i]);
            // Create the item element
            slides.appendChild(slide.el);
        }
    };
    /**
     * Bootstrap
     */
    // Cycle the carousel
    _Carousel.prototype.cycle = function () { this._bootstrapObj ? this._bootstrapObj.carousel("cycle") : null; };
    // Disposes the carousel
    _Carousel.prototype.dispose = function () { this._bootstrapObj ? this._bootstrapObj.carousel("dispose") : null; };
    // Goes to the next slide
    _Carousel.prototype.next = function () { this._bootstrapObj ? this._bootstrapObj.carousel("next") : null; };
    // Sets the slide by number
    _Carousel.prototype.number = function (value) { this._bootstrapObj ? this._bootstrapObj.carousel(value) : null; };
    // Pauses the slide
    _Carousel.prototype.pause = function () { this._bootstrapObj ? this._bootstrapObj.carousel("pause") : null; };
    // Goes to the previous slide
    _Carousel.prototype.previous = function () { this._bootstrapObj ? this._bootstrapObj.carousel("prev") : null; };
    return _Carousel;
}(base_1.Base));
exports.Carousel = function (props) { return new _Carousel(props); };
