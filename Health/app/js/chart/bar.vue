<template lang="html">
	<div class="chart">
		<chart :options="polar" :auto-resize="true" id="chart"></chart>
	</div>
</template>

<script>
import Vue from 'vue'
import ECharts from 'vue-echarts/components/ECharts.vue'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/legend'
Vue.component('chart', ECharts)

export default {
	props: {
		data: {
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
		}
	},
	mounted () {
		// stop (params) {
		// 	params.event.event.stopPropagation()   //事件在 params 里的 event的 event属性里
		// }
		 // var myChart = echarts.init(document.getElementById('chart'));
		 // myChart.on('click', function (params){
			//  params.evnet.event.stopPropagation()
		 // })
	},
	computed:{
		// console.log(this.step)
	},
  data () {
		let items = ['5', '10', '15', '20', '25', '30']
    return {
			max: 0,
			min: 0,
      polar: {
				color: ['#62cdf1','#e2e2e2'],
				grid: {
					top: '40px',
					left: '20px',
					right: '20px',
					bottom: '30px'
				},
				legend: {
					orient: 'horizontal',
					itemWidth: 40,
        	itemHeight: 30,
        	data: this.option,
					fontSize: 40
				},
		    xAxis: {
		      data: items,
					nameLocation: 'left',
					axisLabel: {
            textStyle: {
              fontSize: 22,
							color: '#666'
          	}
        	},
					axisTick: {
						show: false,
					}
		    },
		    yAxis: {
		      axisLabel: {
						show: true,
						textStyle: {
              fontSize: 28,
							color: 'transparent',
          	}
					},
					axisTick: {
						show: false,
					}
		    },
		    series: []
      }
    }
  },
	created () {
		// 动态生成serise
		var serise = [];
		this.data.forEach( (item, index) => {
			this.polar.series.push({
				name: this.option[index],
				type: 'bar',
				barWidth: 46,
				label: {
					normal: {
						show: true,
						position: 'top',
						color: '#666',
						fontSize: '22'
					}
				},
				data: item,
				selectedMode: false,
				barGap: '0'
			})
		})
	},
}
</script>

<style lang="css" scoped>
	.echarts {
	  height: 300px;
		padding-top: 10px;
	}
</style>
