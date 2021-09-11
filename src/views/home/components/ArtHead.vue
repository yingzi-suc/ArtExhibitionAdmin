 <template>
    <div class="exhibition-overview">
        <div class="title">
            <div class="title-content">艺术头条</div>
        </div>
        <vue-seamless-scroll  class="seamless-warp"  ref="seamlessScroll"  :class-option="option" :data="artHeadlines">         
            <ul>
                <li class="headlines-item" v-for="(item,index) in artHeadlines" :key="index">
                    <div class="headlines-title">{{item.headlinesTitle}}</div>
                    <div class="headlines-text">{{item.headlinesText}}
                    </div>
                </li>
            </ul>           
        </vue-seamless-scroll>
    </div>
</template>
<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
export default {
  name: "ArtHead",
  components: {
      vueSeamlessScroll
  },
  data() {
    return {
         option: {
            step: 0.3, // 数值越大速度滚动越快
            limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
            hoverStop: true, // 是否开启鼠标悬停stop
            direction: 1, // 0向下 1向上 2向左 3向右
            singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
            waitTime: 2000, // 单步运动停止的时间(默认值1000ms)
          },
      artHeadlines: [
                    {
                        headlinesTitle: '成都看展|成都当代影像馆',
                        headlinesText: '终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,'
                    },
                    {
                        headlinesTitle: '成都看展|成都当代影像馆',
                        headlinesText: '终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,'
                    },
                    {
                        headlinesTitle: '成都看展|成都当代影像馆',
                        headlinesText: '终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,'
                    },
                    {
                        headlinesTitle: '成都看展|成都当代影像馆',
                        headlinesText: '终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,'
                    },
                    {
                        headlinesTitle: '成都看展|成都当代影像馆',
                        headlinesText: '终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,终于等来了成都当代影像馆的新展，地址地图搜索“成都当代影像馆”就可以啦，展馆特别大，有7个展厅一个大花园,'
                    }
                ]
    };
  },
};
</script>
<style lang="scss" scoped>
.exhibition-overview {
  margin-top: 60px;
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
  .seamless-warp {
        height: 534px;
        overflow: hidden;
        ul {
            margin: 0;
            padding: 0;
        }
       .headlines-item {
          list-style: none;
           .headlines-title {
               color: #0072ce;
               font-weight: 600;
               margin-bottom: 10px;
           }
           .headlines-text {
               color: #c9ced9;
               text-indent: 2em;
               margin-bottom: 20px;
           }
        }
    }
 
}
</style>
