<script setup lang="ts">
import { reactive, ref } from 'vue'
import { type FormRules, type FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { accountLogin } from '@/service/login'
import useAccountStore from '@/store/login'

const form = reactive({ username: '', password: '' })
const rulesFormRef = ref<FormInstance>()
const accountStore = useAccountStore()

const rules: FormRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 6, max: 20, message: '用户名在6~20位内', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '密码在6~10位', trigger: 'blur' }
  ]
}

const handleLoginAction = async () => {
  await rulesFormRef.value?.validate((vaild, fields) => {
    if (vaild) {
      accountStore.accountLoginAction({ name: form.username, password: form.password })
    } else {
      ElMessage.error('提交失败，请重新尝试！')
      console.log(fields, '失败')
    }
  })
}

defineExpose({
  handleLoginAction
})
</script>

<template>
  <div class="account">
    <el-form ref="rulesFormRef" :model="form" :rules="rules" label-width="60px">
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" show-password type="password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="less"></style>
