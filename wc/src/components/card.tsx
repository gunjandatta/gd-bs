import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-card"
})
export class Card {
    @Element() private el: HTMLElement;

    // Card Properties
    @Prop() className: string;
    @Prop() footer: string;
    @Prop() header: string;
    @Prop() imgBottom: object;
    @Prop() imgTop: object;

    // Render the card
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) { return; }

        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            footer: this.footer,
            header: this.header,
            imgBottom: this.imgBottom,
            imgTop: this.imgTop
        });

        // Render the card
        GD.Components.Card(props);

        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
}