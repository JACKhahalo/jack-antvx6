<template>
  <div class="settings-container">
    <el-collapse v-model="activeCollapsekey">
      <el-collapse-item title="连接" name="0">
        <el-form-item label="首端">
          <el-input size="small" v-model="source.cell" />
        </el-form-item>
        <el-form-item label="首端">
          <el-input size="small" v-model="target.cell" />
        </el-form-item>
      </el-collapse-item>
      <el-collapse-item title="排列" name="1">
        <el-form label-width="60px" size="small">
          <el-form-item label="层级">
            <el-input-number
              size="small"
              v-model="zIndex"
              @change="zIndexChange"
            />
          </el-form-item>
        </el-form>
      </el-collapse-item>
      <el-collapse-item title="线条属性" name="2">
        <el-form-item label="连接类型">
          <el-select
            v-model="connecting.name"
            size="small"
            style="width: 130px"
          >
            <el-option
              v-for="item in connectingOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="路由类型">
          <el-select v-model="router.name" size="small" style="width: 130px">
            <el-option
              v-for="item in routerOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-collapse-item>
      <el-collapse-item title="样式" name="3">
        <el-form-item label="线条颜色">
          <el-color-picker v-model="attrs.line.stroke" />
        </el-form-item>
        <el-form-item label="线条宽度">
          <el-input-number size="small" v-model="attrs.line.strokeWidth" />
        </el-form-item>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import { grahpStore } from '../../../pinia/graph';
import { Edge } from '@antv/x6';
let activeCollapsekey = ref('0');
const store = grahpStore();
const connectingOptions = [
  {
    label: '简单',
    value: 'normal',
  },
  {
    label: '平滑',
    value: 'smooth',
  },
  {
    label: '圆角',
    value: 'rounded',
  },
  {
    label: '跳线',
    value: 'jumpover',
  },
];
const routerOptions = [
  {
    label: '默认',
    value: 'normal',
  },
  {
    label: '正交',
    value: 'orth',
  },
  {
    label: '受限正交',
    value: 'oneSide',
  },
  {
    label: '智能正交',
    value: 'manhattan',
  },
  {
    label: '智能地铁',
    value: 'metro',
  },
  {
    label: '实体关系',
    value: 'er',
  },
];

let edge: Edge = store.currentEdge.edge;
let attrs = ref(edge.getAttrs());
let source = ref(edge.getSource());
let target = ref(edge.getTarget());
let zIndex = ref(edge.getZIndex());
let router = ref(edge.getRouter());
let connecting = ref(edge.getConnector());
console.log(router, connecting, 'edge');

const initDefault = (edge: Edge) => {
  attrs.value = edge.getAttrs();
  source.value = edge.getSource();
  target.value = edge.getTarget();
  zIndex.value = edge.getZIndex();
  router.value = edge.getRouter();
  connecting.value = edge.getConnector();
};

watch(
  store,
  (value) => {
    edge = value.currentEdge.edge;
    initDefault(edge);
  },
  {
    deep: true,
  }
);

watch(
  attrs,
  (value) => {
    edge.setAttrs(value);
  },
  {
    deep: true,
  }
);
watch(
  router,
  (value) => {
    console.log(value, 'connting');
    edge.setRouter(value.name);
  },
  {
    deep: true,
  }
);

watch(
  connecting,
  (value) => {
    console.log(value, 'connting');
    edge.setConnector(value.name);
  },
  {
    deep: true,
  }
);

const zIndexChange = (value: number) => {
  edge.setZIndex(value);
};
</script>
<style scoped>
.settings-container {
  /* display: flex; */
}
::v-deep .el-collapse-item__content {
  padding: 0 20px;
}
.el-input-number {
  width: 85px;
}
</style>
