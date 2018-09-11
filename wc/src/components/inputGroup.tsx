import { Component, Element, Prop } from "@stencil/core";
declare var GD;

@Component({
    tag: "bs-inputGroup"
})
export class InputGroup {
    @Element() private el: HTMLElement;

    // InputGroup Properties
    @Prop() appendedButtons: string;
    @Prop() appendedLabel: string;
    @Prop() className: string;
    @Prop() description: string;
    @Prop() id: string;
    @Prop() isLarge: boolean;
    @Prop() isPlainText: boolean;
    @Prop() isReadonly: boolean;
    @Prop() isSmall: boolean;
    @Prop() label: string;
    @Prop() placeholder: string;
    @Prop() prependedButtons: string;
    @Prop() prependedLabel: string;
    @Prop() rows: number;
    @Prop() type: number;
    @Prop() value: string;

    // Component loaded event
    componentDidLoad() {
        // Get the events
        let onChange = this.el.getAttribute("onChange");
        let onClear = this.el.getAttribute("onClear");

        // Remove the id attribute
        this.el.removeAttribute("id");

        // Get the appended buttons
        let appendedButtons = [];
        if (this.appendedButtons) {
            try { appendedButtons = JSON.parse(this.appendedButtons); }
            catch {
                appendedButtons = [];

                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.appendedButtons);
            }
        }

        // Get the prepended buttons
        let prependedButtons = [];
        if (this.prependedButtons) {
            try { prependedButtons = JSON.parse(this.prependedButtons); }
            catch {
                prependedButtons = [];

                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.prependedButtons);
            }
        }

        // Render the inputGroup
        return GD.Components.InputGroup({
            appendedButtons,
            appendedLabel: this.appendedLabel,
            className: this.className,
            description: this.description,
            el: this.el.children[0],
            id: this.id,
            isLarge: this.isLarge,
            isPlainText: this.isPlainText,
            isReadonly: this.isReadonly,
            isSmall: this.isSmall,
            label: this.label,
            placeholder: this.placeholder,
            prependedButtons,
            prependedLabel: this.prependedLabel,
            rows: this.rows,
            type: this.type,
            value: this.value,
            onChange: (...args) => {
                // See if a change event exists
                if (onChange && window[onChange]) {
                    // Call the event
                    window[onChange].apply(this, args);
                }
            },
            onClear: (...args) => {
                // See if a clear event exists
                if (onClear && window[onClear]) {
                    // Call the event
                    window[onClear].apply(this, args);
                }
            }
        });
    }

    // Render the inputGroup
    render() {
        return (
            <div />
        );
    }
}