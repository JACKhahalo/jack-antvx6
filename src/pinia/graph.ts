import { Graph } from '@antv/x6';
import { Dnd } from '@antv/x6-plugin-dnd';
import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

export const grahpStore = defineStore('grahp', {
  state: () => {
    return {
      currentGraph: Graph,
      currentDnd: Dnd,
      currentNode: reactive(),
      leftSideRender: ref(false),
      itemRender: ref(false),
      defaultSettings: ref(true),
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
    defaultSettingsChange(value: any) {
      this.defaultSettings = value;
    },
  },
});
