import { Graph } from '@antv/x6';
import { Dnd } from '@antv/x6-plugin-dnd';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const grahpStore = defineStore('grahp', {
  state: () => {
    return {
      currentGraph: Graph,
      currentDnd: Dnd,
      currentNode: ref(),
      currentEdge: ref(),
      leftSideRender: ref(false),
      itemRender: ref(false),
      defaultSettings: ref(0),
    };
  },
  actions: {
    currentGraphChange(grahp: any) {
      this.currentGraph = grahp;
    },
    leftSideCanRender() {
      this.leftSideRender = true;
    },
    itemCanRender() {
      this.itemRender = true;
    },
    currentDndChange(dnd: any) {
      this.currentDnd = dnd;
    },
    currentNodeChange(node: any) {
      this.currentNode = node;
    },
    currentEdgeChange(edge: any) {
      this.currentEdge = edge;
    },
    defaultSettingsChange(value: any) {
      this.defaultSettings = value;
    },
  },
});
