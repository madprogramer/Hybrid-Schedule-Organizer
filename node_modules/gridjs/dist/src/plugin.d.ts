import { BaseComponent, BaseProps } from './view/base';
import { VNode } from 'preact';
export declare enum PluginPosition {
    Header = 0,
    Footer = 1
}
export interface Plugin {
    id: string;
    position: PluginPosition;
    component: VNode<any>;
    order?: number;
}
export declare class PluginManager {
    private readonly plugins;
    constructor();
    get(id: string): Plugin | null;
    add(plugin: Plugin): this;
    remove(id: string): this;
    list(position?: PluginPosition): Plugin[];
}
export interface PluginRendererProps extends BaseProps {
    position?: PluginPosition;
}
export declare class PluginRenderer extends BaseComponent<PluginRendererProps, {}> {
    render(): VNode<any>;
}
