<template lang="html">
	<Panel title="警报次数" iconClass="icon_tip">
		<div v-for="(item, key) in list" :class="$style.content">
			<p><span>{{item.name}}</span><i>{{item.data}}次</i></p>
		</div>
	</Panel>
</template>

<script>
import Panel from "../public/panel.vue"
export default {
	data () {
		return {
			isShow: false,
			height: "auto",
			show: false,
			list: [
				{"name": "血糖警报", "data": 10},
				{"name": "血压警报", "data": 11},
				{"name": "心率警报", "data": 20},
				{"name": "安全围栏", "data": 10}
			],
			item: {},
		}
	},
	methods: {
		/*change (val) {
			this.res = val
		}*/
	},
	components: {
		Panel,
	},
	created() {
		this.list.forEach( item => {
			this.item = item
			// console.log(item)
		})
	}
}
</script>

<style lang="scss" module>
	.content{
		p{
			font-size: 26px;
			span{
				padding-left: 30px;
			}
			i{
				float: right;
				font-size: 24px;
				padding-right: 30px;
			}
		}
	}
</style>
