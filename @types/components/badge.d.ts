/**
 * Badge
 */
export const Badge: (props: IBadgeProps) => IBadge;

/**
 * Badge Types
 */
export const BadgeTypes: IBadgeTypes;

/**
 * Badge
 */
export interface IBadge {
    /** The element. */
    el: Element;

    /** Hides the badge. */
    hide: () => void;

    /** Shows the badge. */
    show: () => void;
}

/**
 * Badge Properties
 */
export interface IBadgeProps {
    className?: string;
    content?: string | Element;
    data?: any;
    el?: Element | HTMLElement;
    header?: string;
    href?: string;
    isPill?: boolean;
    onClick?: (badge?: IBadgeProps, ev?: Event) => void;
    type?: number;
}

/**
 * Badge Types
 */
export type IBadgeTypes = {
    Danger: number;
    Dark: number;
    Info: number;
    Light: number;
    Primary: number;
    Secondary: number;
    Success: number;
    Warning: number;
}