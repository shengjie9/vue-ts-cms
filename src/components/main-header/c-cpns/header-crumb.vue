<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { mapPathToBreadCrumb } from '@/utils/map-menu'
import useAccountStore from '@/store/login'
const route = useRoute()
const accountStore = useAccountStore()
const breadcrumbDatas = computed(() => {
  return mapPathToBreadCrumb(route.path, accountStore.userMenu)
})
</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbDatas" :key="index" :to="item.url">
      {{ item.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped lang="less"></style>
