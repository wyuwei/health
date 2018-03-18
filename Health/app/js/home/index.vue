<template lang="html">
    <div :class="$style.home">
        <header :class="$style.header"><img src="../../images/left.png" @click="goBack">健康报告</header>
        <section :class="$style.content" v-for="item in List">
            <div :class="$style.img">
                <img src="../../images/boy.png" alt="" v-if="item.genter == 'boy'">
                <img src="../../images/girl.png" alt="" v-if="item.genter == 'girl'">
                <!-- <img v-attr="src: genterSrc === 'boy'? '../../images/boy.png':'../../images/girl.png'" alt=""> -->
                <!-- <img v-attr="src: genterSrc | isM" > -->
            </div>
            <div :class="$style.detial">
                <div :class="$style.data">
                  <p>{{item.tall}}cm</p>
                  <p>{{item.weight}}kg</p>
                  <p>{{item.bloodType}}型</p>
                  <p>{{item.bmi}}BMI</p>
                  <p>{{item.pbm}}pbm<sub>（平均心率）</sub></p>
                  <p>{{item.mmHg}}mmHg<sub>（平均血压）</sub></p>
                  <span>{{item.time | formatDate}}</span>
                </div>
            </div>
        </section>
        <Chart></Chart>
        <Lift></Lift>
        <Waring></Waring>
    </div>
</template>

<script type="text/javascript">
  document.addEventListener()
</script>
<script>
import Vue from 'vue'
import Chart from "../components/chart.vue"
import Lift from "../components/life.vue"
import Waring from "../components/warning.vue"
import { formatDate } from "../date.js"
export default {
  data () {
    return {
      List: [{
        genter: 'boy',
        tall: '165',
        weight: '45',
        bloodType: 'A',
        bmi: '16.7',
        pbm: '120',
        mmHg: '170',
        time: new Date().getTime(),
      }],
      genterSrc: '',
      // img: require(`../../images/boy.png`),
      dataList: []
    }
  },
  components: {
    Chart,
    Lift,
    Waring,
  },
  methods: {
    goBack() {
      this.$router.push('/panel')
      // location.href="goback://"  // 回退到客户端  需调用客户端的方法
      // iframe.src="goback://"
    },
    getData() {
      // window.location.href = "???://valueToWebView";
    },
    Select () {
      let ua = navigator.userAgent.toLowerCase()
      let isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1
      let isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      if (/(iPhone|iPad|iPod|iOS)/i.test (navigator.userAgent)) {
        //iOS
        alert('IOS')
      } else {
        alert('Android')
      }
    },
    getItem () {
      this.dataList.forEach( item => {
        console.log(this.dataList.length)
      })
    }
  },
  filters: {
		formatDate (time) {
			let date = new Date(time)
			return formatDate(date, 'yyyy/MM/dd')
		},
      /*isM (val) {
        return val == 'boy' ? require('../../images/boy.png') : require('../../images/girl.png')
      }*/
   },
   mounted () {
     document.addEventListener('message', function (e) {
       console.log(e.data)
       //1. appAlert(e.data)
       // this.watch_id = ''
       // this.session = ''
       // this.user_id = ''
     })

      // this.$bridge.callhandler('ObjC Echo', params, (data) => {
      //   // 处理返回数据
      //   console.log(data)
      // })

      // this.$http.get('/url', {
      //   params: {
      //     watch_id: this.watch_id,
      //     session: this.session,
      //     user_id: '',
      //   }
      // }).then( res => {
      //   // console.log(res)
      // }).catch( err => {
      //   // console.log(err)
      // })

      // 获取数据后保存在localstorage
      // this.dataList = [{1: 'none'},{2: 'yes'}]

      // 按年月存储
      // localStorage.setItem('1', JSON.stringify(this.dataList))
      // localStorage.setItem('2', JSON.stringify(this.dataList))
      // console.log(localStorage.length)

      // if(localStorage.getItem('2')){
      //   console.log(localStorage.getItem('2'))
      // } else {
      //   console.log('none')
      // }
      // console.log(localStorage.getItem('1'))

      // var data = JSON.parse(localStorage.1)
      // console.log(data)
   }
}
</script>

<style lang="scss" module>
  .home{
    .header{
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      z-index: 100;
      font-size: 32px;
      color: #fff;
      height: 100px;
      background: #03a9f4;
      line-height: 100px;
      text-align: center;
      img{
        float: left;
        margin: 28px 0 0 10px;
        width: 40px;
        height: 40px;
      }
    }
    .content{
      margin-top: 100px;
      display: flex;
      text-align: center;
      .img{
        flex: 1;
        img{
          width: auto;
          height: 400px;
        }
      }
      .detial{
        flex: 1;
        color: #666;
        .data{
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          p{
            padding-left: 20px;
            text-align: left;
            line-height: 55px;
            font-size: 26px;
            &:first-child{
              padding-top: 25px;
            }
            img{
              vertical-align: text-bottom;
              padding-right: 8px;
            }
            b{
              font-weight: bold;
            }
            sub{
              font-size: 25px;
            }
          }
          span{
            display: inline-block;
            padding: 25px 20px 0 0;
            font-size: 24px;
            text-align: right;
          }
        }
      }
    }
  }
</style>
