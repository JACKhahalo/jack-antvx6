<template>
  <div @mousedown="startDrag" class="component-item">
    <img width="80" height="60" :src="svgProps" alt="SVG Image" />
  </div>
</template>
<script setup lang="ts">
import { Dnd } from '@antv/x6-plugin-dnd';
import { grahpStore } from '../../../pinia/graph';
import { Graph } from '@antv/x6';
const props = defineProps(['svg']);
const svgProps = `/src/view/quickStart/mainPage/assets/${props.svg}.svg`;

const store = grahpStore();
let dnd: Dnd;
let graph: Graph;

dnd = store.currentDnd as unknown as Dnd;
graph = store.currentGraph as unknown as Graph;

const ports = {
  groups: {
    top: {
      position: 'top',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
    right: {
      position: 'right',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
    bottom: {
      position: 'bottom',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
    left: {
      position: 'left',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
  },
  items: [
    {
      group: 'top',
    },
    {
      group: 'right',
    },
    {
      group: 'bottom',
    },
    {
      group: 'left',
    },
  ],
};

const startDrag = (e: any) => {
  const target = e.currentTarget;
  const type = target.getAttribute('data-type');
  const node = graph.createNode({
    width: 40,
    height: 40,
    label: '',
    shape: 'image',
    imageUrl: svgProps,
    attrs: {
      body: {
        stroke: '#8f8f8f',
        strokeWidth: 1,
        fill: '#fff',
        rx: 6,
        ry: 6,
      },
    },
    ports: { ...ports },
  });
  console.log(e, target, e.nativeEvent);
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
  margin: 5px;
}
</style>
