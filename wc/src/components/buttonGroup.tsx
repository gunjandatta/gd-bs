import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-buttonGroup"
})
export class ButtonGroup {
    @Element() private el: HTMLElement;

    // Button Group Properties
    @Prop() buttonType: number;
    @Prop() className: string;
    @Prop() id: string;
    @Prop() isLarge: boolean;
    @Prop() isSmall: boolean;
    @Prop() isVertical: boolean;
    @Prop() label: string;

    // Render the button group
    render() {
        // Get the properties
        let props = getProps(this.el, {
            buttonType: this.buttonType,
            className: this.className,
            el: this.el,
            id: this.id,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            isVertical: this.isVertical,
            label: this.label
        });

        // Remove the id attribute
        this.el.removeAttribute("id");

        // Render the button group
        return GD.Components.ButtonGroup(props);
    }
}