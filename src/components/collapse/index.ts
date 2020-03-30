import * as jQuery from "jquery";
import { Base } from "../base";
import { ICollapse, ICollapseProps } from "../../../@types/components/collapse";
import * as HTML from "./index.html";

/**
 * Collapse
 */
class _Collapse extends Base<ICollapseProps> implements ICollapse {
    // Constructor
    constructor(props: ICollapseProps) {
        super(HTML, props);

        // Configure the card group
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
        // Set the attributes
        this.props.id ? this.el.id = this.props.id : null;
        this.props.isMulti ? this.el.classList.add("multi-collapse") : null;

        // Set the content
        let content = this.props.content || "";
        let body = this.el.querySelector(".card") as HTMLDivElement;
        if (typeof (content) === "string") {
            // Set the html
            body.innerHTML = content;
        } else {
            // Append the element
            body.appendChild(content);
        }

        // Execute the render event
        this.props.onRender ? this.props.onRender(this.props, body) : null;

        // See if options exist
        if (this.props.options) {
            // Set the options
            jQuery(this.el).collapse(this.props.options);
        }
    }

    /**
     * Public Interface
     */

    // Disposes the component
    dispose() { jQuery(this.el).collapse("dispose"); }

    // Toggles the component
    toggle() { jQuery(this.el).collapse("toggle"); }
}
export const Collapse = (props: ICollapseProps): ICollapse => { return new _Collapse(props); }