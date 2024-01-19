<template>
  <el-container>
    <el-aside :width="left ? '220px' : '0px'">
      <LeftSiderPage v-if="store.leftSideRender" />
    </el-aside>
    <el-container>
      <el-header style="height: 39px">
        <HeaderPanel
          v-if="store.leftSideRender"
          @leftChange="leftChange"
          @rightChange="rightChange"
          :left="left"
          :right="right"
        ></HeaderPanel>
      </el-header>
      <el-main>
        <GraphPage />
      </el-main>
    </el-container>
    <el-aside :width="right ? '250px' : '0px'">
      <RightSiderPage v-if="store.leftSideRender"></RightSiderPage>
    </el-aside>
  </el-container>
</template>
<script lang="ts" setup>
import GraphPage from './GraphPage.vue';
import LeftSiderPage from './LeftSiderPage.vue';
import { grahpStore } from '../../../pinia/graph';
import RightSiderPage from './RightSiderPage.vue';
import HeaderPanel from './headerPanel.vue';
import { ref } from 'vue';

const store = grahpStore();

const left = ref(true);
const right = ref(true);

const leftChange = () => {
  left.value = !left.value;
};

const rightChange = () => {
  right.value = !right.value;
};
</script>
<style scoped>
@keyframes expandCollapse {
  from {
    width: 220px; /* 初始宽度 */
  }
  to {
    width: 0px; /* 结束宽度 */
  }
}
.el-container {
  height: 100%;
}
.el-main {
  padding: 0 !important;
}
.el-header {
  padding: 0 !important;
  align-items: center;
  display: flex;
}
.el-aside {
  transition: all 0.2s ease 0.2s;
}
</style>
