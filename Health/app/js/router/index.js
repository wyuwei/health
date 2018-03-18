import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import "../../css/reset.scss"
import Panel from "../public/panel.vue"

Vue.use(Router)

export default new Router({
		// mode: 'history',
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
          path: "/panel",
          name: "Panel",
          component: Panel,
        }
    ],
})
