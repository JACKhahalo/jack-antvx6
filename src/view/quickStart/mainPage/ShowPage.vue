<template>
  <el-container>
    <el-aside style="min-width: 220px" width="220px">
      <LeftSiderPage v-if="store.leftSideRender" />
    </el-aside>
    <el-container>
      <el-header></el-header>
      <el-main>
        <GraphPage />
      </el-main>
    </el-container>
    <el-sider style="min-width: 250px">
      <RightSiderPage v-if="store.leftSideRender"></RightSiderPage>
    </el-sider>
  </el-container>
</template>
<script lang="ts" setup>
import GraphPage from './GraphPage.vue';
import LeftSiderPage from './LeftSiderPage.vue';
import { grahpStore } from '../../../pinia/graph';
import RightSiderPage from './RightSiderPage.vue';

const store = grahpStore();
</script>
<style>
.el-container {
  height: 100%;
}
.el-main {
  padding: 0 !important;
}
</style>
