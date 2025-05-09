import { ITable, ITableProps, ITableColumn } from "./types";
import { Base } from "../base";
import { HTML } from "./templates";

/**
 * Table
 */
class _Table extends Base<ITableProps> implements ITable {
    // Constructor
    constructor(props: ITableProps, template: string = HTML) {
        super(template, props);

        // Configure the collapse
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
        let hasFooter = false;

        // See if columns are defined
        let head = this.el.querySelector("thead");
        if (head) {
            if (this.props.columns) {
                // Append the row
                let row = document.createElement("tr");
                head.appendChild(row);

                // Parse the columns
                for (let i = 0; i < this.props.columns.length; i++) {
                    let colProp = this.props.columns[i];

                    // Append the column
                    let column = document.createElement("th");
                    row.appendChild(column);

                    // See if the footer exists
                    if (colProp.footer || colProp.onRenderFooter) {
                        // Set the flag
                        hasFooter = true;
                    }

                    // Render the column
                    this.renderColumn(column, colProp);
                }

                // See if there is an event
                if (this.props.onRenderHeaderRow) {
                    // Call the event
                    this.props.onRenderHeaderRow(row);
                }
            }
        }

        // Add the rows
        this.addRows(this.props.rows);

        // See if the footer exists
        if (hasFooter) {
            // Append the footer
            let footer = document.createElement("tfoot");
            this.el.appendChild(footer);

            // Append the row
            let row = document.createElement("tr");
            footer.appendChild(row);

            // Parse the columns
            for (let i = 0; i < this.props.columns.length; i++) {
                // Append the column
                let column = document.createElement("td");
                row.appendChild(column);

                // Render the column
                this.renderColumnFooter(column, this.props.columns[i]);
            }
        }
    }

    // Renders a cell
    private renderCell(row: HTMLTableRowElement, props: ITableColumn, data, rowIdx: number) {
        // Create the cell
        let cell = document.createElement("td");
        cell.className = props.className || "";
        cell.innerHTML = data[props.name] == null ? "" : data[props.name];
        row.appendChild(cell);

        // See if there is a scope
        if (props.scope) {
            // Set the scope
            cell.setAttribute("scope", props.scope);
        }

        // See if there is an event for this column
        if (props.onRenderCell) {
            // Call the event
            props.onRenderCell(cell, props, data, rowIdx);
        }

        // See if there is an event for this component
        if (this.props.onRenderCell) {
            // Call the event
            this.props.onRenderCell(cell, props, data, rowIdx);
        }

        // See if there is a click event
        if (props.onClickCell || this.props.onClickCell) {
            // Add the click event
            cell.addEventListener("click", ev => {
                // Call the event
                props.onClickCell ? props.onClickCell(cell, props, data, rowIdx) : null;
                this.props.onClickCell ? this.props.onClickCell(cell, props, data, rowIdx) : null;
            });
        }
    }

    // Renders a column
    private renderColumn(column: HTMLTableCellElement, props: ITableColumn) {
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

        // See if there is a click event
        if (props.onClickHeader || this.props.onClickHeader) {
            // Add the click event
            column.addEventListener("click", ev => {
                // Call the event
                props.onClickHeader ? props.onClickHeader(column, props) : null;
                this.props.onClickHeader ? this.props.onClickHeader(column, props) : null;
            });
        }
    }

    // Renders a column footer
    private renderColumnFooter(column: HTMLTableCellElement, props: ITableColumn) {
        column.innerHTML = props.footer || "";

        // See if there is an event for this column
        if (props.onRenderFooter) {
            // Call the event
            props.onRenderFooter(column, props);
        }

        // See if there is an event for this component
        if (this.props.onRenderFooterCell) {
            // Call the event
            this.props.onRenderFooterCell(column, props);
        }

        // See if there is a click event
        if (props.onClickFooter || this.props.onClickFooter) {
            // Add the click event
            column.addEventListener("click", ev => {
                // Call the event
                props.onClickFooter ? props.onClickFooter(column, props) : null;
                this.props.onClickFooter ? this.props.onClickFooter(column, props) : null;
            });
        }
    }

    // Renders a row
    private renderRow(row: HTMLTableRowElement, data, rowIdx: number) {
        // See if columns
        for (let i = 0; i < this.props.columns.length; i++) {
            // Create the cell
            this.renderCell(row, this.props.columns[i], data, rowIdx);
        }

        // See if there is an event
        if (this.props.onRenderRow) {
            // Call the event
            this.props.onRenderRow(row, data, rowIdx);
        }
    }

    /**
     * Public Interface
     */

    // Method to add the rows
    addRows(rows: Array<any> = []) {
        let tbody = this.el.querySelector("tbody");
        if (tbody) {
            // Parse the rows
            for (let i = 0; i < rows.length; i++) {
                // Create the row
                let row = document.createElement("tr");
                tbody.appendChild(row);

                // Render the row
                this.renderRow(row, rows[i], i);
            }
        }
    }
}
export const Table = (props: ITableProps, template?: string): ITable => { return new _Table(props, template); }