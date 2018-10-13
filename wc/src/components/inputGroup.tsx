import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-inputGroup"
})
export class InputGroup {
    @Element() private el: HTMLElement;

    // InputGroup Properties
    @Prop() appendedLabel: string;
    @Prop() className: string;
    @Prop() description: string;
    @Prop() id: string;
    @Prop() isLarge: boolean;
    @Prop() isPlainText: boolean;
    @Prop() isReadonly: boolean;
    @Prop() isSmall: boolean;
    @Prop() label: string;
    @Prop() placeholder: string;
    @Prop() prependedLabel: string;
    @Prop() rows: number;
    @Prop() type: number;
    @Prop() value: string;

    // Render the inputGroup
    render() {
        // Get the properties
        let props = getProps(this.el, {
            appendedLabel: this.appendedLabel,
            className: this.className,
            description: this.description,
            el: this.el,
            id: this.id,
            isLarge: this.isLarge,
            isPlainText: this.isPlainText,
            isReadonly: this.isReadonly,
            isSmall: this.isSmall,
            label: this.label,
            placeholder: this.placeholder,
            prependedLabel: this.prependedLabel,
            rows: this.rows,
            type: this.type,
            value: this.value
        });

        // Remove the id attribute
        this.el.removeAttribute("id");

        // Render the inputGroup
        return GD.Components.InputGroup(props);
    }
}