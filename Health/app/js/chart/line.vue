<template>
  <chart :options="polar" :auto-resize="true"></chart>
</template>

<script>
import Vue from 'vue'
import ECharts from 'vue-echarts/components/ECharts.vue'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend'
Vue.component('chart', ECharts)
export default {
  props: {
    line: {
      type: Array,
      default () {
        return []
      }
    },
		option: {
			type: Array,
			default () {
				return []
			}
		},
  },
  data () {
    return {
      polar: {
        title: {
          text: ''
        },
				grid: {
					top: '40px',
					left: '42px',
					right: '20px',
					bottom: '30px'
				},
        color: ['#fd7b7b','#f9dc83'],
        polar: {
          center: ['50%', '54%']
        },
        legend: {
           x: 'center',
           data: this.option,
           textStyle: {
             fontSize: '25'
           }
        },
        xAxis : [
          {
            type : 'category',
            boundaryGap : false,
            data: ['5','10','15','20','25','30'],
            axisLabel: {
              textStyle: {
                fontSize: 22,
  							color: '#666'
            	}
          	},
  					axisTick: {
  						show: false,
  					}
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine : {onZero: false},
            boundaryGap : false,
            min: 0,
            minInterval: 1,
            boundaryGap: [0.2, 0.2],
            axisLabel: {
              textStyle: {
                fontSize: 20,
  							color: '#666'
            	}
          	},
  					axisTick: {
  						show: false,
  					}
          }
        ],
        series: [
          // {
          //   name:this.option[0],
          //   type:'line',
          //   data:this.line_1,
          //   itemStyle: {
          //     normal: {
          //       lineStyle: {
          //         // color : '#fd7b7b'
          //       }
          //     }
          //   }
          // },
          // {
          //   name:this.option[1],
          //   type:'line',
          //   data:this.line_2,
          //   itemStyle: {
          //     normal: {
          //       lineStyle: {
          //         // color : '#f9dc83'
          //       }
          //     }
          //   }
          // }
        ],
        animationDuration: 2000
      }
    }
  },
  created () {
    var serise = []
    this.line.forEach( (item, index) => {
      // console.log(item)
      this.polar.series.push({
        name: this.option[index],
        type: 'line',
        data: item,
      })
    })
  },
  mounted () {
    // console.log(this.Ymax)
  }
}

</script>

<style lang="css" scoped>
  .echarts{
    height: 300px;
    padding-top: 10px;
  }
</style>
