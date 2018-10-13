import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-collapse"
})
export class Collapse {
    @Element() private el: HTMLElement;

    // Collapse Properties
    @Prop() className: string;
    @Prop() content: string;
    @Prop() id: string;
    @Prop() isMulti: boolean;

    // Render the collapse
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) { return; }

        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            id: this.id,
            isMulti: this.isMulti
        });

        // Remove the id attribute
        this.el.removeAttribute("id");

        // Render the collapse
        GD.Components.Collapse(props);

        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
}