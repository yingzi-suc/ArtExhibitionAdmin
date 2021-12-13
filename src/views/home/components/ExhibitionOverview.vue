<template>
    <div class="exhibition-overview">
        <div class="title">
            <div class="title-content">展会总览</div>
        </div>
        <div class="content">
            <div class="content-item">
               <i class="iconfont icon-jubanzhanlan-huiyishenqing"></i>
               <p>展览会总数：</p>
               <p class="p1">{{this.overview.total}}</p>
            </div>
             <div class="content-item">
               <i class="iconfont icon-shenhe icon1"></i>
               <p>审核通过数：</p>
               <p class="p2">{{this.overview.approvalsnum}}</p>
            </div>
             <div class="content-item">
               <i class="iconfont icon-shenhe icon2"></i>
               <p>没审核数：</p>
               <p class="p3">{{this.overview.unapprovalsnum}}</p>
            </div>
             <div class="content-item">
               <i class="iconfont icon-shebeiguanli"></i>
               <p>项目城市数：</p>
               <p class="p4">{{this.overview.citynum}}</p>
            </div>
        </div>
      
    </div>
</template>
<script>
export default {
  name: "ExhibitionOverview",
  props: ["overview"],
  data() {
    return {
     
    };
  }
};
</script>
<style lang="scss" scoped>
.exhibition-overview {
  width: 490px;
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
    width: 420px;
    height: 110px;
    display: flex;
    flex-wrap: wrap;
    display: -ms-flexbox;
    justify-content: space-between;
    font-size: 16px;
    padding-left: 20px;
    .content-item {
      display: flex;
      width: 180px;
       .icon-jubanzhanlan-huiyishenqing {
          font-size: 24px;
          color: #bee4f8;
          margin: 10px 8px 0 0;
       }
       .p1 {
          color: #bee4f8;
       }
       .icon1 {
          font-size: 22px;
          color: #bee4f8;
          margin: 10px 8px 0 0;
       }
       .p2 {
          color: #bee4f8;
       }     
       .icon2 {
         color: #90ed7d;
         font-size: 22px;
          margin: 10px 8px 0 0;
       }
        .p3 {
          color: #90ed7d;
       }
       .icon-shebeiguanli {
         color: #ff6a6a;
          font-size: 22px;
          margin: 10px 8px 0 0;
       }
       .p4 {
          color: #ff6a6a;
       }
    }       
  }
}
</style>
