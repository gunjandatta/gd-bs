import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-accordion"
})
export class Accordion {
    @Element() private el: HTMLElement;

    // Accordion Properties
    @Prop() className: string;
    @Prop() id: string;

    // Render the accordion
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) { return; }

        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            id: this.id
        });

        // Remove the id attribute
        this.el.removeAttribute("id");

        // Render the accordion
        GD.Components.Accordion(props);

        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
}