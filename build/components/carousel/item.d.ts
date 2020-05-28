import { ICarouselItem } from "../../../@types/components/carousel";
/**
 * Carousel Item
 */
export declare class CarouselItem {
    private _el;
    private _props;
    constructor(props: ICarouselItem);
    private configure;
    /**
     * Public Properties
     */
    get el(): HTMLDivElement;
}
