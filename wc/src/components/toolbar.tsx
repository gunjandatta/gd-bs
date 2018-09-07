import { Component, Element, Prop } from "@stencil/core";
declare var GD;

@Component({
    tag: "bs-toolbar"
})
export class Toolbar {
    @Element() private el: HTMLElement;

    // Toolbar Properties
    @Prop() items: string;
    @Prop() className: string;
    @Prop() spacing: number;

    // Component loaded event
    componentDidLoad() {
        // Get the items
        let items = [];
        if (this.items) {
            try { items = JSON.parse(this.items); }
            catch {
                items = [];

                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.items);
            }
        }

        // Render the toolbar
        return GD.Components.Toolbar({
            className: this.className,
            el: this.el.children[0],
            items,
            spacing: this.spacing
        });
    }

    // Render the toolbar
    render() {
        return (
            <div />
        );
    }
}