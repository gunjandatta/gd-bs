import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-navbar"
})
export class Navbar {
    @Element() private el: HTMLElement;

    // Navbar Properties
    @Prop() brand: string;
    @Prop() brandUrl: string;
    @Prop() className: string;
    @Prop() enableSearch: boolean;
    @Prop() id: string;
    @Prop() type: number;

    // Render the navbar
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) { return; }

        // Get the properties
        let props = getProps(this.el, {
            brand: this.brand,
            brandUrl: this.brandUrl,
            className: this.className,
            el: this.el,
            enableSearch: this.enableSearch,
            id: this.id,
            type: this.type
        });

        // Remove the id attribute
        this.el.removeAttribute("id");

        // Render the navbar
        GD.Components.Navbar(props);

        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
}