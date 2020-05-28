import { IBreadcrumbItem } from "../../../@types/components/breadcrumb";
/**
 * Breadcrumb Item
 */
export declare class BreadcrumbItem {
    private _el;
    private _elLink;
    private _props;
    constructor(props: IBreadcrumbItem);
    private configure;
    private configureEvents;
    /**
     * Public Properties
     */
    get el(): HTMLLIElement;
    get props(): IBreadcrumbItem;
}
