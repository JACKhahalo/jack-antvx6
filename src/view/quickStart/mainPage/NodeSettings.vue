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
          <el-form-item label="节点角度">
            <el-input-number
              size="small"
              v-model="angle"
              @change="angelChange"
            />
          </el-form-item>
        </el-form>
      </el-collapse-item>
      <el-collapse-item title="样式" name="2">
        <el-form-item label="线条颜色">
          <el-color-picker v-model="attrs.path.stroke" />
        </el-form-item>
        <el-form-item label="线条宽度">
          <el-input-number size="small" v-model="attrs.path.strokeWidth" />
        </el-form-item>
        <el-form-item label="填充颜色">
          <el-color-picker v-model="attrs.path.fill" />
        </el-form-item>
        <el-form-item label="文本颜色">
          <el-color-picker v-model="attrs.text.fill" />
        </el-form-item>
        <el-form-item label="字体大小">
          <el-input-number size="small" v-model="attrs.text.fontSize" />
        </el-form-item>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { grahpStore } from '../../../pinia/graph';
import { Node } from '@antv/x6';
const store = grahpStore();
let activeCollapsekey = ref('0');

let node: Node = store.currentNode.node;
//默认参数定义
let zIndex = ref(node.getZIndex());
let size = ref(node.size());
let position = ref(node.position());
let angle = ref(node.getAngle());
let attrs = reactive(node.getAttrs());

//默认参数赋值
const initDefault = (node: Node) => {
  zIndex.value = node.getZIndex();
  size.value = node.size();
  position.value = node.position();
  angle.value = node.getAngle();
  attrs = node.getAttrs();
  node.setAttrs(attrs);
};

watch(
  store,
  (value) => {
    node = value.currentNode.node;
    initDefault(node);

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
const angelChange = () => {
  node.rotate(angle.value, { absolute: true });
};

watch(
  attrs,
  (value) => {
    node.setAttrs(value);
    console.log(node, value, 'change', node.getAttrs());
  },
  {
    deep: true,
  }
);
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
