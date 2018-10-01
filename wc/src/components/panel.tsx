import { Component, Element, Prop } from "@stencil/core";
declare var GD;

@Component({
    tag: "bs-panel"
})
export class Panel {
    @Element() private el: HTMLElement;

    // Panel Properties
    @Prop() className: string;
    @Prop() modalProps: string;
    @Prop() type: number;

    // Component loaded event
    componentDidLoad() {
        // Get the modal properties
        let modalProps = {};
        if (this.modalProps) {
            try { modalProps = JSON.parse(this.modalProps); }
            catch {
                modalProps = {};

                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.modalProps);
            }
        }

        // Render the panel
        return GD.Components.Panel({
            className: this.className,
            el: this.el.children[0],
            modalProps,
            type: this.type
        });
    }

    // Render the panel
    render() {
        return (
            <div />
        );
    }
}