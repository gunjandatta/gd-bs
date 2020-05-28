import { ICardAction } from "../../../@types/components/card";
import { CardBody } from "./item";
/**
 * Card Action
 */
export declare class CardAction {
    private _el;
    private _parent;
    private _props;
    constructor(props: ICardAction, parent: CardBody);
    private configure;
    private configureEvents;
    /**
     * Public Interface
     */
    get el(): HTMLAnchorElement;
}
