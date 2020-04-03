import { ITable, ITableProps, ITableColumn } from "../../../@types/components/table";
import { Base } from "../base";
import * as HTML from "./index.html";

/**
 * Table
 */
class _Table extends Base<ITableProps> implements ITable {
    // Constructor
    constructor(props: ITableProps) {
        super(HTML, props);

        // Configure the collapse
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
        // See if columns are defined
        let head = this.el.querySelector("thead");
        if (this.props.columns) {
            // Append the row
            let row = document.createElement("tr");
            head.appendChild(row);

            // Parse the columns
            for (let i = 0; i < this.props.columns.length; i++) {
                // Append the column
                let column = document.createElement("th");
                row.appendChild(column);

                // Render the column
                this.renderColumn(i, column, this.props.columns[i]);
            }

            // See if there is an event
            if (this.props.onRenderHeaderRow) {
                // Call the event
                this.props.onRenderHeaderRow(row);
            }
        }

        // Add the rows
        this.addRows(this.props.rows);
    }

    // Renders a column
    private renderColumn(colIdx: number, column: HTMLTableCellElement, props: ITableColumn) {
        column.innerHTML = props.isHidden ? "" : props.title || props.name;
        column.setAttribute("scope", "col");

        // See if there is an event for this column
        if (props.onRenderHeader) {
            // Call the event
            props.onRenderHeader(column, props);
        }

        // See if there is an event for this component
        if (this.props.onRenderHeaderCell) {
            // Call the event
            this.props.onRenderHeaderCell(column, props);
        }

        // See if we are sorting this column
        if (props.enableSort) {
            // Add a click event
            column.addEventListener("click", ev => {
                // Sort the table data
                this.sortTable(colIdx, column, props);
            });
        }

        // See if there is a click event
        if (props.onClickHeader || this.props.onClickHeader) {
            // Add the click event
            column.addEventListener("click", ev => {
                // Call the event
                props.onClickHeader(column, props);
                this.props.onClickHeader(column, props);
            });
        }
    }

    // Renders a cell
    private renderCell(row: HTMLTableRowElement, props: ITableColumn, data) {
        // Create the cell
        let cell = document.createElement("td");
        cell.className = props.className || "";
        cell.innerHTML = data[props.name] || "";
        row.appendChild(cell);

        // See if there is a scope
        if (props.scope) {
            // Set the scope
            cell.setAttribute("scope", props.scope);
        }

        // See if there is an event for this column
        if (props.onRenderCell) {
            // Call the event
            props.onRenderCell(cell, props, row);
        }

        // See if there is an event for this component
        if (this.props.onRenderCell) {
            // Call the event
            this.props.onRenderCell(cell, props, row);
        }

        // See if there is a click event
        if (props.onClickCell || this.props.onClickCell) {
            // Add the click event
            cell.addEventListener("click", ev => {
                // Call the event
                props.onClickCell(cell, props, row);
                this.props.onClickCell(cell, props, row);
            });
        }
    }

    // Renders a row
    private renderRow(row: HTMLTableRowElement, data) {
        // See if columns
        for (let i = 0; i < this.props.columns.length; i++) {
            // Create the cell
            this.renderCell(row, this.props.columns[i], data);
        }

        // See if there is an event
        if (this.props.onRenderRow) {
            // Call the event
            this.props.onRenderRow(row, data);
        }
    }

    // Sorts the table
    private sortTable(colIdx: number, column: HTMLTableCellElement, props: ITableColumn) {
        let sortAscending = true;

        // Get the sort icon
        let head = this.el.querySelector("thead");
        let elIcon = head.querySelector(".sort-icon");
        if (elIcon) {
            // Remove the sort icon
            elIcon.parentElement.removeChild(elIcon);
        }

        // Get the sort attribute
        if (column.hasAttribute("data-sort-asc")) {
            // Set the flag
            sortAscending = false;

            // Remove the attribute
            column.removeAttribute("data-sort-asc");
        } else {
            // Add the attribute
            column.setAttribute("data-sort-asc", "true");
        }

        // Create the icon
        elIcon = document.createElement("i");
        elIcon.className = "ml-1 sort-icon";
        elIcon.innerHTML = sortAscending ? "&uarr;" : "&darr;";
        column.appendChild(elIcon);

        // Parse the table rows
        let idx = -1;
        let body = this.el.querySelector("tbody");
        while (++idx < body.children.length) {
            let elRow = body.children[idx] as HTMLTableRowElement;
            let value = ((elRow.children[colIdx] as HTMLTableDataCellElement).innerText || "").toLowerCase();

            // Loop through the previous items
            let counter = idx;
            while (--counter >= 0) {
                let elPreviousRow = body.children[counter] as HTMLTableRowElement;
                let elPreviousCol = elPreviousRow.children[colIdx] as HTMLTableDataCellElement;
                let prevValue = (elPreviousCol ? elPreviousCol.innerText : "").toLowerCase();

                // Compare the values
                if (sortAscending ? value < prevValue : value > prevValue) {
                    // Switch the values
                    body.insertBefore(elRow, elPreviousRow);
                } else { break; }
            }
        }
    }

    /**
     * Public Interface
     */

    // Method to add the rows
    addRows(rows: Array<any> = []) {
        let tbody = this.el.querySelector("tbody");

        // Parse the rows
        for (let i = 0; i < rows.length; i++) {
            // Create the row
            let row = document.createElement("tr");
            tbody.appendChild(row);

            // Render the row
            this.renderRow(row, rows[i]);
        }
    }
}
export const Table = (props: ITableProps): ITable => { return new _Table(props); }