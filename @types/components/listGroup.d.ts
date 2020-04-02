import { IBadgeProps } from "./badge";

/**
 * List Group
 */
export const ListGroup: (props: IListGroupProps) => IListGroup;

/**
 * List Group Item Types
 */
export const ListGroupItemTypes: IListGroupItemTypes;

/**
 * List Group
 */
export interface IListGroup {
    /** The element. */
    el: Element;

    /** Hides the list group. */
    hide: () => void;

    /**
     * Shows the list group, or specified tab content.
     * @prop elId - The tab id.
     */
    show: (tabId?: string) => void;
}

/**
 * List Group Item
 */
export interface IListGroupItem {
    badge?: IBadgeProps;
    className?: string;
    content?: string | Element;
    data?: any;
    href?: string;
    isActive?: boolean;
    isDisabled?: boolean;
    onClick?: (el?: HTMLElement, item?: IListGroupItem) => void;
    onRender?: (el?: HTMLElement, item?: IListGroupItem) => void;
    tabName?: string;
    type?: number;
}

/**
 * List Group Properties
 */
export interface IListGroupProps {
    className?: string;
    colWidth?: number;
    el?: Element | HTMLElement;
    fadeTabs?: boolean;
    isFlush?: boolean;
    isTabs?: boolean;
    items?: Array<IListGroupItem>;
}

/**
 * List Group Item Types
 */
export type IListGroupItemTypes = {
    Danger: number;
    Dark: number;
    Info: number;
    Light: number;
    Primary: number;
    Secondary: number;
    Success: number;
    Warning: number;
}