import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var GD;

@Component({
    tag: "bs-modal"
})
export class Modal {
    @Element() private el: HTMLElement;

    // Modal Properties
    @Prop() body: string;
    @Prop() className: string;
    @Prop() disableFade: boolean;
    @Prop() footer: string;
    @Prop() hideCloseButton: boolean;
    @Prop() id: string;
    @Prop() isCentered: boolean;
    @Prop() isLarge: boolean;
    @Prop() isSmall: boolean;

    // Render the modal
    render() {
        // Get the properties
        let props = getProps(this.el, {
            body: this.body,
            className: this.className,
            disableFade: this.disableFade,
            el: this.el,
            footer: this.footer,
            hideCloseButton: this.hideCloseButton,
            id: this.id,
            isCentered: this.isCentered,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            title: this.el.getAttribute("title")
        });

        // Remove the id attribute
        this.el.removeAttribute("id");

        // Render the modal
        return GD.Components.Modal(props);
    }
}