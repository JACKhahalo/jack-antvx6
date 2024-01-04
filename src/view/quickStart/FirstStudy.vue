<template>
  <div style="width: 100%">
    <button @click="bigFunction">放大</button>
    <button @click="smallFunction">缩小</button>
    <button @click="centerFunction">居中</button>
    <button @click="addFunction">添加</button>
    <button @click="addDivFunction">添加DIV</button>
    <button @click="addEdgeFunction">添加边</button>
  </div>
  <div style="width: 100%; height: 100%">
    <div id="container"></div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { Graph } from '@antv/x6';
const markers = [
  'block',
  'classic',
  'diamond',
  'circle',
  'circlePlus',
  'ellipse',
  'cross',
  'async',
];
const data = {
  // 节点
  nodes: [
    {
      id: 'node1', // String，可选，节点的唯一标识
      x: 0, // Number，必选，节点位置的 x 值
      y: 0, // Number，必选，节点位置的 y 值
      width: 80, // Number，可选，节点大小的 width 值
      height: 40, // Number，可选，节点大小的 height 值
      label: 'hello', // String，节点标签
      angle: 90, //角度
    },
    {
      id: 'node2',
      x: 160,
      y: 180,
      width: 80,
      height: 40,
      label: 'world',
    },
    {
      id: 'node3',
      x: 200,
      y: 220,
      width: 80,
      height: 40,
      label: 'node3',
    },
  ],
  // 边
  edges: [
    {
      source: 'node1', // String，必须，起始节点 id
      target: 'node2', // String，必须，目标节点 id
    },
  ],
};
let graph: Graph;
onMounted(() => {
  Graph.registerNode('div-node', {
    inherit: 'rect', //继承已有节点
    width: 100,
    height: 40,
    markup: [
      {
        tagName: 'rect',
        selector: 'body',
      },
      {
        tagName: 'image',
        selector: 'img',
      },
      {
        tagName: 'text',
        selector: 'label',
      },
    ],
    attrs: {
      body: {
        //边框
        stroke: '#8f8f8f',
        strokeWidth: 1,
        //填充颜色
        fill: '#fff',
        //圆角
        rx: 6,
        ry: 6,
      },
      img: {
        'xlink:href':
          'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
        //图片大小
        width: 16,
        height: 16,
        //图片位置
        x: 12,
        y: 12,
      },
    },
  });
  graph = new Graph({
    container: document.getElementById('container') as HTMLElement, //获取容器
    width: 800,
    height: 800,
    //背景
    background: {
      color: '#fff',
    },
    //网格
    grid: {
      size: 10,
      visible: true,
    },
    //注意，使用 autoResize 配置时，需要在画布容器外面再套一层宽高都是 100% 的外层容器
    //在外层容器上监听尺寸改变，当外层容器大小改变时，画布自动重新计算宽高以及元素位置
    autoResize: true,
    //鼠标点击时拖拽、缩放
    panning: true,
    mousewheel: true,
    // graph.resize(800, 600) // resize 画布大小
    // graph.translate(20, 20) // 在 x、y 方向上平移画布
    // graph.zoom(0.2) // 将画布缩放级别增加 0.2（默认为1）
    // graph.zoom(-0.2) // 将画布缩放级别减少 0.2
    // graph.zoomTo(1.2) // 将画布缩放级别设置为 1.2
    // // 将画布中元素缩小或者放大一定级别，让画布正好容纳所有元素，可以通过 maxScale 配置最大缩放级别
    // graph.zoomToFit({ maxScale: 1 })
    // graph.centerContent() // 将画布中元素居中展示
  });
  graph.fromJSON(data);

  //注册节点

  markers.forEach((value, index) => {
    graph.addEdge({
      sourcePoint: [120, 20 + index * 40],
      targetPoint: [400, 20 + index * 40],
      label: value,
      attrs: {
        line: {
          //两端点形状
          sourceMarker: value,
          targetMarker: value,
          stroke: '#8f8f8f',
          strokeWidth: 1,
        },
      },
    });
  });
});

const addFunction = () => {
  //添加节点
  graph.addNode({
    shape: 'image',
    x: 290,
    y: 150,
    width: 60,
    height: 40,
    imageUrl:
      'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/logo-with-text-73b8a.svg',
    // label: 'image',
  });
};

const bigFunction = () => {
  graph.zoom(0.2);
};
const smallFunction = () => {
  graph.zoom(-0.2);
};
const centerFunction = () => {
  //居中
  graph.centerContent();
};
const addDivFunction = () => {
  const node = graph.addNode({
    shape: 'div-node',
    x: 40,
    y: 40,
    label: 'div',
  });
  console.log(node);

  setTimeout(() => {
    //修改属性
    node.attr('body/fill', '#ccc');
  }, 2000);
};

const addEdgeFunction = () => {
  graph.addEdge({
    source: 'node1',
    target: 'node3',
    attrs: {
      //线形
      line: {
        stroke: '#8f8f8f',
        strokeWidth: 1,
      },
    },
    //中途交点
    vertices: [
      {
        x: 100,
        y: 200,
      },
    ],
    //线标签
    labels: [
      {
        attrs: {
          label: {
            text: '40%',
            stroke: '#aaa',
          },
        },
        position: 0.4,
      },
    ],
    //规格线形
    router: 'orth',
  });
};
</script>
<style scoped></style>
