import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-collapse"
})
export class Collapse {
    @Element() private el: HTMLElement;

    // Collapse Properties
    @Prop() className: string;
    @Prop() content: string;
    @Prop() id: string;
    @Prop() isMulti: boolean;

    // Render the collapse
    render() {
        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            id: this.id,
            isMulti: this.isMulti
        });

        // Remove the id attribute
        this.el.removeAttribute("id");

        // Render the collapse
        return GD.Components.Collapse(props);
    }
}