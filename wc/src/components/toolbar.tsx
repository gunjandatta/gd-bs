import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-toolbar"
})
export class Toolbar {
    @Element() private el: HTMLElement;

    // Toolbar Properties
    @Prop() className: string;
    @Prop() spacing: number;

    // Render the toolbar
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) { return; }

        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            spacing: this.spacing
        });

        // Render the toolbar
        GD.Components.Toolbar(props);

        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
}