import { INavbarItem, INavbarProps } from "../../../@types/components/navbar";
/**
 * Navbar Item
 */
export declare class NavbarItem {
    private _el;
    private _parent;
    private _props;
    constructor(props: INavbarItem, parent: INavbarProps);
    private configure;
    private configureEvents;
    /**
     * Public Interface
     */
    get el(): HTMLElement;
}
