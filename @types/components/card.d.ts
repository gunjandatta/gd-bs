/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs-icons.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the card
 *         $REST.Components.Card({
 *             className: "w-25",
 *             el: document.querySelector("#demo"),
 *             body: [
 *                 {
 *                     "title": "Card Title",
 *                     "text": "This is the card contents.",
 *                     "actions": [
 *                         { "text": "Card Action", "buttonType": $REST.Components.ButtonTypes.Primary }
 *                     ]
 *                 }
 *             ]
 *         });
 *     });
 * </script>
 */

/**
 * ### Card
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the card
 * let el = document.querySelector("#card");
 * let card = Components.Card({
 *     el: el,
 *     className: "w-25",
 *     body: [
 *         {
 *             title: "Card Title",
 *             text: "This is the card contents.",
 *             actions: [
 *                 {
 *                     text: "Card Action",
 *                     buttonType: $REST.Components.ButtonTypes.Primary
 *                 }
 *             ]
 *         }
 *     ]
 * });
 * ```
 */
export const Card: (props: ICardProps) => ICard;

import { IButtonProps } from "./button";
import { INavProps } from "./nav";

/**
 * Card
 */
export interface ICard {
    /** Destroys an element’s card. */
    dispose: () => void;

    /** The element. */
    el: Element;

    /** Hides the card. */
    hide: () => void;

    /** Shows the card. */
    show: () => void;
}

/**
 * Card Action
 */
export interface ICardAction {
    buttonType?: number;
    data?: any;
    onClick?: (action?: ICardAction, card?: ICardBody, ev?: Event) => void;
    href?: string;
    text?: string;
}

/**
 * Card Body
 */
export interface ICardBody {
    actions?: Array<ICardAction>;
    className?: string;
    content?: string | Element;
    data?: any;
    onClick?: (card?: ICardProps, ev?: Event) => void;
    onRender?: (el?: HTMLElement, card?: ICardBody) => void;
    subTitle?: string;
    text?: string;
    title?: string;
}

/**
 * Card Footer
 */
export interface ICardFooter {
    className?: string;
    content?: string | Element;
}

/**
 * Card Header
 */
export interface ICardHeader {
    className?: string;
    content?: string | Element;
    nav?: INavProps;
}

/**
 * Card Properties
 */
export interface ICardProps {
    body?: Array<ICardBody>;
    className?: string;
    el?: Element | HTMLElement;
    footer?: ICardFooter;
    header?: ICardHeader;
    imgBottom?: {
        alt?: string;
        src?: string;
    }
    imgTop?: {
        alt?: string;
        src?: string;
    };
    onClick?: (card?: ICardBody, ev?: Event) => void;
}