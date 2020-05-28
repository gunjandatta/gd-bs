/**
 * Class Names
 */
export declare class ClassNames {
    private _items;
    constructor(items: Array<string>);
    getByType(type: number): string;
    parse(callback: (className: string) => void): void;
}
