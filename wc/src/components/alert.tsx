import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-alert"
})
export class Alert {
    @Element() private el: HTMLElement;

    // Alert Properties
    @Prop() className: string;
    @Prop() content: string;
    @Prop() header: string;
    @Prop() isDismissible: boolean;
    @Prop() type: number;

    // Render the alert
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) { return; }

        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            header: this.header,
            isDismissible: this.isDismissible,
            type: this.type
        });

        // Render the alert
        GD.Components.Alert(props);

        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
}