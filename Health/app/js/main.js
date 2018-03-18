import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import axios from 'axios'
import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar'
// import Bridge from './bridge.js'   //WebViewJavascriptBridge
// Vue.prototype.$bridge = Bridge
Vue.use(vueEventCalendar, {locale: 'zh', color: '#00aaef'})

Vue.prototype.$http = axios

import FastClick from 'fastclick'
FastClick.attach(document.body);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>",
})
/* eslint-enable no-new */
