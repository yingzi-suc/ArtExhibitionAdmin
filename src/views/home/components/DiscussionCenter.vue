<template>
    <div class="exhibition-overview">
        <div class="title">
            <div class="title-content">交流中心</div>
        </div>
        <vue-seamless-scroll  class="seamless-warp"  ref="seamlessScroll"  :class-option="option" :data="discuss">         
            <ul>
                <li class="headlines-item" v-for="(item,index) in discuss" :key="index" :class="{backgroundColor: index%2===0}">
                    <img class="iig" src="../static/yezi.png" alt="">
                    <div class="headlines-username">{{item.username}}</div>
                    <div class="headlines-content">{{item.content}}</div>
                    <div class="headlines-time">{{item.time}} </div>              
                </li>
            </ul>           
        </vue-seamless-scroll>   
    </div>
</template>
<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
export default {
  name: "DiscussionCenter",
  // props: ["deviceInfo"],
   components: {
      vueSeamlessScroll
  },
  data() {
    return {
        option: {
            step: 0.5, // 数值越大速度滚动越快
            limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
            hoverStop: true, // 是否开启鼠标悬停stop
            direction: 1, // 0向下 1向上 2向左 3向右
            singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
            waitTime: 2000, // 单步运动停止的时间(默认值1000ms)
          },
     discuss:[
         {username: '小小木',content:'今天去的这个艺术馆超级好看的，我非常喜欢，很有氛围感',time:'2021-09-08'},
          {username: '小小木',content:'今天去的这个艺术馆超级好看的',time:'2021-09-08'},
          {username: '小小木',content:'今天去的这个艺术馆超级好看的',time:'2021-09-08'},
          {username: '小小木',content:'今天去的这个艺术馆超级好看的',time:'2021-09-08'},
          {username: '小小木',content:'今天去的这个艺术馆超级好看的',time:'2021-09-08'},
          {username: '小小木',content:'今天去的这个艺术馆超级好看的',time:'2021-09-08'},
          {username: '小小木',content:'今天去的这个艺术馆超级好看的',time:'2021-09-08'},
          {username: '小小木',content:'今天去的这个艺术馆超级好看的',time:'2021-09-08'},
     ]
    };
  }
};
</script>
<style lang="scss" scoped>
.exhibition-overview {
  width: 490px;
  height: 268px;
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
      height: 214px;
      overflow: hidden;
       ul {
          margin: 0;
          padding: 0;
          .headlines-item {
             display: flex;
             margin-bottom: 10px;
             line-height: 25px;
            .iig {
                width: 20px;
                margin-right: 6px;
            }
            .headlines-username {
                margin-right: 12px;
               
            }
            .headlines-content {
                width: 260px;
                margin-right: 12px;
                 white-space: nowrap;
            	overflow: hidden;
            	text-overflow: ellipsis;
            }
          }
      }
  }
}
.backgroundColor {
    
  background: linear-gradient(-90deg, rgb(97 160 168), rgba(179, 219, 225, 0.8), rgba(179, 219, 225, 0.8), rgb(239 204 161));
}
</style>
