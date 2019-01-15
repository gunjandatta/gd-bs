import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-toast"
})
export class Toast {
    @Element() private el: HTMLElement;

    // Toast Properties
    @Prop() bodyText: string;
    @Prop() className: string;
    @Prop() closeButtonHidden: boolean;
    @Prop() closeButtonText: boolean;
    @Prop() headerImgClass: string;
    @Prop() headerImgSrc: string;
    @Prop() headerText: string;

    // Render the toast
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) { return; }

        // Get the properties
        let props = getProps(this.el, {
            bodyText: this.bodyText,
            className: this.className,
            closeButtonHidden: this.closeButtonHidden,
            closeButtonText: this.closeButtonText,
            el: this.el,
            headerImgClass: this.headerImgClass,
            headerImgSrc: this.headerImgSrc,
            headerText: this.headerText
        });

        // Render the toast
        GD.Components.Toast(props);

        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
}