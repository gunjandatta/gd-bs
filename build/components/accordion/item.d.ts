import { IAccordionItem } from "../../../@types/components/accordion";
/**
 * Accordion Item
 */
export declare class AccordionItem {
    private _el;
    private _elHeader;
    private _id;
    private _itemId;
    private _parentId;
    private _props;
    constructor(parentId: string, itemId: string, props: IAccordionItem);
    private configureCollapse;
    private configureEvents;
    private renderContent;
    private renderHeader;
    /**
     * Public Properties
     */
    get el(): HTMLDivElement;
    get elCollapse(): HTMLDivElement;
    get elHeader(): HTMLButtonElement;
    get id(): string;
    get isExpanded(): boolean;
    toggle(): void;
}
