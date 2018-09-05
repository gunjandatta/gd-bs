import { IButtonProps } from "./button";
import { IDropdownItem } from "./dropdown";

/**
 * Navbar
 */
export const Navbar: (props: INavbarProps) => INavbar;

/**
 * Navbar Types
 */
export const NavbarTypes: INavbarTypes;

/**
 * Navbar
 */
export interface INavbar {
    /** The element. */
    el: Element;
}

/**
 * Navbar Item
 */
export interface INavbarItem {
    href?: string;
    isActive?: boolean;
    isDisabled?: boolean;
    items?: Array<IDropdownItem>;
    onClick?: (item?: INavbarItem, ev?: Event) => void;
    text?: string;
}

/**
 * Navbar Properties
 */
export interface INavbarProps {
    brand?: string;
    brandUrl?: string;
    className?: string;
    el?: Element | HTMLElement;
    enableSearch?: boolean;
    id?: string;
    items?: Array<INavbarItem>;
    onClick?: (item?: INavbarItem, ev?: Event) => void;
    searchBox?: INavbarSearchBox;
    type?: number;
}

/**
 * Navbar Types
 */
export type INavbarTypes = {
    Dark: number;
    Light: number;
    Primary: number;
}

/**
 * Navbar Search Box
 */
export interface INavbarSearchBox {
    btnType?: number;
    btnText?: string;
    hideButton?: boolean;
    onChange?: (value?: string) => void;
    onSearch?: (value?: string) => void;
    placeholder?: string;
}