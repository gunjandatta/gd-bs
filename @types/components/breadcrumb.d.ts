/**
 * Breadcrumb
 */
export const Breadcrumb: (props: IBreadcrumbProps) => IBreadcrumb;

/**
 * Breadcrumb
 */
export interface IBreadcrumb {
    /** The element. */
    el: Element;

    /** Hides the breadcrumb. */
    hide: () => void;

    /** Shows the breadcrumb. */
    show: () => void;
}

/**
 * Breadcrumb Item
 */
export interface IBreadcrumbItem {
    /** The breadcrumb link */
    href?: string;

    /** Internal flag set by the component */
    isActive?: boolean;

    /** Click event for the link */
    onClick?: (item?: IBreadcrumbItem, ev?: Event) => void;

    /** The link text */
    text?: string;
}

/**
 * Breadcrumb Properties
 */
export interface IBreadcrumbProps {
    /** The breadcrumb class name */
    className?: string;

    /** The element to render the breadcrumb to. */
    el?: Element | HTMLElement;

    /** The breadcrumb items */
    items?: Array<IBreadcrumbItem>

    /** Click event for the link */
    onClick?: (item?: IBreadcrumbItem, ev?: Event) => void;
}