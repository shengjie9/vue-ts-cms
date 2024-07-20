<script setup lang="ts">
import MainHeader from '@/components/main-header/index.vue'
import MainAside from '@/components/main-aside/index.vue'
import { ref } from 'vue'
const isFlod = ref(true)
const changeFold = (flag: boolean) => {
  isFlod.value = flag
}
</script>

<template>
  <el-container class="container">
    <el-aside :width="isFlod ? '200px' : '60px'">
      <main-aside :is-fold="isFlod" />
    </el-aside>
    <el-container>
      <el-header>
        <main-header @change-fold="changeFold" />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="less">
.container {
  height: 100%;

  .el-aside {
    cursor: pointer;
    overflow-x: hidden;
    overflow-y: auto;
    transition: width ease 0.3s;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-header {
    height: 50px;
  }

  .el-main {
    background: palevioletred;
  }
}
</style>
