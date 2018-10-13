import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-nav"
})
export class Nav {
    @Element() private el: HTMLElement;

    // Navigation Properties
    @Prop() className: string;
    @Prop() enableFade: boolean;
    @Prop() enableFill: boolean;
    @Prop() id: string;
    @Prop() isJustified: boolean;
    @Prop() isPills: boolean;
    @Prop() isTabs: boolean;
    @Prop() isVertical: boolean;

    // Render the navigation
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) { return; }

        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            enableFade: this.enableFade,
            enableFill: this.enableFill,
            id: this.id,
            isJustified: this.isJustified,
            isPills: this.isPills,
            isTabs: this.isTabs,
            isVertical: this.isVertical
        });

        // Remove the id attribute
        this.el.removeAttribute("id");

        // Render the navigation
        GD.Components.Nav(props);

        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
}