import { IButtonProps } from "./button";
import { INavProps } from "./nav";

/**
 * Card
 */
export const Card: (props: ICardProps) => ICard;

/**
 * Card
 */
export interface ICard {
    /** Destroys an element’s card. */
    dispose: () => void;

    /** The element. */
    el: Element;

    /** Hides the card. */
    hide: () => void;

    /** Shows the card. */
    show: () => void;
}

/**
 * Card Action
 */
export interface ICardAction {
    buttonType?: number;
    data?: any;
    onClick?: (action?: ICardAction, card?: ICardBody, ev?: Event) => void;
    href?: string;
    text?: string;
}

/**
 * Card Body
 */
export interface ICardBody {
    actions?: Array<ICardAction>;
    className?: string;
    content?: string;
    data?: any;
    onClick?: (card?: ICardProps, ev?: Event) => void;
    onRender?: (el?: HTMLElement, card?: ICardBody) => void;
    subTitle?: string;
    text?: string;
    title?: string;
}

/**
 * Card Footer
 */
export interface ICardFooter {
    className?: string;
    content?: string;
}

/**
 * Card Header
 */
export interface ICardHeader {
    className?: string;
    content?: string;
    nav?: INavProps;
}

/**
 * Card Properties
 */
export interface ICardProps {
    body?: Array<ICardBody>;
    className?: string;
    el?: Element | HTMLElement;
    footer?: ICardFooter;
    header?: ICardHeader;
    imgBottom?: {
        alt?: string;
        src?: string;
    }
    imgTop?: {
        alt?: string;
        src?: string;
    };
    onClick?: (card?: ICardBody, ev?: Event) => void;
}