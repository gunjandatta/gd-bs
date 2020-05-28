import { IBase, IBaseProps } from "../../@types/base";
/**
 * Base Components
 */
export declare class Base<IProps = IBaseProps<IBase>> implements IBase<IProps> {
    _bootstrapObj: any;
    private _el;
    private _props;
    constructor(html: any, props: IProps);
    /**
     * Internal Methods
     */
    configureParent(): Element;
    /**
     * Public Properties
     */
    get el(): any;
    set el(el: any);
    hide(): void;
    get props(): IProps;
    show(): void;
}
