import * as jQuery from "jquery";
import { Card } from "./card";
import { ICardGroup, ICardGroupProps } from "./types/cardGroup";

/**
 * Card Group
 * @property props - The button group properties.
 */
export const CardGroup = (props: ICardGroupProps): ICardGroup => {
    let html = [];

    // Set the class names
    let classNames = ["card-group"];
    props.className ? classNames.push(props.className) : null;

    // Set the starting tag
    html.push('<div class="' + classNames.join(' ') + '">');

    // Parse the cards
    let cards = props.cards || [];
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];

        // Add the button html
        html.push(Card(card).el.innerHTML);
    }

    // Add the closing tag
    html.push("</div>");

    // Create the element
    let el = document.createElement("div");
    el.innerHTML = html.join('\n');

    // See if are rendering it to an element
    if (props.el) {
        // Ensure the parent element exists
        if (props.el.parentElement && props.el.parentElement.classList) {
            // Set the bootstrap class
            props.el.parentElement.classList.contains("bs") ? null : props.el.parentElement.classList.add("bs");
        }

        // Append the elements
        while (el.children.length > 0) {
            props.el.appendChild(el.children[0]);
        }

        // Update the element
        el = props.el as any;
    } else {
        // Set the bootstrap class
        el.classList.add("bs");
    }

    // Return the card group
    let cardGroup = jQuery(el.children[0]);
    return { el };
}