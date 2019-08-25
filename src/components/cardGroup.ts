import { Card } from "./card";
import { ICardGroup, ICardGroupProps } from "../../@types/cardGroup";

/**
 * Card Group
 * @property props - The button group properties.
 */
export const CardGroup = (props: ICardGroupProps): ICardGroup => {
    // Create the card group
    let cardGroup = document.createElement("div");

    // Set the class names
    cardGroup.className = props.className || "";
    cardGroup.classList.add(props.isDeck ? "card-deck" : "card-group");

    // Parse the cards
    let cards = props.cards || [];
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];

        // Add the button html
        cardGroup.appendChild(Card(card).el);
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(cardGroup);

    // See if we are rendering it to an element
    if (props.el) {
        // Ensure the class list exists and it's not the body element
        if (props.el.classList && props.el.tagName != "BODY") {
            // Set the bootstrap class
            props.el.classList.contains("bs") ? null : props.el.classList.add("bs");
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
    return { el: cardGroup };
}