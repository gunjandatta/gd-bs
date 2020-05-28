"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTML = require("./item.html");
/**
 * Carousel Item
 */
var CarouselItem = /** @class */ (function () {
    // Constructor
    function CarouselItem(props) {
        this._el = null;
        this._props = null;
        // Save the properties
        this._props = props;
        // Create the item
        var elItem = document.createElement("div");
        elItem.innerHTML = HTML;
        this._el = elItem.firstChild;
        // Configure the item
        this.configure();
    }
    // Configure the item
    CarouselItem.prototype.configure = function () {
        // Set the attributes
        this._props.isActive ? this._el.classList.add("active") : null;
        // Get the image elements
        var captions = this._el.querySelector(".carousel-caption");
        var img = this._el.querySelector("img");
        // See if we are rendering an image
        if (this._props.imageUrl) {
            // Set the image properties
            img.alt = this._props.imageAlt == null ? "" : this._props.imageAlt;
            img.src = this._props.imageUrl == null ? "" : this._props.imageUrl;
            // Set the captions
            captions.innerHTML = this._props.captions == null ? "" : this._props.captions;
        }
        else {
            // Remove the elements
            this._el.removeChild(captions);
            this._el.removeChild(img);
            // Set the content
            var content = this._props.content || "";
            if (typeof (content) === "string") {
                // Set the html
                this._el.innerHTML += content;
            }
            else {
                // Append the element
                this._el.appendChild(content);
            }
        }
    };
    Object.defineProperty(CarouselItem.prototype, "el", {
        /**
         * Public Properties
         */
        // The component HTML element
        get: function () { return this._el; },
        enumerable: true,
        configurable: true
    });
    return CarouselItem;
}());
exports.CarouselItem = CarouselItem;
