import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-tooltip"
})
export class Tooltip {
    @Element() private el: HTMLElement;

    // Tooltip Properties
    @Prop() className: string;
    @Prop() type: number;

    // Render the tooltip
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) { return; }

        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            type: this.type
        });

        // Render the tooltip
        GD.Components.Tooltip(props);

        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
}