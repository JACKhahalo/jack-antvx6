<template>
  <div class="side-container">
    <el-tabs v-model="activeTabsKey" type="border-card">
      <el-tab-pane label="模型" name="1">
        <el-collapse v-model="activeCollapsekey">
          <el-collapse-item title="变压器" name="1">
            <ComponentGroup v-if="store.itemRender"> </ComponentGroup>
          </el-collapse-item>
          <el-collapse-item title="模块-基础" name="2"> </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
      <el-tab-pane label="Config" name="2"></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup lang="ts">
import { Dnd } from '@antv/x6-plugin-dnd';
import { onMounted, ref } from 'vue';
import { grahpStore } from '../../../pinia/graph';
import { Graph } from '@antv/x6';
import ComponentGroup from './ComponentGroup.vue';

const activeTabsKey = ref('1');
const activeCollapsekey = ref('1');
const store = grahpStore();
let graph: Graph;
let dnd: Dnd;

onMounted(() => {
  console.log('onMounted');
  graph = store.currentGraph as unknown as Graph;
  dnd = new Dnd({
    target: graph,
    scaled: false,
    dndContainer: document.getElementById('dragContainer') as HTMLElement,
  });
  store.currentDndChange(dnd);
  store.itemCanRender();
});
</script>
<style scoped>
.side-container {
}
::v-deep .el-tabs__header {
  margin: 0 !important;
}
::v-deep .el-tabs__content {
  padding: 0 !important;
}
::v-deep .el-collapse-item__header {
  padding-left: 10px !important;
}
</style>
