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
        return GD.Components.Pagination(props);
    }
}