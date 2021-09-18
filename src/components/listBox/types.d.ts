/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Create the list box
 *         $REST.Components.ListBox({
 *             el: document.querySelector("#demo"),
 *             label: "Colors",
 *             placeholder: "Search Colors",
 *             items: [
 *                  {
 *                      text: "Red",
 *                      value: "red"
 *                  },
 *                  {
 *                      text: "Blue",
 *                      value: "blue"
 *                  },
 *                  {
 *                      text: "Green",
 *                      value: "green"
 *                  },
 *                  {
 *                      text: "Purple",
 *                      value: "purple"
 *                  },
 *                  {
 *                      text: "Brown",
 *                      value: "brown"
 *                  },
 *                  {
 *                      text: "Yellow",
 *                      value: "yellow"
 *                  },
 *                  {
 *                      text: "Orange",
 *                      value: "orange"
 *                  }
 *             ]
 *         });
 *     });
 * </script>
 */

/**
 * List Box
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the list box
 * let el = document.querySelector("#list-box");
 * Components.Collapse({
 *     el: el,
 *     label: "Colors",
 *     placeholder: "Search Colors",
 *     items: [
 *          { text: "Red", value: "red" },
 *          { text: "Blue", value: "blue" },
 *          { text: "Green", value: "green" },
 *          { text: "Purple", value: "purple" },
 *          { text: "Brown", value: "brown" },
 *          { text: "Yellow", value: "yellow" },
 *          { text: "Orange", value: "orange" }
 *     ]
 * });
 * ```
 */
export const ListBox: (props: IListBoxProps, template?: string) => IListBox;

import { IBase } from "../types";
import { IDropdownItem } from "../dropdown/types";

/**
 * List Box
 */
export interface IListBox extends IBase<IListBoxProps> {
    /** The element. */
    el: Element;

    /** The selected listbox items. */
    getValue: () => Array<IDropdownItem>;

    /** Sets the options */
    setOptions: (items: Array<IDropdownItem>) => void;

    /** Sets the listbox value. */
    setValue: (value?: string | Array<string> | Array<IDropdownItem>) => void;
}

/**
 * List Box Properties
 */
export interface IListBoxProps {
    label?: string;
    id?: string;
    isReadonly?: boolean;
    items: Array<IDropdownItem>;
    multi?: boolean;
    placeholder?: string;
    onLoadData?: () => Array<IDropdownItem> | PromiseLike<Array<IDropdownItem>>;
    onChange?: (items: IDropdownItem | Array<IDropdownItem>, ev?: Event) => void;
    value?: string | Array<string>;
}