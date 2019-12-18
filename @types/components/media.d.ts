/**
 * Media
 */
export const Media: (props: IMediaProps) => IMedia;

/**
 * Media Image Types
 */
export const MediaImageTypes: IMediaImageTypes;

/**
 * Media
 */
export interface IMedia {
    /** The element. */
    el: HTMLDivElement;

    /** Hides the media. */
    hide: () => void;

    /** Shows the media. */
    show: () => void;
}

/**
 * Media Properties
 */
export interface IMediaProps {
    className?: string;
    body?: string;
    el?: Element | HTMLElement;
    header?: string;
    image?: {
        alt?: string;
        class?: string;
        rightAligned?: boolean;
        src: string;
        type?: number;
        url?: string;
    };
    items?: Array<IMediaProps>;
    onRenderBody?: (el?: HTMLElement) => void;
    order?: number;
}

/**
 * Media Image Types
 */
export type IMediaImageTypes = {
    Bottem: number;
    Center: number;
    Top: number;
}

/**
 * Media Order Types
 */
export type IMediaOrderTypes = {
    Left: number;
    Right: number;
}