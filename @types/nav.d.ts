/**
 * Navigation
 */
export const Nav: (props: INavProps) => INav;

/**
 * Navigation
 */
export interface INav {
    /** Destroys an element’s tab. */
    dispose: () => void;

    /** The element. */
    el: Element;

    /** Hides the navigation. */
    hide: () => void;

    /**
     * Shows the navigation or selects the given tab and shows its associated pane. Any other tab that was previously selected becomes unselected and its associated pane is hidden.
     * @prop selector - The query selector.
     */
    show: (selector?: string) => void;
}

/**
 * Navigation Properties
 */
export interface INavProps {
    className?: string;
    data?: any;
    el?: Element | HTMLElement;
    enableFade?: boolean;
    enableFill?: boolean;
    id?: string;
    items?: Array<INavLink>;
    isJustified?: boolean;
    isPills?: boolean;
    isTabs?: boolean;
    isVertical?: boolean;
}

/**
 * Navigation Links
 */
export interface INavLink {
    isActive?: boolean;
    isDisabled?: boolean;
    data?: any;
    href?: string;
    onClick?: (item?: INavLink, ev?: Event) => void;
    onRenderTab?: (item?: INavLink, el?: HTMLDivElement) => void;
    tabContent?: string;
    title?: string;
}