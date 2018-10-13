import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-popover"
})
export class Popover {
    @Element() private el: HTMLElement;

    // Popover Properties
    @Prop() className: string;
    @Prop() isDismissible: boolean;
    @Prop() type: number;

    // Render the popover
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) { return; }

        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            isDismissible: this.isDismissible,
            type: this.type
        });

        // Render the popover
        GD.Components.Popover(props);

        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
}