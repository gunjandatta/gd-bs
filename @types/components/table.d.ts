/**
 * Table
 */
export const Table: (props: ITableProps) => ITable

/**
 * Table
 */
export interface ITable {
    addRows(rows: Array<any>);

    el: HTMLElement;

    /** Hides the table. */
    hide: () => void;

    /** Shows the table. */
    show: () => void;
}

/**
 * Table Properties
 */
export interface ITableProps {
    className?: string;
    columns?: Array<ITableColumn>;
    el?: Element | HTMLElement;
    onClickCell?: (el: HTMLTableDataCellElement, column?: ITableColumn, data?: any) => void;
    onClickHeader?: (el: HTMLTableHeaderCellElement, column?: ITableColumn) => void;
    onRenderCell?: (el?: HTMLTableDataCellElement, column?: ITableColumn, data?: any) => void;
    onRenderHeaderCell?: (el?: HTMLTableDataCellElement, column?: ITableColumn) => void;
    onRenderHeaderRow?: (el?: HTMLTableRowElement) => void;
    onRenderRow?: (el?: HTMLTableRowElement, data?: any) => void;
    rows?: Array<any>;
}

/**
 * Table Column
 */
export interface ITableColumn {
    className?: string;
    data?: any;
    enableSort?: boolean;
    isHidden?: boolean;
    name: string;
    onClickCell?: (el: HTMLTableDataCellElement, column?: ITableColumn, data?: any) => void;
    onClickHeader?: (el: HTMLTableHeaderCellElement, column?: ITableColumn) => void;
    onRenderCell?: (el: HTMLTableDataCellElement, column?: ITableColumn, data?: any) => void;
    onRenderHeader?: (el?: HTMLTableDataCellElement, column?: ITableColumn) => void;
    scope?: string;
    title?: string;
}