<template>
  <div class="settings-container">
    <el-collapse v-model="activeCollapsekey">
      <el-collapse-item title="属性" name="0">
        <el-form label-width="70px" size="small" label-position="left">
          <el-form-item label="是否启用:">
            <el-switch v-model="visible" @change="visibleChange" />
          </el-form-item>
          <el-form-item
            v-for="item in data.attribute"
            :label="`${item.label}:`"
          >
            <el-input-number
              v-if="item.type == 'input-number'"
              size="small"
              v-model="item.value"
            />
            <el-input
              v-else-if="item.type == 'input'"
              size="small"
              v-model="item.value"
            />
            <el-color-picker
              v-else-if="item.type == 'color-picker'"
              size="small"
              v-model="item.value"
            />
            <el-select
              v-else-if="item.type == 'select'"
              v-model="item.value"
              size="small"
              style="width: 130px"
            >
              <el-option
                v-for="item1 in item.options"
                :key="item1.value"
                :label="item1.label"
                :value="item1.value"
              />
            </el-select>
          </el-form-item>
        </el-form>
      </el-collapse-item>
      <el-collapse-item title="参数" name="1">
        <el-form label-width="40px" size="small" label-position="left">
          <el-form-item
            v-for="item in data.configuration"
            :label="`${item.label}:`"
          >
            <el-input-number
              v-if="item.type == 'input-number'"
              size="small"
              v-model="item.value"
            />
            <el-input
              v-else-if="item.type == 'input'"
              size="small"
              v-model="item.value"
            />
            <el-color-picker
              v-else-if="item.type == 'color-picker'"
              size="small"
              v-model="item.value"
            />
            <el-select
              v-else-if="item.type == 'select'"
              v-model="item.value"
              size="small"
              style="width: 130px"
            >
              <el-option
                v-for="item1 in item.options"
                :key="item1.value"
                :label="item1.label"
                :value="item1.value"
              />
            </el-select>
          </el-form-item>
        </el-form>
      </el-collapse-item>
      <el-collapse-item title="引脚" name="2">
        <el-form label-width="40px" size="small" label-position="left">
          <el-form-item v-for="item in ports" :label="`${item.id}:`">
            <el-input size="small" v-model="item.attrs!.text.text" />
          </el-form-item>
        </el-form>
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
let data = reactive(node.getData());
let visible = ref(node.isVisible());
let ports = reactive(node.getPorts());

console.log(ports, node.getPortProp(ports[0].id as unknown as string), 'data');

const initDefault = (node: Node) => {
  data = node.getData();
  visible.value = node.isVisible();
};

watch(
  store,
  (value) => {
    node = value.currentNode.node;
    initDefault(node);
  },
  {
    deep: true,
  }
);

watch(
  data,
  (value) => {
    node.setData(value);
    console.log(data, value, 'datachange');
  },
  {
    deep: true,
  }
);

watch(ports, (value) => {
  console.log(value, 'ports');
  node.prop('ports/items', value);
});

const visibleChange = (value: boolean) => {
  node.setVisible(value);
};
</script>
<style scoped>
::v-deep .el-collapse-item__content {
  padding: 0 20px;
}
.el-input-number {
  width: 85px;
}
</style>
