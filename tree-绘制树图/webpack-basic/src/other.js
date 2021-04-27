import G6 from '@antv/g6';
import { ext } from '@antv/matrix-util';
// import { mat3 } from '@antv/matrix-util';
let COLLAPSE_ICON = function COLLAPSE_ICON(x, y, r) {
    return [
        ['M', x - r, y - r],
        ['a', r, r, 0, 1, 0, r * 2, 0],
        ['a', r, r, 0, 1, 0, -r * 2, 0],
        ['M', x + 2 - r, y - r],
        ['L', x + r - 2, y - r],
    ];
};
let EXPAND_ICON = function EXPAND_ICON(x, y, r) {
    return [
        ['M', x - r, y - r],
        ['a', r, r, 0, 1, 0, r * 2, 0],
        ['a', r, r, 0, 1, 0, -r * 2, 0],
        ['M', x + 2 - r, y - r],
        ['L', x + r - 2, y - r],
        ['M', x, y - 2 * r + 2],
        ['L', x, y - 2],
    ];
};

let data = {
    id: 'root',
    label: 'root',
    children: [{
            id: 'c1',
            label: 'c1',
            children: [{
                    id: 'c1-1',
                    label: 'c1-1',
                },
                {
                    id: 'c1-2',
                    label: 'c1-2',
                    children: [{
                            id: 'c1-2-1',
                            label: 'c1-2-1',
                        },
                        {
                            id: 'c1-2-2',
                            label: 'c1-2-2',
                        },
                    ],
                },
            ],
        },
        {
            id: 'c2',
            label: 'c2',
        },
        {
            id: 'c3',
            label: 'c3',
            children: [{
                    id: 'c3-1',
                    label: 'c3-1',
                },
                {
                    id: 'c3-2',
                    label: 'c3-2',
                    children: [{
                            id: 'c3-2-1',
                            label: 'c3-2-1',
                        },
                        {
                            id: 'c3-2-2',
                            label: 'c3-2-2',
                        },
                        {
                            id: 'c3-2-3',
                            label: 'c3-2-3',
                        },
                    ],
                },
                {
                    id: 'c3-3',
                    label: 'c3-3',
                },
            ],
        },
    ],
};

G6.Util.traverseTree(data, (d) => {
    d.leftIcon = {
        style: {
            fill: '#e6fffb',
            stroke: '#e6fffb',
        },
        img: 'data:image/png;base64,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',
    };
    return true;
});

G6.registerNode(
    'icon-node', {
        options: {
            size: [60, 20],
            stroke: '#91d5ff',
            fill: '#91d5ff',
        },
        draw(cfg, group) {
            let styles = this.getShapeStyle(cfg);
            let {
                labelCfg = {}
            } = cfg;

            let w = styles.width;
            let h = styles.height;

            let keyShape = group.addShape('rect', {
                attrs: {
                    ...styles,
                    x: -w / 2,
                    y: -h / 2,
                },
            });

            /**
             * leftIcon 格式如下：
             *  {
             *    style: ShapeStyle;
             *    img: ''
             *  }
             */
            // console.log('cfg.leftIcon', cfg.leftIcon);
            if (cfg.leftIcon) {
                let {
                    style,
                    img
                } = cfg.leftIcon;
                group.addShape('rect', {
                    attrs: {
                        x: 1 - w / 2,
                        y: 1 - h / 2,
                        width: 38,
                        height: styles.height - 2,
                        fill: '#8c8c8c',
                        ...style,
                    },
                });

                group.addShape('image', {
                    attrs: {
                        x: 8 - w / 2,
                        y: 8 - h / 2,
                        width: 24,
                        height: 24,
                        img: img ||
                            'https://g.alicdn.com/cm-design/arms-trace/1.0.155/styles/armsTrace/images/TAIR.png',
                    },
                    name: 'image-shape',
                });
            }

            // 如果不需要动态增加或删除元素，则不需要 add 这两个 marker
            group.addShape('marker', {
                attrs: {
                    x: 40 - w / 2,
                    y: 52 - h / 2,
                    r: 6,
                    stroke: '#73d13d',
                    cursor: 'pointer',
                    symbol: EXPAND_ICON,
                },
                name: 'add-item',
            });

            group.addShape('marker', {
                attrs: {
                    x: 80 - w / 2,
                    y: 52 - h / 2,
                    r: 6,
                    stroke: '#ff4d4f',
                    cursor: 'pointer',
                    symbol: COLLAPSE_ICON,
                },
                name: 'remove-item',
            });

            if (cfg.label) {
                group.addShape('text', {
                    attrs: {
                        ...labelCfg.style,
                        text: cfg.label,
                        x: 50 - w / 2,
                        y: 25 - h / 2,
                    },
                });
            }

            return keyShape;
        },
        update: undefined,
    },
    'rect',
);

G6.registerEdge('flow-line', {
    draw(cfg, group) {
        let startPoint = cfg.startPoint;
        let endPoint = cfg.endPoint;

        let {
            style
        } = cfg;
        let shape = group.addShape('path', {
            attrs: {
                stroke: style.stroke,
                endArrow: style.endArrow,
                path: [
                    ['M', startPoint.x, startPoint.y],
                    ['L', startPoint.x, (startPoint.y + endPoint.y) / 2],
                    ['L', endPoint.x, (startPoint.y + endPoint.y) / 2],
                    ['L', endPoint.x, endPoint.y],
                ],
            },
        });

        return shape;
    },
});

let defaultStateStyles = {
    hover: {
        stroke: '#1890ff',
        lineWidth: 2,
    },
};

let defaultNodeStyle = {
    fill: '#91d5ff',
    stroke: '#40a9ff',
    radius: 5,
};

let defaultEdgeStyle = {
    stroke: '#91d5ff',
    endArrow: {
        path: 'M 0,0 L 12, 6 L 9,0 L 12, -6 Z',
        fill: '#91d5ff',
        d: -20,
    },
};

let defaultLayout = {
    type: 'compactBox',
    direction: 'TB',
    getId: function getId(d) {
        return d.id;
    },
    getHeight: function getHeight() {
        return 16;
    },
    getWidth: function getWidth() {
        return 16;
    },
    getVGap: function getVGap() {
        return 40;
    },
    getHGap: function getHGap() {
        return 70;
    },
};

let defaultLabelCfg = {
    style: {
        fill: '#000',
        fontSize: 12,
    },
};

let container = document.getElementById('container');
let width = container.scrollWidth;
let height = container.scrollHeight || 500;

// let minimap = new G6.Minimap({
//     size: [150, 100],
// });
let graph = new G6.TreeGraph({
    container: 'container',
    width,
    height,
    linkCenter: true,
    // plugins: [minimap],
    modes: {
        default: ['drag-canvas', 'zoom-canvas'],
    },
    defaultNode: {
        type: 'icon-node',
        size: [120, 40],
        style: defaultNodeStyle,
        labelCfg: defaultLabelCfg,
    },
    defaultEdge: {
        type: 'flow-line',
        style: defaultEdgeStyle,
    },
    nodeStateStyles: defaultStateStyles,
    edgeStateStyles: defaultStateStyles,
    layout: defaultLayout,
});

const center = [250, 250]; // 图的中心
let matrix = graph.getGroup().getMatrix() || [1, 0, 0, 0, 1, 0, 0, 0, 1];
console.log('===123' , matrix)
// // 以图中心为旋转中心
matrix = ext.transform(matrix, [
    ['t', -center, -center], // 先平移到中心
    ['r', Math.PI / 2], // 旋转
    ['t', center, center], // 再平移回去
]);
console.log('===456' , matrix)
graph.getGroup().setMatrix(matrix)

// console.log("======", graph)

graph.data(data);
graph.render();
graph.fitView();

graph.on('node:mouseenter', (evt) => {
    let {
        item
    } = evt;
    graph.setItemState(item, 'hover', true);
});

graph.on('node:mouseleave', (evt) => {
    let {
        item
    } = evt;
    graph.setItemState(item, 'hover', false);
});

graph.on('node:click', (evt) => {
    let {
        item,
        target
    } = evt;
    let targetType = target.get('type');
    let name = target.get('name');

    // 增加元素
    if (targetType === 'marker') {
        let model = item.getModel();
        if (name === 'add-item') {
            if (!model.children) {
                model.children = [];
            }
            let id = `n-${Math.random()}`;
            model.children.push({
                id,
                label: id.substr(0, 8),
                leftIcon: {
                    style: {
                        fill: '#e6fffb',
                        stroke: '#e6fffb',
                    },
                    img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Q_FQT6nwEC8AAAAAAAAAAABkARQnAQ',
                },
            });
            graph.updateChild(model, model.id);
        } else if (name === 'remove-item') {
            graph.removeChild(model.id);
        }
    }
});

if (typeof window !== 'undefined')
    window.onresize = () => {
        if (!graph || graph.get('destroyed')) return;
        if (!container || !container.scrollWidth || !container.scrollHeight) return;
        graph.changeSize(container.scrollWidth, container.scrollHeight);
    };