import { ICardAction } from "../../../@types/components/card";
import { ButtonClassNames, ButtonTypes } from "../button";
import * as HTML from "./action.html";
import { CardBody } from "./item";

/**
 * Card Action
 */
export class CardAction {
    private _el: HTMLAnchorElement = null;
    private _parent: CardBody = null;
    private _props: ICardAction = null;

    // Constructor
    constructor(props: ICardAction, parent: CardBody) {
        // Save the properties
        this._parent = parent;
        this._props = props;

        // Create the item
        let elItem = document.createElement("div");
        elItem.innerHTML = (HTML as any as string).trim();
        this._el = elItem.firstChild as HTMLAnchorElement;

        // Configure the item
        this.configure();

        // Configure the events
        this.configureEvents();
    }

    // Configure the action
    private configure() {
        // Set the attributes
        this._el.href = this._props.href || this._el.href;
        this._el.innerHTML = this._props.text == null ? "" : this._props.text;

        // Set the default type
        let defaultType = ButtonClassNames[this._props.buttonType - 1] || "card-link";
        this._el.classList.add(defaultType);
    }

    // Configure the events
    private configureEvents() {
        // See if there is a click event
        if (this._props.onClick) {
            // Add a click event
            this._el.addEventListener("click", ev => {
                // Execute the event
                this._props.onClick(this._props, this._parent.props, ev);
            });
        }
    }

    /**
     * Public Interface
     */

    // The component HTML element
    get el() { return this._el; }
}