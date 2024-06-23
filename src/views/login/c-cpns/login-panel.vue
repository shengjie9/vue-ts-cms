<script setup lang="ts">
import { ref } from 'vue'
import PaneAccount from './pane-account.vue'
import PanePhone from './pane-phone.vue'
const isRemmemberPassword = ref(false)
const activePane = ref('account')
const paneAccountRef = ref<InstanceType<typeof PaneAccount>>()

const handleLogin = () => {
  paneAccountRef?.value?.handleLoginAction()
}
</script>

<template>
  <div class="login">
    <h1 class="login__title">后台管理系统</h1>
    <el-tabs class="login__tabs" type="border-card" stretch v-model="activePane">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登录</span>
          </span>
        </template>

        <PaneAccount ref="paneAccountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <PanePhone />
      </el-tab-pane>
    </el-tabs>

    <div class="login__box">
      <el-checkbox v-model="isRemmemberPassword" label="记住密码" size="large" />
      <el-button type="primary" link>忘记密码</el-button>
    </div>

    <el-button type="primary" size="large" class="login__button" @click="handleLogin"
      >立即登录</el-button
    >
  </div>
</template>

<style scoped lang="less">
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  &__title {
  }

  &__tabs {
    width: 350px;
  }

  &__box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__button {
    width: 100%;
  }
}

.custom-tabs-label {
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
}
</style>
