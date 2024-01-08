<template>
  <div class="component-group">
    <ComponentItem v-for="item of models" :type="item[0]"></ComponentItem>
    <!-- <ComponentItem type="ConnectivePoint_1"></ComponentItem>
    <ComponentItem type="ConnectivePoint_3"></ComponentItem>
    <ComponentItem type="FaultIndicator_1"></ComponentItem>
    <ComponentItem type="PolePSR_2"></ComponentItem> -->
  </div>
</template>
<script setup lang="ts">
import models from './models/index';
import ComponentItem from './ComponentItem.vue';
</script>
<style scoped>
.component-group {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
