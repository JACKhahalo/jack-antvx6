<template>
  <div @mousedown="startDrag" class="component-item">
    <svg width="80" height="60" viewBox="-40 -30 90 60 ">
      <path
        :d="model!.settings.attrs!.path.refDKeepOffset"
        stroke="#000000"
        strokeWidth="1"
        fill="transparent"
      ></path>
    </svg>
    <div class="item-label">{{ props.type }}</div>
  </div>
</template>
<script setup lang="ts">
import { Dnd } from '@antv/x6-plugin-dnd';
import { grahpStore } from '../../../pinia/graph';
import { Graph } from '@antv/x6';
import models from './models';
const props = defineProps(['type']);
// const svgProps = `/src/view/quickStart/mainPage/modelAssets/${props.type}.svg`;
const model = models.get(props.type);

const store = grahpStore();
let dnd: Dnd;
let graph: Graph;

dnd = store.currentDnd as unknown as Dnd;
graph = store.currentGraph as unknown as Graph;

const startDrag = (e: any) => {
  const node = graph.createNode(model!.settings);
  dnd.start(node, e);
};
</script>
<style scoped>
.component-item:hover {
  background-color: gray;
  opacity: 0.7;
}
.component-item {
  background-color: transparent;
  padding: 5px;
}
.item-label {
  width: 80px;
  overflow: hidden;
}
</style>
