export interface ITippyProps {
    allowHTML?: boolean;
    animation?: string | boolean;
    arrow?: boolean | string | SVGElement | DocumentFragment;
    content?: string | Element;
    inertia?: boolean;
    maxWidth?: number | string;
    role?: string;
    theme?: string;
    zIndex?: number;
}