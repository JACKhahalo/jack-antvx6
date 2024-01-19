<template>
  <div class="header-container">
    <div class="left-area">
      <el-button
        @click="emits('leftChange')"
        :icon="props.left ? CaretLeft : CaretRight"
      ></el-button>
    </div>
    <div class="right-area">
      <el-button @click="exportSvg">导出</el-button>
      <el-button @click="exportJSON">导出json</el-button>

      <el-button @click="importData">导入</el-button>
      <el-button
        @click="emits('rightChange')"
        :icon="props.right ? CaretRight : CaretLeft"
      ></el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { CaretLeft, CaretRight } from '@element-plus/icons-vue';
import { defineEmits, defineProps } from 'vue';
import { grahpStore } from '../../../pinia/graph';
import { Graph } from '@antv/x6';
import models from './models/index';
import edgeModels from './models/edge';
import * as json1 from './models/test3.json';
import adapter from './models/adapter';

const store = grahpStore();
const graph: Graph = store.currentGraph as unknown as Graph;
const emits = defineEmits(['leftChange', 'rightChange']);
const props = defineProps(['left', 'right']);

const exportSvg = () => {
  graph.exportSVG();
};

const res1 = adapter(json1);

console.log(res1, 'json');

models.forEach((item) => {
  console.log(item);
  Graph.registerNode(item.name, item.settings, true);
});

edgeModels.forEach((item) => {
  Graph.registerEdge(item.name, item.settings, true);
});

Graph.registerNode(
  'diagram-component',
  {
    inherit: 'rect', // 继承于 rect 节点
    width: 100,
    height: 40,
    markup: [
      {
        tagName: 'rect', // 标签名称
        selector: 'body', // 选择器
      },
      {
        tagName: 'text',
        selector: 'label',
      },
    ],
    attrs: {
      body: {
        stroke: '#8f8f8f',
        strokeWidth: 1,
        fill: '#fff',
        rx: 6,
        ry: 6,
      },
    },
  },
  true
);

Graph.registerEdge('diagram-component-edge', {
  inherit: 'edge',
  markup: [
    {
      tagName: 'path',
      selector: 'outline',
      attrs: {
        fill: 'none',
      },
    },
    {
      tagName: 'path',
      selector: 'line',
      attrs: {
        fill: 'none',
        cursor: 'pointer',
      },
    },
  ],
  attrs: {
    line: {
      connection: true,
      stroke: '#dddddd',
      strokeWidth: 4,
      strokeLinejoin: 'round',
      targetMarker: {
        tagName: 'path',
        stroke: '#000000',
        d: 'M 10 -3 10 -10 -2 0 10 10 10 3',
      },
    },
    outline: {
      connection: true,
      stroke: '#000000',
      strokeWidth: 6,
      strokeLinejoin: 'round',
    },
  },
});

const importData = () => {
  console.log('导入');
  graph.fromJSON(res1);
};
const exportJSON = () => {
  console.log('导出', graph.toJSON());
  graph.toJSON();
};
</script>
<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.left-area {
}
.right-area {
}
</style>
