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
        // Parse the cards
        let cards = this.props.cards || [];
        for (let i = 0; i < cards.length; i++) {
            // Add the card
            this.el.appendChild(Card(cards[i], cardTemplate).el);
        }
    }
}
export const CardGroup = (props: ICardGroupProps, template?: string, cardTemplate?: string): ICardGroup => { return new _CardGroup(props, template, cardTemplate); }