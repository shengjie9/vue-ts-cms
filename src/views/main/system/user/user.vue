<script setup lang="ts" name="user">
import userSearch from './c-cpns/user-search.vue'
import userContent from './c-cpns/user-content.vue'
import type { IUserQueryFormData } from '@/types/user'
import { ref } from 'vue'

const userContentRef = ref<InstanceType<typeof userContent>>()
//搜索
const handleQueryClick = (formData: IUserQueryFormData) => {
  userContentRef.value?.fetchData(formData)
}

//重置
const handleResetClick = () => {
  userContentRef.value?.fetchData()
}
</script>

<template>
  <div class="container">
    <userSearch @query-click="handleQueryClick" @reset-click="handleResetClick" />
    <userContent ref="userContentRef" />
  </div>
</template>
<style scoped lang="less">
.container {
  border-radius: 20px;
  overflow: hidden;
}
</style>
