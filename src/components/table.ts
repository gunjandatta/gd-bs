import { ITable, ITableProps } from "./types/table";

/**
 * Table
 */
export const Table = (props: ITableProps): ITable => {
    // Create the table element
    let elTable = document.createElement("table");

    // Set the class name
    elTable.className = props.className || "";
    elTable.classList.add("table");

    // See if columns are defined
    if (props.columns) {
        // Create the header
        let elHead = document.createElement("thead");
        elTable.appendChild(elHead);

        // Append the row
        let elRow = document.createElement("tr");
        elHead.append(elRow);

        // Parse the columns
        for (let i = 0; i < props.columns.length; i++) {
            let col = props.columns[i];

            // Append the column
            let elCol = document.createElement("th");
            elCol.className = col.className || "";
            elCol.innerHTML = col.isHidden ? "" : col.title || col.name;
            elCol.setAttribute("scope", "col");
            elRow.appendChild(elCol);

            // See if there is an event for this column
            if (col.onRenderHeader) {
                // Call the event
                col.onRenderHeader(elCol, col);
            }

            // See if there is an event for this component
            if (props.onRenderHeaderCell) {
                // Call the event
                props.onRenderHeaderCell(elCol, col);
            }
        }

        // See if there is an event
        if (props.onRenderHeaderRow) {
            // Call the event
            props.onRenderHeaderRow(elRow);
        }
    }

    // Create the body
    let elBody = document.createElement("tbody");
    elTable.appendChild(elBody);

    // Parse the rows
    let rows = props.rows || [];
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];

        // Append the row
        let elRow = document.createElement("tr");
        elBody.appendChild(elRow);

        // See if columns
        for (let j = 0; j < props.columns.length; j++) {
            let col = props.columns[j];
            let value = row[col.name] || "";

            // Append the cell
            let elCell = document.createElement("td");
            elCell.className = col.className || "";
            elCell.innerHTML = value;
            elRow.appendChild(elCell);

            // See if there is a scope
            if (col.scope) {
                // Set the scope
                elCell.setAttribute("scope", col.scope);
            }

            // See if there is an event for this column
            if (col.onRenderCell) {
                // Call the event
                col.onRenderCell(elCell, col, value);
            }

            // See if there is an event for this component
            if (props.onRenderCell) {
                // Call the event
                props.onRenderCell(elCell, col, value);
            }
        }

        // See if there is an event
        if (props.onRenderRow) {
            // Call the event
            props.onRenderRow(elRow, row);
        }
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(elTable);

    // See if we are rendering it to an element
    if (props.el) {
        // Ensure the class list exists and it's not the body element
        if (props.el.classList && props.el.tagName != "BODY") {
            // Set the bootstrap class
            props.el.classList.contains("bs") ? null : props.el.classList.add("bs");
        }

        // Append the elements
        while (el.children.length > 0) {
            props.el.appendChild(el.children[0]);
        }

        // Update the element
        el = props.el as any;
    } else {
        // Set the bootstrap class
        el.classList.add("bs");
    }

    // Return the table
    return {
        el: elTable
    };
}