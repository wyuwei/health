<template lang="html">
	<Panel title="健康数据" iconClass="icon_data">
		<section :class="$style.content">
			<div :class="$style.tab" v-show="show">
				<mt-navbar :class="$style.select" v-model="selected">
					<mt-tab-item :id="'nav_' + index" :class="$style.selected" v-for="(item, index) in navList">{{item.title}}</mt-tab-item>
				</mt-navbar>
				<mt-tab-container v-model="selected">
					<!-- 步数 -->
					<mt-tab-container-item id="nav_0">
						<Bar :data="data_step"></Bar>
						<span :class="$style.max">最大值：{{step_max}}</span><span :class="$style.min">最小值：{{step_min}}</span>
					</mt-tab-container-item>
					<!-- 睡眠 -->
					<mt-tab-container-item id="nav_1">
						<Bar :data="data_sleep" :option="sleep"></Bar>
					</mt-tab-container-item>
					<!-- 心率 -->
					<mt-tab-container-item id="nav_2">
						<Oline :line="xl_data"></OLine>
						<span :class="$style.max">最大值：{{xl_max}}</span><span :class="$style.min">最小值：{{xl_min}}</span>
					</mt-tab-container-item>
					<!-- 血压 -->
					<mt-tab-container-item id="nav_3">
						<Oline :line="xy_data" :option="xy"></OLine>
					</mt-tab-container-item>
					<!-- 血糖 -->
					<mt-tab-container-item id="nav_4">
						<Oline :line="xt_data" :option="xt"></OLine>
					</mt-tab-container-item>
				</mt-tab-container>
			</div>
		</section>
	</Panel>
</template>

<script>
import Vue from 'vue'
import Panel from '../public/panel.vue'
import Mint from 'mint-ui'
Vue.use(Mint)
import Bar from "../chart/bar.vue"
import Oline from "../chart/line.vue"
import { Navbar, TabItem } from 'mint-ui'
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
export default {
	props: {
		max: {
			type: Number,
			default: 5
		},
		min: {
			type: Number,
			default: 2
		}
	},
	data () {
		return {
			show: true,
			selected: 'nav_0',
			step_max: 0,
			step_min: 0,
			xl_max: 0,
			xl_min: 0,
			data_step: [[1000, 2000, 3300, 10000, 8000, 9000]],
			data_sleep: [[60, 10, 80, 10, 60, 120],[60, 30, 40, 20, 60, 50]],
			xl_data: [[65.2000,13.2166,0,0,0,0]],
			xy_data: [[76,56,82,82,63,89],[137,94,148,113,111]],
			xt_data: [[3.9,4.8,5.6,4.4,1.2,3.3], [6.7,9.4,11.1,8.5,6.6,7.8]],
			xy: ['高压','低压'],
			xt: ['饭前', '饭后'],
			sleep: ['深睡眠', '浅睡眠'],
			navList: [{'title':'计步'},{'title': '睡眠'}, {'title':'心率'},{'title': '血压'}, {'title':'血糖'}]
		}
	},
	methods: {

	},
	components: {
		Bar,
		Oline,
		Panel,
	},
	created () {
		this.step_max = Math.max.apply(null, this.data_step[0])
		this.step_min = Math.min.apply(null, this.data_step[0])
		this.xl_max = Math.max.apply(null, this.xl_data[0])
		this.xl_min = Math.min.apply(null, this.xl_data[0])
		this.xl_max<100? this.Yxl = 100: this.Yxl = 180
	}
}
</script>

<style lang="scss" scoped>
section{
	.mint-navbar{
		.is-selected{
			background: #00aaef;
			color: #fff;
			border-radius: 8px;
		}
	}
}
</style>

<style lang="scss" module>
.content{
	.tab{
		.select{
			border: 1px solid #00aaef;
			border-radius: 8px;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			text-align: center;
			font-size: 26px;
			margin: 0 20px;
			box-sizing: border-box;
			.selected{
				flex: 1;
				&:nth-child(n+2){
					border-left: none;
				}
			}
		}
	}
	.max, .min{
		font-size: 24px;
		padding-left: 28px;
	}
	.max{
		color: #00aaef;
	}
	.min{
		color: tomato;
	}
}
</style>
