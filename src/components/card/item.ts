import { ICardAction, ICardBody } from "./types";
import { appendContent } from "../common";
import { CardAction } from "./action";
import { HTMLItem } from "./templates";

/**
 * Card Body
 */
export class CardBody {
    private _el: HTMLLIElement = null;
    private _props: ICardBody = null;

    // Constructor
    constructor(props: ICardBody) {
        // Save the properties
        this._props = props;

        // Create the item
        let elItem = document.createElement("div");
        elItem.innerHTML = HTMLItem;
        this._el = elItem.firstChild as HTMLLIElement;

        // Configure the item
        this.configure();

        // Configure the events
        this.configureEvents();
    }

    // Configure the body
    private configure() {
        // Set the class names
        if (this._props.className) {
            this._el.classList.add(this._props.className);
        }

        // Update the title
        let elTitle = this._el.querySelector(".card-title") as HTMLElement;
        if (this._props.title || this._props.onRenderTitle) {
            // Append the content
            appendContent(elTitle, this._props.title);

            // Call the render event
            this._props.onRenderTitle ? this._props.onRenderTitle(elTitle, this._props) : null;
        } else {
            // Remove the title
            this._el.removeChild(elTitle);
        }

        // Update the sub-title
        let subTitle = this._el.querySelector(".card-subtitle");
        if (this._props.subTitle) {
            // Set the title
            subTitle.innerHTML = this._props.subTitle;
        } else {
            // Remove the title
            this._el.removeChild(subTitle);
        }

        // Update the text
        let text = this._el.querySelector(".card-text");
        if (this._props.text) {
            // Set the title
            text.innerHTML = this._props.text;
        } else {
            // Remove the title
            this._el.removeChild(text);
        }

        // Append the content
        appendContent(this._el, this._props.content);

        // Render the actions
        this.renderActions();
    }

    // Configure the events
    private configureEvents() {
        // Call the render event if it exists
        this._props.onRender ? this._props.onRender(this._el, this._props) : null;

        // See if there is a click event
        if (this._props.onClick) {
            // Set the click event
            this._el.addEventListener("click", ev => {
                // Execute the event
                this._props.onClick(this._props, ev);
            });
        }
    }

    // Render the card actions
    private renderActions() {
        // Parse the actions
        let actions: Array<ICardAction> = this._props.actions || [];
        for (let i = 0; i < actions.length; i++) {
            // Add the action
            let action = new CardAction(actions[i], this);
            this._el.appendChild(action.el);
        }
    }

    /**
     * Public Interface
     */

    // The component HTML element
    get el() { return this._el; }

    // The component properties
    get props() { return this._props; }
}
