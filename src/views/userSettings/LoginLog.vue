<template>
  <div class="rtm-right-box">
      <div class="top-title-box unified-theme-bg-color">
        <p class="top-title"><span class="vertical-line"></span>登录日志</p>
        <!-- <el-button type="text" icon="el-icon-refresh" class="refresh-button" @click="getData">刷新</el-button> -->
      </div>

       <div class="login-log-container">
          <div class="filter-box">
             <div class="left-btn">
                 <el-input v-model="filterText" placeholder="输入名称搜索" class="filter-input"></el-input>
                 <el-button icon="el-icon-search" @click="clickFilterData" style="background: #f5b002;color:#fff">查询</el-button>
                 <el-button icon="el-icon-refresh-right" @click="clickReset" style="background: #0bbc07;color:#fff">重置</el-button>
             </div>
          </div>
          <CardTable :tableConfig="tableConfig" class="log-table" />
          <el-pagination @current-change="varCurrentChange" :current-page.sync="currentVarPage"
           :page-size="9" layout="total, prev, pager, next" :total="tableData.length"></el-pagination>
       </div>
  </div>
</template>

<script>
import CardTable from '@/components/cardTable'
import {getLoginLog} from '../../api/user'
export default {
  components: {
    CardTable
  },
  data(){
    return {
       filterText: '', //搜索绑定数据
       currentVarPage:1,
       tableData: [//用来接收表格数据，通过数组长度知道总的数据
            //  {user:'yzy',_ip: '344555',options: 'Login',info: '登录',time: '2021.09.12'},
            // {user:'yzy',_ip: '344555',options: 'Login',info: '登录',time: '2021.09.12'},
            // {user:'yzy',_ip: '344555',options: 'Login',info: '登录',time: '2021.09.12'},
            // {user:'yzy',_ip: '344555',options: 'Login',info: '登录',time: '2021.09.12'},
            // {user:'yzy',_ip: '344555',options: 'Login',info: '登录',time: '2021.09.12'},
            // {user:'yzy',_ip: '344555',options: 'Login',info: '登录',time: '2021.09.12'},
            // {user:'yzy',_ip: '344555',options: 'Login',info: '登录',time: '2021.09.12'},
            // {user:'yzy',_ip: '344555',options: 'Login',info: '登录',time: '2021.09.12'},
            // {user:'yzy',_ip: '344555',options: 'Login',info: '登录',time: '2021.09.12'}
       ],
       tableConfig: {//表格数据
        size: 'normal',
        listLoading: false,
        tableData: [
            // {user:'yzy',_ip: '344555',options: 'Login',info: '登录',time: '2021.09.12'},
            // {user:'yzy',_ip: '344555',options: 'Login',info: '登录',time: '2021.09.12'},
            // {user:'yzy',_ip: '344555',options: 'Login',info: '登录',time: '2021.09.12'},
            // {user:'yzy',_ip: '344555',options: 'Login',info: '登录',time: '2021.09.12'},
            // {user:'yzy',_ip: '344555',options: 'Login',info: '登录',time: '2021.09.12'},
            // {user:'yzy',_ip: '344555',options: 'Login',info: '登录',time: '2021.09.12'},
            // {user:'yzy',_ip: '344555',options: 'Login',info: '登录',time: '2021.09.12'},
            // {user:'yzy',_ip: '344555',options: 'Login',info: '登录',time: '2021.09.12'},
            // {user:'yzy',_ip: '344555',options: 'Login',info: '登录',time: '2021.09.12'}
        ],
        tableColumn: [//表格配置参数
          { label: '用户名称', prop: 'user' },
          { label: '用户ip', prop: '_ip' },
          { label: '用户类型', prop: 'options' },
          { label: '操作详情', prop: 'info' },
          { label: '操作时间', prop: 'time', icon: true },
        ]
      },
    }
  },
  mounted(){
    this.init()
  },
  methods: {
    init(){
      getLoginLog().then(res=>{
        if(res.code==0){
        const result = res.data.map(item=>({
          user:item.username,
          _ip:item._id,
          options:item.role,
          info:item.detail,
          time:item.loginDate?item.loginDate:item.logoutDate,
        }))
        this.tableData = result
        this.tableConfig.tableData =  this.tableData.slice(0,9)
        }
      })
    },
    // 查询
    clickFilterData() {
       
    },
    // 重置
    clickReset() {

    },
    varCurrentChange(val) {
      this.currentVarPage = val
      this.tableConfig.tableData = this.tableData.slice(val * 9 - 9,val * 9)
    }
  }
}
</script>
<style>
.el-table--scrollable-y .el-table__body-wrapper{
  height: 600px !important;
}
</style>
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
