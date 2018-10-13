import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-button"
})
export class Button {
    @Element() private el: HTMLElement;

    // Button Properties
    @Prop() badgeType: number;
    @Prop() badgeValue: string;
    @Prop() className: string;
    @Prop() controls: Array<string>;
    @Prop() id: string;
    @Prop() isBlock: boolean;
    @Prop() isDisabled: boolean;
    @Prop() isExpanded: boolean;
    @Prop() isLarge: boolean;
    @Prop() isOutline: boolean;
    @Prop() isSmall: boolean;
    @Prop() target: string;
    @Prop() text: string;
    @Prop() toggle: string;
    @Prop() type: number;

    // Render the button
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) { return; }

        // Get the properties
        let props = getProps(this.el, {
            badgeType: this.badgeType,
            badgeValue: this.badgeValue,
            className: this.className,
            controls: this.controls,
            el: this.el,
            id: this.id,
            isBlock: this.isBlock,
            isDisabled: this.isDisabled,
            isExpanded: this.isExpanded,
            isLarge: this.isLarge,
            isOutline: this.isOutline,
            isSmall: this.isSmall,
            target: this.target,
            text: this.text,
            toggle: this.toggle,
            type: this.type
        });

        // Remove the id attribute
        this.el.removeAttribute("id");

        // Render the button
        GD.Components.Button(props);

        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
}