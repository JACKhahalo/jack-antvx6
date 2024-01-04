<template>
  <div class="settings-container">
    <el-collapse v-model="activeCollapsekey">
      <el-collapse-item title="大小与位置" name="0">
        <el-form label-width="40px" size="small" label-position="left">
          <el-form-item label="大小">
            <el-input-number v-model="size.width" @change="sizeChange" />
          </el-form-item>
          <el-form-item label="高度">
            <el-input-number v-model="size.height" @change="sizeChange" />
          </el-form-item>
          <el-form-item label="x">
            <el-input-number v-model="position.x" @change="positionChange" />
          </el-form-item>
          <el-form-item label="y">
            <el-input-number v-model="position.y" @change="positionChange" />
          </el-form-item>
        </el-form>
      </el-collapse-item>

      <el-collapse-item title="排列" name="1">
        <el-form label-width="60px" size="small">
          <el-form-item label="元素层级">
            <el-input-number
              size="small"
              v-model="zIndex"
              @change="zIndexChange"
            />
          </el-form-item>
        </el-form>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import { grahpStore } from '../../../pinia/graph';
import { Node } from '@antv/x6';
const store = grahpStore();
let activeCollapsekey = ref('0');

let node: Node = store.currentNode.node;
let zIndex: any = ref(node.getZIndex());
let size: any = ref(node.size());
let position: any = ref(node.position());
console.log(node.position());
watch(
  store,
  (value) => {
    node = value.currentNode.node;
    zIndex.value = node.getZIndex();
    size.value = node.size();
    position.value = node.position();
    console.log(size, value, 'nodechange', store.currentNode);
  },
  {
    deep: true,
  }
);

const zIndexChange = (value: number) => {
  node.setZIndex(value);
};
const sizeChange = () => {
  node.resize(size.value.width, size.value.height);
};
const positionChange = () => {
  node.position(position.value.x, position.value.y);
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
