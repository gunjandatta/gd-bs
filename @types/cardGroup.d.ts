import { ICardProps } from ".";

/**
 * Card Group
 */
export const CardGroup: (props: ICardGroupProps) => ICardGroup;

/**
 * Card Group
 */
export interface ICardGroup {
    /** The element. */
    el: Element;

    /** Hides the card group. */
    hide: () => void;

    /** Shows the card group. */
    show: () => void;
}

/**
 * Card Group Properties
 */
export interface ICardGroupProps {
    cards?: Array<ICardProps>;
    className?: string;
    el?: Element | HTMLElement;
    isDeck?: boolean;
}