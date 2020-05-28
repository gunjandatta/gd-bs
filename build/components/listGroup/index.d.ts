import "bootstrap/js/dist/tab";
import { IListGroup, IListGroupProps } from "../../../@types/components/listGroup";
import { ClassNames } from "../classNames";
/**
 * List Group Item Types
 */
export declare enum ListGroupItemTypes {
    Danger = 1,
    Dark = 2,
    Info = 3,
    Light = 4,
    Primary = 5,
    Secondary = 6,
    Success = 7,
    Warning = 8
}
/**
 * List Group Classes
 */
export declare const ListGroupClassNames: ClassNames;
export declare const ListGroup: (props: IListGroupProps) => IListGroup;
