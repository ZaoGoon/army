import Vue from 'vue'
import VueRouter from 'vue-router' //引入 vue-Router
import App from './App.vue'
import router from "./router/router.js"

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(VueRouter); //全局使用  vue-Router
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
