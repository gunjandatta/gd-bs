import { IAccordionItem } from "./types";
import { appendContent } from "../common";

/**
 * Accordion Item
 */
export class AccordionItem {
    private _autoCollapse: boolean = null;
    private _el: HTMLDivElement = null;
    private _elCollapse: HTMLDivElement = null;
    private _elHeader: HTMLButtonElement = null;
    private _id: string = null;
    private _itemId: string = null;
    private _parentId: string = null;
    private _props: IAccordionItem = null;

    // Constructor
    constructor(parentId: string, itemId: string, props: IAccordionItem, template: string, autoCollapse: boolean) {
        // Save the properties
        this._autoCollapse = autoCollapse;
        this._id = "collapse" + itemId;
        this._itemId = itemId;
        this._parentId = parentId;
        this._props = props;

        // Create the item
        let elItem = document.createElement("div");
        elItem.innerHTML = template;
        this._el = elItem.firstChild as HTMLDivElement;

        // Set the class name
        let classNames = (this._props.className || "").trim().split(" ");
        for (let i = 0; i < classNames.length; i++) {
            let className = classNames[i];

            // Add the class name
            className ? this._el.classList.add(className) : null;
        }

        // Render the header
        this.renderHeader();

        // Append the content
        appendContent(this._el.querySelector(".accordion-body"), this._props.content);

        // Configure the collapse element
        this.configureCollapse();

        // Configure the events
        this.configureEvents();
    }

    // Configures the collapse element
    private configureCollapse() {
        this._elCollapse = this._el.querySelector(".accordion-collapse");
        if (this._elCollapse) {
            this._props.showFl ? this._elCollapse.classList.add("show") : null;
            this._elCollapse.setAttribute("aria-labelledby", this._itemId);
            this._elCollapse.setAttribute("data-bs-parent", "#" + this._parentId);
            this._elCollapse.id = this._id;
        }
    }

    // Configures the events
    private configureEvents() {
        // Add a click event
        this._elHeader.addEventListener("click", () => {
            // See if the auto collapse flag is not set
            if (!this._autoCollapse) {
                // Toggle the element
                this.toggle();
            }

            // Call the click event
            this._props.onClick ? this._props.onClick(this._elHeader, this._props) : null;
        });

        // Execute the render event
        this._props.onRender ? this._props.onRender(this._el.querySelector(".accordion-body"), this._props) : null;
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
            this._props.showFl ? null : this._elHeader.classList.add("collapsed");

            // Set the properties
            this._elHeader.setAttribute("aria-controls", "collapse" + this._itemId);
            this._elHeader.setAttribute("aria-expanded", this._props.showFl ? "true" : "false");
            this._elHeader.setAttribute("data-bs-target", '#' + "collapse" + this._itemId);
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
        return this.elCollapse.classList.contains("collapsing") || this.elCollapse.classList.contains("show");
    }

    // Toggles the item
    toggle() {
        // See if it's expanded
        if (this.isExpanded) {
            // Start the animation
            this.elCollapse.style.height = this.el.getBoundingClientRect()["height"] + "px";
            setTimeout(() => {
                this.elCollapse.classList.add("collapsing");
                this.elCollapse.classList.remove("collapse");
                this.elCollapse.classList.remove("show");
                this.elCollapse.style.height = "";
            }, 10);

            // Wait for the animation to complete
            setTimeout(() => {
                this.elCollapse.classList.remove("collapsing");
                this.elCollapse.classList.add("collapse");
                this.elHeader.classList.add("collapsed");
            }, 250);
        } else {
            // Start the animation
            this.elCollapse.classList.remove("collapse");
            this.elCollapse.classList.add("collapsing");
            this.elCollapse.style.height = this.el.scrollHeight + "px";

            // Wait for the animation to complete
            setTimeout(() => {
                this.elCollapse.classList.remove("collapsing");
                this.elCollapse.classList.add("collapse");
                this.elCollapse.classList.add("show");
                this.elCollapse.style.height = "";
                this.elHeader.classList.remove("collapsed");
            }, 250);
        }
    }
}