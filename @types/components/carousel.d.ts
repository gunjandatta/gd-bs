/**
 * <style>
 * .carouselDemo { max-width: 400px; }
 * </style>
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs-icons.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the carousel
 *         $REST.Components.Carousel({
 *             el: document.querySelector("#demo"),
 *             enableControls: true,
 *             enableIndicators: true,
 *             id: "carouselDemo",
 *             items: [
 *                 {
 *                     captions: "<h5>First Slide</h5>",
 *                     imageUrl: "https://via.placeholder.com/400x200",
 *                     imageAlt: "First Slide",
 *                     isActive: true
 *                 },
 *                 {
 *                     captions: "<h5>Second Slide</h5>",
 *                     imageUrl: "https://via.placeholder.com/400x200",
 *                     imageAlt: "Second Slide"
 *                 },
 *                 {
 *                     captions: "<h5>Third Slide</h5>",
 *                     imageUrl: "https://via.placeholder.com/400x200",
 *                     imageAlt: "Third Slide"
 *                 }
 *             ]
 *         });
 *     });
 * </script>
 */

/**
 * ### Carousel
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the carousel
 * let el = document.querySelector("#carousel");
 * let carousel = Components.Carousel({
 *     el: el,
 *     enableControls: true,
 *     enableIndicators: true,
 *     id: "carouselDemo",
 *     items: [
 *         {
 *             captions: "<h5>First Slide</h5>",
 *             imageUrl: "https://via.placeholder.com/400x200",
 *             imageAlt: "First Slide",
 *             isActive: true
 *         },
 *         {
 *             captions: "<h5>Second Slide</h5>",
 *             imageUrl: "https://via.placeholder.com/400x200",
 *             imageAlt: "Second Slide"
 *         },
 *         {
 *             captions: "<h5>Third Slide</h5>",
 *             imageUrl: "https://via.placeholder.com/400x200",
 *             imageAlt: "Third Slide"
 *         }
 *     ]
 * });
 * ```
 */
export const Carousel: (props: ICarouselProps) => ICarousel;

/**
 * Carousel
 */
export interface ICarousel {
    /**
     * Cycles through the carousel items from left to right.
     */
    cycle: () => void;

    /** Destroys an element’s tab. */
    dispose: () => void;

    /** The element. */
    el: Element;

    /** Hides the carousel. */
    hide: () => void;

    /**
     * Cycles to the next item.
     */
    next: () => void;

    /**
     * Cycles the carousel to a particular frame.
     * @prop value - The frame number.
     */
    number: (value: number) => void;

    /**
     * Stops the carousel from cycling through items.
     */
    pause: () => void;

    /**
     * Cycles to the previous item.
     */
    previous: () => void;

    /** Shows the carousel. */
    show: () => void;
}

/**
 * Carousel Item
 */
export interface ICarouselItem {
    captions?: string;
    className?: string;
    content?: string | Element;
    imageAlt?: string;
    imageUrl?: string;
    isActive?: boolean;
}

/**
 * Carousel Options
 */
export interface ICarouselOptions {
    interval?: number | boolean;
    keyboard?: boolean;
    pause?: string | boolean;
    ride?: string;
    wrap?: boolean;
}

/**
 * Carousel Properties
 */
export interface ICarouselProps {
    className?: string;
    el?: Element | HTMLElement;
    enableControls?: boolean;
    enableCrossfade?: boolean;
    enableIndicators?: boolean;
    id?: string;
    items?: Array<ICarouselItem>;
    options?: ICarouselOptions;
}