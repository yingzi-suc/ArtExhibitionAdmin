<template>
<div>
  <treeBoxL>
    <!-- 左侧 -->
    <template slot="tree">
       <treeList :treeData="treeData" :currentProject="currentProject" />  
    </template>
    <!-- 右侧 -->
    <template slot="detailBody">
       <div class="tree-right-detail-container">
          <!-- 右侧的上面一栏 -->
          <div class="top-title-box unified-theme-bg-color">
            <p class="top-title"><span class="vertical-line"></span>展会管理</p>
          </div>
          <!-- 右侧的下面内容 -->
          <div class="login-log-container">
             <!-- 搜索查询 -->
             <div class="filter-box">
                <div class="left-btn">
                    <el-input v-model="filterText" placeholder="输入展会名搜索" class="filter-input"></el-input>
                    <el-button icon="el-icon-search" @click="clickFilterData" style="background: #f5b002;color:#fff">查询</el-button>
                    <el-button icon="el-icon-refresh-right" @click="clickReset" style="background: #0bbc07;color:#fff">重置</el-button>
                </div>
                <div class="right-btn">
                    <el-button icon="el-icon-circle-plus-outline" class="h-t-created add-blue-green" @click="clickCreatedRole" style="background: #33ab9f;color:#fff">添加艺术展会</el-button>
                </div>
             </div>
             <!-- 表格部分 -->
             <CardTable :tableConfig="cardTableConfig" class="log-table" />
             <el-pagination @current-change="varCurrentChange" :current-page.sync="currentVarPage"
              :page-size="6" layout="total, prev, pager, next" :total="tableData.length"></el-pagination>
          </div>
       </div>
    </template>
  </treeBoxL>
  <AddOrUpdateDialog v-if="addOrUpdateConfig.visible" :config='addOrUpdateConfig' />
</div>
  
</template>

<script>
import treeBoxL from '@/views/layout/treeOrDetailFrame/index.vue'
import treeList from '@/components/treeList/index.vue'
import CardTable from '@/components/cardTable'
import AddOrUpdateDialog from '@/components/addOrUpdateDialog'
export default {
  
  components: {
    treeBoxL,
    treeList,
    CardTable,
    AddOrUpdateDialog
  },
  data(){
    const self = this
    return {
       treeData:{ //左侧侧边栏内容
         that:this,
         title: '展会城市列表',
         data:[
             {city: '成都',children:[]},
             {city: '上海',children:[]},
             {city: '北京',children:[]}, 
             {city: '深圳',children:[]},
             {city: '福建',children:[]},
             {city: '江苏',children:[]}
           ],
         isFilterTree: true,
        //  节点被点击时的回调
          treeNodeHandleClick(data, b, vue, tData) {
          // 设置当前选中项目信息
          // self.getProjectData(data)
          // 更新设备列表
          // self.getDevice(data.id)
          // 更新告警记录
        },
         defaultProps: {
           children: 'children',
           label: 'city'
         }
       },
       currentProject: {},
       filterText: '', //搜索绑定数据
       currentVarPage:1,
       tableData: [//用来接收表格数据，通过数组长度知道总的数据
         {title:'Blooms繁花',exhibitionType:'艺术展',extension:'2021.7.24—2021.10.18',content:'数字化艺术与科技感的偶遇碰撞⚡<br>造就了这场氛围感拉满的策展<br>驻足观望，思绪早已被回忆牵引<br> - <br>“繁花丛中迷人眼，一席鲸落长鸣眠” <br>进入会展，“鲸鱼”装饰立马映入眼帘 <br>漂浮感仿佛能让人真正置身大海深处🌊 <br> - <br>                             整个会展有六个展点，每一处都在向我们示意 <br>                             “美不需要被定义，也许是即兴的” <br>                             花朵不一定就一定要生长在土地 <br>                             鲸鱼也不一定要在大海深处 <br>                             深情的人也可以孤身一人🌕 <br>',
         businessHours:'13：30—21：30',location:'天府五街208号箐融汇1B栋108-109',name:'李小姐',number:'15526788722',dianzan:'1456'},
          {title:'Blooms繁花',exhibitionType:'艺术展',extension:'2021.7.24—2021.10.18',content:'数字化艺术与科技感的偶遇碰撞⚡<br>造就了这场氛围感拉满的策展<br>驻足观望，思绪早已被回忆牵引<br> - <br>“繁花丛中迷人眼，一席鲸落长鸣眠” <br>进入会展，“鲸鱼”装饰立马映入眼帘 <br>漂浮感仿佛能让人真正置身大海深处🌊 <br> - <br>                             整个会展有六个展点，每一处都在向我们示意 <br>                             “美不需要被定义，也许是即兴的” <br>                             花朵不一定就一定要生长在土地 <br>                             鲸鱼也不一定要在大海深处 <br>                             深情的人也可以孤身一人🌕 <br>',
         businessHours:'13：30—21：30',location:'天府五街208号箐融汇1B栋108-109',name:'李小姐',number:'15526788722',dianzan:'1456'},
         {title:'Blooms繁花',exhibitionType:'艺术展',extension:'2021.7.24—2021.10.18',content:'数字化艺术与科技感的偶遇碰撞⚡<br>造就了这场氛围感拉满的策展<br>驻足观望，思绪早已被回忆牵引<br> - <br>“繁花丛中迷人眼，一席鲸落长鸣眠” <br>进入会展，“鲸鱼”装饰立马映入眼帘 <br>漂浮感仿佛能让人真正置身大海深处🌊 <br> - <br>                             整个会展有六个展点，每一处都在向我们示意 <br>                             “美不需要被定义，也许是即兴的” <br>                             花朵不一定就一定要生长在土地 <br>                             鲸鱼也不一定要在大海深处 <br>                             深情的人也可以孤身一人🌕 <br>',
         businessHours:'13：30—21：30',location:'天府五街208号箐融汇1B栋108-109',name:'李小姐',number:'15526788722',dianzan:'1456'},
       ],
       cardTableConfig: {//表格数据
        size: 'normal',
        listLoading: false,
        operationWidth:'220px',
        tableData: [
           {title:'Blooms繁花',exhibitionType:'艺术展',extension:'2021.7.24—2021.10.18',content:'数字化艺术与科技感的偶遇碰撞⚡<br>造就了这场氛围感拉满的策展<br>驻足观望，思绪早已被回忆牵引<br> - <br>“繁花丛中迷人眼，一席鲸落长鸣眠” <br>进入会展，“鲸鱼”装饰立马映入眼帘 <br>漂浮感仿佛能让人真正置身大海深处🌊 <br> - <br>                             整个会展有六个展点，每一处都在向我们示意 <br>                             “美不需要被定义，也许是即兴的” <br>                             花朵不一定就一定要生长在土地 <br>                             鲸鱼也不一定要在大海深处 <br>                             深情的人也可以孤身一人🌕 <br>',
         businessHours:'13：30—21：30',location:'天府五街208号箐融汇1B栋108-109',name:'李小姐',number:'15526788722',dianzan:'1456'},
          {title:'Blooms繁花',exhibitionType:'艺术展',extension:'2021.7.24—2021.10.18',content:'数字化艺术与科技感的偶遇碰撞⚡<br>造就了这场氛围感拉满的策展<br>驻足观望，思绪早已被回忆牵引<br> - <br>“繁花丛中迷人眼，一席鲸落长鸣眠” <br>进入会展，“鲸鱼”装饰立马映入眼帘 <br>漂浮感仿佛能让人真正置身大海深处🌊 <br> - <br>                             整个会展有六个展点，每一处都在向我们示意 <br>                             “美不需要被定义，也许是即兴的” <br>                             花朵不一定就一定要生长在土地 <br>                             鲸鱼也不一定要在大海深处 <br>                             深情的人也可以孤身一人🌕 <br>',
         businessHours:'13：30—21：30',location:'天府五街208号箐融汇1B栋108-109',name:'李小姐',number:'15526788722',dianzan:'1456'},
         {title:'Blooms繁花',exhibitionType:'艺术展',extension:'2021.7.24—2021.10.18',content:'数字化艺术与科技感的偶遇碰撞⚡<br>造就了这场氛围感拉满的策展<br>驻足观望，思绪早已被回忆牵引<br> - <br>“繁花丛中迷人眼，一席鲸落长鸣眠” <br>进入会展，“鲸鱼”装饰立马映入眼帘 <br>漂浮感仿佛能让人真正置身大海深处🌊 <br> - <br>                             整个会展有六个展点，每一处都在向我们示意 <br>                             “美不需要被定义，也许是即兴的” <br>                             花朵不一定就一定要生长在土地 <br>                             鲸鱼也不一定要在大海深处 <br>                             深情的人也可以孤身一人🌕 <br>',
         businessHours:'13：30—21：30',location:'天府五街208号箐融汇1B栋108-109',name:'李小姐',number:'15526788722',dianzan:'1456'},
        ],
        // selection: Boolean, //标号
        tableColumn: [//表格配置参数
          { label: '标题', prop: 'title' },
          { label: '联系人', prop: 'name' },
          { label: '联系电话', prop: 'number' },
          { label: '展会类别', prop: 'exhibitionType' },
          { label: '展期', prop: 'extension' },
          { label: '地点', prop: 'location' },
          { label: '点赞数', prop: 'dianzan' },
           { label: '展会介绍', prop: 'content' }
        ],
        operation:[ //表格操作配置
          {label:'审核',type: 'text',bgColor:'#1f9fff',color: '#fff',action(scope){
            self.clickExamine (scope.row)
          }},
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
        title: "添加艺术展会",
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
            label: "展会名称",
            key: "title",
            rules: [
              { required: true,message:"请输入展会名称" }
            ]
          },
          {
            type: "select",
            label: "展会类别",
            key: "exhibitionType",
            options:[
                {
                    value: '1',
                    label: '摄影展'
                }, {
                    value: '2',
                    label: '美术展'
                }, {
                    value: '3',
                    label: '艺术展'
                }, {
                    value: '4',
                    label: '插画展'
                }, {
                    value: '5',
                    label: '雕塑展'
                }
            ],
            rules: [
              { required: true,message:"请选择展会类别" }
            ]
          },
          {
            type: "daterange",
            dateType: "daterange",
            label: "展览展期",
            key: "time",
            rules: [{ required: true, message: "请选择展览展期" }]
          },
          {
            type: "time",
            label: "营业时间",
            key: "businessHours",
            rules: [{ required: true, message: "请选择营业时间" }]
          },
          {
            type: "input",
            label: "展会地点",
            key: "location",
            rules: [{ required: true, message: "请输入展会位置" }]
          },
          {
            type: "input",
            label: "联系人",
            key: "name",
            rules: [{ required: true, message: "请输入办展人姓名" }]
          },
          {
            type: "input",
            label: "联系电话",
            key: "number",
            rules: [{ required: true, message: "请输入办展人电话" }]
          },
           {
            actionUrl:'https://jsonplaceholder.typicode.com/posts/',
            type: "image",
            label: "展览图片",
            key: "img",
            rules: [{ required: true, message: "请上传设备图片" }]
          },
          {
            type: "textarea",
            label: "展会介绍",
            key: "content",
            rules: [{ required: true, message: "请输入展会介绍" }]
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
      this.addOrUpdateConfig.title = "添加艺术展会"
      this.addOrUpdateConfig.visible = true
      console.log(this.addOrUpdateConfig.visible)
    },
    // 编辑
    clickEdit(row) {
      // console.log(row)
      this.addOrUpdateConfig.defaultValue = {...row}
      this.addOrUpdateConfig.title = "编辑艺术展会"
      this.addOrUpdateConfig.visible = true
    },
    // 删除
    clickDelete(row){

    },
    varCurrentChange(val) {
      this.currentVarPage = val
      this.tableConfig.tableData = this.tableData.slice(val * 6 - 6,val * 6)
    }

  }
}
</script>
<style scoped lang="scss">
  .tree-right-detail-container {
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
