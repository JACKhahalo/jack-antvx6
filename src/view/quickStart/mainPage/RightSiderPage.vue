<template>
  <div class="side-container">
    <div v-if="store.defaultSettings == 0">
      <el-tabs v-model="activeName" type="border-card">
        <el-tab-pane label="画布" name="1">
          <GraphSettings></GraphSettings>
        </el-tab-pane>
        <el-tab-pane label="Config" name="2"></el-tab-pane>
      </el-tabs>
    </div>
    <div v-else-if="store.defaultSettings == 1">
      <el-tabs v-model="activeName2" type="border-card">
        <el-tab-pane label="格式" name="1">
          <NodeSettings></NodeSettings>
        </el-tab-pane>
        <el-tab-pane label="参数" name="2">
          <DataSettings></DataSettings>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div v-else>
      <el-tabs v-model="activeName2" type="border-card">
        <el-tab-pane label="格式" name="1">
          <EdgeSettings></EdgeSettings>
        </el-tab-pane>
        <el-tab-pane label="参数" name="2"> </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import GraphSettings from './GraphSettings.vue';
import NodeSettings from './NodeSettings.vue';
import EdgeSettings from './EdgeSettings.vue';
import { grahpStore } from '../../../pinia/graph';
import DataSettings from './DataSettings.vue';
const store = grahpStore();

const activeName = ref('1');
const activeName2 = ref('1');
</script>
<style scoped>
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
