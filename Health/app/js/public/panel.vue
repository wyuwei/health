<template lang="html">
	<section class="panel">
		<h4 @click="pullDown">
			<span :class="iconClass"></span>
			<i class="icon_down" :class="visible? 'icon_down': 'icon_up'"></i>{{title}}
		</h4>
		<transition name="pull">
			<div v-show="visible">
				<slot></slot>
			</div>
		</transition>
	</section>
</template>

<script>
export default {
	props: {
		iconClass: {
			type: String,
			default: 'icon_data'
		},
		title: {
			type: String,
			default: 'Panel'
		}
	},
	data () {
		return {
			visible: true,
		}
	},
	methods: {
		pullDown () {
			this.visible = !this.visible
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "../../css/panel.scss";
	@import "../../css/style.scss";
	.panel{
		@include panel;
		span{
			&:before{
				display: inline-block;
				color: #f19b45;
				font-size: 40px;
				vertical-align: -6px;
				padding-right: 10px;
			}
		}
		.icon_down, .icon_up{
			float: right;
			padding: 15px 15px 0 0px;
			&:before{
				color: #666;
				font-size: 24px;
			}
		}
		.pull-enter-active, &.pull-leave-active{
			height: auto;
			transition: height 1s ease;
		}
		.pull-enter, &.pull-leave-active{
			height: 0px;
		}
	}
</style>
