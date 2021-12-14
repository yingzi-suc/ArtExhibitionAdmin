<template>
    <div class="exhibition-overview">
        <div class="title">
            <div class="title-content">艺术作品集</div>
        </div>
        <div class="content">
            <el-select v-model="value" placeholder="请选择城市" @change="cityClick">
                <el-option
                  v-for="item in cityOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
             </el-select>
             <div class="imgcontent">
                 <div class="item" v-for="(i,index) in artimages" :key="index"><img :src="artimages[index]" alt=""></div>
                 <!-- <div class="item"><img src="../static/2.png" alt=""></div>
                 <div class="item"><img src="../static/3.png" alt=""></div>
                 <div class="item"><img src="../static/4.jpg" alt=""></div>
                 <div class="item"><img src="../static/5.jpg" alt=""></div>
                 <div class="item"><img src="../static/6.png" alt=""></div> -->
             </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "ArtsImages",
  props: ["artimages"],
  data() {
    return {
          cityOptions: [
              {
                  value:'0',
                  label:'全部'
              },
                    {
                        value: '1',
                        label: '成都'
                    }, {
                        value: '2',
                        label: '上海'
                    }, {
                        value: '3',
                        label: '北京'
                    }, {
                        value: '4',
                        label: '深圳'
                    }, {
                        value: '5',
                        label: '福建'
                    }, {
                        value: '6',
                        label: '江苏'
                    }
                ],
        value: ''
    };
  },
  methods:{

      cityClick(index){
          this.$emit("cityClick",index)
      }
  }
};
</script>
<style>
.el-input__inner {
    /* background-color: #f0f0f0; */
    height: 30px;
    /* border:1px solid #b7b7b7; */
    /* color: #89898a; */
}
.el-select-dropdown {
    border:none;
}
.el-select-dropdown__list {
    background-color: #434549;
   
}
.el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
    background-color: #61a0a8;
     color: #ffffff;
}
.el-select-dropdown__item,.el-select-dropdown__item.selected {
    color: #ffffff;
}
</style>
<style lang="scss" scoped>
.exhibition-overview {
  width: 100%;
  height: 850px;
  color: #ffffff;
  font-size: 14px;
  background-color: rgba(60, 60, 60, 0.4);
  padding: 20px;
  .title {
    font-size: 18px;
    font-weight: 600;
    height: 34px;
    .title-content {
      padding-left: 10px;
      line-height: 18px;
      color: #ffffff;
      border-left: 2px solid #81e8fe;
    }
  }
  .content {
      margin-top: 10px;
      .imgcontent {
          margin-top: 30px;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          .item {
              width: 28%;
              margin-bottom: 50px;
              img {
                  width: 100%;
                  height: 304px;
                  overflow: hidden;
              }
          }
      }
  }
}
</style>
