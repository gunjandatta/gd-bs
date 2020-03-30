import { ICardAction, ICardBody } from "../../../@types/components/card";
import * as HTML from "./item.html";
import { CardAction } from "./action";

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
        elItem.innerHTML = HTML as any;
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
        let title = this._el.querySelector(".card-title");
        if (this._props.title) {
            // Set the title
            title.innerHTML = this._props.title;
        } else {
            // Remove the title
            this._el.removeChild(title);
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

        // Set the content
        let content = this._props.content || "";
        if (typeof (content) === "string") {
            // Set the html
            this._el.innerHTML += content;
        } else {
            // Append the element
            this._el.appendChild(content);
        }

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
