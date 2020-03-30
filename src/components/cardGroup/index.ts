import { ICardGroup, ICardGroupProps } from "../../../@types/components/cardGroup";
import { Base } from "../base";
import { Card } from "../card";
import * as HTML from "./index.html";

/**
 * Card Group
 * @property props - The button group properties.
 */
class _CardGroup extends Base<ICardGroupProps> implements ICardGroup {
    // Constructor
    constructor(props: ICardGroupProps) {
        super(HTML, props);

        // Configure the card group
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
        // Set the default class
        this.el.classList.add(this.props.isDeck ? "card-deck" : "card-group");

        // Parse the cards
        let cards = this.props.cards || [];
        for (let i = 0; i < cards.length; i++) {
            // Add the card
            this.el.appendChild(Card(cards[i]).el);
        }
    }
}
export const CardGroup = (props: ICardGroupProps): ICardGroup => { return new _CardGroup(props); }