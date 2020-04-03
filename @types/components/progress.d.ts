/**
 * Progress
 */
export const Progress: (props: IProgressProps) => IProgress;

/**
 * Progress
 */
export interface IProgress {
    /** The element. */
    el: Element;

    /** Hides the progress. */
    hide: () => void;

    /** The progress bar element */
    progressBar: HTMLDivElement;

    /** Shows the progress. */
    show: () => void;
}

/**
 * Progress Properties
 */
export interface IProgressProps {
    className?: string;
    el?: Element | HTMLElement;
    isAnimated?: boolean;
    isStriped?: boolean;
    label?: string;
    max?: number;
    min?: number;
    size?: number;
}