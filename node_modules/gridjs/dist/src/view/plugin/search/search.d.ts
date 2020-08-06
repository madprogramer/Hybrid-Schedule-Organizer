import { h } from 'preact';
import { BaseComponent, BaseProps } from '../../base';
import { TCell } from '../../../types';
export interface SearchConfig {
    keyword?: string;
    enabled?: boolean;
    debounceTimeout?: number;
    selector?: (cell: TCell, rowIndex: number, cellIndex: number) => string;
    server?: {
        url?: (prevUrl: string, keyword: string) => string;
        body?: (prevBody: BodyInit, keyword: string) => BodyInit;
    };
}
export declare class Search extends BaseComponent<SearchConfig & BaseProps, {}> {
    private readonly searchProcessor;
    private readonly actions;
    private readonly store;
    private readonly storeUpdatedFn;
    static defaultProps: {
        debounceTimeout: number;
    };
    constructor(props: SearchConfig, context: any);
    componentWillUnmount(): void;
    private storeUpdated;
    private onChange;
    render(): h.JSX.Element;
}
