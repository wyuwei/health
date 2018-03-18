<template>
	<div id="content" ref="content">
		<vue-event-calendar :events="event" @monthChanged="" @dayChanged="">
			<template scope="props">
        <div v-for="(item, index) in props.showEvents" class="event-item" v-if="index === 0">
          <div>
          	<p class="title">{{item.title}}</p>
          	<p class="time">{{item.date}}</p>
          </div>
        </div>
      </template>
		</vue-event-calendar>
	</div>
</template>

<script>
export default {
	props: {
		event: {
			type: Array,
			default () {
				return []
			}
		}
	},
	methods: {
		getDom () {
			let H2 = this.$refs.content.lastChild.lastChild.firstChild
			H2.innerHTML = '健康提醒'
		}
	},
	mounted () {
		this.getDom()
	},
	filters: {
		formatDate (time) {
       var d = new Date(time)
       var year = d.getFullYear()
       var m = d.getMonth() + 1
       var month = m<10? '0' + m: ''+ m
       var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate()
       var hour = d.getHours()
       var minutes = d.getMinutes()
       var seconds = d.getSeconds()
       return year+ '年' + month + '月' + day + '日'
	   },
	}
}
</script>

<style lang="scss">
	#content {
		.__vev_calendar-wrapper{
			.cal-wrapper{
				font-size: 20px;
				width: 100%;
				.cal-header{
					display: none;
				}
				.cal-body{
					.weeks{
						font-size: 25px;
					}
					.dates{
						.item {
							.date-num{
								font-size: 25px;
							}
							.is-today{
								width: 0;
								height: 0;
								border: 0px;
							}
							.is-event{
								border: 0px;
								width: 50%;
								height: 100%;
								top: 0;
								transform: translateX(-50%);
								margin-left: 0;
								margin-top: 0;
							}
						}
					}
				}
			}
		}
		.events-wrapper{
			display: block;
			width: 100%;
			position: static;
			h2{
			}
			.cal-events {
				overflow-y: hidden;
				// height: 85px;
				// overflow: hidden;
			}
			.date{
				max-width: 100%;
				content: '1';
			}
			.event-item{
				div{
					height: 80px;
					.title{
						padding: 10px 0 40px;
						font-size: 24px;
					}
					.time{
						padding: 30px 0 16px;
						font-size: 20px;
					}
				}
			}
		}
	}
</style>
