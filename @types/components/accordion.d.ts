/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs-icons.js"></script>
 * <script type="text/javascript">
 *     // Render the accordion
 *     $REST.Components.Accordion({
 *         autoCollapse: true,
 *         el: document.querySelector("#demo"),
 *         id: "demoAccordion",
 *         items: [
 *             {
 *                 btnProps: { text: "Item 1" },
 *                 content: "This is the content for item 1."
 *             },
 *             {
 *                 btnProps: { text: "Item 2" },
 *                 content: "This is the content for item 2."
 *             },
 *             {
 *                 btnProps: { text: "Item 3" },
 *                 content: "This is the content for item 3."
 *             }
 *         ]
 *     });
 * </script>
 */

/**
 * ### Accordion
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the accordion
 * let el = document.querySelector("#accordion");
 * let accordion = Components.Accordion({
 *     autoCollapse: true,
 *     el: el,
 *     id: "demoAccordion",
 *     items: [
 *         {
 *             btnProps: { text: "Item 1" },
 *             content: "This is the content for item 1."
 *         },
 *         {
 *             btnProps: { text: "Item 2" },
 *             content: "This is the content for item 2."
 *         },
 *         {
 *             btnProps: { text: "Item 3" },
 *             content: "This is the content for item 3."
 *         }
 *     ]
 * });
 * ```
 */
export const Accordion: (props: IAccordionProps) => IAccordion;

import { IBase, IBaseProps } from "../base";
import { IButtonProps } from "./button";
import { ICollapseOptions } from "./collapse";

/**
 * Accordion
 */
export interface IAccordion extends IBase<IAccordionProps> { }

/**
 * Accordion Item
 */
export interface IAccordionItem {
    btnProps?: IButtonProps;
    data?: any;
    content?: string | Element;
    onClick?: (el?: HTMLElement, item?: IAccordionItem) => void;
    onRender?: (el?: HTMLElement, item?: IAccordionItem) => void;
    showFl?: boolean;
}

/**
 * Accordion Options
 */
export interface IAccordionOptions extends ICollapseOptions { }

/**
 * Accordion Properties
 */
export interface IAccordionProps extends IBaseProps {
    autoCollapse?: boolean;
    id?: string;
    items?: Array<IAccordionItem>;
    options?: IAccordionOptions;
}