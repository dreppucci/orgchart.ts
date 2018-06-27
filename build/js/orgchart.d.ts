export declare class OrgChart {
    _name: any;
    options: any;
    chart: any;
    chartContainer: any;
    currentNode: any;
    dragged: any;
    html2canvas: any;
    constructor(options: any);
    readonly name: any;
    _closest(el: any, fn?: any): any;
    _siblings(el: any, expr?: any): {}[];
    _prevAll(el: any, expr?: any): any[];
    _nextAll(el: any, expr?: any): any[];
    _isVisible(el: any): boolean;
    _addClass(elements: any, classNames: any): void;
    _removeClass(elements: any, classNames: any): void;
    _css(elements: any, prop: any, val: any): void;
    _removeAttr(elements: any, attr: any): void;
    _one(el: any, type: any, listener?: any, self?: any): void;
    _getDescElements(ancestors: any, selector: any): any[];
    _getJSON(url: any): Promise<any>;
    _buildJsonDS(li: any): any;
    _attachRel(data: any, flags: any): any;
    _repaint(node: any): void;
    _isInAction(node: any): boolean;
    _getNodeState(node: any, relation: any): {
        exist: boolean;
        visible: boolean;
    };
    _getQuerySelectorScope(el: any, typeName: any, typeNameComparator: any): any;
    _getQuerySelectorAllScope(el: any, typeName: any, typeNameComparator: any, isEqual?: boolean): any[];
    _removeFocusedNodes(): void;
    getRelatedNodes(node: any, relation: any): any;
    _switchHorizontalArrow(node: any): void;
    _hoverNode(event: any): void;
    _clickNode(event: any): void;
    _buildParentNode(currentRoot: any, nodeData: any, callback?: any): void;
    _switchVerticalArrow(arrow: any): void;
    showParent(node: any): void;
    showSiblings(node: any, direction?: any): void;
    hideSiblings(node: any, direction?: any): void;
    hideParent(node: any): void;
    addParent(currentRoot: any, data: any): void;
    _startLoading(arrow: any, node: any): boolean;
    _endLoading(arrow: any, node: any): void;
    _clickTopEdge(event: any): void;
    hideChildren(node: any, deleteEl?: any): void;
    showChildren(node: any): void;
    _buildChildNode(appendTo: any, nodeData: any, callback: any): void;
    addChildren(node: any, data?: any): void;
    _clickBottomEdge(event: any): void;
    _complementLine(oneSibling: any, siblingCount: any, existingSibligCount: any): void;
    _buildSiblingNode(nodeChart: any, nodeData: any, callback: any): void;
    addSiblings(node: any, data: any): void;
    removeNodes(node: any): void;
    _clickHorizontalEdge(event: any): void;
    _clickToggleButton(event: any): void;
    _dispatchClickEvent(event: any): void;
    _onDragStart(event: any): void;
    _onDragOver(event: any): void;
    _onDragEnd(event: any): void;
    _onDrop(event: any): void;
    _checkBrowser(): boolean;
    _createNode(nodeData: any, level: any): Promise<{}>;
    buildHierarchy(appendTo: any, nodeData: any, level: any, callback?: any): void;
    _clickChart(event: any): void;
    _clickExportButton(): void;
    _loopChart(chart: any): any;
    getHierarchy(): any;
    _onPanStart(event: any): void;
    _onPanning(event: any): void;
    _onPanEnd(event: any): void;
    _setChartScale(chart: any, newScale: any): void;
    _onWheeling(event: any): void;
    _getPinchDist(event: any): number;
    _onTouchStart(event: any): void;
    _onTouchMove(event: any): void;
    _onTouchEnd(event: any): void;
    repositionChart(node?: any): void;
    resizeChart(): void;
}
