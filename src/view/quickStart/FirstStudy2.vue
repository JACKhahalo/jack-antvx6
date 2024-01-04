<template>
  <div class="app">
    <div id="dndComtainer" class="dnd-wrap">
      <div class="dnd-rect" draggable="true">rect</div>
      <div class="dnd-circle" draggable="true">circle</div>
    </div>
    <div id="container" class="app-content"></div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { Graph } from '@antv/x6';
const data = {
  nodes: [
    {
      id: 'node1',
      x: 160,
      y: 180,
      width: 80,
      height: 40,
      label: 'world',
    },
  ],
};

let graph: Graph;

onMounted(() => {
  graph = new Graph({
    container: document.getElementById('container') as HTMLElement,
    background: {
      color: '#fff',
    },
    grid: {
      size: 10,
      visible: true,
    },
    autoResize: true,
    panning: true,
    mousewheel: true,
  });
  graph.fromJSON(data);
});
</script>
<style scoped>
.app {
  font-family: sans-serif;
  padding: 0;
  display: flex;
  padding: 16px 8px;
}

.app-content {
  flex: 1;
  height: 240px;
  margin-left: 8px;
  margin-right: 8px;
  box-shadow: 0 0 10px 1px #e9e9e9;
}

.dnd-wrap {
  width: 200px;
  padding: 16px;
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
}

.dnd-rect {
  width: 100px;
  height: 40px;
  border: 2px solid #31d0c6;
  text-align: center;
  line-height: 40px;
  margin: 16px;
  cursor: move;
}

.dnd-circle {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: 2px solid #31d0c6;
  text-align: center;
  line-height: 60px;
  margin: 16px;
  cursor: move;
}

.x6-graph-scroller {
  border: 1px solid #f0f0f0;
  margin-left: -1px;
}

.validating {
  position: relative;
}

.validating:after {
  position: absolute;
  top: 4px;
  left: 4px;
  content: ' ';
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 6px solid #873bf4;
  border-color: #873bf4 transparent #873bf4 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
