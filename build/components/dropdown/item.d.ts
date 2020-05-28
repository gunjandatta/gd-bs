import { IDropdownItem, IDropdownProps } from "../../../@types/components/dropdown";
/**
 * Dropdown Item
 */
export declare class DropdownItem {
    private _el;
    private _isSelected;
    private _parent;
    private _props;
    constructor(props: IDropdownItem, parent: IDropdownProps);
    private configure;
    private configureEvents;
    /**
     * Public Interface
     */
    get el(): HTMLElement;
    get isSelected(): boolean;
    get props(): IDropdownItem;
    toggle(): void;
}
