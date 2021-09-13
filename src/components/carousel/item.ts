import { ICarouselItem } from "./types";
import { appendContent } from "../common";
import { HTMLItem } from "./templates";

/**
 * Carousel Item
 */
export class CarouselItem {
    private _el: HTMLDivElement = null;
    private _props: ICarouselItem = null;

    // Constructor
    constructor(props: ICarouselItem, template: string = HTMLItem) {
        // Save the properties
        this._props = props;

        // Create the item
        let elItem = document.createElement("div");
        elItem.innerHTML = template;
        this._el = elItem.firstChild as HTMLDivElement;

        // Configure the item
        this.configure();
    }

    // Configure the item
    private configure() {
        // Set the attributes
        this._props.isActive ? this._el.classList.add("active") : null;

        // Get the image elements
        let captions = this._el.querySelector(".carousel-caption");
        let img = this._el.querySelector("img");

        // See if we are rendering an image
        if (this._props.imageUrl) {
            // Set the image properties
            img.alt = this._props.imageAlt == null ? "" : this._props.imageAlt;
            img.src = this._props.imageUrl == null ? "" : this._props.imageUrl;

            // Set the captions
            captions.innerHTML = this._props.captions == null ? "" : this._props.captions;
        } else {
            // Remove the elements
            this._el.removeChild(captions);
            this._el.removeChild(img);

            // Append the content
            appendContent(this._el, this._props.content);
        }
    }

    /**
     * Public Properties
     */

    // The component HTML element
    get el(): HTMLDivElement { return this._el; }

    // Returns true if this slide is active
    get isActive(): boolean { return this._el.classList.contains("active"); }
}