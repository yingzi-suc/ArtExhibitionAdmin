<template>
  <div class="exhibition-overview">
    <div class="title">
      <div class="title-content">城市展会分类统计</div>
    </div>
    <div class="echart-pie">
      <div id="echartsOne" class="echartss"></div>
    </div>
    <div class="progress" v-for="(item, index) in alarmTop" :key="index">
      <p class="top-name">{{ item.name }}</p>
      <div class="top-progress">
        <div
          :style="{
            'background-color': color[index],
            width: item.percentage + '%'
          }"
          class="content"
        ></div>
      </div>
      <p class="num">{{ item.num }}</p>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "CityClassified",
  props: ["alarmTop"],
  data() {
    return {
       color: [
            "#61a0a8",
            "#91cc75",
            "#d48265",
            "#91c7ae",
            "#749f83",
            "#ca8622"
          ],
      //  alarmTop: [
      //      { name: '成都', num: 12, percentage: '48%' },
      //      { name: '上海', num: 5, percentage: '20%' },
      //      { name: '北京', num: 3, percentage: '12%' },
      //      { name: '深圳', num: 0, percentage: '0%' },
      //      { name: '福建', num: 0, percentage: '0%' },
      //      { name: '江苏', num: 5, percentage: '20%' },
      //  ],
    };
  },
  	watch:{
			alarmTop:{
				handler(val){
					this.draw(val);
				},
				deep:true
			}
		},
  mounted() {
    this.draw(this.alarmTop);
  },
  methods: {
    draw(data) {
      console.log(data,'aaa')
       let dom = document.getElementById('echartsOne')
       if (!dom || (!data && data.length == 0)) {
                    return false;
                }
        let myChart = echarts.init(dom);
        let seriesData = []
        data.forEach(item=>{
          seriesData.push(item.num)
        })
        myChart.clear();
        let option = {
          color: [
            "#61a0a8",
            "#91cc75",
            "#d48265",
            "#91c7ae",
            "#749f83",
            "#ca8622"
          ],
          tooltip: {},
          legend: {
            data: ["数量"],
            textStyle: {
              fontSize: 14, //字体大小
              color: "#ffffff" //字体颜色
            }
          },
          xAxis: {
            data: ["成都", "上海", "北京", "深圳", "福建", "江苏"],
            axisLabel: {
              show: true,
              textStyle: {
                color: "#fff"
              }
            }
          },
          yAxis: {
            axisLabel: {
              show: true,
              textStyle: {
                color: "#fff"
              }
            }
          },
          series: [
            {
              name: "数量",
              type: "bar",
              data: seriesData,
              itemStyle: {
                normal: {
                  //这里是重点
                  color: function(params) {
                    //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                    var colorList = [
                      "#61a0a8",
                      "#91cc75",
                      "#d48265",
                      "#91c7ae",
                      "#749f83",
                      "#ca8622"
                    ];
                    return colorList[params.dataIndex];
                  }
                }
              }
            }
          ]
        };
        myChart.setOption(option);
      
    },
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
  .echart-pie {
    width: 100%;
    height: 340px;
    .echartss {
      width: 100%;
      height: 100%;
    }
  }
  .progress {
    height: 20px;
    line-height: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 6px;
    .top-name {
      height: 100%;
      width: 60px;
      font-size: 12px;
      text-align: right;
      margin-right: 20px;
    }
    .top-progress {
      width: 66%;
      height: 16px;
      border-radius: 8px;
      margin-right: 30px;
      .content {
        border-radius: 8px;
        height: 16px;
        text-align: right;
      }
    }
    .num {
      color: #fad304;
      font-weight: 600;
    }
  }
}
</style>
