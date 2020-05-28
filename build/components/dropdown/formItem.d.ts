import { IDropdownItem, IDropdownProps } from "../../../@types/components/dropdown";
/**
 * Dropdown Form Item
 */
export declare class DropdownFormItem {
    private _el;
    private _isSelected;
    private _parent;
    private _props;
    constructor(props: IDropdownItem, parent: IDropdownProps);
    private configure;
    /**
     * Public Interface
     */
    get el(): HTMLElement;
    get isSelected(): boolean;
    get props(): IDropdownItem;
    toggle(): void;
}
