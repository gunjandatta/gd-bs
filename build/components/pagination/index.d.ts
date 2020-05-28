import { IPagination, IPaginationProps } from "../../../@types/components/pagination";
/**
 * Pagination Alignment
 */
export declare enum PaginationAlignment {
    Center = 1,
    Left = 2,
    Right = 3
}
export declare const Pagination: (props: IPaginationProps) => IPagination;
