import { ClassNames } from "../classNames";
import { IOffcanvas, IOffcanvasOptions, IOffcanvasProps } from "../../../@types/components/offcanvas";
import { Base } from "../base";
import { HTML } from "./templates";

/**
 * Offcanvas Types
 */
export enum OffcanvasTypes {
    Bottom = 1,
    End = 2,
    Start = 3
}

/**
 * Offcanvas Classes
 */
export const OffcanvasClassNames = new ClassNames([
    "offcanvas-bottom",
    "offcanvas-end",
    "offcanvas-start"
]);

/**
 * Offcanvas
 */
class _Offcanvas extends Base<IOffcanvasProps> implements IOffcanvas {

    // Constructor
    constructor(props: IOffcanvasProps, template: string = HTML) {
        super(template, props);

        // Configure the offcanvas
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
        // Set the attributes
        this.props.id ? this.el.id = this.props.id : null;

        // Set the type
        this.setType(this.props.type);

        // Get the options
        let options: IOffcanvasOptions = this.props.options || {
            backdrop: true,
            keyboard: true,
            scroll: false
        };

        // Set the properties
        options.backdrop ? this.el.setAttribute("data-bs-body", "backdrop") : null;
        options.scroll ? this.el.setAttribute("data-bs-body", "scroll") : null;

        // Set the header
        let title = this.props.title || "";
        let header = this.el.querySelector(".offcanvas-header > div") as HTMLDivElement;
        if (header) {
            if (typeof (title) === "string" || typeof (title) === "number") {
                // Set the html
                header.innerHTML = title;
            } else {
                // Append the element
                header.appendChild(title);
            }
        }

        // Set the body
        let content = this.props.body || "";
        let body = this.el.querySelector(".offcanvas-body") as HTMLDivElement;
        if (body) {
            if (typeof (content) === "string" || typeof (content) === "number") {
                // Set the html
                body.innerHTML = content;
            } else {
                // Append the element
                body.appendChild(content);
            }
        }

        // Execute the events
        this.props.onRenderHeader ? this.props.onRenderHeader(header, this.props) : null;
        this.props.onRenderBody ? this.props.onRenderBody(body, this.props) : null;
    }

    /**
     * Bootstrap
     */

    // Hides the offcanvas
    hide() { this._bootstrapObj.hide(); }

    // Toggles the offcanvas
    show() { this._bootstrapObj.show(); }

    // Toggles the offcanvas
    toggle() { this._bootstrapObj.toggle(); }

    /**
     * Public Interface
     */

    // Sets the offcanvas type
    setType(offcanvasType: number) {
        // Parse the class names
        OffcanvasClassNames.parse(className => {
            // Remove the class names
            this.el.classList.remove(className);
        });

        // Set the class name
        let className = OffcanvasClassNames.getByType(offcanvasType) || OffcanvasClassNames.getByType(OffcanvasTypes.End);
        this.el.classList.add(className);
    }
}
export const Offcanvas = (props: IOffcanvasProps, template?: string): IOffcanvas => { return new _Offcanvas(props, template); }