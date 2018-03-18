<template lang="html">
		<Panel title="生活日志" iconClass="icon_life">
			<section :class="$style.content">
				<div :class="$style.tab" v-show="show">
					<mt-navbar :class="$style.select" v-model="selected">
						<mt-tab-item :id="'nav_'+index" :class="$style.selected" v-for="(item, index) in navList">{{item.title}}</mt-tab-item>
					</mt-navbar>
					<mt-tab-container v-model="selected">
						<mt-tab-container-item :id="'nav_'+index" v-for="(item, index) in eventList">
								<LDate :event="key" v-for="key in item"></LDate>
						</mt-tab-container-item>
					</mt-tab-container>
				</div>
			</section>
		</Panel>
</template>

<script>
import Vue from 'vue'
import Panel from "../public/panel.vue"
import Mint from 'mint-ui'
import LDate from "../public/date.vue"
import { Navbar, TabItem } from 'mint-ui'
Vue.use(Mint)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)

export default {
	data () {
		return {
			selected: 'nav_0',
			show: true,
			eventList: [
				{"food": [{'date': 1521170693084, 'title': 'eat'},{'date': 1521107944524, 'title': 'eat'}]},
				{"sport": [{'date': 1521107944544, 'title': 'eat2'},{'date': 1521170693084, 'title': '1eat'}]},
				{"life": [{'date': 1521107944554, 'title': 'eat3'},{'date': 1521170693084, 'title': '1eat'}]},
				{"medicine":[{'date': 1521107944514, 'title': 'eat4'},{'date': 1521170693084, 'title': '4eat'}]}
			],
				navList: [{title:'饮食'},{title: '运动'}, {title: '生活习惯'}, {title: '用药'}]
			}
	},
	methods: {
		toDate (time) {
       var d = new Date(time)
       var year = d.getFullYear()
       var m = d.getMonth() + 1
       var month = m<10? '0' + m: ''+ m
       var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate()
       var hour = d.getHours()
       var minutes = d.getMinutes()
       var seconds = d.getSeconds()
       return year+ '/' + month + '/' + day
	   },
	 convert () {
			this.eventList.forEach ( item => {
				for (var key in item){
					item[key].forEach( item => {
						let date = item.date
						item.date = this.toDate(date)
					})
				}
			})
		}
	},
	created () {
		this.convert()
	},
	components: {
		LDate,
		Panel,
	},
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
		margin-top: 10px;
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
}
</style>
