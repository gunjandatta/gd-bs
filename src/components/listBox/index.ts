import { IDropdown, IDropdownItem } from "../../../@types/components/dropdown";
import { IFormControlPropsDropdown, IFormControlPropsTextField } from "../../../@types/components/formControl";
import { IListBox, IListBoxProps } from "../../../@types/components/listBox";
import { Base } from "../base";
import { Form, FormControlTypes } from "../form";
import { HTML } from "./templates";

/**
 * TODO - Figure out how to remove a selected item
 */

/**
 * List Box
 * @property props - The list box properties.
 */
class _ListBox extends Base<IListBoxProps> implements IListBox {
    private _ddlItems: IDropdown = null;
    private _ddlValues: IDropdown = null;

    // Constructor
    constructor(props: IListBoxProps) {
        super(HTML, props);

        // Configure the list box
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configures the list box
    private configure() {
        // Set the placeholder
        let placeholder = typeof (this.props.placeholder) === "undefined" ? "Search" : this.props.placeholder;

        // Render a form to this element
        Form({
            el: this.el,
            rows: [
                {
                    columns: [{
                        control: {
                            label: this.props.label,
                            placeholder,
                            type: FormControlTypes.TextField,
                            onChange: value => {
                                // Filter the items
                                this.filterItems(value);
                            }
                        } as IFormControlPropsTextField
                    }]
                },
                {
                    columns: [
                        {
                            control: {
                                items: this.props.items,
                                type: FormControlTypes.MultiDropdown,
                                onChange: (items: Array<IDropdownItem>) => {
                                    // See if we are allowing multiple values
                                    if (this.props.multi) {
                                        // Get the items and sort them
                                        let allItems = (this._ddlValues.getValue() as Array<IDropdownItem>).concat(items).sort((a, b) => {
                                            if (a.text < b.text) { return -1; }
                                            if (a.text > b.text) { return 1; }
                                            return 0;
                                        });

                                        // Remove any duplicates and update the values dropdown
                                        this.configureValuesDDL(allItems.filter((item, idx) => {
                                            return allItems.indexOf(item) === idx;
                                        }));
                                    } else {
                                        // Set the values
                                        this.configureValuesDDL([items[0]]);
                                    }

                                    // Clear this dropdown
                                    this._ddlItems.setValue([]);

                                    // Call the change event
                                    this.props.onChange ? this.props.onChange(items) : null;
                                },
                                onControlRendered: ctrl => {
                                    // Set the dropdown
                                    this._ddlItems = ctrl.dropdown;
                                }
                            } as IFormControlPropsDropdown
                        },
                        {
                            control: {
                                type: FormControlTypes.MultiDropdown,
                                isReadonly: true,
                                onControlRendered: ctrl => {
                                    // Set the dropdown
                                    this._ddlValues = ctrl.dropdown;
                                }
                            } as IFormControlPropsDropdown
                        }
                    ]
                }
            ],
            onRendered: () => {
                // Get the selected items
                this._ddlItems.setValue(this.props.value);
                let items = this._ddlItems.getValue() as Array<IDropdownItem>;
                this._ddlItems.setValue([]);

                // Configure the values dropdown
                this.configureValuesDDL(items);
            }
        });
    }

    // Configures the values dropdown
    private configureValuesDDL(items: Array<IDropdownItem>) {
        // Update the dropdown
        this._ddlValues.setItems(items);
        this._ddlValues.setValue(items);

        // Parse the options
        let options = this._ddlValues.el.querySelectorAll("option");
        for (let i = 0; i < options.length; i++) {
            let option = options[i];

            // Add a click event
            option.setAttribute("data-idx", i.toString());
            option.addEventListener("mouseup", ev => {
                let idx = parseInt((ev.currentTarget as HTMLElement).getAttribute("data-idx"));

                // Remove the item
                items.splice(idx, 1);

                // Update the values
                this.configureValuesDDL(items);
            });
        }
    }

    // Filters the dropdown menu items
    private filterItems(filter: string) {
        let filterValue = filter.toLowerCase();

        // Parse the items
        let elItems = this._ddlItems.el.querySelectorAll("option");
        for (let i = 0; i < elItems.length; i++) {
            let elItem = elItems[i] as HTMLElement;

            // See if the filter exists
            if (filterValue) {
                // See if this value contains the filter
                if (elItem.innerText.toLowerCase().indexOf(filterValue) >= 0) {
                    // Show the item
                    elItem.classList.remove("d-none");
                } else {
                    // Hide the item
                    elItem.classList.add("d-none");
                }
            } else {
                // Show the item
                elItem.classList.remove("d-none");
            }
        }
    }

    /**
     * Public Interface
     */

    getValue() { return this._ddlValues.getValue() as Array<IDropdownItem>; }

    setValue(value) {
        // Get the items
        this._ddlItems.setValue(value);
        let items = this._ddlItems.getValue() as Array<IDropdownItem>;

        // Set the value
        this.configureValuesDDL(items);

        // Clear the items
        this._ddlItems.setValue();
    }
}
export const ListBox = (props: IListBoxProps): IListBox => { return new _ListBox(props); }