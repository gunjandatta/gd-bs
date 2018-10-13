import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-pagination"
})
export class Pagination {
    @Element() private el: HTMLElement;

    // Pagination Properties
    @Prop() alignment: number;
    @Prop() className: string;
    @Prop() icon: string;
    @Prop() isLarge: boolean;
    @Prop() isSmall: boolean;
    @Prop() label: string;
    @Prop() numberOfPages: number;

    // Render the pagination
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) { return; }

        // Get the properties
        let props = getProps(this.el, {
            alignment: this.alignment,
            className: this.className,
            el: this.el,
            icon: this.icon,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            label: this.label,
            numberOfPages: this.numberOfPages
        });

        // Render the pagination
        GD.Components.Pagination(props);

        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
}