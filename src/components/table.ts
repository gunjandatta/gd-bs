import { ITable, ITableProps } from "./types/table";

/**
 * Table
 */
export const Table = (props: ITableProps): ITable => {
    // Method to sort the table
    let sortTable = (colIdx: number) => {
        let idx = -1;

        // Get the sort icon
        let elIcon = elHead.querySelector(".sort-icon");
        if (elIcon) {
            // Remove the sort icon
            elIcon.parentElement.removeChild(elIcon);
        }

        // Determine the sort
        let sortAscending = true;
        let elCol = elHead.children[0].children[colIdx];
        if (elCol) {
            // Get the sort attribute
            if (elCol.hasAttribute("data-sort-asc")) {
                // Set the flag
                sortAscending = false;

                // Remove the attribute
                elCol.removeAttribute("data-sort-asc");
            } else {
                // Add the attribute
                elCol.setAttribute("data-sort-asc", "true");
            }

            // Create the icon
            elIcon = document.createElement("i");
            elIcon.className = "ml-1 sort-icon";
            elIcon.innerHTML = sortAscending ? "&uarr;" : "&darr;";
            elCol.appendChild(elIcon);
        } else { return; }

        // Parse the table rows
        while (++idx < elBody.children.length) {
            let elRow = elBody.children[idx] as HTMLTableRowElement;
            let value = ((elRow.children[colIdx] as HTMLTableDataCellElement).innerText || "").toLowerCase();

            // Loop through the previous items
            let counter = idx;
            while (--counter >= 0) {
                let elPreviousRow = elBody.children[counter] as HTMLTableRowElement;
                let elPreviousCol = elPreviousRow.children[colIdx] as HTMLTableDataCellElement;
                let prevValue = (elPreviousCol ? elPreviousCol.innerText : "").toLowerCase();

                // Compare the values
                if (sortAscending ? value < prevValue : value > prevValue) {
                    // Switch the values
                    elBody.insertBefore(elRow, elPreviousRow);
                } else { break; }
            }
        }
    }

    // Create the table element
    let elTable = document.createElement("table");

    // Set the class name
    elTable.className = props.className || "";
    elTable.classList.add("table");

    // See if columns are defined
    let elHead: HTMLTableHeaderCellElement = null;
    if (props.columns) {
        // Create the header
        elHead = document.createElement("thead") as any;
        elTable.appendChild(elHead);

        // Append the row
        let elRow = document.createElement("tr");
        elHead.appendChild(elRow);

        // Parse the columns
        for (let i = 0; i < props.columns.length; i++) {
            let col = props.columns[i];

            // Append the column
            let elCol = document.createElement("th");
            elCol.innerHTML = col.isHidden ? "" : col.title || col.name;
            elCol.setAttribute("data-idx", i.toString());
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

            // See if we are sorting this column
            if (col.enableSort) {
                // Add a click event
                elCol.addEventListener("click", ev => {
                    let elCol = ev.currentTarget as HTMLTableHeaderCellElement;

                    // Sort the table data
                    sortTable(parseInt(elCol.getAttribute("data-idx")));
                });
            }

            // See if there is a click event
            if (col.onClickHeader || props.onClickHeader) {
                // Add the click event
                elCol.addEventListener("click", ev => {
                    let elCol = ev.currentTarget as HTMLTableHeaderCellElement;

                    // Get the column
                    let col = props.columns[parseInt(elCol.getAttribute("data-idx"))];
                    if (col) {
                        // Call the event
                        col.onClickHeader ? col.onClickHeader(elCol, col) : null;
                        props.onClickHeader ? props.onClickHeader(elCol, col) : null;
                    }
                });
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
            elCell.setAttribute("data-row", i.toString());
            elCell.setAttribute("data-idx", j.toString());
            elRow.appendChild(elCell);

            // See if there is a scope
            if (col.scope) {
                // Set the scope
                elCell.setAttribute("scope", col.scope);
            }

            // See if there is an event for this column
            if (col.onRenderCell) {
                // Call the event
                col.onRenderCell(elCell, col, row);
            }

            // See if there is an event for this component
            if (props.onRenderCell) {
                // Call the event
                props.onRenderCell(elCell, col, row);
            }

            // See if there is a click event
            if (col.onClickCell || props.onClickCell) {
                // Add the click event
                elCell.addEventListener("click", ev => {
                    let elCell = ev.currentTarget as HTMLTableHeaderCellElement;

                    // Get the column
                    let col = props.columns[parseInt(elCell.getAttribute("data-idx"))];
                    let row = props.rows[parseInt(elCell.getAttribute("data-row"))] || {};
                    if (col) {
                        // Call the event
                        col.onClickCell ? col.onClickCell(elCell, col, row) : null;
                        props.onClickCell ? props.onClickCell(elCell, col, row) : null;
                    }
                });
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