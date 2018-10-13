import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-progressGroup"
})
export class ProgressGroup {
    @Element() private el: HTMLElement;

    // Progress Properties
    @Prop() className: string;
    @Prop() isMultiple: boolean;

    // Render the progress group
    render() {
        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            isMultiple: this.isMultiple
        });

        // Render the progress group
        return GD.Components.ProgressGroup(props);
    }
}