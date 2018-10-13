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
        return GD.Components.Card(props);
    }
}