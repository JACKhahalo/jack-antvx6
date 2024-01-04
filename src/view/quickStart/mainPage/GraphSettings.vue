<template>
  <div class="settings-container">
    <el-collapse v-model="activeCollapsekey">
      <el-collapse-item title="基础配置" name="0">
        <el-form label-width="60px" size="small">
          <el-form-item label="背景颜色">
            <el-color-picker v-model="color" />
          </el-form-item>
          <el-form-item label="网格类型">
            <el-select v-model="gridType" size="small" style="width: 130px">
              <el-option
                v-for="item in selectOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="网格颜色">
            <el-color-picker v-model="gridColor" />
          </el-form-item>
        </el-form>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script setup lang="ts">
import { Graph } from '@antv/x6';
import { grahpStore } from '../../../pinia/graph';
import { ref, watch } from 'vue';
let activeCollapsekey = ref('0');

const selectOptions = [
  {
    value: 'dot',
    label: '点状网格',
  },
  {
    value: 'fixedDot',
    label: '固定网格',
  },
  {
    value: 'mesh',
    label: '网状网格',
  },
  {
    value: 'doubleMesh',
    label: '双线网状网格',
  },
];

const store = grahpStore();
let graph = store.currentGraph as unknown as Graph;

let color = ref(graph.options.background!.color);
let gridColor = ref(graph.options.grid.args!.color);

let gridType = ref(graph.options.grid!.type);

watch(color, (value: any) => {
  const options = graph.options.background;
  options!.color = value;
  graph.drawBackground(options as unknown as Graph.BackgroundManager.Options);
});

watch(gridType, (value: any) => {
  const options = graph.options.grid;
  options.type = value;
  graph.drawGrid(options);
});

watch(gridColor, (value: any) => {
  const options = graph.options.grid;
  options.args!.color = value;
  graph.drawGrid(options);
});
</script>
<style scoped>
.settings-container {
  display: flex;
}
::v-deep .el-collapse-item__content {
  padding: 0 20px;
}
</style>
