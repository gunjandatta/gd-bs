import { IListGroupItem } from "../../../@types/components/listGroup";
import { Base } from "../base";
/**
 * List Group Item
 */
export declare class ListGroupItem extends Base<IListGroupItem> {
    private _elTab;
    constructor(props: IListGroupItem, isTab?: boolean);
    private configure;
    private configureEvents;
    /**
     * Public Interface
     */
    get elTab(): HTMLDivElement;
    get isVisible(): boolean;
    toggle(fadeTabs: boolean): void;
}
