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
        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            id: this.id
        });

        // Remove the id attribute
        this.el.removeAttribute("id");

        // Return the accordion
        return GD.Components.Accordion(props);
    }
}