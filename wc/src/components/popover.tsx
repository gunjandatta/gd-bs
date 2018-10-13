import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-popover"
})
export class Popover {
    @Element() private el: HTMLElement;

    // Popover Properties
    @Prop() className: string;
    @Prop() isDismissible: boolean;
    @Prop() type: number;

    // Render the popover
    render() {
        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            isDismissible: this.isDismissible,
            type: this.type
        });

        // Render the popover
        return GD.Components.Popover(props);
    }
}