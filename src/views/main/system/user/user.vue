<script setup lang="ts" name="user">
import userSearch from './c-cpns/user-search.vue'
import userContent from './c-cpns/user-content.vue'
</script>

<template>
  <div class="container">
    <userSearch />
    <userContent />
  </div>
</template>
<style scoped lang="less">
.container {
  border-radius: 20px;
  overflow: hidden;
}
</style>
