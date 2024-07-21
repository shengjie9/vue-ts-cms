<script setup lang="ts" name="user">
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'

const formRef = ref<InstanceType<typeof ElForm>>()
const form = reactive({
  name: '',
  realname: '',
  cellphone: '',
  enable: 1,
  createAt: []
})

const options = [
  {
    value: 1,
    label: '启用'
  },
  {
    value: 0,
    label: '禁用'
  }
]

const handleReset = () => {
  formRef.value?.resetFields()
}

const handleSearch = () => {}
</script>

<template>
  <div class="form">
    <el-form :model="form" ref="formRef" label-width="80px" size="default">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="用户姓名" prop="name">
            <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="真实姓名" prop="realname">
            <el-input v-model="form.realname" placeholder="请输入真实姓名"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="电话号码" prop="cellphone">
            <el-input v-model="form.cellphone" placeholder="请输入电话号码"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="状态" prop="enable">
            <el-select v-model="form.enable" placeholder="请选择状态" style="width: 100%">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker
              v-model="form.createAt"
              type="daterange"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <div class="btns">
      <el-button icon="Refresh" @click="handleReset">重置</el-button>
      <el-button icon="Search" type="primary" @click="handleSearch">搜索</el-button>
    </div>
  </div>
</template>
<style scoped lang="less">
.form {
  background: #fff;
  padding: 20px;

  .el-form-item {
    padding: 20px 30px;
    margin: 0;
  }

  .btns {
    text-align: right;
    margin-right: 25px;
    .el-button {
      height: 36px;
    }
  }
}
</style>
