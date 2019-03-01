import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-checkbox-group"
})
export class CheckboxGroup {
    @Element() private el: HTMLElement;

    // Card Group Properties
    @Prop() className: string;
    @Prop() colSize: number;
    @Prop() hideLabel: boolean;
    @Prop() label: string;
    @Prop() multi: boolean;
    @Prop() type: number;

    // Render the checkbox group
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) { return; }

        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            colSize: this.colSize,
            hideLabel: this.hideLabel,
            label: this.label,
            multi: this.multi,
            el: this.el,
            type: this.type
        });

        // Render the checkbox group
        GD.Components.CheckboxGroup(props);

        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
}