export const FloatingUI: (props: IFloatingUIProps) => IFloatingUI;

import { IBaseProps } from "../types";

export const FloatingUIPlacements: IFloatingUIPlacements;

export interface IFloatingUI {
    addIgnoreElement: (el: Element) => void;
    hide: () => void;
    isVisible: boolean;
    refreshPosition: () => void;
    removeIgnoreElement: (el: Element) => void;
    setContent: (el: string | Element) => void;
    show: () => void;
    toggle: () => void;
}

export interface IFloatingUIOptions {
    arrow?: boolean;
    autoPlacement?: boolean | any;
    className?: string;
    content?: string | Element;
    flip?: boolean | any;
    hide?: boolean | any;
    hideOnClick?: boolean;
    inline?: boolean | any;
    offset?: number | any;
    shift?: boolean | any;
    size?: boolean | any;
    trigger?: '' | 'click' | 'focus' | 'mouse';
}

export interface IFloatingUIProps extends IBaseProps<IFloatingUI> {
    elContent: HTMLElement;
    elTarget: HTMLElement;
    onHide?: (el?: HTMLElement) => void;
    onShow?: (el?: HTMLElement) => void;
    options?: IFloatingUIOptions;
    placement?: number;
    show?: boolean;
    theme?: number;
}

/**
 * Floating UI Placements
 */
export type IFloatingUIPlacements = {
    Auto: number;
    AutoStart: number;
    AutoEnd: number;
    Bottom: number;
    BottomStart: number;
    BottomEnd: number;
    Left: number;
    LeftStart: number;
    LeftEnd: number;
    Right: number;
    RightStart: number;
    RightEnd: number;
    Top: number;
    TopStart: number;
    TopEnd: number;
}
/**
 * Floating UI
 */
export type IFloatingUITypes = {
    Danger: number;
    Dark: number;
    Info: number;
    Light: number;
    LightBorder: number;
    Material: number;
    Primary: number;
    Secondary: number;
    Success: number;
    Translucent: number;
    Warning: number;
}