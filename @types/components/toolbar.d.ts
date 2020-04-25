import { IButtonProps } from "./button";
import { IInputGroupProps } from "./inputGroup";

/**
 * ### Toolbar
 */
export const Toolbar: (props: IToolbarProps) => IToolbar;

/**
 * Toolbar
 */
export interface IToolbar {
    /** The element. */
    el: Element;

    /** Hides the toolbar. */
    hide: () => void;

    /** Shows the toolbar. */
    show: () => void;
}

/**
 * Toolbar Item
 */
export interface IToolbarItem {
    buttons?: Array<IButtonProps>;
    buttonType?: number;
    inputGroup?: IInputGroupProps;
}

/**
 * Toolbar Properties
 */
export interface IToolbarProps {
    className?: string;
    el?: Element | HTMLElement;
    items?: Array<IToolbarItem>;
    spacing?: number;
}