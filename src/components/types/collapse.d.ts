import { IButtonProps } from "./button";

/**
 * Collapse
 */
export const Collapse: (props: ICollapseProps) => ICollapse;

/**
 * Collapse
 */
export interface ICollapse {
    /** Destroys an element’s collapse. */
    dispose: () => void;

    /** The element. */
    el: Element;

    /** Hides a collapsible element. */
    hide: () => void;

    /** Shows a collapsible element. */
    show: () => void;

    /** Toggles the collapsible element on invocation. */
    toggle: () => void;
}

/**
 * Collapse Options
 */
export interface ICollapseOptions {
    parent?: string | Element;
    toggle?: boolean;
}

/**
 * Collapse Properties
 */
export interface ICollapseProps {
    className?: string;
    content?: string;
    data?: any;
    el?: Element | HTMLElement;
    id?: string;
    isMulti?: boolean;
    onRender?: (props?: ICollapseProps, el?: HTMLElement) => void;
    options?: ICollapseOptions;
}