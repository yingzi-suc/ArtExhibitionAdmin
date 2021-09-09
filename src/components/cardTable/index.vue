<template>
  <div class="simple-table-container">
    <el-table ref="simpleTable"  fit :data="tableConfig.tableData" class="h-table-box" height="100%" 
      :highlight-current-row="tableConfig.radio" :size="size" :stripe="tableConfig.stripe" 
      v-loading="tableConfig.listLoading" element-loading-text="加载中..."
      element-loading-spinner="el-icon-loading" 
      @selection-change="selectionChange" @current-change="rowCurrentChange">
      <!-- 可勾选 -->
      <el-table-column v-if="tableConfig.selection" type="selection" width="50"></el-table-column>
      <!-- 表格配置参数 -->
      <el-table-column id="iiii" v-for="(column, i) in tableConfig.tableColumn" :key="i" :label="column.label" :prop="column.prop" :width="column.width">
      </el-table-column>
      <!-- 表格操作部分 -->
      <el-table-column v-if="tableConfig.operation" :label="tableConfig.operationTitle?tableConfig.operationTitle:'操作'" :width="tableConfig.operationWidth" align="left">
        <template slot-scope="scope">
          <div class="operate-btn"  style="float:left">
            <div v-for="(operation, index) of tableConfig.operation" :key="index">
              <el-button :type="operation.type" size="small" @click="operation.action(scope)" :style="{color: operation.color, 'background-color': operation.bgColor }"  class="table-btn">{{operation.label}}</el-button>
            </div>
          </div>
          <!-- <el-button size="small" class="delete-btn" type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'cardTable',
  props: ['tableConfig'],
  data() {
    return {
      size: 'mini'
    }
  },
  created() {
    this.size = this.tableConfig.size ? this.tableConfig.size : this.size
  },
  methods: {
    rowCurrentChange(row) {
      if (this.tableConfig.radio) {
        this.tableConfig.rowCurrentChange(row)
      } else {
        return
      }
    },
    selectionChange(val) {
      this.tableConfig.selectionChange(val)
    }
  }
}
</script>

<style lang="scss" scoped>

.simple-table-container {
  width: 100%;
  height: 100%;
  .icon-clock {
    color: #0BBC07;
  }
  .operate-btn {
    display: flex !important;
    justify-content: flex-end;
    .table-btn {
      margin-right: 14px;
      padding: 9px 16px;
      border-radius: 20px;
    }
    .round {
      padding: 7px 12px;
      border-radius: 20px;
    }
    .is-disabled {
      padding: 9px 4px;
      border-color: #62625a;
    }
  }
}
</style>
<style>
 .el-table .cell {
    height: 40px;
    /* white-space: nowrap; */
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>