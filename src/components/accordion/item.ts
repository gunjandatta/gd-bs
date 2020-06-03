import { IAccordionItem } from "../../../@types/components/accordion";
import { IButton } from "../../../@types/components/button";
import { Button, ButtonTypes } from "../button";
import { HTMLItem } from "./templates";

/**
 * Accordion Item
 */
export class AccordionItem {
    private _el: HTMLDivElement = null;
    private _elHeader: IButton = null;
    private _id: string = null;
    private _itemId: string = null;
    private _parentId: string = null;
    private _props: IAccordionItem = null;

    // Constructor
    constructor(parentId: string, itemId: string, props: IAccordionItem) {
        // Save the properties
        this._id = "collapse_" + itemId;
        this._itemId = itemId;
        this._parentId = parentId;
        this._props = props;

        // Create the item
        let elItem = document.createElement("div");
        elItem.innerHTML = HTMLItem;
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
        let elCollapse = this._el.querySelector(".collapse");
        this._props.showFl ? elCollapse.classList.add("show") : null;
        elCollapse.setAttribute("aria-labelledby", this._itemId);
        elCollapse.setAttribute("data-parent", "#" + this._parentId);
        elCollapse.id = this._id;
    }

    // Configures the events
    private configureEvents() {
        // See if there is a click event
        if (this._props.onClick) {
            // Add a click event
            this._elHeader.el.addEventListener("click", () => {
                // Call the click event
                this._props.onClick(this._elHeader.el as any, this._props);
            });
        }

        // Execute the render event
        this._props.onRender ? this._props.onRender(this._el.querySelector(".card-body"), this._props) : null;
    }

    // Renders the content
    private renderContent() {
        let elCardBody = this._el.querySelector(".card-body") as HTMLElement;
        let content = this._props.content || "";
        if (typeof (content) === "string") {
            // Set the html
            elCardBody.innerHTML = content;
        } else {
            // Append the element
            elCardBody.appendChild(content);
        }
    }

    // Renders the header
    private renderHeader() {
        let elHeader = this._el.querySelector(".card-header");
        elHeader.id = this._itemId;

        // Render the button to the header
        let btnProps = this._props.btnProps || {};
        typeof (btnProps.type) === "number" ? null : btnProps.type = ButtonTypes.Link;
        btnProps.controls = "collapse_" + this._itemId;
        btnProps.isExpanded = this._props.showFl ? true : false;
        btnProps.target = '#' + btnProps.controls;
        btnProps.toggle = "collapse";
        btnProps.el = elHeader;
        this._elHeader = Button(btnProps);
    }

    /**
     * Public Properties
     */

    // The component HTML element
    get el(): HTMLDivElement { return this._el; }

    // The collapse element
    get elCollapse(): HTMLDivElement { return this._el.querySelector(".collapse") || this._el.querySelector(".collapsing"); }

    // The header element
    get elHeader(): HTMLButtonElement { return this._elHeader.el as any; }

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