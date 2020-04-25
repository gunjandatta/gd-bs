/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs-icons.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Add an icon to the target element
 *         $REST.Components.Media({
 *             el: document.querySelector("#demo"),
 *             icon: {
 *                 icon: $REST.IconTypes.BootstrapReboot,
 *                 className: "mr-3"
 *             },
 *             body: [
 *                 "<h5>Media Object Example</h5>",
 *                 "This is an example of a media object."
 *             ].join('\n')
 *         });
 *     });
 * </script>
 */

/**
 * ### Media
 * 
 * ```ts
 * import { Components, IconTypes } from "gd-sprest-bs";
 * 
 * // Create the media object
 * let el = document.querySelector("#icon");
 * let media = Components.Media({
 *     el: el,
 *     icon: {
 *         icon: IconTypes.BootstrapReboot,
 *         className: "mr-3"
 *     },
 *     body: [
 *         "<h5>Media Object Example</h5>",
 *         "This is an example of a media object."
 *     ].join('\n')
 * });
 * ```
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
    body?: string | Element;
    el?: Element | HTMLElement;
    data?: any;
    icon?: {
        className?: string;
        height?: number;
        icon: number;
        onClick?: (ev?: Event) => void;
        rightAligned?: boolean;
        type?: number;
        url?: string;
        width?: number;
    }
    image?: {
        alt?: string;
        className?: string;
        onClick?: (ev?: Event) => void;
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