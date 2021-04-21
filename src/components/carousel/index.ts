import { Base } from "../base";
import { ICarousel, ICarouselProps } from "../../../@types/components/carousel";
import { CarouselItem } from "./item";
import { HTML } from "./templates";

/**
 * Carousel
 * @param props - The carousel properties.
 */
class _Carousel extends Base<ICarouselProps> implements ICarousel {
    private _indicators: HTMLElement[] = null;
    private _slides: CarouselItem[] = null;

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

    // Moves to the another slides
    private moveToSlide(current: CarouselItem, next: CarouselItem, slideRight: boolean = true) {
        // Ensure the slides exist
        if (current && next) {
            // Animate the current slide out
            next.el.classList.add(slideRight ? "carousel-item-next" : "carousel-item-prev");
            current.el.classList.add(slideRight ? "carousel-item-start" : "carousel-item-end");

            // Wait for the animation to complete
            setTimeout(() => {
                // Animate the next slide in
                next.el.classList.add(slideRight ? "carousel-item-start" : "carousel-item-end");

                // Wait for the animation to complete
                setTimeout(() => {
                    // Update the classes
                    next.el.classList.add("active");
                    current.el.classList.remove("active", "carousel-item-start", "carousel-item-end");
                    next.el.classList.remove("carousel-item-next", "carousel-item-prev", "carousel-item-start", "carousel-item-end");
                }, 600);
            }, 10);
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
            nextControl ? nextControl.href = "#" + this.el.id : null;
            prevControl ? prevControl.href = "#" + this.el.id : null;

            // Set the click event
            nextControl.addEventListener("click", ev => { ev.preventDefault(); this.next(); })
            prevControl.addEventListener("click", ev => { ev.preventDefault(); this.previous(); })
        } else {
            // Remove the controls
            nextControl ? this.el.removeChild(nextControl) : null;
            prevControl ? this.el.removeChild(prevControl) : null;
        }
    }

    // Renders the indicators
    private renderIndicators() {
        // Clear the indicators
        this._indicators = [];

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
                    elItem.addEventListener("click", ev => {
                        let elSlide = ev.currentTarget as HTMLElement;

                        // Prevent the page from moving to the top
                        ev.preventDefault();

                        // Go to the slide
                        this.nextWhenVisible(elSlide.getAttribute("data-bs-slide-to"));
                    })

                    // Add the item
                    indicators.appendChild(elItem);
                    this._indicators.push(elItem);
                }
            } else {
                // Remove the indicators
                this.el.removeChild(indicators);
            }
        }
    }

    // Renders the slides
    private renderSlides(slideTemplate: string) {
        // Clear the slides
        this._slides = [];

        // Get the indicators
        let slides = this.el.querySelector(".carousel-inner");
        if (slides) {
            // Parse the items
            let items = this.props.items || [];
            for (let i = 0; i < items.length; i++) {
                let slide = new CarouselItem(items[i], slideTemplate);
                this._slides.push(slide);

                // Create the item element
                slides.appendChild(slide.el);
            }
        }
    }

    /**
     * Public Interface
     */


    // Cycle the carousel
    cycle() {
        // TODO
    }

    // Goes to the next slide
    next() {
        let currentSlide: CarouselItem = null;
        let nextSlide: CarouselItem = null;

        // Parse the slides
        for (let i = 0; i < this._slides.length; i++) {
            let slide = this._slides[i];

            if (slide.isActive) {
                // Set the slides
                currentSlide = slide;
                nextSlide = this._slides[i + 1] || this._slides[0];

                // Update the indicators
                this._indicators[i].classList.remove("active");
                (this._indicators[i + 1] || this._indicators[0]).classList.add("active");
                break;
            }
        }

        // Move to the next slide
        this.moveToSlide(currentSlide, nextSlide);
    }

    // Cycles the carousel to a particular frame
    nextWhenVisible(idx) {
        let currentSlide: CarouselItem = null;
        let nextSlide: CarouselItem = this._slides[idx];

        // Parse the slides
        for (let i = 0; i < this._slides.length; i++) {
            let slide = this._slides[i];

            // See if this slide is active
            if (slide.isActive) {
                // Do nothing if we selected the same slide
                if (idx == i) { return; }

                // Set the current slide
                currentSlide = slide;

                // Update the indicators
                this._indicators[i].classList.remove("active");
                this._indicators[idx].classList.add("active");
                break;
            }
        }

        // Move to the next slide
        this.moveToSlide(currentSlide, nextSlide);
    }

    // Pauses the slide
    pause() {
        // TODO
    }

    // Goes to the previous slide
    previous() {
        let currentSlide: CarouselItem = null;
        let prevSlide: CarouselItem = null;

        // Parse the slides
        for (let i = 0; i < this._slides.length; i++) {
            let slide = this._slides[i];

            if (slide.isActive) {
                // Set the slides
                currentSlide = slide;
                prevSlide = this._slides[i - 1] || this._slides[this._slides.length - 1];

                // Update the indicators
                this._indicators[i].classList.remove("active");
                (this._indicators[i - 1] || this._indicators[this._indicators.length - 1]).classList.add("active");
                break;
            }
        }

        // Move to the next slide
        this.moveToSlide(currentSlide, prevSlide, false);
    }

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