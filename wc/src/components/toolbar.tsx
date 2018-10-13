import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-toolbar"
})
export class Toolbar {
    @Element() private el: HTMLElement;

    // Toolbar Properties
    @Prop() className: string;
    @Prop() spacing: number;

    // Render the toolbar
    render() {
        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            spacing: this.spacing
        });

        // Render the toolbar
        return GD.Components.Toolbar(props);
    }
}