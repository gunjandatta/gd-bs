import { IBase, IBaseProps } from '../base';

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
export interface IBadge extends IBase<IBadgeProps> {
    /** The element. */
    el: HTMLAnchorElement | HTMLSpanElement;
}

/**
 * Badge Properties
 */
export interface IBadgeProps extends IBaseProps{
    content?: string | Element;
    data?: any;
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