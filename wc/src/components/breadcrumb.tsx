import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-breadcrumb"
})
export class Breadcrumb {
    @Element() private el: HTMLElement;

    // Breadcrumb Properties
    @Prop() className: string;

    // Render the breadcrumb
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) { return; }

        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            el: this.el
        });

        // Render the breadcrumb
        GD.Components.Breadcrumb(props);

        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
}