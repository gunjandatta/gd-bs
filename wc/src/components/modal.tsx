import { Component, Element, Prop } from "@stencil/core";
declare var GD;

@Component({
    tag: "bs-modal"
})
export class Modal {
    @Element() private el: HTMLElement;

    // Modal Properties
    @Prop() body: string;
    @Prop() button: string;
    @Prop() className: string;
    @Prop() disableFade: boolean;
    @Prop() footer: string;
    @Prop() hideCloseButton: boolean;
    @Prop() id: string;
    @Prop() isCentered: boolean;
    @Prop() isLarge: boolean;
    @Prop() isSmall: boolean;

    // Component loaded event
    componentDidLoad() {
        // Get the events attribute
        let onClose = this.el.getAttribute("onClose");
        let onRenderBody = this.el.getAttribute("onRenderBody");
        let onRenderFooter = this.el.getAttribute("onRenderFooter");

        // Remove the id attribute
        this.el.removeAttribute("id");

        // Get the button properties
        let buttonProps = {};
        if (this.button) {
            try { buttonProps = JSON.parse(this.button); }
            catch {
                buttonProps = {};

                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.button);
            }
        }

        // Render the modal
        return GD.Components.Modal({
            body: this.body,
            button: buttonProps,
            className: this.className,
            disableFade: this.disableFade,
            el: this.el.children[0],
            footer: this.footer,
            hideCloseButton: this.hideCloseButton,
            id: this.id,
            isCentered: this.isCentered,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            title: this.el.getAttribute("title"),
            onClose: (...args) => {
                // See if a render body event exists
                if (onClose && window[onClose]) {
                    // Call the event
                    window[onClose].apply(this, args);
                }
            },
            onRenderBody: (...args) => {
                // See if a render body event exists
                if (onRenderBody && window[onRenderBody]) {
                    // Call the event
                    window[onRenderBody].apply(this, args);
                }
            },
            onRenderFooter: (...args) => {
                // See if a render footer event exists
                if (onRenderFooter && window[onRenderFooter]) {
                    // Call the event
                    window[onRenderFooter].apply(this, args);
                }
            }
        });
    }

    // Render the modal
    render() {
        return (
            <div />
        );
    }
}