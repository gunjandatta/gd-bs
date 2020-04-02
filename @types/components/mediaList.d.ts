import { IMediaProps } from "./media";

/**
 * Media List
 */
export const MediaList: (props: IMediaListProps) => IMediaList;

/**
 * Media List
 */
export interface IMediaList {
    /** The element. */
    el: HTMLElement;

    /** Hides the media. */
    hide: () => void;

    /** Shows the media. */
    show: () => void;
}

/**
 * Media List Properties
 */
export interface IMediaListProps {
    className?: string;
    el?: Element | HTMLElement;
    items: Array<IMediaProps>;
}