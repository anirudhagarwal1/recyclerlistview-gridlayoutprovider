import { Dimension, Layout, WrapGridLayoutManager, LayoutProvider } from "recyclerlistview";
export declare class GridLayoutManager extends WrapGridLayoutManager {
    private _maxSpan;
    private _getSpan;
    private _isGridHorizontal;
    private _renderWindowSize;
    private _acceptableRelayoutDelta;
    constructor(layoutProvider: LayoutProvider, renderWindowSize: Dimension, getSpan: (index: number) => number, maxSpan: number, acceptableRelayoutDelta: number, isHorizontal?: boolean, cachedLayouts?: Layout[]);
    getStyleOverridesForIndex(index: number): object | undefined;
}
