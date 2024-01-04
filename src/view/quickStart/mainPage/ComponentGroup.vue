<template>
  <div class="component-group">
    <ComponentItem svg="1"></ComponentItem>
    <ComponentItem svg="2"></ComponentItem>
    <ComponentItem svg="3"></ComponentItem>
    <ComponentItem svg="4"></ComponentItem>
    <ComponentItem svg="5"></ComponentItem>
    <ComponentItem svg="6"></ComponentItem>
    <ComponentItem svg="7"></ComponentItem>
    <ComponentItem svg="8"></ComponentItem>
  </div>
</template>
<script setup lang="ts">
import ComponentItem from './ComponentItem.vue';
</script>
<style scoped>
.component-group {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
