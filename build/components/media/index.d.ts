import { IMedia, IMediaProps } from "../../../@types/components/media";
/**
 * Media Images Types
 */
export declare enum MediaImageTypes {
    Bottom = 1,
    Center = 2,
    Top = 3
}
/**
 * Media Order Types
 */
export declare enum MediaOrderTypes {
    Left = 1,
    Right = 2
}
export declare const Media: (props: IMediaProps) => IMedia;
