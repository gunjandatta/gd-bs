import * as collapse from "bootstrap/js/dist/collapse";
import { ICollapse, ICollapseProps } from "../../../@types/components/collapse";
import { Base } from "../base";
import { HTML } from "./templates";

/**
 * Collapse
 */
class _Collapse extends Base<ICollapseProps> implements ICollapse {

    // Constructor
    constructor(props: ICollapseProps) {
        super(HTML, props);

        // Configure the collapse
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
        // Set the id
        let id = this.props.id || "collapse_" + (new Date()).getTime();

        // Set the attributes
        this.el.id = id;
        this.props.isMulti ? this.el.classList.add("multi-collapse") : null;

        // Set the content
        let content = this.props.content || "";
        let body = this.el.querySelector(".card") as HTMLDivElement;
        if (typeof (content) === "string" || typeof (content) === "number") {
            // Set the html
            body.innerHTML = content;
        } else {
            // Append the element
            body.appendChild(content);
        }

        // Execute the render event
        this.props.onRender ? this.props.onRender(this.props, body) : null;
    }

    /**
     * Bootstrap
     */

    // The bootstrap button
    private get bsCollapse() {
        // Create the bootstrap object if it doesn't exist
        this._bootstrapObj = this._bootstrapObj || new collapse(this.el);

        // Return the object
        return this._bootstrapObj;
    }

    // Disposes the collapse
    dispose() { this.bsCollapse ? this.bsCollapse.dispose() : null; }

    // Toggles the collapse
    toggle() { this.bsCollapse ? this.bsCollapse.toggle() : null; }

    /**
     * Public Interface
     */
}
export const Collapse = (props: ICollapseProps): ICollapse => { return new _Collapse(props); }