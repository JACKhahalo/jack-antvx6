<template>
  <div class="header-container">
    <div class="left-area">
      <el-button
        @click="emits('leftChange')"
        :icon="props.left ? CaretLeft : CaretRight"
      ></el-button>
    </div>
    <div class="right-area">
      <el-button
        @click="emits('rightChange')"
        :icon="props.right ? CaretRight : CaretLeft"
      ></el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { CaretLeft, CaretRight } from '@element-plus/icons-vue';
import { defineEmits, defineProps } from 'vue';
const emits = defineEmits(['leftChange', 'rightChange']);
const props = defineProps(['left', 'right']);
</script>
<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.left-area {
}
.right-area {
}
</style>
