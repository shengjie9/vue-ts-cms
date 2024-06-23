<script setup lang="ts">
import LoginPanel from './c-cpns/login-panel.vue'
</script>

<template>
  <div class="container">
    <LoginPanel />
  </div>
</template>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('@/assets/img/login-bg.svg');
}
</style>
