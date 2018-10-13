import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-panel"
})
export class Panel {
    @Element() private el: HTMLElement;

    // Panel Properties
    @Prop() className: string;
    @Prop() type: number;

    // Render the panel
    render() {
        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            type: this.type
        });

        // Render the panel
        return GD.Components.Panel(props);
    }
}