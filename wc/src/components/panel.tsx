import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-panel"
})
export class Panel {
    @Element() private el: HTMLElement;

    // Panel Properties
    @Prop() className: string;
    @Prop() type: number;

    // Render the panel
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

        // Render the panel
        GD.Components.Panel(props);

        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
}