export const FloatingUI: (props: IFloatingUIProps) => IFloatingUI;

import { IBaseProps } from "../types";

export const FloatingUIPlacements: IFloatingUIPlacements;

export interface IFloatingUI {
    hide: () => void;
    isVisible: boolean;
    setContent: (el: string | Element) => void;
    show: () => void;
    toggle: () => void;
}

export interface IFloatingUIOptions {
    arrow?: boolean;
    autoPlacement?: boolean | any;
    className?: string;
    content?: string;
    flip?: boolean | any;
    hide?: boolean | any;
    inline?: boolean | any;
    offset?: number | any;
    shift?: boolean | any;
    size?: boolean | any;
    trigger?: '' | 'click' | 'focus' | 'mouse';
}

export interface IFloatingUIProps extends IBaseProps<IFloatingUI> {
    elContent: HTMLElement;
    elTarget: HTMLElement;
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