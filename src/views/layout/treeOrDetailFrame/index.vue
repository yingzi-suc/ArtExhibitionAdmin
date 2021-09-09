<template>
  <div class="layout-tree-detail-container">
    <div class="left-project-tree-list" :class="{ 'tree-hidden': treeState }">
      <slot name="tree"></slot>
      <p class="control-fold-btn" @click="changeTreeState"> <i class="fold-icon" :class="stateClass"></i> </p>
    </div>
    <div class="right-detail-box" :class="{ 'fill-width': treeState }">
      <slot name="detailBody"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'treeBoxL',
  data() {
    return {
      treeState: false,
      stateClass: 'el-icon-caret-left' 
    }
  },
  methods: {
    changeTreeState() {
      if (!this.treeState) {
        this.stateClass = 'el-icon-caret-right'
      } else {
        this.stateClass = 'el-icon-caret-left'
      }
      this.treeState = !this.treeState
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-tree-detail-container {
  height: 100%;
  width: 100%;
  display: flex;
  .left-project-tree-list {
    // width: 300px;
    width: 260px;
    // height: 100%;
    // overflow-y: auto;
    border-radius: 5px;
    position: relative;
    margin-right: 20px;
    box-shadow: 0 0 5px #a3bddbb2;
    transition: margin-left ease 1s;
    &:hover {
      box-shadow: 0 0 5px #a3bddb;
    }
    .control-fold-btn {
      position: absolute;
      right: -14px;
      top: 42%;
      z-index: 5;
      margin: 0 0;
      width: 14px;
      height: 70px;
      color: #fff;
      cursor: pointer;
      padding: 24px 0;
      background: #3394D6;
      vertical-align: middle;
      border: 1px solid #6c7dee;
      border-radius: 0 20px 20px 0;
      border-left: none;
      .fold-icon {
        font-size: 20px;
        margin-left: -5px;
      }
    }
  }
  .tree-hidden {
    // margin-left: -300px;
    margin-left: -260px;
  }
  .right-detail-box {
    // width: calc(100% - 320px);
    width: calc(100% - 280px);
    height: 100%;
    // margin-left: 20px;
    transition: width ease 1s;
    padding: 10px 15px 10px 0px;
  }
  .fill-width {
    width: 100%;
    width: calc(100% - 20px);
  }
}
</style>
