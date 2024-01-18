import { ICardGroup, ICardGroupProps } from "./types";
import { Base } from "../base";
import { Card } from "../card";
import { HTML } from "./templates";

/**
 * Card Group
 * @property props - The button group properties.
 */
class _CardGroup extends Base<ICardGroupProps> implements ICardGroup {
    // Constructor
    constructor(props: ICardGroupProps, template: string = HTML, cardTemplate?: string) {
        super(template, props);

        // Configure the card group
        this.configure(cardTemplate);

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure(cardTemplate: string) {
        let cards = this.props.cards || [];
        let isGrid = false;

        // See if we are rendering columns
        if (typeof (this.props.colSize) === "number") {
            // Update the flag
            isGrid = true;

            // Update the class name
            (this.el as HTMLElement).classList.remove("card-group");
            (this.el as HTMLElement).classList.add("row");

            // Determine the column class to use
            let colSize = this.props.colSize > 0 && this.props.colSize <= 12 ? this.props.colSize : 4;
            (this.el as HTMLElement).classList.add("row-cols-" + colSize);
        }

        // Parse the cards
        for (let i = 0; i < cards.length; i++) {
            // Create the card
            let card = Card(cards[i], cardTemplate);

            // See if we are using a grid
            if (isGrid) {
                // Create a column element
                let elCol = document.createElement("div");
                elCol.classList.add("col");
                elCol.appendChild(card.el);

                // Add the card
                this.el.appendChild(elCol);
            } else {
                // Add the card
                this.el.appendChild(card.el);
            }
        }
    }
}
export const CardGroup = (props: ICardGroupProps, template?: string, cardTemplate?: string): ICardGroup => { return new _CardGroup(props, template, cardTemplate); }