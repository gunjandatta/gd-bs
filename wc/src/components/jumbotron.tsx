import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-jumbotron"
})
export class Jumbotron {
    @Element() private el: HTMLElement;

    // Jumbotron Properties
    @Prop() className: string;
    @Prop() content: string;
    @Prop() isFluid: boolean;
    @Prop() lead: string;

    // Render the jumbotron
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) { return; }

        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            isFluid: this.isFluid,
            lead: this.lead,
            title: this.el.getAttribute("title")
        });

        // Render the jumbotron
        GD.Components.Jumbotron(props);

        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
}