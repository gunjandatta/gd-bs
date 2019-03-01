import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-list-group"
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
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) { return; }

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
        GD.Components.ListGroup(props);

        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
}