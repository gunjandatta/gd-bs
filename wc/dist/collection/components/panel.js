export class Panel {
    // Component loaded event
    componentDidLoad() {
        // Get the modal properties
        let modalProps = {};
        if (this.modalProps) {
            try {
                modalProps = JSON.parse(this.modalProps);
            }
            catch (_a) {
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
        return (h("div", null));
    }
    static get is() { return "bs-panel"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "modalProps": {
            "type": String,
            "attr": "modal-props"
        },
        "type": {
            "type": Number,
            "attr": "type"
        }
    }; }
}
