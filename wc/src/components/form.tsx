import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-form"
})
export class Form {
    @Element() private el: HTMLElement;

    // Render the form
    render() {
        // Get the properties
        let props = getProps(this.el, {
            el: this.el
        });

        // Render the form
        return GD.Components.Form(props);
    }
}