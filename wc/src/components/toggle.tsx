import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-tooltip"
})
export class Tooltip {
    @Element() private el: HTMLElement;

    // Tooltip Properties
    @Prop() className: string;
    @Prop() type: number;

    // Render the tooltip
    render() {
        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            type: this.type
        });

        // Render the tooltip
        return GD.Components.Tooltip(props);
    }
}