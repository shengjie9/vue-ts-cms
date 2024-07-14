<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits(['changeFold'])
const isFold = ref(true)

const handleFold = () => {
  isFold.value = !isFold.value
  emit('changeFold', isFold.value)
}
</script>

<template>
  <div class="container">
    <div class="icon" @click="handleFold">
      <el-icon size="28px">
        <component :is="isFold ? 'Expand' : 'Fold'"></component>
        <!-- <component :is="'Fold'"></component> -->
      </el-icon>
    </div>
    <div class="left">
      <div class="breadcrumb">面包屑</div>
      <div class="userInfo">用户信息</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  display: flex;
  align-items: center;

  .left {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .icon {
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
