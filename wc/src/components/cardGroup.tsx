import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-cardGroup"
})
export class CardGroup {
    @Element() private el: HTMLElement;

    // Card Group Properties
    @Prop() className: string;

    // Render the card group
    render() {
        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            el: this.el
        });

        // Render the card group
        return GD.Components.CardGroup(props);
    }
}