import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-listGroup"
})
export class ListGroup {
    @Element() private el: HTMLElement;

    // List Group Properties
    @Prop() className: string;
    @Prop() colWidth: number;
    @Prop() enableFade: boolean;
    @Prop() isFlush: boolean;
    @Prop() isTabs: boolean;

    // Render the list group
    render() {
        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            colWidth: this.colWidth,
            el: this.el,
            enableFade: this.enableFade,
            isFlush: this.isFlush,
            isTabs: this.isTabs
        });

        // Render the list group
        return GD.Components.ListGroup(props);
    }
}