import { IAccordionItem } from "../../../@types/components/accordion";
import { Button, ButtonTypes } from "../button";
import * as HTML from "./item.html";

/**
 * Accordion Item
 */
export class AccordionItem {
    private _el: HTMLDivElement = null;
    private _itemId: string = null;
    private _parentId: string = null;
    private _props: IAccordionItem = null;

    // Constructor
    constructor(parentId: string, itemId: string, props: IAccordionItem) {
        // Save the properties
        this._itemId = itemId;
        this._parentId = parentId;
        this._props = props;

        // Create the item
        let elItem = document.createElement("div");
        elItem.innerHTML = HTML as any;
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
        elCollapse.id = "collapse_" + this._itemId;
    }

    // Configures the events
    private configureEvents() {
        let elCardBody = this._el.querySelector(".card-body") as HTMLElement;

        // See if there is a click event
        if (this._props.onClick) {
            // Add a click event
            elCardBody.addEventListener("click", ev => {
                let el = ev.currentTarget as HTMLElement;

                // Call the click event
                this._props.onClick(el, this._props);
            });
        }

        // Execute the render event
        this._props.onRender ? this._props.onRender(elCardBody, this._props) : null;
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
        btnProps.target = '#collapse_' + this._itemId;
        btnProps.toggle = "collapse";
        btnProps.el = elHeader;
        Button(btnProps);
    }

    /**
     * Public Properties
     */

    // The component HTML element
    get el(): HTMLDivElement { return this._el; }
}