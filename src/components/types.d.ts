/**
 * Base
 */
export interface IBase<IProps = IBaseProps> {
    /** Internal method to configure the parent element. */
    configureParent(): HTMLElement;

    /** The component HTML element */
    el: HTMLElement;

    /** Hides the component. */
    hide(): void;

    /** The component properties */
    props: IProps;

    /** Shows the component. */
    show(): void;
}

/**
 * Base Properties
 */
export interface IBaseProps<IBaseObj = any> {
    /** Assigns the object to the input parameter. */
    assignTo?: (obj: IBaseObj) => void;

    /** Custom class names. */
    className?: string;

    /** The element to render the component to. */
    el?: HTMLElement;
}

/** Tippy Options */
export interface ITippyProps {
    allowHTML?: boolean;
    animateFill?: boolean;
    animation?: string | boolean;
    appendTo?: HTMLElement;
    aria?: object;
    arrow?: boolean | string | SVGElement | DocumentFragment;
    content?: string | Element;
    delay?: number | [number | null, number | null];
    duration?: number | [number | null, number | null];
    followCursor?: boolean | 'horizontal' | 'vertical' | 'initial';
    hideOnClick?: boolean | 'toggle';
    ignoreAttributes?: boolean;
    inertia?: boolean;
    inlinePositioning?: boolean;
    interactive?: boolean;
    interactiveBorder?: number;
    interactiveDebounce?: number;
    maxWidth?: number | string;
    moveTransition?: string;
    offset?: number[];
    onAfterUpdate?: (tippyObj?, props?) => void;
    onBeforeUpdate?: (tippyObj?, props?) => void;
    onClickOutside?: (tippyObj?, ev?) => void;
    onCreate?: (tippyObj?) => void;
    onDestroy?: (tippyObj?) => void;
    onHidden?: (tippyObj?) => void;
    onHide?: (tippyObj?) => void;
    onMount?: (tippyObj?) => void;
    onShow?: (tippyObj?) => void;
    onShown?: (tippyObj?) => void;
    onTrigger?: (tippyObj?, ev?) => void;
    onUntrigger?: (tippyObj?, ev?) => void;
    placement?: string;
    plugins?: any[];
    popperOptions?: object;
    role?: string;
    showOnCreate?: boolean;
    sticky?: boolean | 'reference' | 'popper';
    theme?: string;
    touch?: boolean | 'hold' | ['hold', number];
    trigger?: string;
    triggerTarget?: HTMLElement | HTMLElement[] | null;
    zIndex?: number;
}