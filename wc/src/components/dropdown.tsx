import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-dropdown"
})
export class Dropdown {
    @Element() private el: HTMLElement;

    // Dropdown Properties
    @Prop() className: string;
    @Prop() dropLeft: boolean;
    @Prop() dropRight: boolean;
    @Prop() dropUp: boolean;
    @Prop() formFl: boolean;
    @Prop() id: string;
    @Prop() isSplit: boolean;
    @Prop() label: string;
    @Prop() menuOnly: boolean;
    @Prop() multi: boolean;
    @Prop() type: number;
    @Prop() value: string;

    // Render the dropdown
    render() {
        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            dropLeft: this.dropLeft,
            dropRight: this.dropRight,
            dropUp: this.dropUp,
            el: this.el,
            formFl: this.formFl,
            id: this.id,
            isSplit: this.isSplit,
            label: this.label,
            menuOnly: this.menuOnly,
            multi: this.multi,
            type: this.type,
            value: this.value
        });

        // Remove the id attribute
        this.el.removeAttribute("id");

        // Render the dropdown
        return GD.Components.Dropdown(props);
    }
}