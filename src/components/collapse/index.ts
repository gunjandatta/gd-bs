import { bootstrap } from "../../core";
import { ICollapse, ICollapseProps } from "../../../@types/components/collapse";
import { Base } from "../base";
import { HTML } from "./templates";

/**
 * Collapse
 */
class _Collapse extends Base<ICollapseProps> implements ICollapse {
    // Constructor
    constructor(props: ICollapseProps, template: string = HTML) {
        super(template, props);

        // Configure the collapse
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
        // Set the id
        let id = this.props.id || "collapse" + (new Date()).getTime();

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

    // The bootstrap collapse
    private get collapse() {
        // Create the bootstrap object if it doesn't exist
        this._bootstrapObj = this._bootstrapObj || new bootstrap.Collapse(this.el);

        // Return the object
        return this._bootstrapObj;
    }

    // Disposes the collapse
    dispose() { this.collapse.dispose(); }

    // Flag determining if the collapse is visible
    get isVisible() { return this.el.classList.contains("show"); }

    // Toggles the collapse
    toggle() { this.collapse.toggle(); }

    /**
     * Public Interface
     */
}
export const Collapse = (props: ICollapseProps, template?: string): ICollapse => { return new _Collapse(props, template); }