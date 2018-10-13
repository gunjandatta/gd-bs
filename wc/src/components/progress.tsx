import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-progress"
})
export class Progress {
    @Element() private el: HTMLElement;

    // Progress Properties
    @Prop() className: string;
    @Prop() isAnimated: boolean;
    @Prop() isStriped: boolean;
    @Prop() label: string;
    @Prop() max: number;
    @Prop() min: number;
    @Prop() size: number;

    // Render the progress
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) { return; }

        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            isAnimated: this.isAnimated,
            isStriped: this.isStriped,
            label: this.label,
            max: this.max,
            min: this.min,
            size: this.size
        });

        // Render the progress
        GD.Components.Progress(props);

        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
}