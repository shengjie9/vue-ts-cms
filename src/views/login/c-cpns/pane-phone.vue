<script setup lang="ts">
import { ref } from 'vue'

const form = ref({ phone: '', code: '' })
</script>

<template>
  <div class="phone">
    <el-form :model="form" label-width="80px">
      <el-form-item label="手机号" required>
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="验证码" required>
        <el-input v-model="form.code" show-password type="password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="less"></style>
