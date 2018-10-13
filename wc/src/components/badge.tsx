import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-badge"
})
export class Badge {
    @Element() private el: HTMLElement;

    // Badge Properties
    @Prop() className: string;
    @Prop() content: string;
    @Prop() header: string;
    @Prop() href: string;
    @Prop() isPill: boolean;
    @Prop() type: number;

    // Render the badge
    render() {
        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            header: this.header,
            href: this.href,
            isPill: this.isPill,
            type: this.type
        });

        // Render the badge
        return GD.Components.Badge(props);
    }
}