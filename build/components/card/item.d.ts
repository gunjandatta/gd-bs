import { ICardBody } from "../../../@types/components/card";
/**
 * Card Body
 */
export declare class CardBody {
    private _el;
    private _props;
    constructor(props: ICardBody);
    private configure;
    private configureEvents;
    private renderActions;
    /**
     * Public Interface
     */
    get el(): HTMLLIElement;
    get props(): ICardBody;
}
