import { jQuery } from "../..";
import { Base } from "../base";
import { ICarousel, ICarouselProps } from "../../../@types/components/carousel";
import * as HTML from "./index.html";
import { CarouselItem } from "./item";

/**
 * Carousel
 * @param props - The carousel properties.
 */
class _Carousel extends Base<ICarouselProps> implements ICarousel {
    // Constructor
    constructor(props: ICarouselProps) {
        super(HTML, props);

        // Configure the carousel
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
        // Set the attributes
        this.el.id = "carousel_" + (this.props.id == null ? "" : this.props.id);
        this.props.enableCrossfade ? this.el.classList.add("carousel-fade") : null;

        // Render the indicators
        this.renderIndicators();

        // Render the controls
        this.renderControls();

        // Render the slides
        this.renderSlides();

        // See if options exist
        if (this.props.options) {
            // Initialize the carousel options
            jQuery(this.el).carousel(this.props.options);
        }
    }

    // Renders the controls
    private renderControls() {
        // Get the controls
        let nextControl = this.el.querySelector(".carousel-control-next") as HTMLAnchorElement;
        let prevControl = this.el.querySelector(".carousel-control-prev") as HTMLAnchorElement;

        // See if we are rendering controls
        if (this.props.enableControls) {
            // Configure the controls
            nextControl.href = "#" + this.el.id;
            prevControl.href = "#" + this.el.id;
        } else {
            // Remove the controls
            this.el.removeChild(nextControl);
            this.el.removeChild(prevControl);
        }
    }

    // Renders the indicators
    private renderIndicators() {
        // Get the indicators
        let indicators = this.el.querySelector(".carousel-indicators");

        // See if we are enabling indicators
        if (this.props.enableIndicators) {
            // Parse the items
            let items = this.props.items || [];
            for (let i = 0; i < items.length; i++) {
                let item = items[i];

                // Create the item
                let elItem = document.createElement("li");
                elItem.setAttribute("data-target", "#" + this.el.id);
                elItem.setAttribute("data-slide-to", i.toString());
                item.isActive ? elItem.classList.add("active") : null;

                // Add the item
                indicators.appendChild(elItem);
            }
        } else {
            // Remove the indicators
            this.el.removeChild(indicators);
        }
    }

    // Renders the slides
    private renderSlides() {
        // Get the indicators
        let slides = this.el.querySelector(".carousel-inner");

        // Parse the items
        let items = this.props.items || [];
        for (let i = 0; i < items.length; i++) {
            let slide = new CarouselItem(items[i]);

            // Create the item element
            slides.appendChild(slide.el);
        }
    }

    /**
     * Public Interface
     */

    // Cycle the carousel
    cycle() { jQuery(this.el).carousel("cycle"); }

    // Goes to the next slide
    next() { jQuery(this.el).carousel("next"); }

    // Sets the slide by number
    number(value: number) { jQuery(this.el).carousel(value); }

    // Pauses the slide
    pause() { jQuery(this.el).carousel("pause"); }

    // Goes to the previous slide
    previous() { jQuery(this.el).carousel("prev"); }
}
export const Carousel = (props: ICarouselProps): ICarousel => { return new _Carousel(props); }