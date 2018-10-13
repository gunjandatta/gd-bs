import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-carousel"
})
export class Carousel {
    @Element() private el: HTMLElement;

    // Carousel Properties
    @Prop() className: string;
    @Prop() enableControls: boolean;
    @Prop() enableCrossfade: boolean;
    @Prop() enableIndicators: boolean;
    @Prop() id: string;

    // Render the carousel
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) { return; }

        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            enableControls: this.enableControls,
            enableCrossfade: this.enableCrossfade,
            enableIndicators: this.enableIndicators,
            id: this.id
        });

        // Remove the id attribute
        this.el.removeAttribute("id");

        // Render the carousel
        GD.Components.Carousel(props);

        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
}