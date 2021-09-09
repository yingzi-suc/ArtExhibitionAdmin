<template>
  <div class="tree-list-container" v-loading.body="treeData.data && treeData.loading">
    <p class="tree-list-title"><span class="vertical-line"></span> {{ treeData.title }}</p>
    <el-input v-if="treeData.isFilterTree" placeholder="输入展会城市" v-model="filterText" class="tree-filter-box">
      <el-button slot="append" @click="filterText = ''" icon='iconfont icon-8'>重置</el-button>
    </el-input>
    <div class="tree-list-box">
      <el-tree
        ref="tree"
        class="filter-tree"
        highlight-current 
        :data="treeData.data"
        :props="treeData.defaultProps"
        :filter-node-method="filterNode"
        @node-click="treeNodeHandleClick"
      >
        <div slot-scope="{node, data}"  class="custom-tree-node"  :class="{ 'active-tree-node': currentProject && currentProject.id === data.id, 'disabled-node': data.disabled }">
          <p class="c-t-label">
            <span class="c-t-name">{{ node.label }}</span>
          </p>
        </div>
      </el-tree>
    </div>
  </div>
</template>
<script>
 export default {
    props: {
        treeData: {
            type: Object,
            default() {
                return {}
            }
        },
         currentProject: {
            type: Object
        }   
    },
    data() {
      return {
        filterText: '',
        customer_disable: false
      }
    },
    methods: {
      // 对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏
     filterNode(value, data) {
      //  console.log(value,data)
        if (!value) return true
        return data[this.treeData.defaultProps.label].indexOf(value) !== -1
     },
    //  节点被点击时的回调  共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。
     treeNodeHandleClick(data, b, vue) {
        console.log(data,b,vue)
        // this.treeData.treeNodeHandleClick(data, b, vue, this.treeData)
     }
    }
 }
</script>
<style lang="scss" scoped>
.tree-list-container {
  height: 100%;
  width: 100%;
  .tree-list-title {
    height: 50px;
    font-size: 18px;
    line-height: 30px;
    margin: 0 0;
    padding: 10px 10px;
    background-color: white;
    border-bottom: 1px solid #EFEFEF;
    .vertical-line {
      border-left: 3px solid #76C8FF;
      margin-right: 10px;
    }
  }
  .tree-filter-box {
    padding: 0 10px;
    margin-top: 10px;
    .el-input-group__append {
      background: #10bc1e;
      color: #fff;
    }
  }
  .tree-o-btn{
    width: calc(100% - 20px);
    height:40px;
    margin-top:10px;
    margin-left:10px;
  }
  .operation-btns{
    height:40px;
    width: calc(100% - 20px);
    display:flex;
    justify-content:space-between;
    align-items: center;
    margin-top:10px;
    margin-left:10px;
    .node-o-btn{
      height:40px;
      width: calc((100% - 20px) / 3);
    }
  }
  .tree-list-box {
    height: calc(100% - 65px);
    margin-top: 10px;
    .filter-tree {
      height: 100%;
      overflow-y: auto;
      padding: 0 10px 5px 10px;
      transition: height ease 1s;
      .el-tree-node {
        width:100%;
        margin-top: 20px 0;
        .custom-tree-node{
          width:100%;
          .c-t-label {
            width:180px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis; 
            .c-t-name {
              width:90%;
            }
          }
        }
      }
    }
    .active-operation {
      height: 190px;
    }
    .custom-tree-node {
      flex: 1;
      height: 50px;
      display: flex;
      font-size: 16px;
      padding-right: 8px;
      align-items: center;
      position: relative;
      justify-content: space-between;
      &:hover {
        .hover-button {
          width:78px;
          height:18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;

        }
      }
      .c-t-label {
        margin: 0 0;
        align-items: center;
        .project-icon {
          margin-right: 5px;
          font-size: 18px;
          color: #25a1cf;
        }
        .icon-wangguan {
          color: #f00;
        }
      }
    }
    .disabled-node {
      .c-t-label {
        .project-icon {
          color: #aaaaaa;
        }
        .c-t-name {
          color: #aaaaaa;
        }
      }
    }
    .active-tree-node {
      .c-t-label {
        .c-t-name {
          color: #7c7d7f;
          font-weight: 600;
        }
      }
    }
    .hover-button {
      display: none;
      position: absolute;
      // background: #f0f7ff;
      right: 0;
      z-index: 10;
      font-size: 18px;
      padding: 4px 5px;
    }
  }
  .tree-btn-list-box {
    height: calc(100% - 210px);
  }
  .tree-f-list-box {
    height: calc(100% - 110px);
  }
  .tree-all-list {
    height: calc(100% - 115px);
  }
  .color {
    color: #000000;
    color: #a72d2d;
  }
}
</style>
<style>
.el-tree-node {
  height: 40px;
}
</style>
