<script setup lang="ts">
import { ref } from 'vue'
const form = ref({ usernmae: '', password: '' })
</script>

<template>
  <div class="account">
    <el-form :model="form" label-width="60px">
      <el-form-item label="账号" required>
        <el-input v-model="form.usernmae" />
      </el-form-item>
      <el-form-item label="密码" required>
        <el-input v-model="form.password" show-password type="password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="less"></style>
