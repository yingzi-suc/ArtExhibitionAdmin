<template>
  <div class="rtm-right-box">
      <div class="top-title-box unified-theme-bg-color">
        <p class="top-title"><span class="vertical-line"></span>交流中心</p>
      </div>

       <div class="login-log-container">
          <div class="filter-box">
             <div class="left-btn">
                 <el-input v-model="filterText" placeholder="输入内容搜索" class="filter-input"></el-input>
                 <el-button icon="el-icon-search" @click="clickFilterData" style="background: #f5b002;color:#fff">查询</el-button>
                 <el-button icon="el-icon-refresh-right" @click="clickReset" style="background: #0bbc07;color:#fff">重置</el-button>
             </div>
          </div>
          <!-- 表格部分 -->
          <CardTable :tableConfig="cardTableConfig" class="log-table" />
          <el-pagination @current-change="varCurrentChange" :current-page.sync="currentVarPage"
           :page-size="6" layout="total, prev, pager, next" :total="tableData.length"></el-pagination>
       </div>
  </div>
</template>

<script>
import CardTable from '@/components/cardTable'
export default {
  components: {
    CardTable
  },
  data(){
    const self = this
    return {
       filterText: '', //搜索绑定数据
       currentVarPage:1,
       tableData: [//用来接收表格数据，通过数组长度知道总的数据
         {username:'将酱紫',time:'2021-08-21',content:'今天去的展览真好看，推荐推荐嘻嘻嘻嘻嘻嘻嘻嘻顶顶顶顶顶顶顶顶顶顶顶顶顶顶嘻嘻嘻嘻嘻嘻嘻',dianzanNumber:10,pinglunNum:3},
         {username:'将酱紫',time:'2021-08-21',content:'今天去的展览真好看，推荐推荐',dianzanNumber:10,pinglunNum:3},
         {username:'将酱紫',time:'2021-08-21',content:'今天去的展览真好看，推荐推荐',dianzanNumber:10,pinglunNum:3},
         {username:'将酱紫',time:'2021-08-21',content:'今天去的展览真好看，推荐推荐',dianzanNumber:10,pinglunNum:3},
         {username:'将酱紫',time:'2021-08-21',content:'今天去的展览真好看，推荐推荐',dianzanNumber:10,pinglunNum:3},
       ],
       cardTableConfig: {//表格数据
        size: 'normal',
        listLoading: false,
        operationWidth:'300px',
        tableData: [
         {username:'将酱紫',time:'2021-08-21',content:'今天去的展览真好看，推荐推荐嘻嘻嘻嘻嘻嘻嘻嘻顶顶顶顶顶顶顶顶顶顶顶顶顶顶嘻嘻嘻嘻嘻嘻嘻',dianzanNumber:10,pinglunNum:3},
         {username:'将酱紫',time:'2021-08-21',content:'今天去的展览真好看，推荐推荐',dianzanNumber:10,pinglunNum:3},
         {username:'将酱紫',time:'2021-08-21',content:'今天去的展览真好看，推荐推荐',dianzanNumber:10,pinglunNum:3},
         {username:'将酱紫',time:'2021-08-21',content:'今天去的展览真好看，推荐推荐',dianzanNumber:10,pinglunNum:3},
         {username:'将酱紫',time:'2021-08-21',content:'今天去的展览真好看，推荐推荐',dianzanNumber:10,pinglunNum:3},
        
        ],
        selection: Boolean, //标号
        tableColumn: [//表格配置参数
          { label: '用户名', prop: 'username' },
           { label: '发表时间', prop: 'time' },
          { label: '发表内容', prop: 'content' }, 
          { label: '点赞数', prop: 'dianzanNumber' }, 
          { label: '评论数', prop: 'pinglunNum' }, 
        ],
        operation:[ //表格操作配置
          {label:'删除',type: 'text',bgColor:'#ff5722',color: '#fff',action(scope){
            self.clickDelete(scope.row)
          }},
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
