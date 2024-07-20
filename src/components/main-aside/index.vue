<script setup lang="ts">
import { useRouter } from 'vue-router'
import useAccountStore from '@/store/login'

defineProps({
  isFold: {
    type: Boolean,
    default: true
  }
})
const store = useAccountStore()
const router = useRouter()

const handleRouteClick = (item: any) => {
  console.log(item.url, 'url')
  router.push(item.url)
}

console.log(store.userMenu, 'userMenu')
</script>

<template>
  <div class="container">
    <!-- logo -->
    <div class="logo">
      <img src="@/assets/img/logo.svg" alt="" />
      <h2 v-show="isFold" class="title">coderWhy-CMS</h2>
    </div>

    <!-- menu -->
    <div class="menu">
      <el-menu
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="#001529"
        default-active="39"
        :collapse="!isFold"
      >
        <template v-for="item in store.userMenu" :key="item.id">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon><component :is="item.icon.split('-icon-')[1]"></component></el-icon>
              <span>{{ item.name }}</span>
            </template>

            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item :index="subItem.id + ''" @click="handleRouteClick(subItem)">
                <span> {{ subItem.name }} </span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  --menu--color: #001229;
  background: var(--menu--color);
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  img {
    width: 30px;
  }

  .title {
    margin: 0;
    font-size: 14px;
    color: #fff;
  }
}

.menu {
  .el-menu {
    border: none;

    .el-menu-item.is-active {
      background: #0e5bbc;
    }

    .el-menu-item:hover {
      background: #0e5bbc;
      color: #fff;
    }
  }
}
</style>
