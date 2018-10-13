import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-breadcrumb"
})
export class Breadcrumb {
    @Element() private el: HTMLElement;

    // Breadcrumb Properties
    @Prop() className: string;

    // Render the breadcrumb
    render() {
        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            el: this.el
        });

        // Render the breadcrumb
        return GD.Components.Breadcrumb(props);
    }
}