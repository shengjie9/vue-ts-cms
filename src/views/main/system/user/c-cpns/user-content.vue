<script setup lang="ts">
import { useSystemStore } from '@/store/main/system'
import { storeToRefs } from 'pinia'

const systemStore = useSystemStore()
systemStore.postUserListDataAction()

const { userList } = storeToRefs(systemStore)
</script>

<template>
  <div class="content">
    <div class="header">
      <div class="title">用户列表</div>
      <el-button type="primary">新建用户</el-button>
    </div>

    <div class="table">
      <el-table :data="userList" style="width: 100%; height: 100%">
        <el-table-column align="center" type="selection" width="50px" />
        <el-table-column align="center" type="index" label="序号" width="60px" />
        <el-table-column align="center" label="用户名" prop="name" width="150px" />
        <el-table-column align="center" label="真实姓名" prop="realname" width="150px" />
        <el-table-column align="center" label="手机号码" prop="cellphone" width="150px" />
        <el-table-column align="center" label="状态" prop="enable" width="100px" />
        <el-table-column align="center" label="创建时间" prop="createAt" />
        <el-table-column align="center" label="更新时间" prop="updateAt" />
        <el-table-column align="center" label="操作" width="180px">
          <el-button size="small" icon="Edit" type="primary" text> 编辑 </el-button>
          <el-button size="small" icon="Delete" type="danger" text> 删除 </el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style scoped lang="less">
.content {
  margin-top: 20px;
  padding: 20px;
  background: #fff;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      font-size: 20px;
      font-weight: bold;
    }
  }

  .table {
    height: 300px;
    :deep(.el-table__cell) {
      padding: 12px 0;
    }

    .el-button {
      margin-left: 0;
      padding: 5px 8px;
    }
  }
}
</style>
