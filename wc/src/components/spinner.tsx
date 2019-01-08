import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-spinner"
})
export class Spinner {
    @Element() private el: HTMLElement;

    // Spinner Properties
    @Prop() className: string;
    @Prop() isGrowing: boolean;
    @Prop() isSmall: boolean;
    @Prop() text: string;
    @Prop() type: number;

    // Render the spinner
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) { return; }

        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            isGrowing: this.isGrowing,
            isSmall: this.isSmall,
            text: this.text,
            type: this.type
        });

        // Render the spinner
        GD.Components.Spinner(props);

        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
}