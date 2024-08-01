<script setup lang="ts">
import { useSystemStore } from '@/store/main/system'
import type { IUserQueryFormData } from '@/types/user'
import { formatUTFTime } from '@/utils/format'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const currentPage = ref(1)
const currentPageSize = ref(10)
//
const systemStore = useSystemStore()

const { userList, userTotalCount } = storeToRefs(systemStore)

const handleSizeChange = (value: number) => {
  // console.log('size change', value)
  currentPageSize.value = value
  fetchData()
}

const handleCurrentChange = (value: number) => {
  // console.log('page change', value)
  currentPage.value = value
  fetchData()
}

const fetchData = (formData: IUserQueryFormData = {}) => {
  const offset = (currentPage.value - 1) * currentPageSize.value
  const pageInfo = { offset, size: currentPageSize.value }
  const queryInfo = Object.assign(pageInfo, formData)
  systemStore.postUserListDataAction(queryInfo)
}

//调用
fetchData()

defineExpose({ fetchData })
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
        <el-table-column align="center" label="状态" prop="enable" width="100px">
          <template #default="scope">
            <el-button size="small" plain :type="scope.row.enable === 1 ? 'primary' : 'danger'">
              {{ scope.row.enable === 1 ? '启动' : '危险' }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column align="center" label="创建时间" prop="createAt">
          <template #default="scope">
            {{ formatUTFTime(scope.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="更新时间" prop="updateAt">
          <template #default="scope">
            {{ formatUTFTime(scope.row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="180px">
          <el-button size="small" icon="Edit" type="primary" text> 编辑 </el-button>
          <el-button size="small" icon="Delete" type="danger" text> 删除 </el-button>
        </el-table-column>
      </el-table>

      <el-pagination
        class="pagination"
        v-model:current-page="currentPage"
        v-model:page-size="currentPageSize"
        layout="total,sizes,prev, pager, next, jumper"
        :total="userTotalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<style scoped lang="less">
.content {
  margin-top: 20px;
  padding: 20px 20px 50px 20px;
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
    height: 320px;
    :deep(.el-table__cell) {
      padding: 12px 0;
    }

    .el-button {
      margin-left: 0;
      padding: 5px 8px;
    }
  }

  .pagination {
    height: 45px;
    text-align: right;
    justify-content: flex-end;
  }
}
</style>
