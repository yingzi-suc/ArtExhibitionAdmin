<template>
  <div class="rtm-right-box">
      <div class="top-title-box unified-theme-bg-color">
        <p class="top-title"><span class="vertical-line"></span>用户管理</p>
        <!-- <el-button type="text" icon="el-icon-refresh" class="refresh-button" @click="getData">刷新</el-button> -->
      </div>

       <div class="login-log-container">
          <div class="filter-box">
             <div class="left-btn">
                 <el-input v-model="filterText" placeholder="输入登录名搜索" class="filter-input"></el-input>
                 <el-button icon="el-icon-search" @click="clickFilterData" style="background: #f5b002;color:#fff">查询</el-button>
                 <el-button icon="el-icon-refresh-right" @click="clickReset" style="background: #0bbc07;color:#fff">重置</el-button>
             </div>
             <div class="right-btn">
                 <el-button icon="el-icon-circle-plus-outline" class="h-t-created add-blue-green" @click="clickCreatedRole" style="background: #33ab9f;color:#fff">添加操作员</el-button>
             </div>
          </div>
          <!-- 表格部分 -->
          <CardTable :tableConfig="cardTableConfig" class="log-table" />
          <el-pagination @current-change="varCurrentChange" :current-page.sync="currentVarPage"
           :page-size="6" layout="total, prev, pager, next" :total="tableData.length"></el-pagination>
       </div>
        <AddOrUpdateDialog v-if="addOrUpdateConfig.visible" :config='addOrUpdateConfig' />
  </div>
</template>

<script>
import CardTable from '@/components/cardTable'
import AddOrUpdateDialog from '@/components/addOrUpdateDialog'
export default {
  components: {
    CardTable,
    AddOrUpdateDialog
  },
  data(){
    const self = this
    return {
       filterText: '', //搜索绑定数据
       currentVarPage:1,
       tableData: [//用来接收表格数据，通过数组长度知道总的数据
         {username:'hiis',name:'张三',ip:'79799'},
         {username:'hiis',name:'张三',ip:'79799'},
         {username:'hiis',name:'张三',ip:'79799'},
         {username:'hiis',name:'张三',ip:'79799'},
         {username:'hiis',name:'张三',ip:'79799'},
         {username:'hiis',name:'张三',ip:'79799'},
         {username:'hiis',name:'张三',ip:'79799'},
         {username:'hiis',name:'张三',ip:'79799'}
       ],
       cardTableConfig: {//表格数据
        size: 'normal',
        listLoading: false,
        operationWidth:'300px',
        tableData: [
          {username:'hiis',name:'张三',ip:'79799'},
         {username:'hiis',name:'张三',ip:'79799'},
         {username:'hiis',name:'张三',ip:'79799'},
         {username:'hiis',name:'张三',ip:'79799'},
         {username:'hiis',name:'张三',ip:'79799'},
         {username:'hiis',name:'张三',ip:'79799'},
         {username:'hiis',name:'张三',ip:'79799'},
         {username:'hiis',name:'张三',ip:'79799'}
        ],
        selection: Boolean, //标号
        tableColumn: [//表格配置参数
          { label: '登录名', prop: 'username' },
           { label: '姓名', prop: 'name' },
          { label: '用户ip', prop: 'ip' } 
        ],
        operation:[ //表格操作配置
          {label:'编辑',type: 'text',bgColor:'#1f9fff',color: '#fff',action(scope){
            self.clickEdit(scope.row)
          }},
          {label:'删除',type: 'text',bgColor:'#ff5722',color: '#fff',action(scope){
            self.clickDelete(scope.row)
          }},
        ]
      },
      addOrUpdateConfig: {
        visible: false,
        title: "添加操作员",
        labelWidth: "120px",
        close: () => {
          this.addOrUpdateConfig.visible = false;
        },
        defaultValue: {}, //默认数据
        //   - 如果是添加用户
        //         - 则在点击添加用户时，把弹出框的defaultValue 改为空
        //   - 如果是编辑
        //         - 则把编辑的那一行数据给 弹出框的defaultValue
        columns: [
          {
            type: "input",
            label: "登录名",
            key: "username",
            rules: [
              { required: true,message:"请输入登录名" }
            ]
          },
          {
            type: "input",
            label: "姓名",
            key: "name",
            rules: [
              { required: true,message:"请输入您的姓名" }
            ]
          },
          {
            type: "password",
            label: "密码",
            key: "password",
            rules: [{ required: true, message: "请输入密码" }]
          }
        ]
      },
    }
  },
  methods: {
    // 查询
    clickFilterData() {

    },
    // 重置
    clickReset() {

    },
    // 添加操作员
    clickCreatedRole(){
      this.addOrUpdateConfig.defaultValue = {}
      this.addOrUpdateConfig.title = "添加操作员"
      this.addOrUpdateConfig.visible = true
    },
    // 编辑
    clickEdit(row) {
      console.log(row)
      this.addOrUpdateConfig.defaultValue = {...row}
      this.addOrUpdateConfig.title = "编辑操作员"
      this.addOrUpdateConfig.visible = true
    },
    // 删除
    clickDelete(row){

    },
    varCurrentChange(val) {
      this.currentVarPage = val
      this.cardTableConfig.tableData = this.tableData.slice(val * 6 - 6,val * 6)
    }

  }
}
</script>
<style scoped lang="scss">
 .rtm-right-box {
  height: 96%;
  width: 98%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  margin: 20px 20px;
  
  .top-title-box {
    height: 50px;
    display: flex;
    padding: 0 10px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    background: #212a51;
    .top-title {
      height: 50px;
      margin: 0 0;
      color: #fff;
      font-size: 18px;
      line-height: 30px;
      padding: 10px 10px;
      .vertical-line {
        border-left: 3px solid #76c8ff;
        margin-right: 10px;
      }
    }
    .refresh-button {
      color: #a8f5f2;
    }
  }
  .login-log-container {
    padding: 20px;
    height: calc(100% - 60px);
    width: 100%;
    .filter-box {
      display: flex;
      height: 40px;
      margin-bottom: 10px;
      justify-content: space-between;
      .box-btns {
        display: flex;
        align-items: center;
      }
      .filter-input {
        width: 200px;
        margin-right: 10px;
      }
    }
    .log-table {
      height: calc(100% - 90px);
    }
  }
}
</style>
