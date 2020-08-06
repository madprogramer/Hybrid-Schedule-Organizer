import { Component } from 'preact';
import { Config } from '../config';
export interface BaseProps {
}
export declare abstract class BaseComponent<P extends BaseProps, S> extends Component<P, S> {
    protected config: Config;
    protected _: (message: string, ...args: any[]) => string;
    constructor(props: P, context: any);
}
