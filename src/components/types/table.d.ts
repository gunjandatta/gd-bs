/**
 * Table
 */
export const Table: (props: ITableProps) => ITable

/**
 * Table
 */
export interface ITable {
    el: HTMLTableElement;
}

/**
 * Table Properties
 */
export interface ITableProps {
    className?: string;
    columns?: Array<ITableColumn>;
    el?: Element | HTMLElement;
    onRenderCell?: (el?: HTMLTableDataCellElement, column?: ITableColumn, value?: string) => void;
    onRenderHeaderCell?: (el?: HTMLTableDataCellElement, column?: ITableColumn) => void;
    onRenderHeaderRow?: (el?: HTMLTableRowElement) => void;
    onRenderRow?: (el?: HTMLTableRowElement, data?: any) => void;
    rows?: Array<{ [key: string]: string }>;
}

/**
 * Table Column
 */
export interface ITableColumn {
    className?: string;
    data?: any;
    isHidden?: boolean;
    name: string;
    onRenderCell?: (el: HTMLTableDataCellElement, column?: ITableColumn, value?: string) => void;
    onRenderHeader?: (el?: HTMLTableDataCellElement, column?: ITableColumn) => void;
    scope?: string;
    title?: string;
}