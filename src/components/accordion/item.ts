import { IAccordionItem } from "../../../@types/components/accordion";

/**
 * Accordion Item
 */
export class AccordionItem {
    private _el: HTMLDivElement = null;
    private _elCollapse: HTMLDivElement = null;
    private _elHeader: HTMLButtonElement = null;
    private _id: string = null;
    private _itemId: string = null;
    private _parentId: string = null;
    private _props: IAccordionItem = null;

    // Constructor
    constructor(parentId: string, itemId: string, props: IAccordionItem, template: string) {
        // Save the properties
        this._id = "collapse_" + itemId;
        this._itemId = itemId;
        this._parentId = parentId;
        this._props = props;

        // Create the item
        let elItem = document.createElement("div");
        elItem.innerHTML = template;
        this._el = elItem.firstChild as HTMLDivElement;

        // Render the header
        this.renderHeader();

        // Render the content
        this.renderContent();

        // Configure the collapse element
        this.configureCollapse();

        // Configure the events
        this.configureEvents();
    }

    // Configures the collapse element
    private configureCollapse() {
        this._elCollapse = this._el.querySelector(".accordion-collapse");
        if (this._elCollapse) {
            this._elCollapse.classList.add(this._props.showFl ? "show" : "collapsed");
            this._elCollapse.setAttribute("aria-labelledby", this._itemId);
            this._elCollapse.setAttribute("data-bs-parent", "#" + this._parentId);
            this._elCollapse.id = this._id;
        }
    }

    // Configures the events
    private configureEvents() {
        // See if there is a click event
        if (this._props.onClick) {
            // Add a click event
            this._elHeader.addEventListener("click", () => {
                // Call the click event
                this._props.onClick(this._elHeader, this._props);
            });
        }

        // Execute the render event
        this._props.onRender ? this._props.onRender(this._el.querySelector(".card-body"), this._props) : null;
    }

    // Renders the content
    private renderContent() {
        let elCardBody = this._el.querySelector(".accordion-body") as HTMLElement;
        if (elCardBody) {
            let content = this._props.content || "";
            if (typeof (content) === "string" || typeof (content) === "number") {
                // Set the html
                elCardBody.innerHTML = content;
            } else {
                // Append the element
                elCardBody.appendChild(content);
            }
        }
    }

    // Renders the header
    private renderHeader() {
        let elHeader = this._el.querySelector(".accordion-header");
        if (elHeader) {
            // Set the properties
            elHeader.id = this._itemId;
        }

        // Get the button
        this._elHeader = this._el.querySelector(".accordion-button");
        if (this._elHeader) {
            // Set the class
            this._elHeader.classList.add(this._props.showFl ? "show" : "collapsed");

            // Set the properties
            this._elHeader.setAttribute("aria-controls", "collapse_" + this._itemId);
            this._elHeader.setAttribute("aria-expanded", this._props.showFl ? "true" : "false");
            this._elHeader.setAttribute("data-bs-target", '#' + "collapse_" + this._itemId);
            this._elHeader.innerHTML = this._props.header;
        }
    }

    /**
     * Public Properties
     */

    // The component HTML element
    get el(): HTMLDivElement { return this._el; }

    // The collapse element
    get elCollapse(): HTMLDivElement { return this._elCollapse; }

    // The header element
    get elHeader(): HTMLButtonElement { return this._elHeader; }

    // The item id
    get id(): string { return this._id; }

    // Returns true if the item is expanded
    get isExpanded(): boolean {
        // See if the item is expanded
        return this.elCollapse.classList.contains("show");
    }

    // Toggles the item
    toggle() {
        // See if it's expanded
        if (this.elCollapse.classList.contains("show")) {
            // Hide it
            this.elCollapse.classList.remove("show");
        } else {
            // Show it
            this.elCollapse.classList.add("show");
        }
    }
}