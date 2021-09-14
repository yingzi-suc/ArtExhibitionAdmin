<template>
 <div class="page">
    <!-- 头部 -->
    <div class="header-box">
      <p>全艺展后台管理系统</p>
    </div>
    <!-- 主体部分 -->
    <div class="main-box-container">
      <!-- 左边 -->
      <div class="left-data-container">
        <exhibition-overview class="device-info"/>
         <art-head class="pest-photos"/>
      </div>
      <!-- 中间 -->
      <div class="center-map-container">
        <arts-images class="equipment-distribution"/>       
      </div>
      <!-- 右边 -->
      <div class="right-data-container">
         <city-classified class="pest-change-trend"/>
        <discussion-center class="pest-proportion"/>
      </div>
    </div>
  </div>
</template>
</template>

<script>
import { mapGetters } from 'vuex'
import ExhibitionOverview from './components/ExhibitionOverview.vue'
import CityClassified from './components/CityClassified.vue'
import ArtsImages from './components/ArtsImages.vue'
import ArtHead from './components/ArtHead.vue'
import DiscussionCenter from './components/DiscussionCenter.vue'

export default {
  name: 'Dashboard',
  components: {
    ExhibitionOverview,
    CityClassified,
    ArtsImages,
    ArtHead,
    DiscussionCenter
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.page {
  width: 2064px;
  height: 1032px;
  background-image: url('./static/gagdsa.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
// 头部
.header-box {
  width: 420px;
  height: 50px;
  line-height: 50px;
  color: #f2f2f2;
  font-size: 36px;
  margin: 0 auto;
  margin-top: -36px;
  p {
    padding: 20px 0;
    font-weight: 600;
    letter-spacing: 6px;
  }
}
// 主体
.main-box-container {
  margin-top: 65px;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  // 左侧
  .left-data-container {
    width: 490px;
    height: 100%;
    // background-color: red;
  }
  // 中间
  .center-map-container {
    width: 855px;
    height: 100%;
    // background-color: green;
  }
  .right-data-container {
    width: 490px;
    height: 100%;
    // background-color: blue;
  }
}
.device-info,
.pest-change-trend {
  margin-bottom: 14px;
}
</style>

