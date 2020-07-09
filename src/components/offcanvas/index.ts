//import * as offcanvas from "bootstrap/js/dist/offcanvas";
import { IOffcanvas, IOffcanvasProps } from "../../../@types/components/offcanvas";
import { Base } from "../base";
import { HTML } from "./templates";

/**
 * Offcanvas
 */
class _Offcanvas extends Base<IOffcanvasProps> implements IOffcanvas {

    // Constructor
    constructor(props: IOffcanvasProps) {
        super(HTML, props);

        // Configure the offcanvas
        this.configure();

        // Configure the parent
        this.configureParent();

        // Create the offcanvas
        //this._bootstrapObj = new offcanvas(this.el);
    }

    // Configure the card group
    private configure() {
        // Set the attributes
        this.props.id ? this.el.id = this.props.id : null;
        this.props.enableBackdrop ? this.el.setAttribute("data-body", "backdrop") : null;
        this.props.enableScroll ? this.el.setAttribute("data-body", "scroll") : null;

        // Set the header
        let title = this.props.title || "";
        let header = this.el.querySelector(".offcanvas-header > div") as HTMLDivElement;
        if (typeof (title) === "string" || typeof (title) === "number") {
            // Set the html
            header.innerHTML = title;
        } else {
            // Append the element
            header.appendChild(title);
        }

        // Set the body
        let content = this.props.body || "";
        let body = this.el.querySelector(".offcanvas-body") as HTMLDivElement;
        if (typeof (content) === "string" || typeof (content) === "number") {
            // Set the html
            body.innerHTML = content;
        } else {
            // Append the element
            body.appendChild(content);
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
}
export const Offcanvas = (props: IOffcanvasProps): IOffcanvas => { return new _Offcanvas(props); }