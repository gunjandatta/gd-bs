import { Base } from "../base";
import { ICarousel, ICarouselProps } from "../../../@types/components/carousel";
import { CarouselItem } from "./item";
import { HTML } from "./templates";

/**
 * Carousel
 * @param props - The carousel properties.
 */
class _Carousel extends Base<ICarouselProps> implements ICarousel {

    // Constructor
    constructor(props: ICarouselProps, template: string = HTML, slideTemplate?: string) {
        super(template, props);

        // Configure the carousel
        this.configure(slideTemplate);

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure(slideTemplate: string) {
        // Set the attributes
        this.el.id = "carousel" + (this.props.id == null ? "" : this.props.id);
        this.props.enableCrossfade ? this.el.classList.add("carousel-fade") : null;

        // Render the indicators
        this.renderIndicators();

        // Render the controls
        this.renderControls();

        // Render the slides
        this.renderSlides(slideTemplate);

        // Set the dark theme
        this.props.isDark ? this.setTheme(true) : null;
    }

    // Renders the controls
    private renderControls() {
        // Get the controls
        let nextControl = this.el.querySelector(".carousel-control-next") as HTMLAnchorElement;
        let prevControl = this.el.querySelector(".carousel-control-prev") as HTMLAnchorElement;

        // See if we are rendering controls
        if (this.props.enableControls) {
            // Configure the controls
            nextControl ? nextControl.href = "#" + this.el.id : null;
            prevControl ? prevControl.href = "#" + this.el.id : null;
        } else {
            // Remove the controls
            nextControl ? this.el.removeChild(nextControl) : null;
            prevControl ? this.el.removeChild(prevControl) : null;
        }
    }

    // Renders the indicators
    private renderIndicators() {
        // Get the indicators
        let indicators = this.el.querySelector(".carousel-indicators");
        if (indicators) {
            // See if we are enabling indicators
            if (this.props.enableIndicators) {
                // Parse the items
                let items = this.props.items || [];
                for (let i = 0; i < items.length; i++) {
                    let item = items[i];

                    // Create the item
                    let elItem = document.createElement("li");
                    elItem.setAttribute("data-bs-target", "#" + this.el.id);
                    elItem.setAttribute("data-bs-slide-to", i.toString());
                    item.isActive ? elItem.classList.add("active") : null;

                    // Add the item
                    indicators.appendChild(elItem);
                }
            } else {
                // Remove the indicators
                this.el.removeChild(indicators);
            }
        }
    }

    // Renders the slides
    private renderSlides(slideTemplate: string) {
        // Get the indicators
        let slides = this.el.querySelector(".carousel-inner");
        if (slides) {
            // Parse the items
            let items = this.props.items || [];
            for (let i = 0; i < items.length; i++) {
                let slide = new CarouselItem(items[i], slideTemplate);

                // Create the item element
                slides.appendChild(slide.el);
            }
        }
    }

    /**
     * Bootstrap
     */

    // Cycle the carousel
    cycle() { this._bootstrapObj.cycle(); }

    // Disposes the carousel
    dispose() { this._bootstrapObj.dispose(); }

    // Goes to the next slide
    next() { this._bootstrapObj.next(); }

    // Cycles the carousel to a particular frame
    nextWhenVisible(value) { this._bootstrapObj.nextWhenVisible(value); }

    // Pauses the slide
    pause() { this._bootstrapObj.pause(); }

    // Goes to the previous slide
    previous() { this._bootstrapObj.prev(); }

    /**
     * Public Interface
     */

    // Enables/Disables the dark theme
    setTheme(isDark: boolean) {
        // See if we are setting the dark theme
        if (isDark) {
            // Set the theme
            this.el.classList.add("carousel-dark");
        } else {
            // Set the theme
            this.el.classList.remove("carousel-dark");
        }
    }
}
export const Carousel = (props: ICarouselProps, template?: string, slideTemplate?: string): ICarousel => { return new _Carousel(props, template, slideTemplate); }