/**
 * Jumbotron
 */
export const Jumbotron: (props: IJumbotronProps) => IJumbotron;

/**
 * Jumbotron
 */
export interface IJumbotron {
    /** The element. */
    el: Element;

    /** Hides the jumbotron. */
    hide: () => void;

    /** Shows the jumbotron. */
    show: () => void;
}

/**
 * Jumbotron Properties
 */
export interface IJumbotronProps {
    className?: string;
    content?: string;
    el?: Element | HTMLElement;
    isFluid?: boolean;
    lead?: string;
    onRenderContent?: (el?: HTMLElement) => void;
    title?: string;
}