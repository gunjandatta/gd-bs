import { IPanel, IPanelProps } from "../../../@types/components/panel";
/**
 * Panel Types
 */
export declare enum PanelTypes {
    Full = 1,
    Large = 2,
    Medium = 3,
    Small = 4,
    XLarge = 5
}
export declare const Panel: (props: IPanelProps) => IPanel;
