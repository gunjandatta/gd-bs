import { ICheckboxGroupProps, ICheckboxGroupItem } from "../../../@types/components/checkboxGroup";
/**
 * Checkbox Item
 */
export declare class CheckboxItem {
    private _el;
    private _isSelected;
    private _parent;
    private _props;
    constructor(props: ICheckboxGroupItem, parent: ICheckboxGroupProps);
    private configure;
    private configureEvents;
    private getHTML;
    /**
     * Public Properties
     */
    get el(): HTMLDivElement;
    get isChecked(): boolean;
    get props(): ICheckboxGroupItem;
    toggle(): void;
}
