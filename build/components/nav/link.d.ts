import { INavLink } from "../../../@types/components/nav";
import { Base } from "../base";
/**
 * Nav Link
 */
export declare class NavLink extends Base<INavLink> {
    private _elLink;
    private _elTab;
    constructor(props: INavLink, isTab: boolean);
    private configure;
    private configureEvents;
    /**
     * Public Interface
     */
    get elTab(): HTMLDivElement;
    get isVisible(): boolean;
    toggle(fadeTabs: boolean): void;
}
